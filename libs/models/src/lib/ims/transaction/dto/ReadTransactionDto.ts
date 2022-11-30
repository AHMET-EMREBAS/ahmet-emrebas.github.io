import {  ReadTransaction } from '@ae/common/ims';

import {

IDDto,
StringProperty,
DateProperty,
NumberProperty,
BooleanProperty,
EmailProperty,
ManyToManyProperty,
ManyToOneProperty,
OneToManyProperty,
OneToOneProperty


} from '@ae/core';







  import {  ReadCartDto } from '../../cart';


export class ReadTransactionDto implements  ReadTransaction {

  

    @BooleanProperty({ required: true })
    complete: boolean

  

  

    @ManyToOneProperty({ required: true })
    cart: ReadCartDto 

  
}
