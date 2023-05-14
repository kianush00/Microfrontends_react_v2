import { Link } from "@reach/router";
import React, { Component } from "react";

class Root extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    links: [{"name": "", "href": ""}],
    host_app_name: "gestor_aire",
    current_app: "gestor_aire",
    current_interval_id: -1,
    interval_duration: 200,
    url: "http://oasis.ceisufro.cl:10000"
  };

  componentDidMount() {
    this.fetchLinksPeriodically(this.state.current_app);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.links !== this.state.links) {
      console.log("Links actualizados");
    }
    
    window.onpopstate = e => {
      this.checkCurrentWindowLocation();
      console.log("POP STATE: " + this.state.current_app);
      this.fetchLinksPeriodically(this.state.current_app);
   }
  }

  checkCurrentWindowLocation() {
    if (window.location.pathname === "/") {
      this.state.current_app = this.state.host_app_name;
    } else {
      this.state.current_app = window.location.pathname.substring(1);
    }
  }

  fetchLinksPeriodically(name) {
    clearInterval(this.state.current_interval_id);

    this.fetchLinks(name);

    this.state.current_interval_id = setInterval(() => {
        this.fetchLinks(name);
      }, this.state.interval_duration);
  }

  async fetchLinks(name) {
    await fetch(this.state.url + "/links?name=" + name)
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Respuesta de red OK pero respuesta HTTP no OK");
        }
      })
      .then((data) => {
        console.log("Cantidad de links obtenidos: " + data.links.length);
        if (JSON.stringify(this.state.links) !== JSON.stringify(Array.from(data.links))) {
          this.setState({ links: Array.from(data.links) });
        }
      })
      .catch(function (error) {
        console.log("Hubo un problema con la peticion Fetch:" + error.message);
      });
  }

  render() {
    this.checkCurrentWindowLocation();
    console.log("render, app actual: " + this.state.current_app);
    return (
      <div className="h-16 flex items-center justify-between px-6 bg-primary text-white">
        <div className="flex items-center justify-between">
          {this.state.links.map((link) => {
            return (
              <Link
                key={link.href}
                className="p-6"
                to={link.href}
                onClick={() => {
                  console.log("click en " + link.name);
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center justify-between">
          <button onClick={() => {
              if (this.state.current_app !== this.state.host_app_name) {
                window.history.go(-1);
              }
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="32" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16"> 
              <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/> 
              </svg>
          </button>
          <Link
            key={"/" + this.state.host_app_name}
            className="p-6"
            to="/"
            onClick={() => {
              console.log("click en Volver al inicio");
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="32" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16"> 
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/> 
            </svg>
          </Link>
        </div>
      </div>
    );
  }
}

export default Root;