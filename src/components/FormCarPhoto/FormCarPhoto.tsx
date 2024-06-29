import React, { FC, useState, useEffect } from 'react';
import { FormCarPhotoWrapper } from './FormCarPhoto.styled';
import axios from 'axios';
import { get } from 'https';
import {ICar, ICarOperations, CarData, CarError} from '../FormSearch/FormIClass';
import FormSearch from '../FormSearch/FormSearch';
import CarPhoto from '../CarPhoto/CarPhoto';

interface FormCarPhotoProps {}

const FormCarPhoto: FC<FormCarPhotoProps> = () => {
   const [value, setValue] = useState(10);

   const handleIncrease = (value: number) => {
      setValue(currentValue => {
         return currentValue + value;
      })
   }

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
         setCarData([new CarData()]);
         setCarError(new CarError());
      }
   }, [carNumber])

   return (
      <FormCarPhotoWrapper>
         <FormSearch _handleIncrease={handleIncrease} _handleCarNumber={setCarNumber}/>
         <CarPhoto _id={'main'} _url_photo={carsData[0].photo_url} _value={value} _digits={carsData[0].digits} _registered_at={carsData[0].registered_at} _model_year={carsData[0].model_year} _model={carsData[0].model}/>
      </FormCarPhotoWrapper>
   );
}

export default FormCarPhoto;
