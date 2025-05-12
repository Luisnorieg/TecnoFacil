import { MdPointOfSale } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { MdBackup } from "react-icons/md";
import { FaStore } from "react-icons/fa6";
import { IoMdMegaphone } from "react-icons/io";
import { FaParachuteBox } from "react-icons/fa";
function Nav2() {
  return (
    <>
      <section>
        <nav className="bg-[#ffffff] h-14 w-full flex justify-start items-center ">
          <div className="flex justify-between items-center w-full mx-12">
            <div className="flex justify-center">
              <ul className="flex flex-row gap-5 ">
                <li className="flex justify-center items-center gap-2 ">
                  <MdPointOfSale />
                  Ofertas
                </li>
                <li className="flex justify-center items-center gap-2">
                  <MdOutlineSecurity />
                  Seguro Fácil
                </li>
                <li className="flex justify-center items-center gap-2">
                  <CiCreditCard1 />
                  Crédito
                </li>
                <li className="flex justify-center items-center gap-2">
                  <MdBackup />
                  Respaldo
                </li>
                <li className="flex justify-center items-center gap-2">
                  <FaStore />
                  Tiendas
                </li>
                <li className="flex justify-center items-center gap-2">
                  <IoMdMegaphone />
                  Promociones
                </li>
              </ul>
            </div>
            <div className="flex justify-centeritems-center ">
              <ul className="flex justify-center ">
                <li className="flex justify-center items-center gap-2">
                  <FaParachuteBox />
                  Rastear mi pedido
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Nav2;