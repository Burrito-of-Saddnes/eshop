import React, { Component } from 'react';

import SideBarBall from './SideBarBall';

import '../scss/SideBar.scss'

interface SideBarProps {
    currentStep: number
    onClick: (selectedStep: number) => void
}

export default class SideBar extends Component<SideBarProps, {}> {

    render() {
        let { currentStep, onClick } = this.props;
        const steps = [1,2, 3, 4, 5]    
        return (
            <div className="SideBar">
                {steps.map(step => (
                    <SideBarBall
                        currentStep={currentStep}
                        step={step}
                        onClick={onClick}
                    />
                ))}
            </div>
        );
    }
}