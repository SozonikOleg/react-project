import * as React from "react";
import ReactMapGL, { FlyToInterpolator } from "react-map-gl";

export default function Map() {
  const [viewport, setViewport] = React.useState({
    latitude: 37.78,
    longitude: -122.45,
    zoom: 14,
  });

  const goToNYC = () => {
    setViewport({
      ...viewport,
      longitude: -74.1,
      latitude: 40.7,
      zoom: 14,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
    });
  };

  return (
    <div>
      <ReactMapGL
        {...viewport}
        width="100vw"
        height="100vh"
        onViewportChange={setViewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken="pk.eyJ1Ijoib2xlZ3Nvem9uaWsiLCJhIjoiY2t3cXdoeGpnMHF4YTJ3cW82bDdzazNjNyJ9.zng5s4Ew0_YhB2JjQkwHHw"
      />
      <button onClick={goToNYC}>New York City</button>
    </div>
  );
}
