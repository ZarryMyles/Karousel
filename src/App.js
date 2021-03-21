import './App.css';
import React, { Component, Fragment } from "react";
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import Form1 from "./components/Form1/Form1";
import Form2 from "./components/Form2/Form2";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
//routes



function App() {
  return (
  <Router>
    <div className="App">
      {/* <ImageSlider slides={SliderData} />; */}
      <Switch>
        <Route path="/components/Form1/Form1" component={Form_1} />
        <Route path="/components/Form2/Form2" component={Form_2} />
        <Route path="/components/ImageSlider" component={ImgSlider} slides={SliderData}/>
      </Switch>
    </div>
    </Router>
  )
}
const Form_1 = () => (
  <Fragment>
    <Form1 />
  </Fragment>
);
const Form_2 = () => (
  <Fragment>
    <Form2 />
  </Fragment>
);
const ImgSlider = () => (
  <Fragment>
    <ImageSlider slides={SliderData} />
  </Fragment>
);

export default App;
