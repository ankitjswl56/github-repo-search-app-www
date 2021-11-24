import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import DetailsPage from './Pages/Details';

import HomePage from './Pages/Home'

class App extends React.PureComponent {
  render(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<HomePage/>} />
          <Route path='/detailspage' exact element={<DetailsPage/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
