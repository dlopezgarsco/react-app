import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/index'
import Home from './scenes/Home/index'
import Gallery from './scenes/Gallery/index'
import Contact from './scenes/Contact/index'
import About from './scenes/About/index'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/gallery' component={ Gallery } />
            <Route path='/contact' component={ Contact } />
            <Route path='/about' component={ About } />
            <Route component={ Home } />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
