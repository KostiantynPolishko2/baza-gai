import React from 'react';

const isDigits = (digits: string): boolean => {
    const regex = /\b[A-Z]{2}\d{4}[A-Z]{2}\b/i;
    return regex.test(digits);
 }

const spaceLetterDigits = (digits: string ): string => {
    return digits.slice(0, 2) + ' ' + digits.slice(2, 6) + ' ' + digits.slice(6, 8);
 }

export const getDigits = (e: React.FormEvent<HTMLElement>):void => {

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