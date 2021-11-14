import React, { Component } from 'react';

import '../scss/StepOneComponent.scss'

interface StepOneComponentProps {
    currentStep: number
    onClick: () => void
}

export default class StepOneComponent extends Component<StepOneComponentProps, {}> {
    render() {
        let { currentStep, onClick } = this.props;
        if (currentStep !== 1) {
            return null
        } 
        return (
            <div className="StepOneComponent">
                <div className="StepOneComponent__Text">
                    <h2 className="h2">Step 1</h2>
                    <h1 className="h1">Lorem ipsum dolorsit amet</h1>
                    <h3 className="h3">Aliquam urna arcu, scelerisque vel viverra sed, pellentesque sit amet metus. Curabitur at luctus massa. Vestibulum pretium sem tortor, vitae mattis odio accumsan vitae. Fusce id luctus erat:</h3>
                    <h3 className="h3">1.  Mauris rutrum interdum condimentum.</h3>
                    <h3 className="h3">2.  Donec commodo quis arcu eget pretium.</h3>
                    <div 
                        onClick={e => {
                            onClick && onClick()
                        }}
                        className="StepOneComponent__NextStepButton"
                    >
                        Agree and continue
                    </div>
                </div>
                <div className="StepOneComponent__Picture"/>
            </div>
        );
    }
}