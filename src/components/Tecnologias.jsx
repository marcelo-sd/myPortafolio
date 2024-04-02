import "../styles/tecnologias.css";
import sql from "./icons/sql.png";
import Csharp from "./icons/CSharp.png";
import net from "./icons/net.png";
import react from "./icons/react.png";
import redis from "./icons/redis.png";
import json from "./icons/json.png";
import jwt from "./icons/jwt.png";
import boot from "./icons/boot.png";
import xamarin from "./icons/xamarin.png";

function Tecnologias() {
  return (
    <section className="contenedor-icons">
      <div className="item-icons">
        <div className="sub-Items">
          <img src={Csharp} alt="" className="imgIc"/>
          <h4>C#</h4>
        </div>
        <p>
          It is my main language, I started programming with it, especially for
          backend.
        </p>
      </div>

      <div className="item-icons">
        <div className="sub-Items">
          <img src={sql} alt="" className="imgIc" />
          <h4>SQL</h4>
        </div>
        <p>
          I use it for my APIs, I have been working with SQL for 3 years now.
        </p>
      </div>
      <div className="item-icons">
        <div className="sub-Items">
          <img src={net} alt=""  className="imgIc"/>
          <h4>.NET</h4>
        </div>
        <p>
          I started with the .Net6 version, but for my latest jobs I already
          implemented .Net7
        </p>
      </div>
      <div className="item-icons">
        <div className="sub-Items">
          <img src={react} alt="" className="imgIc"/>
          <h4>REACT.JS</h4>
        </div>
        <p>
          I choose it for my front, because of its main SPA feature, I have been
          developing my pages with react for 3 years.
        </p>
      </div>
      <div className="item-icons">
        <div className="sub-Items">
          <img src={redis} alt="" className="imgIc" />
          <h4>REDIS</h4>
        </div>
        <p>mainly to optimize the performance of my APIs.</p>
      </div>
      <div className="item-icons">
        <div className="sub-Items">
          <img src={jwt} alt=""  className="imgIc"/>
          <h4>JSON WEP TOKEN</h4>
        </div>
        <p>
          I have been using it for a year, and it guarantees the security of my
          APIs.
        </p>
      </div>
      <div className="item-icons">
        <div className="sub-Items">
          <img src={json} alt="" className="imgIc" />
          <h4>JSON</h4>
        </div>
        <p>
         
It is my data exchange format.
        </p>
      </div>
      <div className="item-icons">
        <div className="sub-Items">
          <img src={boot} alt="" className="imgIc" />
          <h4>BOOTSTRAP</h4>
        </div>
        <p>
         
        I usually use it for buttons, and for my menus.
        </p>
      </div>
      <div className="item-icons">
        <div className="sub-Items">
          <img src={xamarin} alt="" className="imgIc" />
          <h4>XAMARIN</h4>
        </div>
        <p>
         
       
I use it to develop my mobile apps.
        </p>
      </div>
    </section>
  );
}

export default Tecnologias;
