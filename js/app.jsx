import React from "react";
import ReactDOM from "react-dom";
import '../scss/main.scss';
import Main from "./main.jsx";

class App extends React.Component {
    render() {
        return (
                <Main/>
        );
    }
}
document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});