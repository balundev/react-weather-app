import React from "react";

class WeatherSection extends React.Component{
    state={
        show: "9"
    };

    handleChange = (e)=>{
        this.setState({
            show: e.target.value
        });
      if(typeof this.props.show === "function"){
          this.props.show(e.target.value);
      }
    };
    render() {
        return (
            <div className="weather-section">
                <div className="container">
                    <label className="text-white show-label"> Show cities:
                        <select className="show-select_form" value={this.state.show} onChange={this.handleChange}>
                            <option>1</option>
                            <option>4</option>
                            <option>9</option>
                        </select>
                    </label>
                    <div className="row">
                    {this.props.weather.map((el,i)=>{
                        return (
                            <div key={i} className="col-md-6 mt-3 mb-4">
                                <div className="weather-pool text-white">
                                    <div className="container">
                                        <h1>{el.name}</h1>
                                        <hr/>
                                        <strong>Pogoda teraz</strong> - dzisiaj godz. {this.props.date}
                                        <h1>{Math.round(el.main.temp)}°C</h1>
                                        <div className="d-flex justify-content-between">
                                            <p className="clouds">{el.weather[0].description}</p>
                                            <h4 className="pressure-span"><i className="far fa-arrow-alt-circle-up"></i> {Math.round(el.main.pressure)} hPa</h4>
                                            <h4><i className="fas fa-wind"></i> {Math.round(el.wind.speed)} km/h</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        );
    }
}

export default WeatherSection