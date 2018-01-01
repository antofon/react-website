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
        <div className="container topRowPanels">
          <div className="">
            <div className="">
              <h3>{this.props.title}</h3>
            </div>

            <div style={largePanelBg} className="row panel-footer">
              <div className="col s4">
                <p>
                  15080
                </p>
                <small>Shot Views</small>
              </div>

              <div className="col s4">
                <p>
                  1200
                </p>
                <small>Likes</small>
              </div>

              <div class="col s4">
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
