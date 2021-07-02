import {WeatherTypes} from '../types/interface'
import { ChangeEvent, Component, FormEvent } from "react";
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
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                
                    </Nav>
                    <Form inline onSubmit={props.handleSubmit}>
                    <FormControl 
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    value ={props.search}
                    onChange={props.handleQuery}
                       />
                    
                    </Form>
                </Navbar.Collapse>
            </Navbar>
    )
}
export default Home