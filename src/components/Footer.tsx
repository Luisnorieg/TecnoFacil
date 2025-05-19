import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="w-full">

             <div className="bg-[#ffef45] w-full h-24 flex flex-col md:flex-row items-center py-6 px-4 gap-4">
                <img
                    className="h-38 w-auto md:ml-4"
                    src="https://www.tecnofacil.com.gt/media/wysiwyg/img-robot.png"
                    alt="Robot TecnoFácil"
                />
                <div className="flex-1 flex flex-col md:flex-row items-center justify-between w-full gap-4">
                    <span className="font-bold text-lg pl-22 md:text-xl text-center md:text-left">
                        Regístrate y recibe promociones exclusivas
                    </span>
                    <div className="flex w-24 md:w-auto gap-2">
                        <div className="flex items-center bg-white rounded px-3 py-2 w-full md:w-80 md:h-10 md:text-base">
                            <FaEnvelope className="text-gray-500 mr-2" />
                            <input
                                type="email"
                                placeholder="Correo electrónico"
                                className="outline-none bg-transparent w-38 "
                            />
                        </div>
                        <button className="flex items-center gap-2 bg-red-600 hover:bg-blue-700 text-white font-bold rounded px-4 py-2 transition-colors md:h-10 md:text-base">
                            <FaEnvelope />
                            Registrarme
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-[#0047bb] w-full h-96 px-4 pt-8 pb-2">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-white max-w-7xl mx-auto pb-10">

                    <div>
                        <h3 className="font-bold text-lg mb-2 ">Mi cuenta</h3>
                        <ul className="space-y-6 text-sm font-semibold">
                            <li><a href="#" className="hover:underline">Ingresar</a></li>
                            <li><a href="#" className="hover:underline">Crear cuenta</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-2">Soporte</h3>
                        <ul className="space-y-6  gap-4 text-sm font-semibold">
                            <li><a href="#" className="hover:underline">Cómo comprar</a></li>
                            <li><a href="#" className="hover:underline">Rastrear Pedido</a></li>
                            <li><a href="#" className="hover:underline">Servicio Técnico</a></li>
                            <li><a href="#" className="hover:underline">Condiciones de uso</a></li>
                            <li><a href="#" className="hover:underline">Devoluciones</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-2">Información</h3>
                        <ul className="space-y-6 text-sm font-semibold">
                            <li><a href="#" className="hover:underline">Quiénes Somos</a></li>
                            <li><a href="#" className="hover:underline">Financiamiento</a></li>
                            <li><a href="#" className="hover:underline">Outlet</a></li>
                            <li><a href="#" className="hover:underline">Ubicaciones</a></li>
                            <li><a href="#" className="hover:underline">Seguro fácil</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-2">Síguenos</h3>
                        <ul className="space-y-6 text-sm font-semibold">
                            <li className="flex items-center gap-2">
                                <FaFacebook /> <a href="#" className="hover:underline">Facebook</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <IoLogoInstagram /> <a href="#" className="hover:underline">Instagram</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaTiktok /> <a href="#" className="hover:underline">TikTok</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaYoutube /> <a href="#" className="hover:underline">Youtube</a>
                            </li>
                        </ul>
                    </div>

                    <div className="">
                        <ul className="space-y-6 text-sm font-semibold">
                            <li>
                                <span className="font-bold">WhatsApp: </span>
                                <a href="https://wa.me/50224232000" className="hover:underline">2423-0200</a>
                            </li>
                            <li>
                                <span className="font-bold">Teléfono: </span>
                                <a href="tel:+50224230000" className="hover:underline">(502) 2423-0000</a>
                            </li>
                            <li>
                                <span className="font-bold">Email: </span>
                                <a href="mailto:info@tecnofacil.com.gt" className="hover:underline">info@tecnofacil.com.gt</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-300 mt-4 pt-8 text-white text-sm w-full">
                    ©1961-2025 Copyright Distribuidora Electrónica S.A.
                </div>
            </div>
        </footer>
    );
}

export default Footer;