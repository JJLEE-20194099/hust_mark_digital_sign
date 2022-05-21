import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { MarkService} from 'src/modules/mark/services/mark.service';
import { MarkController } from 'src/modules/mark/controllers/mark.controller';

import { Mark, MarkSchema } from 'src/models/mark.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Mark.name, schema: MarkSchema}
        ])
    ],
    controllers: [MarkController],
    providers: [MarkService]
})

export class MarkModule {}