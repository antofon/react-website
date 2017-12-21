var React = require('react');
var List = require('./component/List.jsx');

var ListManager = React.createClass({
  getInitialState: function(){
    return {items: [],
newItemText:''};
},
  render: function(){
      var largePanelBg = {
      backgroundColor: '#4c4c4c';
      }

      return (
        div style={largePanelBg} className="col-sm-9">  div className="panel panel-primary">


        }



      )
  }
})


<List items={this.state.items}/>
