import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImsModule } from './ims.module';
import { PmsModule } from './pms.module';

@Module({
  imports: [ImsModule, PmsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
