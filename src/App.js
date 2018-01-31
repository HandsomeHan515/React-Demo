import React from 'react';
import { Header, Footer } from './components';

const App = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default App;
