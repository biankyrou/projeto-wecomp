import Footer from "../../componentes/Footer/footer";
import Menu_nav from "../../componentes/Menu_nav/menu_nav";
import "./cronograma.css";

export default function Cronograma(){
    return(
        <body>
          <Menu_nav></Menu_nav>
          <h2 className="titulo_cronograma">Cronograma</h2>
          <section className="cronograma">
          <table id="table_cronograma">
            <tr>
              <th>informações de dias e horários</th>
            </tr>
          <tr>
          <td>Mais infos</td>
          </tr>
        </table>
        </section>
        <Footer></Footer>
      </body>
    )
  }


