import React from 'react';

const yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {

  handleClick() {
    return true;
  }

  render() {
    return (
      <div className="index" onClick={this.handleClick.bind(this)}>
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">
          Please edit <code>src/components/Main.js</code> to get started!
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
