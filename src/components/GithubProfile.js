import React, { Component } from 'react';

export default class HeaderComponent extends Component {
    constructor() {
        super();
    }

    render() {
        const { data } = this.props;
        return (
            <div className="profile-component">

                <div className="avatar-div">
                    <img src={data.avatar_url} alr="avatar" width="40px" height="auto"/>
                </div>
                <div className="profile-div">
                    <div>
                        {data.login}
                    </div>
                    <div>
                        Profile Url: {data.url}
                    </div>
                    <div>
                        Score: {data.score}
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        )
    }
}
