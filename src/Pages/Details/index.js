import React from 'react';
import PrimaryLayout from '../../Components/Layout/PrimaryLayout';

class DetailsPage extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    console.log(this.props)
    return(
      <PrimaryLayout className="container-fluid">
        <div className="container">
          <div className="d-flex justify-content-center" style={{marginTop:'20vh'}}>
          <h1>DetailsPage: On Progress !!!</h1>
          </div>
        </div>
      </PrimaryLayout>
    );
  }
}
export default DetailsPage;
