import { Module } from '@nestjs/common';
import {UserModule} from "./User/User.module";

@Module({
    modules: [
        UserModule
    ]
})
export class ApplicationModule {}