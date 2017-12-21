var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/List.jsx');

ReactDOM.render(<ListManager />, document.getElementById('income'));
ReactDOM.render(<ListManager />, document.getElementById('large-panels'));
ReactDOM.render(<ListManager />, document.getElementById('ingredients'));
