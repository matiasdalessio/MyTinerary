import React, { useState } from "react";
import { connect } from "react-redux";


const Itineraries = ({itinerary}) => {

  const [toggleItineraries, setToggleItineraries] = useState({
    button: false,
    text: "View More",
    class:"btnCta hidden"
  })
  
  const showMoreShowLess = ((e) => {
    setToggleItineraries(toggleItineraries.button 
      ? {button: false, text: "View More", class:"hidden"}
      : {button: true, text: "View Less", class:"showMore"}
    )}
  )

  return (
      <div className="itineraryBanners">
        <div className="animate__animated animate__fadeIn itineraryBanner" style={{backgroundImage: `url('/img/itineraryBackground.jpg')`}}> 
                <h1 className="itineraryTitle">{itinerary.itineraryName}</h1> 
                <div className="authorDiv">
                    <div className="avatarAuthor" style={{backgroundImage: `url(${itinerary.author.imageURL}`}}></div>
                    <h3>{itinerary.author.userName}</h3>
                </div>
                <div className="itineraryObservations">
                  <p className="likes">Likes: ❤ {itinerary.like}</p>
                  <p className="duration">Duration:{"🕒".repeat(itinerary.duration)}</p>
                  <p className="price">Price: {"💵".repeat(itinerary.price)}</p>
                </div>
                <p className="hashtags">
                    {itinerary.hashtags.map(hashtag =>{
                    return hashtag + " "
                    })}
                </p>
                <div className={toggleItineraries.class}> <div className="errorBanner" style={{backgroundImage: `url('/img/mapa.jpg')`}}> 
                        <h1 className="cityName">PAGE UNDER CONSTRUCTION
                            <p>Please wait just another week</p> 
                        </h1>
                    </div>
                </div>                
            <button className= "btnReadMore" onClick={(e) => showMoreShowLess(e.target.textContent)}>{toggleItineraries.text}</button>
          </div>
      </div>
  );
}

const mapStateToProps = state => {
  return {
      itineraries: state.cityReducer.itineraries
  }
}


export default connect(mapStateToProps)(Itineraries)

