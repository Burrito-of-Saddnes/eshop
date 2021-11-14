import React, { Component } from 'react';

import PhotoCarousel, { CarouselItem } from '../ui/PhotoCorousel';

import '../scss/Photos.scss'

export default class Photos extends Component {
    render() {
        return (
            <div className="Photos">
                <div className="PhotosContainer">
                    <PhotoCarousel>
                        <CarouselItem><div className="pic1"/></CarouselItem>
                        <CarouselItem><div className="pic2"/></CarouselItem>
                        <CarouselItem><div className="pic3"/></CarouselItem>
                    </PhotoCarousel>
                </div>
            </div>
        );
    }
}