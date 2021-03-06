import React from "react";
import { HeaderContainer, Logo } from './styles'

import Icone from '../../assets/logo.jpg'

function Header(props) { 
    return (
        <>
            <HeaderContainer>
                <Logo src={Icone} alt='ForteGPS - Rastreamento veicular'/>
                <h1>Pitu</h1>
                <p>{props.children}</p>
            </HeaderContainer>
        </>
    )
}

export default Header