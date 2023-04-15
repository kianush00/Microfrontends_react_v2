//import { links } from "./root.helper.js";
import { Link } from "@reach/router";
import React, { Component } from "react";

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [],
      actual: "gestor_aire_temuco",
    };
  }

  componentDidMount() {
    this.fetchLinks();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.links !== this.state.links) {
      this.render();
    }
  }

  fetchLinks() {
    //volver al último estado
    fetch("http://localhost:8000/actual_state")
      .then(function (response) {
        if (response.ok) {
          console.log("obtener estado 200 OK");
          return response.json();
        } else {
          console.log("Respuesta de red OK pero respuesta HTTP no OK");
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({ actual: data.actual_state });
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });

    //obtener links de estado actual
    fetch("http://localhost:8000/links")
      .then(function (response) {
        if (response.ok) {
          console.log("obtener links 200 OK");
          return response.json();
        } else {
          console.log("Respuesta de red OK pero respuesta HTTP no OK");
        }
      })
      .then((data) => {
        console.log(data);
        const links = Array.from(data.links);
        this.setState({ links });
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });

    setInterval(() => {
      //cambiar estado
      console.log("actual esatado: " + this.state.actual);
      fetch("http://localhost:8000/change_state/" + this.state.actual)
        .then(function (response) {
          if (response.ok) {
            console.log("cambiar estado 200 OK");
            return response.json();
          } else {
            console.log("Respuesta de red OK pero respuesta HTTP no OK");
          }
        })
        .then((data) => {
          console.log(data);
          this.setState({ actual: data.new_state });
        })
        .catch(function (error) {
          console.log(
            "Hubo un problema con la petición Fetch:" + error.message
          );
        });

      //obtener links de estado actual
      fetch("http://localhost:8000/links")
        .then(function (response) {
          if (response.ok) {
            console.log("obtener links 200 OK");
            return response.json();
          } else {
            console.log("Respuesta de red OK pero respuesta HTTP no OK");
          }
        })
        .then((data) => {
          console.log(data);
          const links = Array.from(data.links);
          this.setState({ links });
        })
        .catch(function (error) {
          console.log(
            "Hubo un problema con la petición Fetch:" + error.message
          );
        });
    }, 170);
  }

  render() {
    console.log(this.state.links);
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
                  this.setState({
                    actual: link.href.substr(1, link.href.length - 1),
                  });
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              this.setState({ actual: "gestor_aire_temuco" });
            }}
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }
}

export default Root;
