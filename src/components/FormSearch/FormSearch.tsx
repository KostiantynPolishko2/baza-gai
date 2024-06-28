import React, { FC, useState } from 'react';
import './FormSearch.css';
import * as form from './FormSearch.styled';
import { get } from 'http';

interface FormSearchProps {}

const isDigits = (digits: string): boolean => {
   return false;
}

const FormSearch: FC<FormSearchProps> = () => {

   const [digits, setDigits] = useState('');

   const getDigits = (e: React.FormEvent<HTMLElement>):void => {

      let _digits: string = (e.currentTarget.previousElementSibling as HTMLInputElement).value;
      (e.currentTarget.previousElementSibling as HTMLInputElement).value = '';
      _digits = _digits.replace(/[a-z]/gi, x => x.toUpperCase());

      if(!isDigits(_digits)){
         setDigits(_digits);
         console.log('run axios request', _digits)
      }
      else {
         setDigits('unccorect');
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
