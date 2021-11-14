import React, { Component } from 'react';

import AmazonPrimeButton from './AmazonPrimeButton';

import '../scss/Description.scss'

interface DescriptionProps {
    currentStep: number
    onClick: () => void
}

export default class Description extends Component<DescriptionProps, {}> {
    render() {
        let { onClick } = this.props;
        return (
            <div className="Description">
                <div className="DescriptionReview">
                    <h1 className="DescriptionReview__BestSeller">Best seller</h1>
                    <div className="DescriptionReview__Stars"/>
                    <div className="DescriptionReview__Stars"/>
                    <div className="DescriptionReview__Stars"/>
                    <div className="DescriptionReview__Stars"/>
                    <h3 className="DescriptionReview__Reviews">(1731 reviews)</h3>
                </div>
                <div className="DescriptionProductName">
                    <h1 className="DescriptionReview_Acne">Acne Treatment Cystic Acne heals, repairs {"&"} renews</h1>
                </div>
                <div className="DescriptionProductInfo">
                    <h3 className="DescriptionReview_Description">Description:</h3>
                    <h2 className="DescriptionReview_Addictively">Addictively refreshing gel-cream leaves skin plump, dewy, glowing.</h2>
                    <div className="DescriptionProductInfo__ProductLeft">ITEMS LEFT: 12</div>
                </div>
                <div className="Separator"></div>
                <div className="DescriptionProductPrice">
                    <div className="DescriptionProductPrice__Price">
                        <h3 className="DescriptionReview_NoDisc">US$25.89</h3>
                        <h1 className="DescriptionReview_Discs">$0.00 FREE</h1>
                    </div>
                    <div 
                        onClick={e => {
                            onClick && onClick()
                        }}
                        className="DescriptionProductPrice_Select"
                    >
                        SELECT
                    </div>
                </div>
                <AmazonPrimeButton/>
            </div>
        );
    }
}