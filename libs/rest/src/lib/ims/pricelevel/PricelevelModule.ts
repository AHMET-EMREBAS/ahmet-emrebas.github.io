import { Pricelevel } from '@ae/models/ims/pricelevel/Pricelevel';
import { PricelevelView } from '@ae/models/ims/pricelevel/PricelevelView';
import { PricelevelOptionView } from '@ae/models/ims/pricelevel/PricelevelOptionView';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PricelevelService } from './PricelevelService';
import { PricelevelViewService } from './PricelevelViewService';
import { PricelevelOptionViewService } from './PricelevelOptionViewService';

import { PricelevelController } from './PricelevelController';
import { PricelevelResolver } from './PricelevelResolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Pricelevel,
      PricelevelView,
      PricelevelOptionView,
    ]),
  ],
  providers: [
    PricelevelService,
    PricelevelViewService,
    PricelevelOptionViewService,
    PricelevelResolver,
  ],
  controllers: [PricelevelController],
})
export class PricelevelModule {}
