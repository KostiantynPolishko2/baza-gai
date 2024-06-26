import styled, { css } from 'styled-components';

const _margin = 15;
const _padding = 5;

const _default: string = 'fit-content';

interface Size {
    _width?: number,
    _height?: number,
    _border?: string,
}

interface Photo {
    _path?: string,  
}

interface DisplayContent {
    _direction?: string;
    _justify?: string;
    _align?: string;
}

const main__br_radius = css`
    border-radius: 10px 0px 0px 10px;
`;

const next__br_radius = css`
    border-radius: 10px 10px 0px 0px;
`;

export const CarPhotoWrapper = styled.div<Size>`
    position: relative;
    margin: 5px;
    border: 1px solid black;
    width: ${props => props._width? props._width+'px' : _default};
    height: ${props => props._height? props._height+'px' : _default};
    ${props => props._border === 'main'? main__br_radius : next__br_radius}
`;

const PhotoImg = styled.img<Photo>`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const CarPhotoImg = styled(PhotoImg).attrs({
    alt: 'cars photo',
})`
    width: 100%;
    height: 100%;
    border-radius: inherit;
`;

export const Display = styled.div<DisplayContent>`
    display: flex;
    flex-direction: ${props => props._direction || 'row'};
    justify-content: ${props => props._justify || 'space-between' };
    align-items: ${props => props._align || 'center'};
`;

export const CarPhotoInner = styled(Display)`
    position: absolute;
    top: ${_margin}px;
    left: ${_margin}px;
    right: ${_margin}px;
    bottom: ${_margin}px;
    padding: ${_padding}px;
`;

export const ContentTop = styled(Display)`
    width: 100%;
`;

export const ContentBottom = styled(Display)`
    height: 100%;
`;