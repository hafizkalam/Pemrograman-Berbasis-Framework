import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloComponent from './component/HelloComponent';
import LoginComponent from './component/LoginComponent';
import Test from './Test';
import Image from './Image';

// const HelloComponent= () => {
//   return HelloComponent
// }

// class StateFullComponent extends React.Component{
//   render(){
//     return<p>StateFullComponent</p>
//   }
// }

// ReactDOM.render(<Image />, document.getElementById('root'));
// ReactDOM.render(<LoginComponent />, document.getElementById('root'));
// ReactDOM.render(<HelloComponent />, document.getElementById('root'));
ReactDOM.render(<Test />, document.getElementById('root'));

// ReactDOM.render(<StateFullComponent />, document.getElementById('root'));
// function HelloComponent() => {
//   return HelloComponent
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
  
// const Hello = () => {
//   // return <p>hello</p>
//   return <div>
//             <header className="Main-page">
//               <h1>
//                 <marquee direction="right">Hello There !!! Selamat Datang di React JS</marquee>    
//               </h1>
//               <a
//                 className="App-link"
//                 href="https://github.com/hafizkalam"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Go to Github Account
//               </a>
//             </header>
//           </div>
  
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
