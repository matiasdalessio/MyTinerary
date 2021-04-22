import React, { useState } from "react";


export default function Itineraries() {

  const [toggleItineraries, setToggleItineraries] = useState({
    button: false,
    text: "View All",
    class:"btnCta hidden"
  })

  const prueba = [
    {
      _id: 1,
      itineraryName:	"Caminata por Fuerte Apache",
      author:	{userName: "Carlitos Tevez", image: ""},
      price: 5,
      duration:	5,
      like:	0,
      hashtags:	["#hastags ", "#hastags ", "#hastags ", "#hastags ", "#hastags "],
      cityID:	"607a2f1a745e5322941e0015",
      comments:	[],
      usersLiked:	[0]

    }
  ]

  const showMoreShowLess = ((e) => {
    setToggleItineraries(toggleItineraries.button 
      ? {button: false, text: "View All", class:"hidden"}
      : {button: true, text: "View Less", class:"show"}
    )}
  )

  return ( 

      <div className="cityBanners">
        <div className="animate__animated animate__fadeIn itineraryBanner" style={{backgroundImage: `url('/img/itineraryBackground.jpg')`}}> 
                <h1 className="">{prueba[0].itineraryName}</h1> 
                <div className="authorDiv">
                    <div className="avatarAuthor" style={{backgroundColor: "lightblue"}}></div>
                    <h3>{prueba[0].author.userName}</h3>
                </div>
                <div className="itineraryObservations">
                  <p className="">❤{prueba[0].like}</p>
                  <p className="">🕒{prueba[0].duration}</p>
                  <p className="">💰{prueba[0].price}</p>
                </div>
                <p className="">{prueba[0].hashtags}</p>
                <div className={toggleItineraries.class}> <div className="animate__animated animate__fadeIn  errorBanner" style={{backgroundImage: `url('/img/mapa.jpg')`}}> 
                        <h1 className="cityName">PAGE UNDER CONSTRUCTION
                            <p>Please wait just another week</p> 
                        </h1>
                    </div>
                </div>                
            <button className= "btnCta" onClick={(e) => showMoreShowLess(e.target.textContent)}>{toggleItineraries.text}</button>
          </div>
      </div>
        
  );
}


