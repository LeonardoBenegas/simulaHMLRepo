import React, { Fragment } from 'react';
import Formulario from './components/Formulario'

function App() {
  return (
    <Fragment>
      <h1>Simular HML</h1>
      <div className="container">
        <div className="one-half column">
          <Formulario/>
        </div>
        <div className="one-half column">
          2
        </div>

      </div>
    </Fragment>
  );
}

export default App;
