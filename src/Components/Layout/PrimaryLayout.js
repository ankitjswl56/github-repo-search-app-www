import React from 'react';

import NavBarComponents from '../Shared/NavBarComponents';
import Footer from '../Shared/Footer';

class PrimaryLayout extends React.PureComponent{
  render(){
    const { children } = this.props
    return(
      <>
      <NavBarComponents/>
      { children }
      <Footer/>
      </>
    );
  }
}
export default PrimaryLayout;
