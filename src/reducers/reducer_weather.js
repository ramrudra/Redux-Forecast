import { FETCH_WEATHER } from '../actions/Actions';

const WeatherReducer = (state = [], action) => {

    switch (action.type) {
        case FETCH_WEATHER:
            return [ action.payload.data, ...state ];
    }

    return state;
};

export default WeatherReducer;