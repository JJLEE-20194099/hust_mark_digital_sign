import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Mark, MarkDocument, MarkSchema } from 'src/models/mark.schema';
import { MarkDto } from '../dto/mark.dto';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { PDFNet } from '@pdftron/pdfnet-node';

import * as fs from 'fs';
const PDFTableDocument = require("pdfkit-table");
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import * as fontkit from "@pdf-lib/fontkit";

import { numOfRowPerPage } from 'src/public/constants';
import { listenerCount } from 'process';

let student = {
    studentId: "20172943",
    name: "Nguyễn Thị Nguyệt Ánh",
    class: "Công nghệ thông tin 11-K62",
    midtermScore: "7.5",
    signature: "Ánh",
    note: "Tạch",
};

let students = [];
for (let i = 0; i < 380; i++) {
    students.push(student);
}

let transcriptData = {
    semester: "20202",
    unit: "Trường Công nghệ Thông tin và Truyền thông",
    teacher: "Nguyễn Văn A",
    courseId: "IT3930",
    courseName: "Project II",
    eduProgram: "KSCQ - Bộ môn HTTT (K62 trở đi)",
    classType: "ĐA",
    classId: "QT 705358",
    examClassId: "119733",
    group: "Nhóm ***CTTT Phân tích KD 01-K65",
    students,
    managerId: "demo-account@hust.edu.vn",
    examinerId: "demo-account@hust.edu.vn",
    bureauId: "demo-account@hust.edu.vn",
    departmentId: "demo-account@hust.edu.vn",
    testDate: "20/5/2022"
}

let markData = transcriptData["students"]

const signTitlePosition = ['Đơn vị quản lý đào tạo', 'Cán bộ giảng dạy', 'Cán bộ vào bảng điểm', 'Bộ môn phụ trách học phần']

function splitDataToBatch(data) {
    let n = data.length;
    let res = [];
    let batch = [];
    for (let i = 1; i <= n; i++) {
        let temp = { ...data[i - 1], "index": `${i}` }
        batch.push(temp)
        if (i % numOfRowPerPage == 0) {
            res.push(batch);
            batch = [];
        }
    }
    res.push(batch)
    return res;
}

const batches = splitDataToBatch(markData);

@Injectable()
export class MarkService {
    constructor(
        @InjectModel(Mark.name) private MarkModel: SoftDeleteModel<MarkDocument>,
    ) { }

    drawTextUtil(page, customFont, text, x_coordinate, y_coordinate, textSize, options): any {
        page.drawText(text, {
            x: x_coordinate,
            y: y_coordinate,
            size: textSize,
            font: customFont,
            ...options
        });
    }

    async generatePageIndex(): Promise<any> {
        let customFontPath = 'src/public/fonts/Crimson-Roman.otf';
        const pdfBytes = fs.readFileSync("src/public/pdfs/mark/test.pdf");
        const pdfDoc = await PDFDocument.load(pdfBytes);
        pdfDoc.registerFontkit(fontkit);

        let customFont;
        let fontBytes = await new Promise((resolve: (data: null | Buffer) => void) =>
            fs.readFile(customFontPath, (err, data) => {
                if (err) resolve(null);
                else resolve(data);
            }),
        );

        if (fontBytes) {
            customFont = await pdfDoc.embedFont(fontBytes);
        }
        else {
            customFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
        }

        let pages = pdfDoc.getPages()
        let numOfPages = pages.length
        for (let i = 0; i < numOfPages - 1; i++) {
            let page = pages[i]
            const height = page.getHeight();
            const width = page.getWidth();



            const options = {
                color: rgb(0, 0, 0),
            }

            this.drawTextUtil(page, customFont, `${i + 1} / ${numOfPages}`, width / 2 - 10, 20, 9, options)

        }

        let modifiedPdfBytes = await pdfDoc.save()
        fs.writeFileSync("src/public/pdfs/mark/test-modified.pdf", modifiedPdfBytes)
    }


