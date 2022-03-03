import styled from "styled-components"

export const HeaderContainer = styled.div`
    z-index: 1;
    opacity: 1;
    height: 70px;
    display: flex;
    padding: 0 20px;
    align-items: center;
    background: #919191;
    justify-content: center;
    backdrop-filter: blur(0px);
    justify-content: space-between;
    box-shadow: 3px 3px 4px #00000022;
    -webkit-backdrop-filter: blur(0px);
    background-color: #212121 0% 0% no-repeat padding-box;
`

export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
`

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    margin: 20px;
    padding: 0px;
    font-size: 1.2rem;
    color: #fff;
    cursor: pointer;
    &:hover {
        color: #fff;
    }
    a {
        text-decoration: none;
        color: #fff;
    }
`