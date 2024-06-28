import React, { FC, useState } from 'react';
import './FormSearch.css';
import * as form from './FormSearch.styled';
import { getDigits} from './Functions';

interface FormSearchProps {}

const FormSearch: FC<FormSearchProps> = () => {

   const [digits, setDigits] = useState('');

   return (
      <form.FormSearchWrapper>
         <div>
           <h3 style={{fontSize: 1.25 + 'rem'}}>Проверка авто по номеру и VIN</h3>
           <form.Input>
              <form.InputSearch  className='form-search'/>
              <form.InputBtn onClick={getDigits}>Поиск</form.InputBtn>
           </form.Input>
         </div>
      </form.FormSearchWrapper>
     );
}

export default FormSearch;
