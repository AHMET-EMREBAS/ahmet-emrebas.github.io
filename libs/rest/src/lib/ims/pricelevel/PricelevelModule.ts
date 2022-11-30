import { Pricelevel, PricelevelView } from '@ae/models/ims/pricelevel';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PricelevelService } from './PricelevelService';
import { PricelevelViewService } from './PricelevelViewService';
import { PricelevelController } from './PricelevelController';

@Module({
  imports: [TypeOrmModule.forFeature([Pricelevel, PricelevelView])],
  providers: [PricelevelService, PricelevelViewService],
  controllers: [PricelevelController],
})
export class PricelevelModule {}
