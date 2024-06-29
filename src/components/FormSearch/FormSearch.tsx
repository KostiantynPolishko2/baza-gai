import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { get } from 'https';
import './FormSearch.css';
import * as form from './FormSearch.styled';
import { getDigits } from './Functions';

interface ICar {
   digits: string,
   photo_url: string,
}

interface ICarData {
   model: string,
   model_year: number | string,
   vendor: string,
   registered_at: string,
}

interface ICarOperations {
   [index: number]: ICarData,
   length: number,
}

class CarData {
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

class CarError {
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

interface FormSearchProps {}

const FormSearch: FC<FormSearchProps> = () => {

   const [carNumber, setCarNumber] = useState('none');
   const [carsData, setCarData] = useState([new CarData()]);
   const [carError, setCarError] = useState(new CarError());
   
   const key = '00cbd51c5f962dfa3b445a42e63d0160';
   const client = axios.create({
       baseURL: 'https://baza-gai.com.ua/nomer/',
       headers: {'Accept': 'application/json', 'X-Api-Key': key},
       method: 'get',
       responseType: 'json',
   }) 

   useEffect(() => {
      if(carNumber !== 'none'){
         client.get(carNumber).
         then((response) => { 

            let car: ICar = response.data;
            let operations: ICarOperations = response.data['operations'];

            let cars = [new CarData(car, operations[0])]
            for(let i = 1; i != operations.length; i++){
               cars.push(new CarData(car, operations[i]))
            }
            setCarData(cars);
            setCarError(new CarError());
         }).

         catch((error) => {
            console.log(error);
            setCarError(new CarError(true, error));
            setCarData([new CarData()]);
         } )
      }
      else {
         console.log('else')
         setCarData([new CarData()]);
         setCarError(new CarError());
      }
   }, [carNumber])

   return (
      <form.FormSearchWrapper>
         <div>
           <h3 style={{fontSize: 1.25 + 'rem'}}>Проверка авто по номеру и VIN</h3>
           <form.Input>
              <form.InputSearch  className='form-search'/>
              <form.InputBtn onClick={e => setCarNumber(getDigits(e))}>Поиск</form.InputBtn>             
           </form.Input>
           <p>CarData</p>
           <ul>
               <li>{carsData[0].digits}</li>
               <li>{carsData[0].model}</li>
               <li>{carsData[0].model_year}</li>
               <li>{carsData[0].registered_at}</li>
           </ul>
           <p style={{color: 'red'}}>{carError.flag? carError.description : ''}</p>
         </div>
      </form.FormSearchWrapper>
     );
}

export default FormSearch;
