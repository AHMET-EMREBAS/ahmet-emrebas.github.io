import { ParamType, UrlParam } from '../property/param.decorator';

export class UnsetRelationDto {
  @UrlParam({ type: ParamType.INTEGER, description: 'Entity id' })
  id: number;

  @UrlParam({ type: ParamType.STRING, description: 'Relation name' })
  rname: string;
}
