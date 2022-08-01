import {WeatherTypes} from '../types/interface'
import { ChangeEvent, Component, FormEvent } from "react";
import styled from 'styled-components';
import {Navbar,Nav,Button,Form,FormControl} from 'react-bootstrap'
interface HomeProps {
    search: string
    results:WeatherTypes[]
    handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
    handleQuery: (e: ChangeEvent<HTMLInputElement>) => void
}
const Home  =(props:HomeProps)=>{
    return(
        <StyledNavbar bg="light" >
                <Navbar.Brand href="#home">Bax-weather-App</Navbar.Brand>
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <StyledNav>
                        <StyledForm inline onSubmit={props.handleSubmit}>
                        <FormControl 
                    type="text"
                    placeholder="Search for the City"
                    
                    value ={props.search}
                    onChange={props.handleQuery}
                       />
                    
                    </StyledForm>
                    </StyledNav>
                  
                </Navbar.Collapse>
            </StyledNavbar>
    )
}
export default Home
const StyledNavbar = styled(Navbar)`
@media only screen and (max-width:420px){
    display:flex;
    flex-direction:column;
}
`
const StyledNav = styled(Nav) `
display: flex !important;
justify-content: center !important;
margin-left:400px;

@media only screen and (max-width:1000px){
    margin-left:50px;
}
`
const StyledForm = styled(Form) `
width:200px !important;

`