    async generateTitle(): Promise<any> {
        let customFontPath = 'src/public/fonts/Crimson-Roman.otf';

        const pdfBytes = fs.readFileSync("src/public/pdfs/mark/test.pdf");
        const pdfDoc = await PDFDocument.load(pdfBytes);

        pdfDoc.registerFontkit(fontkit);

        let customFont;
        let fontBytes = await new Promise((resolve: (data: null | Buffer) => void) =>
            fs.readFile(customFontPath, (err, data) => {
                if (err) resolve(null);
                else resolve(data);
            }),
        );

        if (fontBytes) {
            customFont = await pdfDoc.embedFont(fontBytes);
        }
        else {
            customFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
        }

        for (let page of pdfDoc.getPages()) {


            const height = page.getHeight();
            const width = page.getWidth();



            const options = {
                color: rgb(0, 0, 0),
            }
            this.drawTextUtil(page, customFont, "TRƯỜNG ĐẠI HỌC BÁCH KHOA HÀ NỘI", 50, height - 30, 12, options)
            this.drawTextUtil(page, customFont, "BẢNG ĐIỂM QUÁ TRÌNH", width / 2 - customFont.widthOfTextAtSize("BẢNG ĐIỂM QUÁ TRÌNH", 12) / 2, height - 60, 12, options)
            this.drawTextUtil(page, customFont, `${transcriptData["semester"]}`, width / 2 - customFont.widthOfTextAtSize(`${transcriptData["semester"]}`, 12) / 2, height - 75, 12, options)
            this.drawTextUtil(page, customFont, `Khoa/Viện/Trường: ${transcriptData["unit"]}`, 30, height - 90, 9, options)
            this.drawTextUtil(page, customFont, `Giảng viên: ${transcriptData["teacher"]}`, width - 200, height - 90, 9, options)
            if (customFont.widthOfTextAtSize(`${transcriptData["courseId"]}    ${transcriptData["courseName"]}    ${transcriptData["eduProgram"]}   ${transcriptData["classType"]}     Lớp học: ${transcriptData["classId"]}     Lớp thi: ${transcriptData["examClassId"]}     Nhóm: ${transcriptData["group"]}`, 9) > width - 100) {
                this.drawTextUtil(page, customFont, `${transcriptData["courseId"]}    ${transcriptData["courseName"]}    ${transcriptData["eduProgram"]}   ${transcriptData["classType"]}     Lớp học: ${transcriptData["classId"]}     Lớp thi: ${transcriptData["examClassId"]}`, 30, height - 104, 9, options)
                this.drawTextUtil(page, customFont, `Nhóm: ${transcriptData["group"]}`, 30, height - 118, 9, options)
            } else {
                this.drawTextUtil(page, customFont, `${transcriptData["courseId"]}    ${transcriptData["courseName"]}    ${transcriptData["eduProgram"]}   ${transcriptData["classType"]}     Lớp học: ${transcriptData["classId"]}     Lớp thi: ${transcriptData["examClassId"]}     Nhóm: ${transcriptData["group"]}`, 30, height - 107, 9, options)
            }
        }



        let modifiedPdfBytes = await pdfDoc.save()
        fs.writeFileSync("src/public/pdfs/mark/test.pdf", modifiedPdfBytes)
    }

