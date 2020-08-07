import React from 'react'
import Menu from '../Menu'
import Footer from '../Footer'
import styled, { css } from 'styled-components'

const Main = styled.main`
    background-color: black;
    color: white;
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    ${({ paddingAll }) => css `
        padding: ${paddingAll}
    `}
`

function PageDefault(props){
    return(
        <>
            <Menu/>
				<Main paddingAll={props.paddingAll}>
					{props.children}
				</Main>
            <Footer/>
        </>
    )
}

export default PageDefault