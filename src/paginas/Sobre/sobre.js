import Footer from "../../componentes/Footer/footer";
import Menu_nav from "../../componentes/Menu_nav/menu_nav";
import "./sobre.css";


export default function Sobre(){
    return(
      <body>
        <Menu_nav></Menu_nav>
        <h2 className="titulo_sobre">Sobre nós</h2>
        <section className="sobre">
          <h3>Sobre a Wecomp</h3>
          <p>A wecomp é feita pelo IFSP desde XXXX... </p>
        </section>
        <Footer></Footer>
      </body>
    )
  }
  


