import{WeatherTypes} from '../types/interface'
import{useState, useEffect} from 'react'
import {Container,Row,Col,ListGroup,Button,Image} from 'react-bootstrap'
import { Link } from "react-router-dom";
interface cardTrackProps {
    results: WeatherTypes[]
      
}
const CardTracks  =({results}:cardTrackProps)=>{
  
    return(
         <>
    {results && results.length > 0 && results.map((result)=>(
        <Container>
            <Row className="g-4 mb-3 ml-2">
               <Col md={4}>
                {result && <Image src={` http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`}/>}
               </Col>
               <Col md={8}>
                   <ListGroup>
                       <ListGroup.Item className= 'mt-2'> {result.name}  {result.sys.country}  {result.weather[0].description}</ListGroup.Item>
                        <ListGroup.Item>
                            <Button variant='dark' style={{borderRadius: '50%', color: "white"}} >
                                {result.main.temp}o C
                            </Button>
                             `Temperature from {result.main.temp_min} to {result.main.temp_max} wind {result.wind.speed} {result.clouds.all}` 
                        </ListGroup.Item>
                        <Link className= 'link' to={"/city/" + result.id}><ListGroup>
                            `Geo Cordinations[{result.coord.lat}, {result.coord.lon}]`
                        </ListGroup></Link>
                        
                   
                    
                        
                    </ListGroup>
                  
               </Col>
            </Row>
        </Container>
    ))}
    </>
    )
}
export default CardTracks