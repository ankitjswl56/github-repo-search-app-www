import React from 'react';
import PrimaryLayout from '../../Components/Layout/PrimaryLayout';
import { Search } from '../../Services/Rest/Search';

class HomePage extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      search: '',
      per_page: '',
      sort: '',
      searchResult: [],
      displayResult: [],
      buttonDisplay: true,
      spinner: false,
      totalValue: 30,
      currentPage: 1,
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
  Fetch = async () => {
    const { search, sort } = this.state;
    const details = {
      search: search,
      _sort: sort
    }
    const response = await Search.Search_Repo(details);
    return response
  }
  onSubmitForm = async (event) => {
    event.preventDefault();
    const { search, per_page, sort, spinner } = this.state;
    this.setState({spinner: !spinner})
    if(search === '' || per_page === '' || sort === ''){
      alert('Please Fill the form complete'); 
      return
    };
    const response = await this.Fetch()
    console.log(response)
    this.setState({
      searchResult: response.message.items,
      displayResult: response.message.items
    })
    this.setState({spinner: false})
  }
  goToNextPage = async () => {
    let { searchResult, per_page, buttonDisplay, currentPage } = this.state;
    this.setState({spinner: true})
    if(searchResult.length < per_page){
      this.setState({buttonDisplay : !buttonDisplay});
      return; 
    }
    for(let i=0; i< per_page; i++){
      searchResult.shift()
    }
    const response = await this.Fetch();
    searchResult = [...searchResult, ...response.message.items]
    currentPage = currentPage + 1
    this.setState({
      displayResult: searchResult,
      currentPage,
     })
    window.scrollTo(0,0);
    this.forceUpdate();
    this.setState({spinner: false})
  }
  render(){
    const { displayResult, per_page, spinner, totalPage, currentPage } = this.state
    return(
      <PrimaryLayout className="container-fluid">
        <div style={{position: 'relative', height: '80vh'}}>
          <div className="container">
            <h3 className="text-center mt-5">Github Repo Search Web App</h3>
            <form onSubmit={(event) => this.onSubmitForm(event)}>
              <div className="row mt-5 ">
                <div className="offset-lg-2 offset-md-2 col-lg-8 col-md-8 col-sm-8 col-12">
                  <div className="input-group mb-3">
                    <input type="text" onChange={(event)=>this.getSearchKeyWord(event)} className="form-control" placeholder="Search Repositories here" aria-label="Search" aria-describedby="basic-addon1" />
                  </div>
                </div>
                <div className="col-lg-2 col-md-2"/>
                <div className="offset-lg-4 offset-md-4 col-lg-2 col-md-2 col-sm-12 col-12">
                  <div className="input-group mb-3">
                    <input type="text" onChange={(event)=>this.getPerPageNumber(event)} className="form-control" placeholder="Per_Page" aria-label="Per_Page" aria-describedby="basic-addon1" />
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 col-12">
                  <div className="input-group mb-3">
                    <input type="text" onChange={(event)=>this.getSortReq(event)} className="form-control" placeholder="Sort (asc or desc)" aria-label="Sort" aria-describedby="basic-addon1" />
                  </div>
                </div>
              </div>
              <div className="offset-lg-5 offset-md-5 col-lg-2 col-md-2 col-sm-6 col-6">
                <button type="submit" className="btn btn-success btn-lg col-12">Search</button>
              </div>
            </form>
          </div>
          {
            spinner === true ? (
              <div className="mt-5 d-flex justify-content-center">
                <div className="spinner-border" role="status">  
                </div>
              </div>
            )
            : (
              displayResult.length > 0 && (
                <div className="container">
                  {
                    displayResult.map((eachitem, index) => (
                      index < per_page && (
                          <div className="card mt-5" key={eachitem.id}>
                            <div className="card-body">
                              <p className="font-weight-bold">Repo Name: {eachitem.name}</p>
                              <p className="font-weight-bold">Author: {eachitem.name}</p>
                              <p className="font-weight-bold">Number of Stars: {eachitem.stargazers_count}</p>
                              <p className="font-weight-bold">Watchers Count: {eachitem.watchers_count}</p>
                              <p className="font-weight-bold">Forks Count: {eachitem.forks_count}</p>
                              <p className="font-weight-bold">Description: {eachitem.description}</p>
                              <p className="font-weight-bold">Last Updated: {eachitem.updated_at}</p>
                            </div>
                          </div>
                      )
                    ))
                  }
                  <div className="d-flex justify-content-center mt-5">
                    <div class="d-flex justify-content-around">
                      <p style={{marginRight: '15px'}}>Page: {currentPage}</p>
                      <button className="btn btn-primary mb-5" onClick={()=>{this.goToNextPage()}}>Next</button>
                    </div>
                  </div>
                </div>
              )
            )
          }
        </div>
      </PrimaryLayout>
    );
  }
}
export default HomePage;
