import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Message} from './message';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('message.id', 'id')
      .addSelect('message.title','label')
      .from(Message, 'message')

  },
})
export class MessageOptionView {
  @ViewColumn()
  id: number;

  @ViewColumn()
  label: string;
}
