export interface WeatherTypes{
                              
    coord: {
    lon: number
    lat: number
  },
 current:{
weather: [{
  description:string,
  main:string,
  id:string | number,
  icon:string
}]
clouds: number,
dew_point: number,
dt:number,
feels_like:number,
humidity: number,
pressure:number,
sunrise: number,
sunset: number,
temp: number,
uvi: number,
visibility: number,
wind_speed:number
},
daily:[{
  dt:number,
  temp:{
    day:number,
    night:number
  }
  weather:[{
     description:string,
  main:string,
  id:string | number,
  icon:string
  }]
}]
hourly:[{
clouds: number,
dew_point: number,
dt: number,
feels_like:number,
humidity: number,
pop: number,
pressure: number,
temp: number,
uvi: number,
visibility: number,
  weather:[
    {
      id: string | number
      main: string,
      description: string,
      icon: string
    }],
    wind_speed:number
}]
  weather:[
    {
      id: string | number
      main: string,
      description: string,
      icon: string
    }]
  ,
  base: string,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
  },
  visibility: number,
  wind: {
    speed: number,
    deg: number
  },
  clouds: {
    all: number
  },
  dt: number,
  sys: {
    type: number,
    id: number,
    message:number,
    country: string,
    sunrise: number,
    sunset: number
  },
  timezone: number,
  id: number,
  name: string,
  cod: number
                          

                        
}