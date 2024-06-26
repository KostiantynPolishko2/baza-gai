import styled from 'styled-components';
import { Display } from './General.styled';

export const Number = styled(Display)`
    width: auto;
    height: 35px;
    border: 2px solid #484848;
    border-radius: 5px;
`;

export const NumberFlag = styled(Display)`
    flex-grow: 1;
    width: 30px;
    padding: 4px 0px;
    background-color: #2860ab;
`;

export const FlagIcon = styled.div`
    margin: auto;
    width: 20px;
    height: 15px;
    & > div:first-child{
        height: 6px;
        background-color: #3a75c4;
    }
    & > div:last-child{
        height: 6px;
        background-color: #f9dd16;
    }
`;