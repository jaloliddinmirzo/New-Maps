let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });

  const marker = new google.maps.Marker({
    position:{ lat: -34.397, lng: 150.644 },
    map,
    title: "Hello world"
    
  })

  const info = new google.maps.InfoWindow({
    content:"<h1>Salom dunyo</h1>",
  })

  marker.addListener("click" ,()=>{
    info.open({
        anchor:marker,
        map,
    })
  })
}

window.initMap = initMap;