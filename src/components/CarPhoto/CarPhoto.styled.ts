import styled, { css } from 'styled-components';

const _margin = 15;
const _padding = 5;

const _default: string = 'fit-content';

interface Size {
    _width?: number,
    _height?: number,
}

interface Photo {
    _path?: string,
}

export const CarPhotoWrapper = styled.div<Size>`
    position: relative;
    margin: 5px;
    border: 1px solid black;
    width: ${props => props._width? props._width+'px' : _default};
    height: ${props => props._height? props._height+'px' : _default};
`;

export const PhotoImg = styled.img<Photo>`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const CarPhotoImg = styled(PhotoImg).attrs({
    alt: 'cars photo',
})`
    width: 100%;
    height: 100%;
`;
