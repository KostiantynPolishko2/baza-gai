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
      </card.ContentTop>
      <card.ContentBottom _direction='column'>
      </card.ContentBottom>
   </card.CarPhotoInner>
 </card.CarPhotoWrapper>
);

export default CarPhoto;
