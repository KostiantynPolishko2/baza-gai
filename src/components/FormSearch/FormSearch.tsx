import React, { FC, useState } from 'react';
import './FormSearch.css';
import * as form from './FormSearch.styled';
import { isDigits, spaceLetterDigits } from './Functions';
import { get } from 'http';

interface FormSearchProps {}


const FormSearch: FC<FormSearchProps> = () => {

   const [digits, setDigits] = useState('');

   const getDigits = (e: React.FormEvent<HTMLElement>):void => {

      let _digits: string = (e.currentTarget.previousElementSibling as HTMLInputElement).value.replace(/\s/g, '');
      (e.currentTarget.previousElementSibling as HTMLInputElement).value = '';
      _digits = _digits.replace(/[a-z]/gi, x => x.toUpperCase());

      if(isDigits(_digits)){
         (e.currentTarget.previousElementSibling as HTMLInputElement).value = spaceLetterDigits(_digits);
      }
      else {
         console.log('throw error', _digits);
      }
   }

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
