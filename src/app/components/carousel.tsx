"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from './carouselCard';

function Carousel() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5500,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1248,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        customPaging: () => (
            <div></div>
        )
    };

    return (
        <div className="slider-container w-full">
            <Slider {...settings}>
                <div className="!flex !justify-center">
                    <CarouselCard
                        image='/assets/Cliente1.png'
                        alt='Imagem do cachorro de um cliente do Rodrigo'
                        text='“Lorem ipsum dolor sit amet, consectetur adipiscing elit. “'
                    />
                </div>
                <div className="!flex !justify-center">
                    <CarouselCard
                        image='/assets/Cliente2.png'
                        alt='Imagem do cachorro de um cliente do Rodrigo'
                        text='“Lorem ipsum dolor sit amet, consectetur adipiscing elit. “'
                    />
                </div>
                <div className="!flex !justify-center">
                    <CarouselCard
                        image='/assets/Cliente3.png'
                        alt='Imagem do cachorro de um cliente do Rodrigo'
                        text='“Lorem ipsum dolor sit amet, consectetur adipiscing elit. “'
                    />
                </div>
            </Slider>
        </div>
    );
}

export default Carousel;
