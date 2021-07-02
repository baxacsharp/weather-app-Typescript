import {Container,Row,Col,Image,Form,ListGroup} from 'react-bootstrap'
import { WeatherTypes } from '../types/interface'
import {useState, useEffect } from 'react'
interface latAndLongtitude {
    latitude:number,
    longtitude:number
}
const WeatherCard =(props:latAndLongtitude)=>{
const [data, setData] = useState <WeatherTypes  | undefined>(undefined)
const [hourly, setHourly] = useState('')
     useEffect(()=>{
            const getData = async()=>{
            try {
                const result = await fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longtitude}&exclude=daily&appid=ee553c9b7b8c2358a28cb4b0282148bb`)
                if (result.ok) {
                    const data = await result.json()
                    console.log(data)
                    setData(data)
                } else throw new Error("Failed to fetch")
            } catch (error) {
                console.log(error)
            }}
                    getData()
        },)
        
    return(
        <>
        
            <div><h1 style={{marginTop:'200px', display:"flex", justifyContent:"center",alignItems:"center"}}>{data?.name}</h1></div>
            <div><h4>Today's Weather</h4></div>
            <Container>
                <Row>
                    <Col md={6}>
                        {data && <Image src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}></Image>}
                    </Col>
                    <Col md={6}>
                       <h2> {data?.current.temp} C</h2>
                    </Col>

                </Row>
            </Container>
            <Form.Control as="select">
                <option>Daily</option>
                
     
            </Form.Control>
            <ListGroup>
            {data?.hourly.map((hourly)=>(
                <ListGroup.Item>{hourly.temp} C</ListGroup.Item>
                ))}
            </ListGroup>
            

        </>
    )
}
export default WeatherCard