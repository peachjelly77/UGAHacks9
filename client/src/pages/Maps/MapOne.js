import React, { Component } from 'react';

class MapOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      address: ''
    };
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    // Load the Google Maps API script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAewmXfvwrHAMVv3YP3v4NNJJX9Hfjsek0&libraries=places`;
    script.async = true;
    script.onload = this.initMap;
    document.body.appendChild(script);
  }

  initMap = () => {
    // Create a map instance
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 33.9568899, lng: -83.3767291 },
      zoom: 15
    });

    // Set map to state
    this.setState({ map });

    // Initialize PlacesService
    const placesService = new window.google.maps.places.PlacesService(map);

    // Perform a Places Nearby Search for parks only
    placesService.nearbySearch(
      {
        location: { lat: 33.9568899, lng: -83.3767291 },
        radius: 4000,
        type: 'park'
      },
      (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          for (let i = 0; i < results.length; i++) {
            this.createMarker(results[i]);
          }
        }
      }
    );
  };

  createMarker = place => {
    const marker = new window.google.maps.Marker({
      map: this.state.map,
      position: place.geometry.location
    });

    // Add click listener to marker to show park information
    marker.addListener('click', () => {
      const infowindow = new window.google.maps.InfoWindow({
        content: `<div><strong>${place.name}</strong><br>${place.vicinity}</div>`
      });
      infowindow.open(this.state.map, marker);
    });
  };

  handleSearch = () => {
    const geocoder = new window.google.maps.Geocoder();
    const address = this.inputRef.current.value;

    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const { location } = results[0].geometry;
        this.state.map.setCenter(location);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  };

  render() {
    return (
      <div>
        <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 999 }}>
          <input
            ref={this.inputRef}
            type="text"
            placeholder="Enter Address"
            style={{
              padding: '2px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              marginRight: '5px',
              width: '200px'
            }}
          />
          <button
            onClick={this.handleSearch}
            style={{
              padding: '10px',
              borderRadius: '5px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Search
          </button>
        </div>
        <div id="map" style={{ position: 'absolute', bottom: '20px',top:'20px', width: '100%', height: 'calc(100% - 50px)', borderRadius: '30px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}></div>
      </div>
    );
  }
}

export default MapOne;
