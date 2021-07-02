import { useState,useEffect,ChangeEvent,FormEvent } from 'react';
import { Component } from 'react';
import Home from './components/MainComponents/Home';
import CardTracks from './components/MainComponents/CardTracks';
import { WeatherTypes } from './components/types/interface';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
interface appStateInterface{
  searchInput: string
  resultsQuery:WeatherTypes[]
}
class App extends Component<{}, appStateInterface>{
   state:appStateInterface ={
      searchInput:'',
      resultsQuery:[]
      
    }
   
    onQyeryChange =(e:ChangeEvent<HTMLInputElement>)=>{
      this.setState({searchInput:e.target.value})
    }
    onHandleSubmit=async(e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      try {
       
         const response= await fetch(`https://openweathermap.org/data/2.5/find?q=${this.state.searchInput}&type=like&sort=population&cnt=30&appid=439d4b804bc8187953eb36d2a8c26a02&_=1625213778113

        `)
        const data =await response.json()
        this.setState({resultsQuery:data.list})
        console.log(this.state.resultsQuery)
      } catch (error) {
        console.log(error)
      }
    }
   
  render(){
  
    return(
     
      <div>
        <Home search={this.state.searchInput} results={this.state.resultsQuery} handleSubmit={this.onHandleSubmit} handleQuery={this.onQyeryChange} />
        <CardTracks results={this.state.resultsQuery} />
      </div>
      
    )
  }
}


export default App;
