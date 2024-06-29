import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { get } from 'https';
import './FormSearch.css';
import {ICar, ICarOperations, CarData, CarError} from './FormIClass';
import * as form from './FormSearch.styled';
import { getDigits } from './Functions';


interface FormSearchProps {
   _handleIncrease: (value: number) => void,
   _handleDecrease: (value: number) => void,
}

const FormSearch: FC<FormSearchProps> = (props) => {

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
               <div className='btns'>
                  <button type='button' name='increase' onClick={(e) => props._handleIncrease(2)}>Increment</button>            
                  <button type='button' name='decrease' onClick={(e) => props._handleDecrease(3)}>Decrement</button>  
               </div>          
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
