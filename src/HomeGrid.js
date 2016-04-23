import React from 'react';


const HomeGrid = React.createClass({
  render: function () {
      return <div>children={this.props.children} options={this.props.options}</div>
  }
});

export default HomeGrid;