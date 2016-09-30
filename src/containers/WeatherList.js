import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';


class Weatherlist extends Component {

    renderWeather(cityData) {

        const CityName = cityData.city.name;
        const CityTemps = cityData.list.map(weather => weather.main.temp);
        const CityPressures = cityData.list.map(weather => weather.main.pressure);
        const CityHumidities = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={CityName}>
                <td>{ CityName }</td>
                <td><Chart data={CityTemps} color="orange" units="C" /></td>
                <td><Chart data={CityPressures} color="green" units="hPa" /></td>
                <td><Chart data={CityHumidities} color="black" units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Presssure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderWeather) }
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(Weatherlist);
