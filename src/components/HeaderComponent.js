import React, { Component } from 'react';

export default class HeaderComponent extends Component {
    constructor() {
        super();
        this.state = {
            searchString: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleKeyUp(event) {
        if (event.keyCode === 13) {
            this.props.handleSearch();
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;

        this.setState(() => ({[target.name]: value}));
    }

    render() {
        return (
            <div className="header-component">
                <div>
                    <input 
                        type="text" 
                        name="searchString" 
                        placeholder="" 
                        value={this.state.searchString}
                        onChange={this.handleChange} 
                        onKeyUp={this.handleKeyUp}
                    />
                </div>
            </div>
        )
    }
}
