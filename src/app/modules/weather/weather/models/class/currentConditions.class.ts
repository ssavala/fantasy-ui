import { precipitationMap, weatherMap } from '../maps';

class CurrentConditions {
    private _dataFields: any;

    constructor(dataFields: any) {
        this._dataFields = dataFields;
    }

    get weather() {
        return weatherMap[this._dataFields.weatherCode];
    }

    get temperature() {
        return this._dataFields.temperature;
    }

    get realFeel() {
        return this._dataFields.temperatureApparent;
    }

    get precipitation() {
        return precipitationMap[this._dataFields.precipitationType];
    }

    get chanceOf() {
        return this._dataFields.precipitationProbability;
    }

    get chanceOfText() {

        if (precipitationMap[this._dataFields.precipitationType] === 'N/A') {
            return 'No precipitation';
        }

        return `Chance of ${precipitationMap[this._dataFields.precipitationType]}, ${this._dataFields.precipitationProbability}%`;
    }

    get weatherImg() {
        return `https://github.com/Tomorrow-IO-API/tomorrow-weather-codes/blob/master/color/${this.lowercaseWeatherCode}.svg`;
    }

    get wind() {
        return {
            direction: this._dataFields.windDirection,
            gust: this._dataFields.windGust,
            speed: this._dataFields.windSpeed
        };
    }

    get dewPoint() {
        return this._dataFields.dewPoint;
    }

    private get lowercaseWeatherCode() {
        return weatherMap[this._dataFields.weatherCode].split(' ').join('_').toLowerCase();
    }

}

export { CurrentConditions };
