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
          DetailsPage
        </div>
      </PrimaryLayout>
    );
  }
}
export default DetailsPage;
