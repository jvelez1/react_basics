import React from 'react';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge'
import header from '../images/badge-header.svg';
import BadgeForm from '../components/BadgeForm'
import './styles/BadgeNew.css';

class BadgeNew extends React.Component {
  render(){
    return(
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo" ></img>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                firstName="Josue"
                lastName="Velez"
                jobTitle="Software Developer"
                twitter="josuevelez"
                avatar_url="https://avatars0.githubusercontent.com/u/13418344?s=460&v=4"/>
            </div>
            <div className="col-6">
              <BadgeForm/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew;