import React from 'react';

export const isDigits = (digits: string): boolean => {
    const regex = /\b[A-Z]{2}\d{4}[A-Z]{2}\b/i;
    return regex.test(digits);
 }

 export const spaceLetterDigits = (digits: string ): string => {
    return digits.slice(0, 2) + ' ' + digits.slice(2, 6) + ' ' + digits.slice(6, 8);
 }