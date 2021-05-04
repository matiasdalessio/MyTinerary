import React, { useState } from "react";
import { connect } from "react-redux";
import swal from 'sweetalert'
import itinerariesActions from "../redux/actions/itinerariesActions";


const Itineraries = ({userLogged, itinerary, loadItineraries, props, addOrRemoveLike}) => {

  const heartFilled= "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
  const heartEmpty = "M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"

  var userFounded = userLogged && itinerary.usersLiked.find(user => user.userId === userLogged.id)

  const [toggleItineraries, setToggleItineraries] = useState({button: false, text: "View More", class:"hidden",})
  
  const showMoreShowLess = ((e) => {
    setToggleItineraries(toggleItineraries.button 
      ? {button: false, text: "View More", class:"hidden"}
      : {button: true, text: "View Less", class:"showMore"}
    )}
  )
  
  const likeToggle = (async () => {
    const itineraryId = itinerary._id
    if (userLogged) {
      var infoAPasar= {userInfo: {userName: userLogged.firstName, img: userLogged.img, userId:userLogged.id, userFounded}, itineraryId, props}
      await addOrRemoveLike(infoAPasar)
    } else{
      swal("You must be logged to like an itinerary", "", "error")
    }    
  })

  return (
      <div className="itineraryBanners">
        <div className="animate__animated animate__fadeIn itineraryBanner" style={{backgroundImage: `url('/img/itineraryBackground.jpg')`}}> 
                <h1 className="itineraryTitle">{itinerary.itineraryName}</h1> 
                <div className="authorDiv">
                    <div className="avatarAuthor" style={{backgroundImage: `url(${itinerary.author.imageURL}`}}></div>
                    <h3>{itinerary.author.userName}</h3>
                </div>
                <div className="itineraryObservations">
                  <p className="likes">Likes: <svg onClick={()=> likeToggle()} aria-hidden="true" focusable="true" data-prefix="far" data-icon="heart" className={userFounded  ? "filled" : "empty"} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path fill="currentColor" d={userFounded  ? heartFilled : heartEmpty}></path></svg> {itinerary.usersLiked.length}</p>
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
      itineraries: state.cityReducer.itineraries,
      userLogged: state.loginReducer.userLogged
  }
}
const mapDispatchToProps = {
  loadItineraries: itinerariesActions.loadItineraries,
  addOrRemoveLike:itinerariesActions.addOrRemoveLike,
}


export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)

