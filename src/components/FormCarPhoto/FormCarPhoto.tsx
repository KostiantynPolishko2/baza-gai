import React, { FC, useState } from 'react';
import { FormCarPhotoWrapper } from './FormCarPhoto.styled';
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

   const handleDecrease = (value: number) => {
      setValue(currentValue => {
         return currentValue - value;
      })
   }

   return (
      <FormCarPhotoWrapper>
         <FormSearch _handleIncrease={handleIncrease} _handleDecrease={handleDecrease}/>
         {/* <CarPhoto _url_photo={''} _id={'main'} _digits={'AE 4000 IT'} _registered_at={'28.02.2024'} _model_year={2017} _vendor={'BMW'} _model={'X3'}/> */}
         <CarPhoto _id={'main'} _value={value}/>
      </FormCarPhotoWrapper>
   );
}

export default FormCarPhoto;
