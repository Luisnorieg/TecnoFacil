import { IoBagRemoveSharp } from "react-icons/io5";

function Ofertas() {
    return (
        <>
            <section>
                <div>
                    <div className="flex justify-between items-center mx-4 my-12 ">
                        <span className="text-3xl"><strong>Ofertas para mamá</strong></span>
                        <button className="flex justify-center gap-2 text-lg items-center border-2 h-12 w-42 rounded-lg">
                            <IoBagRemoveSharp />
                            <p>Ver Más</p>
                        </button>
                    </div>
                    
                </div>
            </section>
        </>
    )
};

export default Ofertas;