const Home = () => {
  const githubUrl = "https://github.com/pablogarc/leaflet-map-react.git";

  return (
    <>
      <div className="p-3">
        <h2 className="font-bold">Documentation</h2>
        <p className="mt-3">
          This is a simple app that uses Leaflet to display a map and a GeoJSON
          object. The map is displayed using Leaflet, a JavaScript library for
          displaying maps. The GeoJSON object is displayed on the map as a
          vector layer.
        </p>
        <p className="mt-3">
          Github Repository: <br />
          <a
            href={githubUrl}
            className="text-blue-500"
            target="_blank"
            rel="noreferrer"
          >
            {githubUrl}
          </a>
        </p>
        <h3 className="mt-6 font-bold">Technologies Used</h3>
        <ul className="mt-3">
          <li>React</li>
          <li>Leaflet</li>
          <li>GeoJSON</li>
        </ul>
        <h3 className="mt-6 font-bold">Features</h3>
        <ul className="mt-3">
          <li>Display a map using Leaflet</li>
          <li>Display a GeoJSON object on the map as a vector layer</li>
        </ul>
        <h3 className="mt-6 font-bold">How to Use</h3>
        <p className="mt-3">
          To use the app, click on the "Map" link in the navigation bar. The map
          will be displayed with the GeoJSON object on it.
        </p>

        <h2 className="mt-6 font-bold mb-3">How to Run the App</h2>
        <p className="mb-3">
          To run the app, clone the repository and run the following commands:
        </p>
        <pre>
          <code>git clone url</code>
        </pre>
        <pre>
          <code>cd leaflet-map-react</code>
        </pre>
        <pre>
          <code>npm install</code>
        </pre>
        <pre>
          <code>npm run dev</code>
        </pre>
        <p className="mt-3 mb-6">
          The app will be running on http://localhost:5173
        </p>

        <h2 className="font-bold mb-1">
          For more information on Leaflet, visit:
        </h2>
        <a
          href="https://react-leaflet.js.org/?ref=tmsvr.com"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500"
        >
          Leaflet Documentation
        </a>
      </div>
    </>
  );
};

export default Home;
