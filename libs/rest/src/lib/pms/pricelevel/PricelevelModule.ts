import { Pricelevel } from '@ae/models/pms/pricelevel/Pricelevel';
import { PricelevelView } from '@ae/models/pms/pricelevel/PricelevelView';
import { PricelevelOptionView } from '@ae/models/pms/pricelevel/PricelevelOptionView';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PricelevelService } from './PricelevelService';
import { PricelevelViewService } from './PricelevelViewService';
import { PricelevelController } from './PricelevelController';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Pricelevel,
      PricelevelView,
      PricelevelOptionView,
    ]),
  ],
  providers: [PricelevelService, PricelevelViewService],
  controllers: [PricelevelController],
})
export class PricelevelModule {}
