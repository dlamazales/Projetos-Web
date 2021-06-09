let map;


function initMap() {
    const locationCenter = { lat: 51.50817119855377, lng: -0.11061807715508175}
    const locationMarker = { lat: 51.51242202846968, lng: -0.12691596945276407}



    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      styles:[
        {
            "featureType": "all",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "lightness": "-100"
                },
                {
                    "color": "#ffdac9"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffcab1"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffcab1"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 100
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "lightness": 700
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#92e1dd"
                }
            ]
        }
    ],
      center: locationCenter,
      disableDefaultUI: true,
      zoomControl: true,
    });
    new google.maps.Marker({
      position: locationMarker,
      map,
      title: "Hello World!",
    });
}






