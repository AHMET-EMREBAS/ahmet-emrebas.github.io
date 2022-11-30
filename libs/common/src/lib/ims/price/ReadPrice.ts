





import { IPrice } from './IPrice';


    import { ReadPricelevel } from '../pricelevel';

    import { ReadProduct } from '../product';



export type  ReadPrice  =  IPrice<
    
    
        ReadPricelevel,
    
        ReadProduct,
    
>;