    getSignInformation(pdfDoc, customFont, customSignFont) {
        let signInformation = []
        const num = batches[batches.length - 1].length
        let numOfPages = pdfDoc.getPages().length;
        let page = pdfDoc.getPages()[numOfPages - 1]
        const height = page.getHeight();
        const width = page.getWidth();

        if (this.checkRemainSpaceInTheLastPage(batches[batches.length - 1])) {
            signInformation.push({
                "email": `${transcriptData["managerId"]}`,
                "pageIndex": numOfPages - 1,
                "x": 80,
                "y": height - num * 30 - 130 - 40,
                "width": customSignFont.widthOfTextAtSize("HUSTBSIGN", 13),
                "height": customSignFont.heightAtSize(13),
                fieldName: `${transcriptData["managerId"]}`,
                pageHeight: height
            })

            signInformation.push({
                "email": `${transcriptData["examinerId"]}`,
                "pageIndex": numOfPages - 1,
                "x": 190,
                "y": height - num * 30 - 130 - 40,
                "width": customSignFont.widthOfTextAtSize("HUSTBSIGN", 13),
                "height": customSignFont.heightAtSize(13),
                fieldName: `${transcriptData["examinerId"]}`,
                pageHeight: height
            })

            signInformation.push({
                "email": `${transcriptData["bureauId"]}`,
                "pageIndex": numOfPages - 1,
                "x": width - 280,
                "y": height - num * 30 - 130 - 40,
                "width": customSignFont.widthOfTextAtSize("HUSTBSIGN", 13),
                "height": customSignFont.heightAtSize(13),
                fieldName: `${transcriptData["bureauId"]}`,
                pageHeight: height
            })

            signInformation.push({
                "email": `${transcriptData["departmentId"]}`,
                "pageIndex": numOfPages - 1,
                "x": width - 150 + customFont.widthOfTextAtSize("Bộ môn phụ trách học phần", 9) / 2 - 5,
                "y": height - num * 30 - 130 - 40,
                "width": customSignFont.widthOfTextAtSize("HUSTBSIGN", 13),
                "height": customSignFont.heightAtSize(13),
                fieldName: `${transcriptData["departmentId"]}`,
                pageHeight: height
            })
        } else {
            const startY = height - 20
            signInformation.push({
                "email": `${transcriptData["managerId"]}`,
                "pageIndex": numOfPages - 1,
                "x": 80,
                "y": startY - 50,
                "width": customSignFont.widthOfTextAtSize("HUSTBSIGN", 13),
                "height": customSignFont.heightAtSize(13),
                fieldName: `${transcriptData["managerId"]}`,
                pageHeight: height
            })

            signInformation.push({
                "email": `${transcriptData["examinerId"]}`,
                "pageIndex": numOfPages - 1,
                "x": 190,
                "y": startY - 50,
                "width": customSignFont.widthOfTextAtSize("HUSTBSIGN", 13),
                "height": customSignFont.heightAtSize(13),
                fieldName: `${transcriptData["examinerId"]}`,
                pageHeight: height
            })

            signInformation.push({
                "email": `${transcriptData["bureauId"]}`,
                "pageIndex": numOfPages - 1,
                "x": width - 280,
                "y": startY - 50,
                "width": customSignFont.widthOfTextAtSize("HUSTBSIGN", 13),
                "height": customSignFont.heightAtSize(13),
                fieldName: `${transcriptData["bureauId"]}`,
                pageHeight: height
            })

            signInformation.push({
                "email": `${transcriptData["departmentId"]}`,
                "pageIndex": numOfPages - 1,
                "x": width - 155 + customFont.widthOfTextAtSize("Bộ môn phụ trách học phần", 9) / 2 - 5,
                "y": startY - 50,
                "width": customSignFont.widthOfTextAtSize("HUSTBSIGN", 13),
                "height": customSignFont.heightAtSize(13),
                fieldName: `${transcriptData["departmentId"]}`,
                pageHeight: height
            })
        }
        return signInformation;
    }

