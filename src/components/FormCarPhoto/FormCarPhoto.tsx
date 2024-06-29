import React, { FC } from 'react';
import { FormCarPhotoWrapper } from './FormCarPhoto.styled';
import FormSearch from '../FormSearch/FormSearch';
import CarPhoto from '../CarPhoto/CarPhoto';

interface FormCarPhotoProps {}

const FormCarPhoto: FC<FormCarPhotoProps> = () => (
 <FormCarPhotoWrapper>
    <FormSearch/>
    <CarPhoto _url_photo={''} _id={'main'} _digits={'AE 4000 IT'} _registered_at={'28.02.2024'} _model_year={2017} _vendor={'BMW'} _model={'X3'}/>
 </FormCarPhotoWrapper>
);

export default FormCarPhoto;
