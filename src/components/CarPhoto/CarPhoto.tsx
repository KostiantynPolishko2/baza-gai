import React, { FC } from 'react';
import * as card from './CarPhoto.styled';

interface CarPhotoProps {}

const CarPhoto: FC<CarPhotoProps> = () => (
 <card.CarPhotoWrapper _width={500} _height={375} _border='main'>
   <card.CarPhotoImg src={require('./img/car_icon.jpg')}/>
   <card.CarPhotoInner _direction='column'>
      <card.ContentTop>
         
      </card.ContentTop>
      <card.ContentBottom>

      </card.ContentBottom>
   </card.CarPhotoInner>
 </card.CarPhotoWrapper>
);

export default CarPhoto;
