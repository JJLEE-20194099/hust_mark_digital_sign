import { MarkSchema } from "src/models/mark.schema";
import { MarkType } from "src/public/enum";

export class MarkDto {
    type: MarkType;
    studentId: string;
    name: string;
    className: string;
    mark: string;
    studentSign: string;
    attendanceTime: string;
    note: string;
}