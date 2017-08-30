import React, {Component} from 'react';

import SearchBar from '../containers/search_bar';
import HeadlineList from '../containers/headline_list';

export default class App extends Component {
    render() {
        return (
            <div style={{width: 500, margin: 'auto'}}>
                <h1 style={{margin: '50px 0 0 0', textAlign: 'center'}}>Welcome to Chronicling America Web app </h1>
                <p style={{margin: '50px 0 0 0', textAlign: 'center'}}>Note: Please Search for the headlines to Querry Api </p>
                <SearchBar/>
                <HeadlineList/>
            </div>
        );
    }
}