    async generateFooter(): Promise<any> {

        let customFontPath = 'src/public/fonts/Crimson-Roman.otf';
        const pdfBytes = fs.readFileSync("src/public/pdfs/mark/test.pdf");
        const pdfDoc = await PDFDocument.load(pdfBytes);
        pdfDoc.registerFontkit(fontkit);

        let customFont;
        let fontBytes = await new Promise((resolve: (data: null | Buffer) => void) =>
            fs.readFile(customFontPath, (err, data) => {
                if (err) resolve(null);
                else resolve(data);
            }),
        );

        if (fontBytes) {
            customFont = await pdfDoc.embedFont(fontBytes);
        }
        else {
            customFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
        }


        const options = {
            color: rgb(0, 0, 0),
        }

        let customSignFontPath = 'src/public/fonts/sign/Humaira.otf';

        let customSignFont;
        let signFontBytes = await new Promise((resolve: (data: null | Buffer) => void) =>
            fs.readFile(customSignFontPath, (err, data) => {
                if (err) resolve(null);
                else resolve(data);
            }),
        );

        let signInformation = []

        if (this.checkRemainSpaceInTheLastPage(batches[batches.length - 1])) {
            const num = batches[batches.length - 1].length
            let numOfPages = pdfDoc.getPages().length;
            let page = pdfDoc.getPages()[numOfPages - 1]
            const height = page.getHeight();
            const width = page.getWidth();


            let date = new Date();

            this.drawTextUtil(page, customFont, `Ngày in: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}         Ngày thi: ${transcriptData['testDate']}          Hạn cuối nộp điểm sau khi kết thúc học phần 7 ngày`, 100, height - num * 30 - 115, 9, options)
            this.drawTextUtil(page, customFont, "Đơn vị quản lý đào tạo", 60, height - num * 30 - 130, 9, options)
            this.drawTextUtil(page, customFont, "Cán bộ giảng dạy", 180, height - num * 30 - 130, 9, options)
            this.drawTextUtil(page, customFont, "Cán bộ vào bảng điểm", width - 300, height - num * 30 - 130, 9, options)
            this.drawTextUtil(page, customFont, "Bộ môn phụ trách học phần", width - 150, height - num * 30 - 130, 9, options)
            this.drawTextUtil(page, customFont, "(nếu có)", width - 155 + customFont.widthOfTextAtSize("Bộ môn phụ trách học phần", 9) / 2 - 5, height - num * 30 - 130 - 15, 9, options)
            this.drawTextUtil(page, customFont, `${numOfPages} / ${numOfPages}`, width / 2 - 10, height - num * 30 - 130 - 120, 9, options)



            if (signFontBytes) {
                customSignFont = await pdfDoc.embedFont(signFontBytes);
            }
            else {
                customSignFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
            }

            page = pdfDoc.getPages()[numOfPages - 1]

            this.drawTextUtil(page, customSignFont, this.removeAccents("Nguyên"), 80, height - num * 30 - 130 - 40, 13, options)
            this.drawTextUtil(page, customSignFont, this.removeAccents("Hương"), 190, height - num * 30 - 130 - 40, 13, options)
            this.drawTextUtil(page, customSignFont, this.removeAccents("Hương"), width - 280, height - num * 30 - 130 - 40, 13, options)
            this.drawTextUtil(page, customSignFont, this.removeAccents("Dũng"), width - 150 + customFont.widthOfTextAtSize("Bộ môn phụ trách học phần", 9) / 2 - 5, height - num * 30 - 130 - 40, 13, options)






        } else {
            let page = pdfDoc.addPage()
            let numOfPages = pdfDoc.getPages().length;
            const height = page.getHeight();
            const width = page.getWidth();
            const startY = height - 20
            this.drawTextUtil(page, customFont, "Ngày in: 12/4/2021           Hạn cuối nộp điểm sau khi kết thúc học phần 7 ngày", 100, startY, 9, options)
            this.drawTextUtil(page, customFont, "Đơn vị quản lý đào tạo", 60, startY - 15, 9, options)
            this.drawTextUtil(page, customFont, "Cán bộ giảng dạy", 180, startY - 15, 9, options)
            this.drawTextUtil(page, customFont, "Cán bộ vào bảng điểm", width - 300, startY - 15, 9, options)
            this.drawTextUtil(page, customFont, "Bộ môn phụ trách học phần", width - 150, startY - 15, 9, options)
            this.drawTextUtil(page, customFont, "(nếu có)", width - 155 + customFont.widthOfTextAtSize("Bộ môn phụ trách học phần", 9) / 2 - 5, startY - 25, 9, options)
            this.drawTextUtil(page, customFont, `${numOfPages} / ${numOfPages}`, width / 2 - 10, startY - 200, 9, options)

            if (signFontBytes) {
                customSignFont = await pdfDoc.embedFont(signFontBytes);
            }
            else {
                customSignFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
            }

            page = pdfDoc.getPages()[numOfPages - 1]

            this.drawTextUtil(page, customSignFont, this.removeAccents("Nguyên"), 80, startY - 50, 16, options)
            this.drawTextUtil(page, customSignFont, this.removeAccents("Hương"), 190, startY - 50, 16, options)
            this.drawTextUtil(page, customSignFont, this.removeAccents("Hương"), width - 280, startY - 50, 16, options)
            this.drawTextUtil(page, customSignFont, this.removeAccents("Dũng"), width - 155 + customFont.widthOfTextAtSize("Bộ môn phụ trách học phần", 9) / 2 - 5, startY - 50, 16, options)



        }

        let modifiedPdfBytes = await pdfDoc.save()
        fs.writeFileSync("src/public/pdfs/mark/test.pdf", modifiedPdfBytes)
    }


