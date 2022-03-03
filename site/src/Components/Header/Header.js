import React from 'react'
import { HeaderContainer, List, ListItem} from './styles'
import {IoLogoWhatsapp} from 'react-icons/io'
import {RiFacebookCircleLine} from 'react-icons/ri'
import { AiOutlineInstagram } from 'react-icons/ai'

const Header = () => {
    return (
        <>
        <HeaderContainer>
            <h1>23 Estúdio</h1>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Portfólio</ListItem>
                <ListItem>Quem Somos</ListItem>
                <ListItem>Contato</ListItem>
                <ListItem><RiFacebookCircleLine/></ListItem>
                <ListItem><AiOutlineInstagram/></ListItem>
                <ListItem><IoLogoWhatsapp/></ListItem>
            </List>
        </HeaderContainer>
        </>
    )
        
}

export default Header
