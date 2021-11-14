import React, { Component } from 'react';

import Photos from '../ui/Photos';
import Description from '../ui/Description';
import OverviewComponent from './OverviewComponent';
import StepOneComponent from './StepOneComponent';
import StepTwoComponent from './StepTwoComponent';
import StepThreeComponent from './StepThreeComponent';
import StepoFiveComponent from './StepoFiveComponent';
import StepFourComponent from './StepFourComponent';
import SideBar from '../ui/SideBar';

import '../scss/MainComponent.scss'

interface MainComponentState {
    currentStep: number
}

export default class MainComponent extends Component<{}, MainComponentState> {

    constructor(props: {}) {
        super(props)
        this.state = {
            currentStep: 0,
        }
    }

    currentStepIncrement = () => {
        this.setState(this.state.currentStep > 4 ? {currentStep: this.state.currentStep - 5} : {currentStep: this.state.currentStep + 1})
    }

    currentStepSet = (selectedStep: number) => {
        this.setState({currentStep: selectedStep})
    }

    render() {
        return (
            <>
                <div className="MainComponent">
                    {this.state.currentStep === 0 &&
                        <div className="MainComponent__Wrapable">
                            <Photos />
                            <Description 
                                currentStep={this.state.currentStep}
                                onClick={this.currentStepIncrement}
                            />
                        </div>
                    }
                    {this.state.currentStep !== 0 &&
                        <div className="StepsContainer">
                            <SideBar
                                currentStep={this.state.currentStep}
                                onClick={this.currentStepSet}
                            />
                            <StepOneComponent
                                currentStep={this.state.currentStep}
                                onClick={this.currentStepIncrement} 
                            />
                            <StepTwoComponent
                                currentStep={this.state.currentStep} 
                                onClick={this.currentStepIncrement}
                            />
                            <StepThreeComponent 
                                currentStep={this.state.currentStep} 
                                onClick={this.currentStepIncrement}
                            />
                            <StepFourComponent
                                currentStep={this.state.currentStep} 
                                onClick={this.currentStepIncrement}
                            />
                            <StepoFiveComponent 
                                currentStep={this.state.currentStep} 
                                onClick={this.currentStepIncrement}
                            />
                        </div>
                    }
                </div>
                <OverviewComponent
                    currentStep={this.state.currentStep}
                />
            </>
        );
    }
}