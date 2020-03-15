import React from 'react';

class BadgeForm extends React.Component {
  handleChange = e =>{
    console.log(e.target.value)
  };

  handleClick = e => {
    console.log('click!!')
  };

  render(){
    return(
      <div>
        <h1> New attendant</h1>
        <form>
          <div className="form-group">
            <label> First Name</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="firstname"/>
          </div>
          <button
            onClick={this.handleClick}
            className="btn btn-primary"> Save!
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
