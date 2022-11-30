import {  ReadQuantity } from '@ae/common/ims';

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

  import {  ReadStoreDto } from '../../store';


export class ReadQuantityDto implements  ReadQuantity {

  

    @NumberProperty({ required: true })
    quantity: number

  

  

    @ManyToOneProperty({ required: true })
    product: ReadProductDto 

  

    @ManyToOneProperty({ required: true })
    store: ReadStoreDto 

  
}
