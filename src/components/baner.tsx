import { TbShoppingBagSearch } from "react-icons/tb";

function Baner() {
    return (
        <>
            <section className="w-full h-32 flex justify-center items-center">
                <div className="flex justify-center pt-4 flex-col items-center w-2/1 h-32 bg-gradient-to-r from-yellow-200 via-yellow-100 to-teal-300 rounded-4xl shadow-md mx-4">
                    <h1 className="text-5xl font-bold">
                        Ofertonas para mamá
                    </h1>
                    <h1 className="text-[#003cb3] text-base flex flex-row gap-2 pt-2 justify-center items-center underline font-bold">
                        <TbShoppingBagSearch />
                        Explora las ofertas de temporada aquí
                    </h1>
                </div>
            </section>
        </>
    )
}

export default Baner;