import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { get } from 'https';
import './FormSearch.css';
import * as form from './FormSearch.styled';
import { getDigits } from './Functions';

interface FormSearchProps {}

const FormSearch: FC<FormSearchProps> = () => {

   const [carNumber, setCarNumber] = useState('none');
   
   const key = '53f98d3aa5e27428971d52008bedee4a';
   const client = axios.create({
       baseURL: 'https://baza-gai.com.ua/nomer/',
       headers: {'Accept': 'application/json', 'X-Api-Key': key},
       method: 'get',
       responseType: 'json',
   }) 

   useEffect(() => {
      if(carNumber !== 'none'){
         client.get(carNumber).
         then(response => { console.log(response.data); }).
         catch(error => { console.log(error)} )
      }
   }, [carNumber])

   return (
      <form.FormSearchWrapper>
         <div>
           <h3 style={{fontSize: 1.25 + 'rem'}}>Проверка авто по номеру и VIN</h3>
           <form.Input>
              <form.InputSearch  className='form-search'/>
              <form.InputBtn onClick={e => setCarNumber(getDigits(e))}>Поиск</form.InputBtn>
           </form.Input>
         </div>
      </form.FormSearchWrapper>
     );
}

export default FormSearch;
