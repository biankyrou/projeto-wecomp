import Footer from "../../componentes/Footer/footer";
import Menu_nav from "../../componentes/Menu_nav/menu_nav";
import "./home.css"

export default function Home() {
    return (
        <body>
            <Menu_nav></Menu_nav>
            <section className="home-header">
                <h1 className="home-titulo--principal">Wecomp-2023</h1>
                <h2 className="home-titulo--secundario">Semana Acadêmica de Computação</h2>
            </section>
            <Footer></Footer>
        </body>
    )
}


