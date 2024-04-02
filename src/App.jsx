//import "/index.css";
import Menu from "/menu.png";
import Casa from "/casa.png";
import 'bootstrap/dist/css/bootstrap.min.css';



import Perfil1 from  "./components/Perfil1"
import  "./styles/app.css";

function App() {
  return (
    <div className="App">
      <body>
    {/*     <nav>
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <img src={Menu} className="icono" />
          </label>
          <a href="#" className="enlace">
            <img src={Casa} className="logo" />
          </a>
          <ul>
            <li>
              <a href="#">uno</a>
            </li>
            <li>
              <a href="#">dos</a>
            </li>
            <li>
              <a href="#">tres</a>
            </li>
          </ul>
        </nav> */}

     
         <Perfil1></Perfil1>
       
 
      </body>
    </div>
  );
}

export default App;
