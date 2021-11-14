import React, { Component } from 'react';

import '../scss/HeaderComponent.scss'

export default class HeaderComponent extends Component {
    render() {
        return (
            <div className="HeaderComponent">
                <div className="HeaderComponent__Text">
                    <h1 className="h1">
                        Autumn Giveaways for FREE
                    </h1>
                    <h3 className="h3">
                        Participate in Autumn Giveaway and treat yourself
                    </h3>
                    <h3 className="h3">
                        to nice and refreshing cosmetics for free
                    </h3>
                </div>                    
                <div className="HeaderComponent__Pic"/>
            </div>
        );
    }
}