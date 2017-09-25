import React from 'react'
//import { Link } from 'react-router-dom'
import Search from './Search.js'

class Main extends React.Component {
    render() {
        return (
            <div className="App">
                <Search username="defunkt"/>
            </div>
        );
    }
}

export default Main;