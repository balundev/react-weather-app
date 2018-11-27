import React from "react";

class NavbarSearch extends React.Component {

    handleWrite = (e)=>{
        if(typeof this.props.handleSearch === "function"){
                this.props.handleSearch(e.target.value)
        }
    };
    handleClick = ()=>{
        event.preventDefault();
        this.props.handleSubmit();
    };
    render() {
        return (
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={this.props.searchValue} onChange={this.handleWrite}/>
                    <button onClick={this.props.handleSubmit} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        );
    }
}

export default NavbarSearch

