import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import _ from 'lodash';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => _.round(weather.main.temp - 272.15));
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        
        return <tr key={name}>
            <td>{name}</td>
            <td><Chart data={temps} color='orange' unit='℃' /></td>
            <td><Chart data={pressures} color='blue' unit='hPa' /></td>
            <td><Chart data={humidities} color='red' unit='%' /></td> 
        </tr>;
    }

    render() {
        return <table className='table table-hover'>
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
            </thead>
            <tbody>
                {this.props.weather.map(this.renderWeather)}
            </tbody>
        </table>
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);