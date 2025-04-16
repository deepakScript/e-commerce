
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { MoveRight } from "lucide-react"

const Banner = () => {
    const products = [
        {
            id:1,
            title: "Best Furniture Collection for your interior",
            subTitle: "Welcome to chairs",
            image: "/src/assets/Banner/banner_image.png"
        },
        {
            id:1,
            title: "Best Furniture Collection for your interior",
            subTitle: "Welcome to chairs",
            image: "/src/assets/Banner/banner_image.png"
        },
        {
            id:1,
            title: "Best Furniture Collection for your interior",
            subTitle: "Welcome to chairs",
            image: "/src/assets/Banner/banner_image.png"
        },
        {
            id:1,
            title: "Best Furniture Collection for your interior",
            subTitle: "Welcome to chairs",
            image: "/src/assets/Banner/banner_image.png"
        }
    ]

    function SimpleSlider() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    };
    return (
        <div className='lg:container '>
            <div className="slider-container">
                <Slider {...settings}>
                    {
                        products?.map((product) =>{
                            <div key={product?.id} className="banner_slide_item">
                                {/*banner text */}
                                <div className="banner_text">
                                    <p>{product?.subTitle}</p>
                                    <h3>{product?.title}</h3>
                                    <button>shop now <MoveRight /> </button>

                                </div>

                                {/*banner image */}
                                <div className="banner_image">
                                    <img src={product?.image} alt={product?.title} />
                                </div>
                            </div>
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Banner
