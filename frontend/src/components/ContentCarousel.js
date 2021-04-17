import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react"

const ContentCarousel = ({cities}) =>{
    
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };  

    return (
        <div>
            <h1 className=" carouselTitle">Popular MyTineraries</h1>
            <Carousel fade activeIndex={index} onSelect={handleSelect}>
                {cities.map((cityGroup, index) =>{                
                    return <Carousel.Item key= {index} className="carousel-item">
                                <div className=" carousel-slides" >
                                    {cityGroup.map(city => {
                                        const foto = require(`../assets/${city.img}`)
                                        return  <div className="carousel-img" key={city.id} style={{backgroundImage: `url('${foto.default}')`}}>
                                                    <h3 className="cityName">{city.name}</h3>
                                                </div>
                                    })}
                                </div>                
                            </Carousel.Item >
                })}          
            </Carousel>
        </div>
    );
}

export default ContentCarousel