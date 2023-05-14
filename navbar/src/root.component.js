import { Link } from "@reach/router";
import React, { Component } from "react";

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [],
      host_app_name: "gestor_aire",
      current_app: "gestor_aire",
      current_interval_id: -1,
      interval_duration: 200,
      url: "http://oasis.ceisufro.cl:10000"
    };
  }

  componentDidMount() {
    this.fetchLinksPeriodically(this.state.current_app);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.links !== this.state.links) {
      this.render();
    }
  }

  fetchLinksPeriodically(name) {
    clearInterval(this.state.current_interval_id);

    this.fetchLinks(name);

    this.state.current_interval_id = setInterval(() => {
        this.fetchLinks(name);
      }, this.state.interval_duration);
  }

  fetchLinks(name) {
    fetch(this.state.url + "/links?name=" + name)
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
    if (window.location.pathname === "/") {
      this.state.current_app = this.state.host_app_name;
    } else {
      this.state.current_app = window.location.pathname.substring(1);
    }
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
                  this.state.current_app = link.href.substring(1);
                  this.fetchLinksPeriodically(this.state.current_app);
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center justify-between">
          <Link
            key={"/" + this.state.host_app_name}
            className="p-6"
            to="/"
            onClick={() => {
              console.log("click en Volver al inicio");
              this.state.current_app = this.state.host_app_name;
              this.fetchLinksPeriodically(this.state.current_app);
            }}
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }
}

export default Root;