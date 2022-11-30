





import { IUser } from './IUser';


    import { ReadPermission } from '../permission';

    import { ReadPricelevel } from '../pricelevel';



export type  ReadUser  =  IUser<
    
    
        ReadPermission,
    
        ReadPricelevel,
    
>;

