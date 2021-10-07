import { RouteComponentProps } from "react-router";
import{useState, useEffect} from 'react'
import { Container,Col,Row } from "react-bootstrap";
import {WeatherTypes} from '../types/interface'
import WeatherCard from './WeatherCard'
interface id extends RouteComponentProps{
    id:string | number
}

const Weather =(props:id)=>{
    const [data, setData] = useState<WeatherTypes  | undefined>(undefined)
     useEffect(()=>{
            const getData = async()=>{
            try {
                const result = await fetch (`https://api.openweathermap.org/data/2.5/weather?id=${props.id}&units=imperial&appid=e2e356d64b1568f1e802ed5b4a88a3b3`)
                if (result.ok) {
                    const data = await result.json()
                    console.log(data)
                    setData(data)
                } else throw new Error("Failed to fetch")
            } catch (error) {
                console.log(error)
            }}
                    getData()
        }
        ,[props.id])
    return(
        <Container>
            <Row>
                <Col>
                    {data && <WeatherCard longtitude = {data?.coord.lon}  latitude={data?.coord.lat}/>}
                </Col>
            </Row>
        </Container>
            
       
    )

}
export default Weather