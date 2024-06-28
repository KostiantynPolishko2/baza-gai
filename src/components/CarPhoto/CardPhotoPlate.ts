import styled from 'styled-components';
import { Display } from './General.styled';

export const Number = styled(Display)`
    width: auto;
    height: 35px;
    border: 2px solid #484848;
    border-radius: 5px;
    height: auto;
`;

export const NumberFlag = styled(Display)`
    flex-grow: 1;
    width: 30px;
    padding: 5px 0px;
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

export const FlagCode = styled.div`
    height: 15px;
    text-align: center;
    & > span {
        color: white;
        font-size: 15px;
        font-weight: 400;
    }
`;

export const NumberText = styled.div`
    height: calc(35px + 5px);
    background-color: white;
    text-align: center;
    padding: 0px 8px;
    & > span {
        color: #212529;
        line-height: calc(35px + 5px);
    }
`;

export const DateRegistr = styled.div`
    padding: 5px;
    & > span {
        font-weight: 600;
        font-size: 1.2rem;
        color: white;
    }
`;
