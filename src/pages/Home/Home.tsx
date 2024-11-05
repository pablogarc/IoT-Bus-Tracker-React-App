const Home = () => {
  const githubUrl = "https://github.com/pablogarc/IoT-Bus-Tracker-React-App";

  return (
    <div className="p-6 text-white bg-dark min-h-screen">
      <div className="p-8 bg-gray-800 rounded-lg shadow-lg text-lg">
        <h2 className="font-bold text-4xl mb-6 text-green-400">Documentación de Movi+</h2>
        <p className="mb-6 text-xl text-gray-200">
          Movi+ es una plataforma diseñada como un esqueleto de una aplicación web de movilidad urbana inteligente.
          La aplicación permite a los usuarios interactuar con funcionalidades orientadas a mejorar la seguridad y la
          eficiencia del transporte en la ciudad. Actualmente, Movi+ se desarrolla sin un backend, lo cual facilita su
          estructura básica y permite integrar un servidor en el futuro.
        </p>

        <h3 className="font-bold text-2xl mb-4 text-yellow-300">Repositorio de Github:</h3>
        <a
          href={githubUrl}
          className="text-blue-500 text-lg underline mb-6 inline-block"
          target="_blank"
          rel="noreferrer"
        >
          {githubUrl}
        </a>

        <h3 className="mt-8 font-bold text-2xl mb-4 text-yellow-300">Tecnologías Utilizadas</h3>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>React</li>
          <li>Leaflet</li>
          <li>GeoJSON</li>
          <li>CSS y Tailwind CSS para diseño visual</li>
        </ul>

        <h3 className="mt-8 font-bold text-2xl mb-4 text-yellow-300">Características y Funcionalidades</h3>
        <ul className="space-y-4 mb-6">
          <li>
            <span className="text-yellow-300 font-semibold">🗺️ Mapa interactivo:</span> Usa Leaflet para mostrar mapas interactivos y visualizar objetos GeoJSON como capas vectoriales.
          </li>
          <li>
            <span className="text-yellow-300 font-semibold">🔒 Función de Seguridad:</span> Incluye opciones para reportar incidentes, revisar reportes recientes y pedir ayuda, con un diseño intuitivo y notificaciones de éxito.
          </li>
          <li>
            <span className="text-yellow-300 font-semibold">💸 Sistema de Cashback:</span> Ofrece recompensas a los usuarios por acciones relacionadas con el uso de transporte y la interacción con la plataforma.
          </li>
          <li>
            <span className="text-yellow-300 font-semibold">👤 Login y Registro de Usuarios:</span> Sección de autenticación de usuarios, que permite iniciar sesión y crear cuentas.
          </li>
          <li>
            <span className="text-yellow-300 font-semibold">💳 Recarga de Tarjeta:</span> Función de recarga para tarjetas de transporte, simulando la posibilidad de añadir saldo.
          </li>
          <li>
            <span className="text-yellow-300 font-semibold">📊 Dashboard de Reportes:</span> Muestra un listado de reportes recientes de seguridad y solicitudes de ayuda, con clasificación y acciones específicas según el tipo de reporte.
          </li>
        </ul>

        <h3 className="mt-8 font-bold text-2xl mb-4 text-yellow-300">Cómo Usar la Aplicación</h3>
        <p className="mb-6">
          Para utilizar la aplicación, navega a través de la barra de navegación en la parte superior de la página.
          Puedes acceder al mapa, al sistema de seguridad, al sistema de recompensas (cashback), y a la sección de recarga de tarjetas.
        </p>

        <h2 className="mt-8 font-bold text-2xl mb-4 text-yellow-300">Cómo Ejecutar la Aplicación</h2>
        <p className="mb-4">
          Para ejecutar la aplicación, clona el repositorio y ejecuta los siguientes comandos:
        </p>
        <div className="bg-gray-900 rounded-lg p-4 text-lg mb-6">
          <pre className="text-green-400">
            <code>git clone {githubUrl}</code>
          </pre>
          <pre className="text-green-400">
            <code>cd IoT-Bus-Tracker-React-App</code>
          </pre>
          <pre className="text-green-400">
            <code>npm install</code>
          </pre>
          <pre className="text-green-400">
            <code>npm run dev</code>
          </pre>
        </div>
        <p className="mb-8">
          La aplicación se ejecutará en: <span className="text-green-400">http://localhost:5173</span>
        </p>

        <h2 className="font-bold text-2xl mb-2 text-yellow-300">Para más información sobre Leaflet, visita:</h2>
        <a
          href="https://react-leaflet.js.org/?ref=tmsvr.com"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 text-lg underline"
        >
          Documentación de Leaflet
        </a>
      </div>
    </div>
  );
};

export default Home;