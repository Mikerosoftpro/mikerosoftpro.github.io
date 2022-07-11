import React from 'react'
import { Header } from '../components';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const Maps = () => {
    return (
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Page" title="Maps" />
          {/* <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        /> */}
        
  
      </div>
    )
  }
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyCY_d6EPlN2qH4xZJrAafinWfq9Ys_6jkY'
  })(Maps);