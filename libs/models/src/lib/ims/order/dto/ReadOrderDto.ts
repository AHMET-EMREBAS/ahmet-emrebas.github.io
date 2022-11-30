import {  ReadOrder } from '@ae/common/ims';

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







  import {  ReadProductDto } from '../../product';

  import {  ReadCartDto } from '../../cart';

  import {  ReadCustomerDto } from '../../customer';


export class ReadOrderDto implements  ReadOrder {

  

    @NumberProperty({ required: true })
    quantity: number

  

  

    @ManyToOneProperty({ required: true })
    product: ReadProductDto 

  

    @ManyToOneProperty({ required: true })
    cart: ReadCartDto 

  

    @ManyToOneProperty({ required: true })
    customer: ReadCustomerDto 

  
}
