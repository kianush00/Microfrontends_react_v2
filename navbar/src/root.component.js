import { Link } from "@reach/router";
import React, { Component } from "react";

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [],
      host_app_name: "gestor_aire",
      url: "http://oasis.ceisufro.cl:10000"
    };
  }

  componentDidMount() {
    this.fetchLinks(this.state.host_app_name);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.links !== this.state.links) {
      this.render();
    }
  }

  fetchLinks(name) {
    //obtener links de gestor aire (el host app)
    fetch(this.state.url + "/links?name=" + name)
      .then(function (response) {
        if (response.ok) {
          console.log("obtener links 200 OK");
          return response.json();
        } else {
          console.log("Respuesta de red OK pero respuesta HTTP no OK");
        }
      })
      .then((data) => {
        console.log("datos obtenidos de peticion:");
        console.log(data);
        const links = Array.from(data.links);
        this.setState({ links });
      })
      .catch(function (error) {
        console.log("Hubo un problema con la peticion Fetch:" + error.message);
      });
  }

  render() {
    console.log("render");
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
                  console.log("click en " + link.name)
                  this.fetchLinks(link.name)
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center justify-between">
          {[{name: this.state.host_app_name, href: "/" + this.state.host_app_name}].map((link) => {
            return (
              <Link
                key={link.href}
                className="p-6"
                to={link.href}
                onClick={() => {
                  console.log("click en Volver al inicio")
                  this.fetchLinks(link.name)
                }}
              >
                Volver al inicio
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Root;