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
        <div className="">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3>{this.props.title}</h3>
            </div>

            <div className="row panel-body">

            </div>

            <div style={largePanelBg} className="row panel-footer">
              <div className="col-sm-4">
                <p>
                  15080
                </p>
                <small>Shot Views</small>
              </div>

              <div className="col-sm-4">
                <p>
                  12000
                </p>
                <small>Likes</small>
              </div>

              <div class="col-sm-4">
                <p>
                  5100
                </p>
                <small>Comments</small>
              </div>

            </div>
            <List items={this.state.items}/>
          </div>
        </div>
    );
  }
});

module.exports = ListManager;
