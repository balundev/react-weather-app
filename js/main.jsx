import React from "react";
import Navbar from "./navbar.jsx"
import WeatherSection from "./weatherSection.jsx"
import Footer from "./footer.jsx"

let currentDate = new Date();
let date = currentDate.getHours() + ":"
    + currentDate.getMinutes();
class Main extends React.Component{
    state = {
        weather: [],
        search: "",
        date: date,
        show: "9"
    };
    handleSearch=(e)=>{
        this.setState({
            search : e
    })
    };
    handleSearchSubmit=()=>{
        event.preventDefault();
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.search}&appid=414b54642e50f1410434620f210fc6dd`)
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                }
                throw new Error('Connection error!');
            })
            .then(data => {
                console.log(data);
                let calcTemp = data.main.temp-273;
                data.main.temp = calcTemp;
                let weatherList = [];
                weatherList.push(data);
                this.setState({
                    weather: weatherList
                },()=>{
                    console.log(this.state.weather)
                })
            })
            .catch(err => console.log(err));
    };
    handleShow=(e)=>{
        this.setState({
            show: e
        });
        let apiKey;
        if(e === "9"){
             apiKey = "http://api.openweathermap.org/data/2.5/group?id=3081368,756135,3090048,706075,3091913,3094802,3099434,3090436,3096472&units=metric&appid=414b54642e50f1410434620f210fc6dd";
        }else if(e === "4"){
             apiKey = "http://api.openweathermap.org/data/2.5/group?id=3081368,756135,3090048,706075&units=metric&appid=414b54642e50f1410434620f210fc6dd"
        }else if(e === "1"){
             apiKey = "http://api.openweathermap.org/data/2.5/group?id=3081368&units=metric&appid=414b54642e50f1410434620f210fc6dd"
        }
        fetch(apiKey)
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                }
                throw new Error('Connection error!');
            })
            .then(data => {
                console.log(data);
                let weatherList = data.list;
                this.setState({
                    weather: weatherList
                },()=>{
                    console.log(this.state.weather)
                })
            })
            .catch(err => console.log(err));
    };
    render(){
        return (
            <div>
                <Navbar handleSearch={this.handleSearch} searchValue={this.state.search} handleSubmit={this.handleSearchSubmit}/>
                <WeatherSection weather={this.state.weather} date={this.state.date} show={this.handleShow} value={this.state.show}/>
                <Footer/>
            </div>
        );
    };
    componentDidMount(){
        fetch(`http://api.openweathermap.org/data/2.5/group?id=3081368,756135,3090048,706075,3091913,3094802,3099434,3090436,3096472&units=metric&appid=414b54642e50f1410434620f210fc6dd`)
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                }
                throw new Error('Connection error!');
            })
            .then(data => {
                console.log(data);
                let weatherList = data.list;
                this.setState({
                    weather: weatherList
                },()=>{
                    console.log(this.state.weather)
                })
            })
            .catch(err => console.log(err));
    }
}

export default Main