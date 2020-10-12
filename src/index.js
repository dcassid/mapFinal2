import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import ReactMapGL from "react-map-gl";
//import {userService, authenticationSrvice} from '@/_services';

const root = document.querySelector("#root");
console.log(root);
ReactDOM.render(<App />, root);
console.log(process.env)