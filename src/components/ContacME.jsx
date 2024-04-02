import "../styles/tecnologias.css";

import ini from "./icons/in.png";
import gmail from "./icons/gmail.png";

function ContacME() {
  return (
    <section className="contenedor-icons">
      <div className="item-icons">
        <div className="sub-Items">
          <img src={ini} alt="" className="imgIc" />
          <h4>
            <a href="https://www.linkedin.com/in/marcelo-diaz32/">follow link</a>
          </h4>
        </div>
        <p>www.linkedin.com/in/marcelo-diaz32</p>
      </div>
      <div className="item-icons">
        <div className="sub-Items">
          <img src={gmail} alt="" className="imgIc" />
          <h4>
           Contact ME
          </h4>
        </div>
        <p>sebamd789@gmail.com</p>
      </div>
    </section>
  );
}

export default ContacME;
