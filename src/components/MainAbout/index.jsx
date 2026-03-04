import React from "react";

export default function MainAbout() {
  return (
    <div className="main-about ">
      <div className="card ">
        <div
          className="row mt-4"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <div className="col-md-10">
            <div className="card-body">
              <h1 className="card-title">Jairo Dueñas</h1>
              <h4 className="card-text">
                <small>Ingeniero de Sistemas</small>
              </h4>
              <h4 className="card-text">
                <small className="text-muted">
                  Desarrollador Web / Frontend
                </small>
              </h4>
              <p className="card-text mt-4">
                Gran capacidad de adaptabilidad al cambio, trabajo en equipo,
                buenas relaciones interpersonales, con iniciativa y creatividad
                en la búsqueda de soluciones, pensamiento estratégico, alto
                sentido de compromiso con las entidades y personas que
                intervienen en mi oficio.
              </p>
              <div
                className="conocimientos row rounded text-light mt-4"
                style={{ background: "#424242" }}
              >
                <h4 className="card-text mt-2">
                  <small className="text-decoration-underline">
                    Conocimientos en:
                  </small>
                </h4>
                <div className="conocimientos-lenguajes col-sm mt-2">
                  <h5 className="card-text">
                    <small className="text-info">
                      ➡️ Lenguajes de programación:
                    </small>
                  </h5>
                  <p> ‣ JavaScript</p>
                  <p> ‣ Python</p>
                  <p> ‣ Java</p>
                </div>
                <div className="conocimientos-frameworks col-sm mt-2">
                  <h5 className="card-text">
                    <small className="text-info">
                      ➡️ Maquetación y estilos:
                    </small>
                  </h5>
                  <p> ‣ HTML</p>
                  <p> ‣ CSS</p>
                  <p> ‣ SASS y SCSS</p>
                </div>
                <div className="conocimientos-frameworks col-sm mt-2">
                  <h5 className="card-text">
                    <small className="text-info">
                      ➡️ Frameworks y librerías:
                    </small>
                  </h5>
                  <p> ‣ React.JS</p>
                  <p> ‣ Vue.JS</p>
                  <p> ‣ Vite</p>
                </div>
                <div className="conocimientos-frameworks-css col-sm mt-2">
                  <h5 className="card-text">
                    <small className="text-info">➡️ Frameworks CSS:</small>
                  </h5>
                  <p> ‣ BootStrap</p>
                  <p> ‣ Material UI</p>
                  <p> ‣ Tailwind</p>
                </div>
              </div>

              <div className="card-text-capacidades mt-4 mb-4">
                <h5 className="card-text text-decoration-underline">
                  Capacidades
                </h5>
                <p className="card-text mt-4">
                  ✅ Capacidad para diseñar e implementar sistemas, servicios y
                  aplicaciones informáticas.
                </p>
                <p className="card-text">
                  ✅ Capacidad de diseñar, implementar y administrar datos e
                  información para asegurar su operación y garantizar su
                  producción.
                </p>
                <p className="card-text">
                  ✅ Capacidad de comprender, aplicar, gestionar y garantizar la
                  seguridad de la información para su procesamiento y ejecución.
                </p>
                <p className="card-text">
                  ✅ Capacidad para ejecutar proyectos de TI/Software bajo
                  normas internacionales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
