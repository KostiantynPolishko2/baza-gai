export interface ICar {
    digits: string,
    photo_url: string,
}
 
interface ICarData {
    model: string,
    model_year: number | string,
    vendor: string,
    registered_at: string,
}
 
export interface ICarOperations {
    [index: number]: ICarData,
    length: number,
}
 
export class CarData {
    digits: string;
    photo_url: string;
    registered_at: string;
    model_year: number | string;
    model: string;
 
    constructor(car?: ICar, carData?: ICarData){
       this.digits = car?.digits?? 'none';
       this.photo_url = car?.photo_url?? 'none';
 
       this.registered_at = carData?.registered_at?? 'none';
       this.model_year = carData?.model_year?? 'none';
       this.model = `${carData?.vendor?? 'none'} ${carData?.model?? ''}`
    }
}
 
interface IErrorStatus {
    status: number,
}
 
interface IErrorData {
    message: string,
    code: string,
    name: string,
    response: IErrorStatus,
}
 
export class CarError {
    readonly flag: boolean;
    status: number;
    readonly description: string = 'none';
 
    constructor(flag?: boolean, error?: IErrorData) {
       this.flag = flag?? false;
       this.status = error?.response.status?? 0;
       this.description = this.setDescription(error?.name?? 'none', error?.code?? 'none');
    }
 
    private setDescription(name: string, code: string): string {
       return `${code} ${this.status}`;
    }
}