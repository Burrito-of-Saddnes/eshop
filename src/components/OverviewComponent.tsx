import React, { Component } from 'react';

import FooterComponent from './FooterComponent';

import '../scss/OverviewComponent.scss'

interface OverviewComponentState{
    currentStep: number
}

export default class OverviewComponent extends Component<OverviewComponentState, {}> {
    render() {
        let { currentStep } = this.props
        return (
            <div className="OverviewComponent">
                <div className="OverviewComponent__Text">
                    {currentStep === 0 &&
                        <>
                        <h1 className="h1">Overview</h1><h2 className="h2">Who It's For</h2><h3 className="h3">Very Dry, Dry, Dry Combination Skin (Type 1, 2)</h3><h2 className="h2">What It Is</h2><h3 className="h3">Step 3 in our customized 3-Step Skincare System.{"\n"}Dermatologist-developed face moisturizer softens, smooths, improves. Leaves skin glowing.</h3><h2 className="h2">What It Does</h2><ul>
                            <li className="h3">
                                Silky lotion delivers 8-hour hydration.
                            </li>
                            <li className="h3">
                                Slips on easily, absorbs quickly.
                            </li>
                            <li className="h3">
                                Helps strengthen skin’s own moisture barrier so more moisture stays in.
                            </li>
                            <h3 className="h3">Skin that holds onto moisture has a youthful-looking glow.</h3>
                        </ul><h2 className="h2">Read more...</h2>
                        </>
                    }
                    <h1 className="h1">How does it work?</h1>
                </div>
                <div className="OverviewComponent__Balls">
                    <div className="OverviewComponent__Balls_ball1"><div className="OverviewComponent__Balls_ball1_pic"/></div>
                    <div className="OverviewComponent__Balls_arrow"/>
                    <div className="OverviewComponent__Balls_ball2"><div className="OverviewComponent__Balls_ball2_pic"/></div>
                    <div className="OverviewComponent__Balls_arrow"/>
                    <div className="OverviewComponent__Balls_ball3"><div className="OverviewComponent__Balls_ball3_pic"/></div>
                    <div className="OverviewComponent__Balls_arrow"/>
                    <div className="OverviewComponent__Balls_ball4"><div className="OverviewComponent__Balls_ball4_pic"/></div>
                    <div className="OverviewComponent__Balls_arrow"/>
                    <div className="OverviewComponent__Balls_ball5"><div className="OverviewComponent__Balls_ball5_pic"/></div>
                </div>
                <FooterComponent/>
            </div>
        );
    }
}