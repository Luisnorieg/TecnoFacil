import { SiSpringsecurity } from "react-icons/si";
import { IoCardSharp } from "react-icons/io5";
import { HiMiniBuildingStorefront } from "react-icons/hi2";

function Carrucel () {
    return (
        <>
        <section>
            <div className="flex justify-center items-center flex-col">
                <img className="w-full h-96 rounded-lg" src="https://www.tecnofacil.com.gt/media/wysiwyg/b-ofmama-audifonos_y_bocinas-d.jpg" alt="" />
                <div className="h-2 w-12 flex flex-row justify-center items-center absolute pt-82">
                    <div className="flex justify-center items-center gap-2 rounded-full">
                        <div className="bg-white border-2 h-2 w-2 rounded-full"></div>
                        <div className="bg-white border-2 h-2 w-2 rounded-full"></div>
                        <div className="bg-white border-2 h-2 w-2 rounded-full"></div>
                        <div className="bg-white border-2 h-2 w-2 rounded-full"></div>
                        <div className="bg-white border-2 h-2 w-2 rounded-full"></div>
                        <div className="bg-black border-2 h-2 w-12 rounded-full"></div>
                    </div>
                </div>
            </div>
            <div className="bg-[#003cb3] w-full h-12 flex text-white text-lg justify-evenly items-center ">
                <div className="flex justify-center items-center gap-2">
                    <HiMiniBuildingStorefront />
                    <span> <strong>Recoge GRATIS </strong> en más de 100 ubicaciones </span>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <SiSpringsecurity />
                    <span> <strong> Seguro GRATIS </strong> en todas tus compras </span>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <IoCardSharp />
                    <strong>Hasta 48 cuotas</strong>
                     sin interes
                </div>
            </div>
        </section>
        </>
    )
}

export default Carrucel;