import React, { Component } from 'react';
import { Container,Image,Row,Col,Button } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HomeScreen2 from '../HomeScreen/HomeScreen2'
class HomeSection2 extends Component {

     
    render() {
        
      const settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        autoplaySpeed:1800,
        slidesToShow: 6,
        slidesToScroll: 1, 
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1
            }
          },
         {
           breakpoint: 800,
           settings: {
             slidesToShow: 5,
             slidesToScroll: 1
           }
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 5,
             slidesToScroll: 1
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 4,
             slidesToScroll: 1
           }
         }
       ]
      };
        return (
            <>
            
            <section className="home-section-2 ">
                <Container>
                 
                    
                    <HomeScreen2/>
                    
                  
                  </Container>
              </section>

            </>
        );
    }
}

export default HomeSection2;
