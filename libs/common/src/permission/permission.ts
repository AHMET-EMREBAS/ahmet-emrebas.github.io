export interface Permission<Resource, Operation> {
  id?: number;

  resource?: Resource;

  operation?: Operation;

  oper?: Operation;
}
