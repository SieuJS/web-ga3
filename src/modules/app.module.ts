import { Module } from '@nestjs/common';

import {ServeStaticModule} from '@nestjs/serve-static';
import { CommonModule } from './common';
import { PassengerModule } from './passenger/passenger.module';
import { join } from 'path';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '../..', 'client'),
            exclude: ['/api/(.*)'],
        }),
        CommonModule,
        PassengerModule
    ]
})
export class ApplicationModule {}
