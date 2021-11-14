import React, { Component } from 'react';

import '../scss/SideBar.scss'

interface SideBarBallProps {
    currentStep: number
    step: number
    onClick: (selectedStep: number) => void
}
export default class SideBarBall extends Component<SideBarBallProps, {}> {
    
    render() {
        let { currentStep, step, onClick } = this.props
        return (
            <div 
                onClick={e => {
                    onClick && onClick(step)
                }}
                className={`SideBar__ball_border ${step === currentStep ? "SideBar__ball_border_active" : ""}`}
            >
                <div className={`SideBar__ball ${step <= currentStep ? "SideBar__ball_compleated" : ""}`}>{step}</div>
            </div>
        );
    }
}
