import React from "react";
import NavbarSearch from "./navbarSearch.jsx"

class Navbar extends React.Component{
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-dark">
                    <a className="navbar-brand text-white">Cool<span className="text-success">Weather</span></a>
                    <NavbarSearch handleSearch={this.props.handleSearch} searchValue={this.props.searchValue} handleSubmit={this.props.handleSubmit}/>
                </nav>
            </div>
        );
    }
}

export default Navbar