    checkRemainSpaceInTheLastPage(batch): boolean {
        if (numOfRowPerPage - batch.length >= 7) return true;
        else return false;
    }

    removeAccents(str) {
        var AccentsMap = [
            "aàảãáạăằẳẵắặâầẩẫấậ",
            "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
            "dđ", "DĐ",
            "eèẻẽéẹêềểễếệ",
            "EÈẺẼÉẸÊỀỂỄẾỆ",
            "iìỉĩíị",
            "IÌỈĨÍỊ",
            "oòỏõóọôồổỗốộơờởỡớợ",
            "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
            "uùủũúụưừửữứự",
            "UÙỦŨÚỤƯỪỬỮỨỰ",
            "yỳỷỹýỵ",
            "YỲỶỸÝỴ"
        ];
        for (var i = 0; i < AccentsMap.length; i++) {
            var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
            var char = AccentsMap[i][0];
            str = str.replace(re, char);
        }
        return str;
    }

    async generateStudentTranscriptUtil(): Promise<any> {


        let customFontPath = 'src/public/fonts/Crimson-Roman.otf';

        let doc = new PDFTableDocument({ margin: 30, size: 'A4' });
        let writeStream = fs.createWriteStream("src/public/pdfs/mark/test.pdf");
        doc.pipe(writeStream);

        const height = doc.page.height;
        let i = 0;
        for (let batch of batches) {
            const table = {
                subTitle: "SubTitle",
                headers: [
                    { label: "STT", property: "index", width: 30, align: 'center' },
                    { label: "Mã SV", property: "studentId", width: 60, align: 'center' },
                    { label: "Họ và tên", property: "name", width: 90 },
                    { label: "Lớp SV", property: "class", width: 120, align: 'center' },
                    { label: "Điểm QT", property: "midtermScore", width: 40, align: 'center' },
                    { label: "Chữ ký SV", property: "signature", width: 60, align: 'center' },
                    { label: "Ghi chú", property: "note", width: 100, align: 'center' },
                ],
                datas: batch
            };


            if (i == 0) {
                await doc.table(table, {
                    y: 130,
                    divider: {
                        header: { disabled: false, width: 1 },
                        horizontal: { disabled: false, width: 1 }
                    },
                    prepareHeader: () => doc.font(customFontPath).fontSize(9),
                    prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
                        doc.font(customFontPath).fontSize(9);
                    },
                });
            } else {
                doc = doc.addPage({
                    layout: doc.page.layout,
                    size: doc.page.size,
                    margins: { top: 130, bottom: -10, right: 30, left: 30 },
                })
                await doc.table(table, {
                    divider: {
                        header: { disabled: false, width: 1 },
                        horizontal: { disabled: false, width: 1 }
                    },
                    prepareHeader: () => doc.font(customFontPath).fontSize(9),
                    prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
                        doc.font(customFontPath).fontSize(9);
                    },
                });
            }

