var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
  getInitialState: function(){
    return {items: [],
newItemText:''};
},
  render: function(){
      var largePanelBg = {

      }

      if(this.props.largePanelBg){
        largePanelBg.background = this.props.largePanelBg;
      }
      return (
        <div style={largePanelBg} className="col-sm-9">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3>{this.props.title}</h3>
            </div>

            <div className="row panel-body">
            </div>
            <List items={this.state.items}/>
          </div>
        </div>
    );
  }
});

module.exports = ListManager;
