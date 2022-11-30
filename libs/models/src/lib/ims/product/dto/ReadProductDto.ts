import {  ReadProduct } from '@ae/common/ims';

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







  import {  ReadCategoryDto } from '../../category';


export class ReadProductDto implements  ReadProduct {

  

    @StringProperty({ required: true })
    name: string

  

    @StringProperty({ required: false })
    description: string

  

    @StringProperty({ required: false })
    barcode: string

  

    @NumberProperty({ required: false })
    price: number

  

    @NumberProperty({ required: false })
    cost: number

  

  

    @ManyToOneProperty({ required: false })
    category: ReadCategoryDto 

  
}
