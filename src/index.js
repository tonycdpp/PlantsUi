import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

class Plants extends React.Component{
  render() {
    return(
    <div className ="plants-profile">
      <img scr= "..." />
      <div className= "info">
      <div className ="name"> Name here...</div>
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
