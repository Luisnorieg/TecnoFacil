import Carrucel from "./carrusel";
import Ofertas from "./ofertas";
import Carrucel2 from "./carrusel2";
import OfertasDesatacadas from "./categoriasDestacadas";
import Baner from "./baner";
import Productos from "./productos";



function Main() {
    return (
        <>
            <main>
                <Carrucel />
                <Ofertas />
                <Carrucel2 />
                <OfertasDesatacadas />
                <Baner/>
                <Productos/>
            </main>

        </>
    )
}

export default Main;