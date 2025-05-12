import { MdPointOfSale } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { FaCcMastercard } from "react-icons/fa";
import { MdBackup } from "react-icons/md";
import { FaStore } from "react-icons/fa6";

import { FaParachuteBox } from "react-icons/fa";
function Nav2() {
  return (
    <>
      <section>
        <nav className="bg-[#ffffff] h-14 w-full flex justify-start items-center ">
          <div className="flex justify-between items-center w-full mx-12">
            <div className="flex justify-center">
              <ul className="flex flex-row gap-5 ">
                <li className="flex justify-center items-center gap-2 text-sm">
                  <MdPointOfSale className="text-lg" />
                  Ofertas
                </li>
                <li className="flex justify-center items-center gap-2 text-sm">
                  <MdOutlineSecurity className="text-lg"/>
                  Seguro Fácil
                </li>
                <li className="flex justify-center items-center gap-2 text-sm">
                  <FaCcMastercard className="text-lg"/>
                  Crédito
                </li>
                <li className="flex justify-center items-center gap-2 text-sm">
                  <MdBackup className="text-lg"/>
                  Respaldo
                </li>
                <li className="flex justify-center items-center gap-2 text-sm">
                  <FaStore className="text-lg" />
                  Tiendas
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