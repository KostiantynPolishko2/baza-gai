import React, { FC, useState, useEffect } from 'react';
import { FormCarPhotoWrapper } from './FormCarPhoto.styled';
import axios from 'axios';
import { get } from 'https';
import {ICar, ICarOperations, CarData, CarError} from '../FormSearch/FormIClass';
import FormSearch from '../FormSearch/FormSearch';
import CarPhoto from '../CarPhoto/CarPhoto';

interface FormCarPhotoProps {}

const FormCarPhoto: FC<FormCarPhotoProps> = () => {

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
         <FormSearch _handleCarNumber={setCarNumber}/>
         <CarPhoto 
         _id={'main'}
         _width_photo={500} _height_photo={375}
         _car={carsData[0]}
         _error={carError}
      />
      </FormCarPhotoWrapper>
   );
}

export default FormCarPhoto;
