import { MarkService } from '../services/mark.service';

import { Controller, Post, Body, Param, Get, Request, Patch, Delete } from '@nestjs/common';
import { MarkDto } from '../dto/mark.dto';
import { Mark } from 'src/models/mark.schema';

@Controller('mark')
export class MarkController {
    constructor(private markService: MarkService) {}

    @Get('generatePdf')
    async test1(): Promise<any> {
        return await this.markService.generateStudentTranscript();
    }

    @Get('signed-pdf-explosion')
    async test2(): Promise<any> {
        return await this.markService.checkPdfSigned();
    }

    @Get('pdf-text-extraction')
    async test3(): Promise<any> {
        return await this.markService.automatingSign();
    }
}