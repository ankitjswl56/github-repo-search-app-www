import React from 'react';

class NavBarComponents extends React.PureComponent{
  render(){
    return(
      <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#Navbar">Github Repo Search</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offset-lg-9 offset-md-9 collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="navbar-brand" href="/">Home </a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand" href="/detailspage">Details Page</a>
              </li>
            </ul>
          </div>
        </div>
        </nav>
      </div>
    );
  }
}
export default NavBarComponents;
