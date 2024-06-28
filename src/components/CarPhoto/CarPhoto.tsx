import React, { FC } from 'react';
import 'the-new-css-reset';
import * as card from './CarPhoto.styled';
import * as plate from './CardPhotoPlate';

interface CarPhotoProps {}

const CarPhoto: FC<CarPhotoProps> = () => (
 <card.CarPhotoWrapper _width={500} _height={375} _border='main'>
   <card.CarPhotoImg src={require('./img/car_icon.jpg')}/>
   <card.CarPhotoInner _direction='column'>
      <card.ContentTop>
         <plate.Number>
            <plate.NumberFlag _direction='column' _justify='space-around'>
               <plate.FlagIcon>
                  <div></div>
                  <div></div>
               </plate.FlagIcon>
               <plate.FlagCode>
                  <span>UA</span>
               </plate.FlagCode>
            </plate.NumberFlag>
            <plate.NumberText>
               <span>AE 4000 IT</span>
            </plate.NumberText>
         </plate.Number>
         <plate.DateRegistr>
            <span>28.02.2024</span>
         </plate.DateRegistr>
      </card.ContentTop>
      <card.ContentBottom _direction='column' _justify='end' _align='start'>
         <plate.DataMark>
            <span>2017</span>
         </plate.DataMark>
         <plate.DataMark>
            <span>BMW X3</span>
         </plate.DataMark>
      </card.ContentBottom>
   </card.CarPhotoInner>
 </card.CarPhotoWrapper>
);

export default CarPhoto;
