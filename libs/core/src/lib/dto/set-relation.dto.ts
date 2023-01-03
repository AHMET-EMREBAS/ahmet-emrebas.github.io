import { ParamType, UrlParam } from '../property/param.decorator';

export class SetRelationDto {
  @UrlParam({ type: ParamType.INTEGER, description: 'Entity id' })
  id: number;

  @UrlParam({ type: ParamType.STRING, description: 'Relation name' })
  rname: string;

  @UrlParam({ type: ParamType.STRING, description: 'Relation id' })
  rid: string;
}
