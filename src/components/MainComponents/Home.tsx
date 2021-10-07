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
        <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Bax-weather-App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <StyledNav>
                        <StyledForm inline onSubmit={props.handleSubmit} style={{width:'200px'}}>
                        <FormControl 
                    type="text"
                    placeholder="Search for the City"
                    className="mr-sm-2"
                    value ={props.search}
                    onChange={props.handleQuery}
                       />
                    
                    </StyledForm>
                    </StyledNav>
                  
                </Navbar.Collapse>
            </Navbar>
    )
}
export default Home

const StyledNav = styled(Nav) `
display: flex !important;
justify-content: center !important;
margin-left:400px;
`
const StyledForm = styled(Form) `
width:200px !important;
`