import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FetchWeather } from '../actions/Actions';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    onInputChange(e) {
        this.setState({ term: e.target.value });
    }

    onFormSubmit() {
        this.props.FetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <div>
                <div className="ui search">
                    <div className="ui icon input">
                        <input className="prompt" type="text" placeholder="Get a five-day forecast of a city." value={this.state.term}  onChange={this.onInputChange.bind(this)} />
                        <i onClick={this.onFormSubmit.bind(this)} className="search link icon"></i>

                    </div>
                    <div className="results"></div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { FetchWeather }, dispatch );
}

export default connect(null, mapDispatchToProps)(SearchBar);

