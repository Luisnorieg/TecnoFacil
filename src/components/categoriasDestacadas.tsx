import { IoBagRemoveSharp } from "react-icons/io5";
import { IoMegaphone } from "react-icons/io5";


function CategoriaDestacada() {
    return (
        <>
            <section className="w-full h-screen justify-center items-center">
                <div className="flex justify-between items-center mx-3 py-8 ">
                    <span className="text-3xl"><strong>Ofertas para mamá</strong></span>
                    <button className="flex justify-center gap-2 text-lg items-center border-2 border-indigo-600 h-12 w-42 rounded-lg">
                        <IoBagRemoveSharp />
                        <p>Ver Más</p>
                    </button>
                </div>
                <div className=" w-full h-auto flex ">
                    <div className="flex-1  h-96 w-full rounded-2xl mx-3">
                        <img className=" h-96 w-full flex justify-center items-center rounded-t-4xl " src="https://www.tecnofacil.com.gt/media/wysiwyg/relojes_inteligentes-728x400.jpg" alt="" />
                        <div className="bg-[#feed01] h-12 w-full rounded-b-4xl flex justify-center items-center">
                            <h1 className="text-2xl flex flex-row justify-center items-center gap-2">
                                <IoMegaphone />
                                Ver más
                            </h1>
                        </div>
                        <div className="text-lg pt-2">
                            <h1 className="font-bold">
                                ¡Aprovecha las ofertas
                            </h1>
                            <h1>
                                 Y luce tu smartwatch esta semana!
                            </h1>
                        </div>
                    </div>

                    <div className="flex-1  h-96 w-full rounded-2xl mx-3">
                        <img className=" h-96 w-full flex justify-center items-center rounded-t-4xl" src="https://www.tecnofacil.com.gt/media/wysiwyg/cuidado_personal-728x400_3.jpg" alt="" />
                        <div className="bg-[#feed01] h-12 w-full rounded-b-4xl flex justify-center items-center">
                            <h1 className="text-2xl flex flex-row justify-center items-center gap-2">
                                <IoMegaphone />
                                Ver más
                            </h1>
                        </div>
                         <div className="text-lg pt-2">
                            <h1 className="font-bold">
                                ¡Más de 20% de descuento!
                            </h1>
                            <h1>
                                 Para tener el look ideal
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CategoriaDestacada;