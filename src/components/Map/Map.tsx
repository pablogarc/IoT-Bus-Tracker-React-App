import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  Popup,
  ScaleControl,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

// Crear una nueva instancia de Icono personalizada
const customIcon = new L.Icon({
  iconRetinaUrl: '/assets/marker-icon-2x.png',
  iconUrl: '/assets/marker-icon.png',
  shadowUrl: '/assets/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

import { colon, routeFuentesAndMilenio, scheifler } from "../../utils/geojson";

type RouteOption = Record<string, any>;
type BusData = { coords: [number, number]; passengers: number };

const MapComponent = () => {
  const [selectedRoute, setSelectedRoute] = useState<string>("none");
  const [geoData, setGeoData] = useState<any>(null);
  const [busData, setBusData] = useState<BusData[]>([]);
  const [center, setCenter] = useState<[number, number]>([20.609969640227987, -103.4146309267151]);

  const routeOptions: RouteOption = {
    "Fuentes-Milenio": routeFuentesAndMilenio,
    "scheifler": scheifler,
    "colon": colon,
  };

  const routeBuses: Record<string, BusData[]> = {
    "Fuentes-Milenio": [
      { coords: [20.6105, -103.4128], passengers: 8 },
      { coords: [20.6110, -103.4155], passengers: 15 },
    ],
    "scheifler": [
      { coords: [20.6132, -103.4151], passengers: 22 },
    ],
    "colon": [
      { coords: [20.6095, -103.4142], passengers: 10 },
    ],
  };

  const handleRouteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGeoData(null);
    setBusData([]);
    setSelectedRoute(e.target.value);
  };

  useEffect(() => {
    if (selectedRoute !== "none") {
      setTimeout(() => {
        setGeoData(routeOptions[selectedRoute]);
        setBusData(routeBuses[selectedRoute]);
        setCenter(routeBuses[selectedRoute][0].coords);
      }, 100);
    }
  }, [selectedRoute]);

  const getPassengerEmoji = (count: number) => {
    if (count <= 10) return "😊 Bien";
    if (count <= 20) return "😐 Medio";
    return "😡 Lleno";
  };

  const SetViewOnRouteChange = () => {
    const map = useMap();
    useEffect(() => {
      map.setView(center, 15);
    }, [center, map]);
    return null;
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center mb-2 text-green-500">
        Mapa de Rutas de Transporte
      </h2>
      <p className="text-center text-gray-300 mb-6">
        Selecciona una ruta en el menú para visualizar su recorrido en el mapa y la información relevante.
      </p>

      <div className="flex justify-center items-center p-4">
        <label>
          Selecciona una Ruta:
          <select
            value={selectedRoute}
            onChange={handleRouteChange}
            className="ml-2 p-2 border rounded"
          >
            <option value="none">Selecciona...</option>
            <option value="Fuentes-Milenio">Fuentes-Milenio</option>
            <option value="scheifler">Scheifler</option>
            <option value="colon">Colon</option>
          </select>
        </label>
      </div>

      {geoData && geoData.properties && (
        <div className="p-2 bg-gray-800 text-gray-200 rounded text-sm mb-4">
          <p><strong>Ruta:</strong> {geoData.properties.NAME}</p>
          <p><strong>Descripción:</strong> {geoData.properties.DESCRIPTION}</p>
        </div>
      )}

      <MapContainer center={center} zoom={15} scrollWheelZoom={true} style={{ height: "75vh", width: "100wh" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <SetViewOnRouteChange />

        {geoData && (
          <GeoJSON key={selectedRoute} data={geoData} style={() => ({ color: "#ff7800", weight: 5, fillColor: "#ff7800", fillOpacity: 0.2 })} />
        )}

        {busData.map((bus, index) => (
          <Marker key={index} position={bus.coords} icon={customIcon}>
            <Popup>
              <p><strong>Ocupación:</strong> {getPassengerEmoji(bus.passengers)}</p>
              <p><strong>Estado:</strong> Ruta en servicio</p>
            </Popup>
          </Marker>
        ))}

        <ScaleControl imperial={false} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;