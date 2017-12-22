var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="Ingredients" />, document.getElementById('income'));
ReactDOM.render(<ListManager title="ToDo"/>, document.getElementById('large-panels'));
ReactDOM.render(<ListManager title="Christmas" largePanelBg="#4c4c4c"/>, document.getElementById('ingredients'));
