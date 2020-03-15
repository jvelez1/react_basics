import React from 'react';
import confLogo  from '../images/badge-header.svg';
import "./styles/Badge.css";

class Badge extends React.Component {
  render(){


    return(
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt= "logo"></img>
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" alt="avatar" src={this.props.avatar_url}/>
          <h1> {this.props.firstName} <br/> {this.props.lastName} </h1>
        </div>

        <div className="Badge__section-info">
          <h4>{this.props.jobTitle}</h4>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">
          #Learning
        </div>
      </div>
    )
  }
}

export default Badge;