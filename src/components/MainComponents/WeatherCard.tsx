import {Container,Row,Col,Image,Form, Card,Carousel, CardGroup} from 'react-bootstrap'
import { WeatherTypes } from '../types/interface'
import {useState, useEffect } from 'react'
import styled from 'styled-components'
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
                const result = await fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longtitude}&units=metric&appid=e2e356d64b1568f1e802ed5b4a88a3b3
`)
                if (result.ok) {
                    const data = await result.json()
                    console.log(data.hourly)
                    setData(data)
                } else throw new Error("Failed to fetch")
            } catch (error) {
                console.log(error)
            }}
                    getData()
        },[])
     

        const date = new Date()
        const formattedDate = date.toLocaleString('en-US',{
            weekday:'short',
            day:'numeric'
        })
    const formatHours=(hours:number)=>{
        //hours in the API  is in Unix format(time of total seconds), so we need to convert it to hours
        const hour = new Date(hours * 1000).getHours()
        const suffix = hour >= 12 ? 'Pm' : 'Am'
        const joined = ((hour + 11) % 12 + 1) + suffix
        return joined
    }
    const formatDays =(days:number)=>{
        const date = new Date(days * 1000)
        const getDays = date.getDate()
        const day = new Date()
        const currentDay = day.getDay()
         const formattedDate = date.toLocaleString('en-US',{
            weekday:'short',
            day:'numeric'
        })
        if(getDays === currentDay){
            return 'Today'
        } else{
            return formattedDate
        }
    }
    
    return(
        <>
        
            <div><h1 style={{marginTop:'200px', display:"flex", justifyContent:"start",alignItems:"center"}}>{data?.timezone}</h1></div>
            <div>

            </div>
             <StyledContainer>
                <Row>
                    <div><h4>Current Weather</h4></div>
           
                    <StyledCol xs={12} md={6}>
                        {data && <Image src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}></Image>}
                        <h2> {data?.current.temp} C</h2>
                    </StyledCol>
                    <Col xs={12} md={6}>
                        {data && <div style={{marginTop:'10px'}}>{data.current.weather[0].description} </div>}
                        <h6>Feels like {data?.current.feels_like} C</h6>
                    </Col>
                    <Col xs={12}>
                        <Row>
                            <Col xs={4} md={2}>
                                <h6>Wind</h6>
                                <p>{data?.current.wind_speed} km/h</p>
                            </Col>
                            <Col xs={4} md={2}>
                                <h6>Humidity</h6>
                                <p>{data?.current.humidity} %</p>
                            </Col>
                           <Col xs={4} md={2}>
                                <h6>Visibility</h6>
                                <p>{data?.current.visibility} m</p>
                            </Col>
                           <Col xs={4} md={2}>
                                <h6>Pressure</h6>
                                <p>{data?.current.pressure} mb</p>
                            </Col>
                           <Col xs={4} md={2}>
                                <h6>Dev points</h6>
                                <p>{data?.current.dew_point}</p>
                            </Col>
                        </Row>
                    </Col>
                   
                       
                   

                </Row>
            </StyledContainer>
            <div style={{marginTop:"10px", marginBottom:"10px", fontSize:"1em"}}> 7-DAYS FORECAST</div>
            <Carousel wrap={false} interval={null}>
                <Carousel.Item>
                     <Row>
                     {data?.daily.slice(0,3).map((daily)=>(
                        <Col xs={12} md={4} >
                        <div >
                             <StyledCardGroup> 
                            <StyledCardDaily className='card' >
                                <StyledCardText>{formatDays(daily.dt)} </StyledCardText>
                                  <StyledCardBody >
                                <StyledCardImage src={`http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`} />
                                <div>
                                     <Card.Text>
                                        {daily.temp.day} C
                                    </Card.Text>
                                    <Card.Text>
                                        {daily.temp.night} C
                                    </Card.Text>
                                 </div>  
                                </StyledCardBody>
                            </StyledCardDaily>
                              </StyledCardGroup>
                        </div>
                    </Col>
               
           
                ))}
                 </Row>
                </Carousel.Item>
                <Carousel.Item>
                     <Row>
                     {data?.daily.slice(3,6).map((daily)=>(
                        <Col xs={12} md={4}>
                        <div >
                             <StyledCardGroup> 
                            <StyledCardDaily className='card' >
                                <StyledCardText>{formatDays(daily.dt)} </StyledCardText>
                                <StyledCardBody>
                                <StyledCardImage  src={`http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`} />
                                <div>
                                     <Card.Text>
                                        {daily.temp.day} C
                                    </Card.Text>
                                    <Card.Text>
                                        {daily.temp.night} C
                                    </Card.Text>
                                  </div> 
                                </StyledCardBody>
                            </StyledCardDaily>
                              </StyledCardGroup>
                        </div>
                    </Col>
               
           
                ))}
                 </Row>
                </Carousel.Item>
                 <Carousel.Item>
                     <Row>
                     {data?.daily.slice(6).map((daily)=>(
                        <Col xs={12} md={6}>
                        <div >
                             <StyledCardGroup> 
                            <StyledCardDaily className='card' >
                                <StyledCardText>{formatDays(daily.dt)} </StyledCardText>
                                <StyledCardBody>
                                <StyledCardImage  src={`http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`} />
                                <div>
                                     <Card.Text>
                                        {daily.temp.day} C
                                    </Card.Text>
                                    <Card.Text>
                                        {daily.temp.night} C
                                    </Card.Text>
                                  </div> 
                                </StyledCardBody>
                            </StyledCardDaily>
                              </StyledCardGroup>
                        </div>
                    </Col>
               
           
                ))}
                 </Row>
                </Carousel.Item>
            </Carousel>
            <div style={{marginTop:"10px", marginBottom:"10px", fontSize:"1em"}}>Hourly Forecast</div>
            <Carousel wrap={false} interval={null}>
            <Carousel.Item> 
                 <Row>
                     {data?.hourly.slice(0,6).map((hourly)=>(
                        <Col xs={4} md={2}>
                        <div >
                             <StyledCardGroup> 
                            <StyledCard className='card' >
                                <Card.Img  src={`http://openweathermap.org/img/wn/${hourly.weather[0].icon}@2x.png`} />
                                <Card.Body>
                                    <Card.Title>{hourly.temp} C</Card.Title>
                                    <Card.Text style={{ color: 'black' }}>
                                        {hourly.weather[0].main}

                                    </Card.Text>
                                   
                                </Card.Body>
                                 <Card.Body>
                                    <Card.Title>{hourly.pop} %</Card.Title>
                                    <Card.Text style={{ color: 'black' }}>
                                        {hourly.wind_speed} km/h

                                    </Card.Text>
                                   
                                </Card.Body>
                                  <StyledCardFooter className="text-muted">{formatHours(hourly.dt)} </StyledCardFooter>
                            </StyledCard>
                              </StyledCardGroup>
                        </div>
                    </Col>
               
           
                ))}
                 </Row>
                </Carousel.Item>
                 <Carousel.Item> 
                 <Row>
                     {data?.hourly.slice(6,12).map((hourly)=>(
                        <Col xs={4} md={2}>
                        <div >
                             <StyledCardGroup> 
                            <StyledCard className='card' >
                                <Card.Img  src={`http://openweathermap.org/img/wn/${hourly.weather[0].icon}@2x.png`} />
                                <Card.Body>
                                    <Card.Title>{hourly.temp} C</Card.Title>
                                    <Card.Text style={{ color: 'black' }}>
                                        {hourly.weather[0].main}
                                    </Card.Text>
                                   
                                </Card.Body>
                                 <Card.Body>
                                    <Card.Title>{hourly.pop} %</Card.Title>
                                    <Card.Text style={{ color: 'black' }}>
                                        {hourly.wind_speed} km/h

                                    </Card.Text>
                                   
                                </Card.Body>
                                  <StyledCardFooter className="text-muted">{formatHours(hourly.dt)}</StyledCardFooter>
                            </StyledCard>
                              </StyledCardGroup>
                        </div>
                    </Col>
               
           
                ))}
                 </Row>
                </Carousel.Item>
                 <Carousel.Item> 
                 <Row>
                     {data?.hourly.slice(12,18).map((hourly)=>(
                        <Col xs={4} md={2}>
                        <div >
                             <StyledCardGroup> 
                            <StyledCard className='card' >
                                <Card.Img  src={`http://openweathermap.org/img/wn/${hourly.weather[0].icon}@2x.png`} />
                                <Card.Body>
                                    <Card.Title>{hourly.temp} C</Card.Title>
                                    <Card.Text style={{ color: 'black' }}>
                                        {hourly.weather[0].main}
                                    </Card.Text>
                                   
                                </Card.Body>
                                 <Card.Body>
                                    <Card.Title>{hourly.pop} %</Card.Title>
                                    <Card.Text style={{ color: 'black' }}>
                                        {hourly.wind_speed} km/h

                                    </Card.Text>
                                   
                                </Card.Body>
                                  <StyledCardFooter className="text-muted">{formatHours(hourly.dt)}</StyledCardFooter>
                            </StyledCard>
                              </StyledCardGroup>
                        </div>
                    </Col>
               
           
                ))}
                 </Row>
                </Carousel.Item>
                 <Carousel.Item> 
                 <Row>
                     {data?.hourly.slice(18,24).map((hourly)=>(
                        <Col xs={4} md={2}>
                        <div >
                             <StyledCardGroup> 
                            <StyledCard className='card' >
                                <Card.Img  src={`http://openweathermap.org/img/wn/${hourly.weather[0].icon}@2x.png`} />
                                <Card.Body>
                                    <Card.Title>{hourly.temp} C</Card.Title>
                                    <Card.Text style={{ color: 'black' }}>
                                        {hourly.weather[0].main}
                                    </Card.Text>
                                   
                                </Card.Body>
                                 <Card.Body>
                                    <Card.Title>{hourly.pop} %</Card.Title>
                                    <Card.Text style={{ color: 'black' }}>
                                        {hourly.wind_speed} km/h

                                    </Card.Text>
                                   
                                </Card.Body>
                                  <StyledCardFooter className="text-muted">{formatHours(hourly.dt)}</StyledCardFooter>
                            </StyledCard>
                              </StyledCardGroup>
                        </div>
                    </Col>
               
           
                ))}
                 </Row>
                </Carousel.Item>    
                 </Carousel>
              
            

        </>
    )
}
export default WeatherCard

const StyledContainer = styled(Container) `
margin-top: 30px;
background-image:  url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhnOP1F8m_JxqRQZap6fwOztIBfwpqjF6Wsg&usqp=CAU") ;
background-size: cover;
   

`
const StyledCol = styled(Col) `
display: flex;
justify-content: space-between;
    & h2{
        margin-top: 30px;
        margin-right:300px;
    }
`
const StyledCard = styled(Card)`
background-color: #5d92c4;
height:400px;

`
const StyledCardText = styled(Card.Title)`
padding-left:25px;
` 
const StyledCardDaily = styled(Card) `
background-color: #2a5c8b;

height:150px;
`
const StyledCardImage = styled(Card.Img)`
width: 100px;
height: 100px;
`
const StyledCardGroup = styled(CardGroup) `margin-bottom:20px;`
const StyledCardBody = styled(Card.Body)`
display: flex;

`
const StyledCardFooter = styled(Card.Footer) `
background-color: #70aee6;
color: white;
`