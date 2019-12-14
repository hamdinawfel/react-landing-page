import React, { Component } from 'react';
import Carousel from './Carousel';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';
import Testimonials from './Testimonials';
import Footer from './Footer';

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
               <Carousel />
               <Services />
               <Projects />
               <Testimonials />
               <Contact />
               <Footer />
            </React.Fragment>
        )
    }
}

