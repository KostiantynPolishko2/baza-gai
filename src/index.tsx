import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FormSearch from './components/FormSearch/FormSearch';
import CarPhoto from './components/CarPhoto/CarPhoto';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <body>
        <FormSearch/>
        <CarPhoto _url_photo={''} _id={'main'} _digits={'AE 4000 IT'} _registered_at={'28.02.2024'} _model_year={2017} _vendor={'BMW'} _model={'X3'}/>
      </body>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
