import React from "react";
import ReactDOM  from "react-dom";

import './index.css';
import APP from './APP';
import {ContextProvider} from './contexts/ContextProvider';

ReactDOM.render(
  <ContextProvider>
   <APP/>
  </ContextProvider>,
document.getElementById('root')
);