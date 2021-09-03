import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// const fetchPlants = async () => {
//   const response = await fetch('https://plants-api.azurewebsites.net/Plants');
//   const data = await response.json;
//   console.log(data);
// }

const PlantsList = (props) => (
  <div>
    <Plants />
  </div>

);

class Plants extends React.Component{
  render() {
    return(
    <div className ="plants-profile" style={{ margin: '1rem'}}>
      <img alt= "some" src= "https://placehold.it/75"/>
      <div className= "info">
        <div className="name">  Plant Name here...</div>
        <div className= "plantInfo"> Plant information here...</div>
      </div> 
    </div>
    );
  }
}

class App extends React.Component{
  render() {
    return (
      <div>
        <div className= "header">(this.props.title)</div>
        <Plants/>
        <PlantsList/>
        </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App title= "Plant App"/>
    mountNode,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
