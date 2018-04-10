import React, { Component } from 'react';
import GithubProfile from './GithubProfile'

export default class HeaderComponent extends Component {
    constructor() {
        super();
    }

    render() {
        const { list } = this.props;
        return (
            <div className="footer-component">
                {list.map((item, index) => {
                    return (<GithubProfile data={item} key={index}/>)
                })}
            </div>
        )
    }
}
