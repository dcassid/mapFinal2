import React, { useState } from 'react';
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import * as ufoData from "./data/Geo.json";
import "./main.js";
import MainB from './main.js';




function App() {


  const [viewport, setViewport] = useState({
    latitude: 34.0295,
    longitude: -94.7391,
    width: '100vw',
    height: '100vh',
    zoom: 10
  })

  const [selectedUFO, setSelectedUFO] = useState(null);


  return ( 
     <div>
       <MainB/>

       <ReactMapGL 
       {...viewport} 
       mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
       mapStyle = "mapbox://styles/dcassidy13/ckfw1rjep1yyn19nvihz6leyn"
       onViewportChange = {viewport => {
             setViewport(viewport);
           }}
       >
           {ufoData.features.map((ufo) => (
             <Marker key={ufo.properties.location} latitude={ufo.geometry.coordinates[0]} longitude={ufo.geometry.coordinates[1]}>
              <button className="marker-btn" onClick={(e) => {
              e.preventDefault();
              setSelectedUFO(ufo);
              }}>
                <img src="/img/alienIcon.jpg" alt="UFO Sighting" />
                </button>
             </Marker>
           ))}

           {selectedUFO ? (
             <Popup
              latitude={selectedUFO.geometry.coordinates[0]} 
              longitude={selectedUFO.geometry.coordinates[1]}
              onClose={() => {
               setSelectedUFO(null);
             }}>
               <div className="ppup">
                 <h2>{selectedUFO.properties.location}</h2>
                 <p>{selectedUFO.properties.description}</p>
               </div>
             </Popup>
           ) : null}

       </ReactMapGL> 

       </div>
  );
           }

          export default App;