import styled from 'styled-components';

export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;

`

export const CategoryImage = styled.div`
    display: flex;
    justify-content: center;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 300px;
    height: 500px;
    border-radius: 20px;
    margin-left: 120px;
`