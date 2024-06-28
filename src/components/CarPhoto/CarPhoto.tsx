import React, { FC } from 'react';
import 'the-new-css-reset';
import * as card from './CarPhoto.styled';
import * as plate from './CardPhotoPlate';
import { StringDecoder } from 'string_decoder';

interface IdPhotoProps {
   _id: number | string,
   _url_photo?: string,
}

interface SizePhotoProps {
   _width_photo?: number,
   _height_photo?: number,
}

interface CarPhotoProps extends SizePhotoProps, IdPhotoProps {
   _digits?: string,
   _vendor?: string,
   _model?: string,
   _model_year?: number | string,
   _registered_at?: string,
}

const getUrlPhoto = (url_photo: string | undefined) => {
   
   if (url_photo === ''){
      return './img/car_come_soon.jpg';
   }
   else if (url_photo === ('error404')){
      return './img/error404.jpg';
   }

   return url_photo;
}

const CarPhoto: FC<CarPhotoProps> = (props) => {

   return (
      <card.CarPhotoWrapper _width={props._width_photo} _height={props._height_photo} _border='main'>
        <card.CarPhotoImg src={require(`${getUrlPhoto(props._url_photo)}`)}/>
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
                    <span>{props._digits || 'AA DDDD AA'}</span>
                 </plate.NumberText>
              </plate.Number>
              <plate.DateRegistr>
                 <span>{props._registered_at || 'dd.mm.yyyy'}</span>
              </plate.DateRegistr>
           </card.ContentTop>
           <card.ContentBottom _direction='column' _justify='end' _align='start'>
              <plate.DataMark>
                 <span>{props._model_year || 'x-yyyy'}</span>
              </plate.DataMark>
              <plate.DataMark>
                 <span>{props._vendor || 'x-vendor'}&nbsp;{props._model || 'x-model'}</span>
              </plate.DataMark>
           </card.ContentBottom>
        </card.CarPhotoInner>
      </card.CarPhotoWrapper>
     );
}


const carIcon = './img/car_icon.jpg';

CarPhoto.defaultProps  = {
   _id: 'main',
   _url_photo: carIcon,
   _width_photo: 500,
   _height_photo: 375,
   _digits: 'AA DDDD AA',
   _vendor: 'x-vendor',
   _model: 'x-model',
   _model_year: 'x-yyyy',
   _registered_at: 'dd.mm.yyyy',
}

export default CarPhoto;
