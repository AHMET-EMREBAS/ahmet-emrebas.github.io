import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Department} from './department';








@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('department.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY department.id)`, 'index')

      
      .addSelect('department.name', 'name')
      

   


      .from(Department, 'department')



      
  },
})
export class DepartmentView {
  @ViewColumn()
  index: string;

  @ViewColumn()
  id: number;


  @ViewColumn()
  name: string;








}
