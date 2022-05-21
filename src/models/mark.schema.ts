import {Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types} from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';

import { MarkType } from 'src/public/enum'


export type MarkDocument = Mark & Document;

@Schema({timestamps: true})
export class Mark {
    _id: Types.ObjectId;

    @Prop({default: MarkType.midTerm, required: true})
    type: MarkType

    @Prop({unique: true, required: true})
    studentId: string;

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    className: string;

    @Prop({required: true})
    mark: string;

    @Prop({default: "JJLee"})
    studentSign: string;

    @Prop({})
    attendanceTime: string;

    @Prop({})
    note: string;

}

export const MarkSchema = SchemaFactory.createForClass(Mark).plugin(softDeletePlugin);