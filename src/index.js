import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyD8k1GaWpECPdAfJa9A9-OydmIXVPXIKk4'
// Create a new component.
// This component should produce some HTML

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    )
}

// take this component's HTML
// and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
