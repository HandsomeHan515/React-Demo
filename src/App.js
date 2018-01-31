import React from 'react';
import { Header, Footer } from './components';

const App = props => {
  console.log('height: %o', document.body.clientHeight)
  return (
    <div>
      <Header />
      <div style={{ minHeight: document.body.clientHeight - 100 }}>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default App;
