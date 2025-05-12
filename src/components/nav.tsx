import { IoPersonSharp, IoSearch, IoMenu } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";

function App() {
  return (
    <>
      <section>
        <nav className="bg-[#ffed3b] w-full h-18 flex justify-around items-center">
          <button className="bg-[#003cb3] w-48 h-8 text-white font-bold flex justify-center items-center">
            <IoMenu className="text-3xl" />
            <h1>Ver categorías</h1>
          </button>
          <img
            className="h-8 w-48"
            src="https://www.tecnofacil.com.gt/media/logo/stores/2/tecnofacil-logo-header.png"
            alt=""
          />
          <div className="relative w-96">
            <input
              className="w-full h-8 rounded-full bg-gray-100 pl-4"
              type="text"
              placeholder="Buscar..."
            />
            <IoSearch className="flex justify-center items-center absolute right-0 top-1/2 bg-[#003cb3] h-8 w-8 rounded-full transform -translate-y-1/2 text-[#ffffff] text-sm" />
          </div>
          <p className="flex flex-row justify-center items-center gap-2">
            <IoPersonSharp />
            Iniciar Sesion
          </p>
          <p className="flex flex-row justify-center items-center gap-2">
            <LuShoppingCart />
            Carrito
          </p>
        </nav>
      </section>
    </>
  );
}

export default App;