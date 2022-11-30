import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImsModule } from './ims.module';

@Module({
  imports: [ImsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
