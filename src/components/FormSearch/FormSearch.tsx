import React, { FC } from 'react';
import './FormSearch.css';
import * as form from './FormSearch.styled';
import { getDigits } from './Functions';


interface FormSearchProps {
   _handleCarNumber: (digits: string) => void,
}

const FormSearch: FC<FormSearchProps> = (props) => {

   return (
      <form.FormSearchWrapper>
         <div>
           <h3 style={{fontSize: 1.25 + 'rem'}}>Проверка авто по номеру и VIN</h3>
           <form.Input>
              <form.InputSearch  className='form-search'/>
              <form.InputBtn onClick={e => props._handleCarNumber(getDigits(e))}>Поиск</form.InputBtn>          
           </form.Input>
         </div>
      </form.FormSearchWrapper>
     );
}

export default FormSearch;
