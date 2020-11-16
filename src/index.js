import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scrollbox.styles.css'
import App from './App';
import { CubeProvider } from "@cubejs-client/react";
import cubejs from "@cubejs-client/core";

const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1Ijp7ImlkIjoxfSwiaWF0IjoxNTg4Nzk0NDMxLCJleHAiOjI1OTEzODY0MzF9.NELCLPQS3umdnulLF9HF-k7IW-aJoSuoNjlq10Sqsp4",
  { apiUrl: "http://makewellanalytics.com:4000/cubejs-api/v1" }
);


ReactDOM.render(
  <React.StrictMode>
    <CubeProvider cubejsApi={cubejsApi}>
    <App />
    </CubeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


