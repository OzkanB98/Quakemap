import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from "react-simple-maps";
import { getEarthquakes } from "../api";
import { Earthquakes, Feature } from "../types/Earthquake";

type MapChartProps = {
    onClick: (clicked: Feature) => void
}

const MapChart = ({onClick}: MapChartProps)  => {
    const[earthquakes, setEarthquakes] = useState<Earthquakes>()

    useEffect(() => {
        const earthquakes = async () => {
            const data = await getEarthquakes();
            setEarthquakes(data);
        }

        earthquakes()
    }, [])

    const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json";

  return (
    <div>
      <ComposableMap projection="geoMercator">
        <ZoomableGroup center={[-110, 35]} zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }: any) =>
              geographies.map((geo: { rsmKey: React.Key | null | undefined; }) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
          {earthquakes?.features.map((earthquake) => (
            <Marker key={earthquake.id} coordinates={[earthquake.geometry.coordinates[0], earthquake.geometry.coordinates[1]]} onClick={() => onClick(earthquake)}>
                <circle r={2} fill="#FF5533" />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapChart;

