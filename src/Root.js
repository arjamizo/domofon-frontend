import React from 'react';
import Title from './Title.js';
import NameInput from './NameInput.js';
import HomeGrid from './HomeGrid.js';


const Root = React.createClass({
  getInitialState: function () {
    return {name: 'world', 
    options: [
        {title: "Pan Kanapka", url: "http://blstream.github.io/domofon-api/PanKanapka"},
        {title: "Pani Kanapka", url: "http://blstream.github.io/domofon-api/PaniKanapka"}]
    };
  },
  setName: function (name) {
    this.setState({name});
  },    
  render: function () {
    // <HomeGrid options={this.props.options.map((e,i) => <Action title={e.title} onclick={console.log.bind(console, e.url)}/>)}></HomeGrid>
    return (
      <div>
        <Title name={this.state.name} />
        <NameInput initialName={this.state.name} onNameChanged={this.setName} />
        <HomeGrid options="list of possible actions"></HomeGrid>
      </div>
    );
  }
});

export default Root;
