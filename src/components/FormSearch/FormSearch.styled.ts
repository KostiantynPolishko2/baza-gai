import styled from 'styled-components';

export const FormSearchWrapper = styled.form.attrs({
    name: 'search'
})`
    min-width: fit-content;
    display: block;
    margin-top: 1.5rem;
    & > div {
        margin-bottom: 0.5rem;
    }
`;

export const Input = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    width: 100%;
    margin-top: 0.5rem;
`;

export const InputSearch = styled.input.attrs({
    type: 'text',
    name: 'digits',
    placeholder: 'Номерной знак или VIN',
})`
    min-width: fit-content;
    background-color: #fff;
    color: #212529;
    border: 1px solid #ced4da;
    font-weight: 400;
    line-height: 1.5rem;
`;

export const InputBtn = styled.button.attrs({
    type: 'button',
    name: 'fetch-request',
    value: 'Поиск',
})`
    margin-left: -1px;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    border: 1px solid #212529;
    border-radius: 0 0.5rem 0.5rem 0;
    cursor: pointer;

    &:hover {
        background-color: #6c757d;
        color: #fff;
    }
`;