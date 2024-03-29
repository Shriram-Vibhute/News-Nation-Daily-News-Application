import React, { Component } from 'react'
import Navbar from './Components/Navbar.js'
import News from './Components/News.js'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API_KEY;
  constructor() {
    super();
    this.state = {
      progress: 0
    }
  }
  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={3.5}
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="home" category="general" country="in" />} />
            <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" category="business" country="in" />} />
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" category="entertainment" country="in" />} />
            <Route exact path='/general' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" category="general" country="in" />} />
            <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" category="health" country="in" />} />
            <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" category="science" country="in" />} />
            <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" category="sports" country="in" />} />
            <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" category="technology" country="in" />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}