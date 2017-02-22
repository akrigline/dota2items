import React, { PropTypes } from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        {this.props.children}
        <footer>Created by Andrew Krigline</footer>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
