import React from 'react';
import PrimaryLayout from '../../Components/Layout/PrimaryLayout';

class HomePage extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      search: '',
      per_page: '',
      sort: '',
    }
  }
  getSearchKeyWord = (event) =>{
    this.setState({
      search: event.target.value
    })
  }
  getPerPageNumber = (event) => {
    this.setState({
      per_page: event.target.value
    })
  }
  getSortReq = (event) => {
    this.setState({
      sort: event.target.value
    })
  }
  onSubmitForm = () => {
    
  }
  render(){
    return(
      <PrimaryLayout className="container-fluid">
        <div className="container">
          <form onSubmit={() => {}}>
            <div className="row mt-5 ">
              <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                <div className="input-group mb-3">
                  <input type="text" onChange={(event)=>this.getSearchKeyWord(event)} className="form-control" placeholder="Search Repositories here" aria-label="Search" aria-describedby="basic-addon1" />
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 col-12">
                <div className="input-group mb-3">
                  <input type="text" onChange={(event)=>this.getPerPageNumber(event)} className="form-control" placeholder="Per_Page" aria-label="Per_Page" aria-describedby="basic-addon1" />
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 col-12">
                <div className="input-group mb-3">
                  <input type="text" onChange={(event)=>this.getSortReq(event)} className="form-control" placeholder="Sort" aria-label="Sort" aria-describedby="basic-addon1" />
                </div>
              </div>
            </div>
            <div className="offset-lg-5 offset-md-5 col-lg-2 col-md-2 col-sm-2 col-2">
              <button type="button" className="btn btn-success">Search</button>
            </div>
          </form>
        </div>
      </PrimaryLayout>
    );
  }
}
export default HomePage;
