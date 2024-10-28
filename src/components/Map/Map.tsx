import { useState } from "react";
import Table from "./Table";

import {
  MapContainer,
  TileLayer,
  GeoJSON,
  useMap,
  ScaleControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { colon, routeFuentesAndMilenio, scheifler } from "../../utils/geojson";

const MapComponent = () => {
  const [option, setOption] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  const center: [number, number] = [20.609969640227987, -103.4146309267151];

  const style = {
    color: "#ff7800",
    weight: 5,
    fillColor: "#ff7800",
    fillOpacity: 0.2,
  };

  function SetOptionAndData({ option }: { option: any }) {
    setOption(option);

    if (option === "Fuentes-Milenio") {
      setData(routeFuentesAndMilenio.features[0]);
    }

    if (option === "scheifler") {
      setData(scheifler.features[0]);
    }

    if (option === "colon") {
      setData(colon.features[0]);
    }

    return null;
  }

  function SetViewOnClick() {
    const map = useMap();

    const coords: [number, number] = [20.609969640227987, -103.4146309267151];
    map.setView(coords, 15);

    return null;
  }

  return (
    <>
      <div className="p-4">
        <div className="flex justify-center items-center p-4">
          <label>
            Pick a map:
            <select
              defaultValue="none"
              onChange={(e) => SetOptionAndData({ option: e.target.value })}
            >
              <option value="none">Select...</option>
              <option value="Fuentes-Milenio">Fuentes-Milenio</option>
              <option value="scheifler">scheifler</option>
              <option value="colon">colon</option>
            </select>
          </label>
        </div>

        <MapContainer
          center={center}
          zoom={15}
          scrollWheelZoom={true}
          style={{ height: "75vh", width: "100wh" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {option === "Fuentes-Milenio" && (
            <GeoJSON
              data={routeFuentesAndMilenio as any}
              style={() => style}
            ></GeoJSON>
          )}

          {option === "scheifler" && (
            <GeoJSON data={scheifler as any} style={() => style}></GeoJSON>
          )}

          {option === "colon" && (
            <GeoJSON data={colon as any} style={() => style}></GeoJSON>
          )}

          <ScaleControl imperial={false} />
          <SetViewOnClick />
        </MapContainer>

        {<Table data={data} />}
      </div>
    </>
  );
};

export default MapComponent;
