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

class Car {
   digits: string;
   photo_url: string;
   registered_at: string;
   model_year: number | string;
   model: string;

   constructor(car?: ICar, carData?: ICarData){
      this.digits = car?.digits?? 'XX DDDD XX';
      this.photo_url = car?.photo_url?? './img/car_icon.jpg';

      this.registered_at = carData?.registered_at?? 'dd.mm.yyyy';
      this.model_year = carData?.model_year?? 'yyyy';
      this.model = `${carData?.vendor?? 'vendor'}_${carData?.model?? 'x-model'}`
   }
}

interface FormSearchProps {}

const FormSearch: FC<FormSearchProps> = () => {

   const [carNumber, setCarNumber] = useState('none');
   const [carData, setCarData] = useState(new Car());
   
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
         then(response => { 
            console.log('json', response.data);
            let car: ICar = response.data;
            setCarData(new Car(car, response.data['operations']['0']));
         }).

         catch(error => { console.log(error)} )
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
               <li>{carData.digits}</li>
               <li>{carData.model}</li>
               <li>{carData.model_year}</li>
               <li>{carData.registered_at}</li>
           </ul>
         </div>
      </form.FormSearchWrapper>
     );
}

export default FormSearch;
