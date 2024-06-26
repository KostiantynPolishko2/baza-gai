import React, { FC } from 'react';
import { CarPhotoWrapper, CarPhotoImg} from './CarPhoto.styled';

interface CarPhotoProps {}

const CarPhoto: FC<CarPhotoProps> = () => (
 <CarPhotoWrapper _width={500} _height={375}>
   <CarPhotoImg src={require('./img/car_icon.jpg')}/>
 </CarPhotoWrapper>
);

export default CarPhoto;
