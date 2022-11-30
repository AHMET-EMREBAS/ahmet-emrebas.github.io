import {  ReadPrice } from '@ae/common/ims';

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







  import {  ReadPricelevelDto } from '../../pricelevel';

  import {  ReadProductDto } from '../../product';


export class ReadPriceDto implements  ReadPrice {

  

    @NumberProperty({ required: true })
    price: number

  

    @NumberProperty({ required: true })
    cost: number

  

  

    @ManyToOneProperty({ required: true })
    pricelevel: ReadPricelevelDto 

  

    @ManyToOneProperty({ required: true })
    product: ReadProductDto 

  
}
