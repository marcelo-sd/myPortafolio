import "../styles/perfil1.css";
import Avatar from "../components/avatar.png";

import msd from "../components/icons/msd2.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Offcanvas from "react-bootstrap/Offcanvas";

import "../styles/descomtructed.css";
import "../styles/estiloTitulo.css";

import React, { useEffect, useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import pdf from "./pdf/ResumeMSD.pdf";

import Tecnologias from "./Tecnologias";
import ContacME from "./ContacME";

function Perfil1() {
  useEffect(() => {
    const words = [
      "SQL",
      "c#",
      "ENTITY FRAMEWORK",
      "REDIS",
      "JWT",
      "REACT",
      "REST",
      "XAMARIN",
      "MY SQL",
    ];
    const colors = [
      "tomato",
      "rebeccapurple",
      "lightblue",
      "violet",
      "red",
      "green",
    ];

    let letterCount = 1;
    let x = 1;
    let waiting = false;

    const target = document.getElementById("text");

    target.setAttribute("style", `color: ${colors[0]}`);

    const interval1 = setInterval(() => {
      if (letterCount === 0 && !waiting) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount);
        setTimeout(() => {
          const usedColor = colors.shift();
          colors.push(usedColor);
          const usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute("style", `color: ${colors[0]}`);
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[0].length + 1 && !waiting) {
        waiting = true;
        setTimeout(() => {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (!waiting) {
        target.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 120);

    const interval2 = setInterval(() => {
      const con = document.getElementById("console");
      const visible = con.classList.contains("hidden");
      if (visible) {
        con.classList.remove("hidden");
      } else {
        con.classList.add("hidden");
      }
    }, 400);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);
  //////////////////////////////////////////////////////////
  const handleDescargarPDF = () => {
    // Lógica para descargar el PDF
    const link = document.createElement("a");
    link.href = pdf;
    link.target = "_blank"; // Abre en una nueva ventana/tab
    link.download = "resumeMD.pdf"; // Nombre del archivo al descargar
    link.click();
  };
  ////////////////////////////////////////////

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const handleClose = () => {
    setShow(false);
    setShow2(false);
    setShow3(false);
  };
  const handleShow = (parametro) => {
    if (parametro === 1) {
      setShow(true);
      setShow2(false);
      setShow3(false);
    } else if (parametro === 2) {
      setShow(false);
      setShow2(true);
      setShow3(false);
    } else {
      setShow(false);
      setShow2(false);
      setShow3(true);
    }
  };

  return (
    <div id="div1">
      <div className="sec1er">
        <div id="container">
          <div className="div1er">Developer:</div>
          <div className="div1er">
            {" "}
            <span className="animated-text" id="hoverPointer">
              {" "}
              Marcelo Diaz
            </span>
          </div>
        </div>

        <span href="#" className="photo">
          <img src={msd} />
          <div className="glow-wrap">
            <i className="glow"></i>
          </div>
        </span>
      </div>

      <div className="sec2do">
        <div className="conteiner-tecn">
          <h2 className="h2tecno">Technologies:</h2>
          <div className="console-container">
            <span id="text"></span>
            <div className="console-underscore hidden" id="console">
              &#95;
            </div>
          </div>
        </div>

        <div className="contenedor-botones">
          <ButtonGroup
            aria-label="Basic example"
            style={{ fontFamily: "'Dank Mono', ui-monospace, monospace" }}
          >
            <Button
              variant="outline-success"
              style={{  color: "#A2EFC3" }}
              onClick={handleDescargarPDF}
            >
              Download CV
            </Button>{" "}
            <Button
              variant="outline-primary"
              onClick={() => handleShow(1)}
              style={{  color: "#A2EFC3" }}
            >
              Skills
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => handleShow(2)}
              style={{  color: "#A2EFC3" }}
            >
              About Me
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => handleShow(3)}
              style={{ color: "#A2EFC3" }}
            >
              Contact Me
            </Button>
          </ButtonGroup>
        </div>

        <Offcanvas show={show} onHide={handleClose} id="w-80">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Technologies</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <section id="contendorIcons">
              <Tecnologias />
            </section>
          </Offcanvas.Body>
        </Offcanvas>

        <Offcanvas show={show2} onHide={handleClose} id="w-80">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>About me</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            I am an enthusiastic programmer, I have been working as a freelancer
            for four years, in several of my own apps and in collaboration with
            an app for clothing and fast food sales services, I have gathered
            many skills and I am always visiting programming blogs to catch up.
            I liked working as a team, I have to say that the scrum framework
            helped me integrate and be useful more efficiently. I am currently
            looking to expand my goals and enhance my skills.
          </Offcanvas.Body>
        </Offcanvas>

        <Offcanvas show={show3} onHide={handleClose} id="w-80">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Contact Me</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <section id="contendorIcons">
              <ContacME />
            </section>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}

export default Perfil1;