            i = i + 1

        }

        doc.end();
        let self = this;
        let signInformation;
        writeStream.on('finish', async function () {
            await self.generateOtherContents();
        })
    }

    async generateOtherContents(): Promise<any> {
        await this.generateTitle();
        await this.generateFooter();
        await this.generatePageIndex();

    }

    async generateStudentTranscript(): Promise<any> {
        const start = performance.now()
        let signInformation;
        // for (let i = 0; i < 1; i++) {
        //     signInformation = await this.generateStudentTranscript();
        // }
        await this.generateStudentTranscriptUtil();

        const pdfBytes = fs.readFileSync("src/public/pdfs/mark/test-modified.pdf");
        const pdfDoc = await PDFDocument.load(pdfBytes);
        pdfDoc.registerFontkit(fontkit);

        let customSignFontPath = 'src/public/fonts/sign/Humaira.otf';

        let customSignFont;
        let signFontBytes = await new Promise((resolve: (data: null | Buffer) => void) =>
            fs.readFile(customSignFontPath, (err, data) => {
                if (err) resolve(null);
                else resolve(data);
            }),
        );

        if (signFontBytes) {
            customSignFont = await pdfDoc.embedFont(signFontBytes);
        }
        else {
            customSignFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
        }

        let customFontPath = 'src/public/fonts/Crimson-Roman.otf';



        let customFont;
        let fontBytes = await new Promise((resolve: (data: null | Buffer) => void) =>
            fs.readFile(customFontPath, (err, data) => {
                if (err) resolve(null);
                else resolve(data);
            }),
        );

        if (fontBytes) {
            customFont = await pdfDoc.embedFont(signFontBytes);
        }
        else {
            customFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
        }


        signInformation = this.getSignInformation(pdfDoc, customFont, customSignFont)
        console.log(signInformation)
        const end = performance.now()
        console.log((end - start) / 1000)
        return signInformation
    }



    async checkPdfSigned(): Promise<any> {

        let customFontPath = 'src/public/fonts/Crimson-Roman.otf';
        const pdfBytes = fs.readFileSync("src/public/pdfs/mark/test-modified-signed.pdf");
        const pdfDoc = await PDFDocument.load(pdfBytes);
        pdfDoc.registerFontkit(fontkit);

        let customFont;
        let fontBytes = await new Promise((resolve: (data: null | Buffer) => void) =>
            fs.readFile(customFontPath, (err, data) => {
                if (err) resolve(null);
                else resolve(data);
            }),
        );

        if (fontBytes) {
            customFont = await pdfDoc.embedFont(fontBytes);
        }
        else {
            customFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
        }


        const options = {
            color: rgb(0, 0, 0),
        }

        let page = pdfDoc.getPages()[0]

        this.drawTextUtil(page, customFont, "Nguyeenx", 80, 300, 16, options)

        let modifiedPdfBytes = await pdfDoc.save()
        fs.writeFileSync("src/public/pdfs/mark/test-modified-signed.pdf", modifiedPdfBytes)
    }

    

    async extractingTextUtil(filePath: string): Promise<any> {
        const doc = await PDFNet.PDFDoc.createFromFilePath(filePath)
        const numOfPages = await doc.getPageCount();
        let self = this
        let positionObjResult = []
        for (let title of signTitlePosition) {
            let positionObjResultPerTitle = []
            for (let page_num = numOfPages; page_num <= numOfPages; page_num++) {
                const page = await doc.getPage(page_num);
                const txt = await PDFNet.TextExtractor.create();
                const rect = await page.getCropBox();


                txt.begin(page, rect);

                let line = await txt.getFirstLine();
                let coordinate;
                for (; (await line.isValid()); line = (await line.getNextLine())) {
                    for (let word = await line.getFirstWord(); (await word.isValid());) {
                        let wordByString = await word.getString()
                        let check = true
                        if (wordByString == title.split(" ")[0]) {
                            let coordinate = await word.getQuad()
                            let copiedWord = word
                            let wordArr = title.split(" ")
                            let nextWord = word
                            for (let w = 1; w < wordArr.length; w++) {
                                nextWord = await nextWord.getNextWord()
                                if (await nextWord.getString() != wordArr[w]) {
                                    check = false;
                                    break
                                }
                            }

                            if (check) {
                                positionObjResultPerTitle.push(coordinate)
                                word = await nextWord.getNextWord()
                            } else {
                                word = (await word.getNextWord())
                            }

                        } else {
                            word = (await word.getNextWord())
                        }
                    }
                }
            }
            positionObjResult.push(positionObjResultPerTitle)
        }
        // console.log(positionObjResult)
        return positionObjResult
    }


    async extractingText(): Promise<any> {
        const filePath = 'src/public/pdfs/mark/test-modified-signed.pdf'
        const self = this
        const positionObjResult = await this.extractingTextUtil(filePath)
        console.log(positionObjResult)

    }

    async automatingSign(): Promise<any> {
        const self = this;
        PDFNet.runWithCleanup(self.extractingText, 'demo:1653045355329:7b84cbd6030000000099af23466ac703d41dac56db8fa63483a8329955')
    }
}