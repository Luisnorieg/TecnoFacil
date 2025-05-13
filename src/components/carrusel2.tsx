import { useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

function Ofertas() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const productsPerContainer = 5; // Número de productos por contenedor

    // Lista de productos con sus respectivas imágenes y datos
    const products = [
        {
            id: 1,
            name: "Cepillo de aire con terapia de Zafiro",
            price: "Q499.00",
            oldPrice: "Q565.00",
            discount: "Ahorras Q66.00",
            image: "https://www.tecnofacil.com.gt/media/catalog/product/cache/894b49ce9937cbd77a7851e732ba53dd/A/S/AS5805110F_1.jpg",
        },
        {
            id: 2,
            name: "Bicicleta MTB R1, llanta 26\", negro rosa",
            price: "Q1,299.00",
            oldPrice: "Q1,669.00",
            discount: "Ahorras Q370.00",
            image: "https://www.tecnofacil.com.gt/media/catalog/product/cache/894b49ce9937cbd77a7851e732ba53dd/R/1/R126MNR3_1.jpg",
        },
        {
            id: 3,
            name: "Laptop HP 14\", AMD Ryzen 5",
            price: "Q3,999.00",
            oldPrice: "Q4,599.00",
            discount: "Ahorras Q600.00",
            image: "https://www.tecnofacil.com.gt/media/catalog/product/cache/894b49ce9937cbd77a7851e732ba53dd/H/P/HP15FC0043LA_2_8052025145703.jpg",
        },
        {
            id: 4,
            name: "Laptop HP 14\", AMD Ryzen 5",
            price: "Q3,999.00",
            oldPrice: "Q4,599.00",
            discount: "Ahorras Q600.00",
            image: "https://www.tecnofacil.com.gt/media/catalog/product/cache/894b49ce9937cbd77a7851e732ba53dd/M/O/MOTOG35B_1_19122024154807.jpg",
        },
        {
            id: 5,
            name: "Cepillo de aire con terapia de Zafiro",
            price: "Q499.00",
            oldPrice: "Q565.00",
            discount: "Ahorras Q66.00",
            image: "https://www.tecnofacil.com.gt/media/catalog/product/cache/894b49ce9937cbd77a7851e732ba53dd/j/b/jblflip6blk.jpg",
        },
        {
            id: 10,
            name: "Cepillo de aire con terapia de Zafiro",
            price: "Q499.00",
            oldPrice: "Q565.00",
            discount: "Ahorras Q66.00",
            image: "https://www.tecnofacil.com.gt/media/catalog/product/cache/894b49ce9937cbd77a7851e732ba53dd/5/8/588s4a_2.jpg",
        },
        {
            id: 8,
            name: "Laptop HP 14\", AMD Ryzen 5",
            price: "Q3,999.00",
            oldPrice: "Q4,599.00",
            discount: "Ahorras Q600.00",
            image: "https://www.tecnofacil.com.gt/media/catalog/product/cache/894b49ce9937cbd77a7851e732ba53dd/s/9/s9980_5.jpg",
        },
        {
            id: 7,
            name: "Bicicleta MTB R1, llanta 26\", negro rosa",
            price: "Q1,299.00",
            oldPrice: "Q1,669.00",
            discount: "Ahorras Q370.00",
            image: "https://www.tecnofacil.com.gt/media/catalog/product/cache/894b49ce9937cbd77a7851e732ba53dd/c/m/cm0915bkla_4.jpg",
        },
        {
            id: 9,
            name: "Laptop HP 14\", AMD Ryzen 5",
            price: "Q3,999.00",
            oldPrice: "Q4,599.00",
            discount: "Ahorras Q600.00",
            image: "https://www.tecnofacil.com.gt/media/catalog/product/cache/894b49ce9937cbd77a7851e732ba53dd/m/a/magic7lite256p_cm0755smx.jpg",
        },
        {
            id: 6,
            name: "Cepillo de aire con terapia de Zafiro",
            price: "Q499.00",
            oldPrice: "Q565.00",
            discount: "Ahorras Q66.00",
            image: "https://www.tecnofacil.com.gt/media/catalog/product/cache/894b49ce9937cbd77a7851e732ba53dd/S/M/SML300NZE_1_11092024154445_1.jpg",
        },


    ];

    const totalItems = products.length;

    const scrollToIndex = (index: number) => {
        setCurrentIndex(index);
    };

    const scrollRight = () => {
        const nextIndex = (currentIndex + 1) % Math.ceil(totalItems / productsPerContainer);
        scrollToIndex(nextIndex);
    };

    const scrollLeft = () => {
        const prevIndex = (currentIndex - 1 + Math.ceil(totalItems / productsPerContainer)) % Math.ceil(totalItems / productsPerContainer);
        scrollToIndex(prevIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            scrollRight();
        }, 3000); // Cambia cada 3 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, [currentIndex]);

    // Agrupar productos en contenedores
    const groupedProducts = Array.from({ length: Math.ceil(totalItems / productsPerContainer) }, (_, groupIndex) =>
        products.slice(groupIndex * productsPerContainer, (groupIndex + 1) * productsPerContainer)
    );

    return (
        <>
            <section className="bg-white py-8">
                <div className="mx-4 relative">
                    <div className="relative">

                        <button
                            onClick={scrollLeft}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 border-2 rounded-full shadow-md hover:text-blue-400"
                        >
                            <IoChevronBack size={24} />
                        </button>


                        <div id="carrusel" className="flex overflow-hidden">

                            {groupedProducts.map((group, groupIndex) => (
                                <div
                                    key={groupIndex}
                                    className={`flex min-w-96 justify-around ml-8 justify-items-center transition-transform duration-200 ${currentIndex === groupIndex ? "block" : "hidden"
                                        }`}
                                >
                                    {group.map(product => (
                                        <div
                                            key={product.id}
                                            className="min-w-[100px] bg-white rounded-lg shadow-md p-4"
                                        >
                                            <div className="relative">
                                                <span className="absolute top-2 right-2 mr-12 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                                                    Seguro Gratis
                                                </span>
                                                <span className="absolute top-2 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                                    Oferta
                                                </span>
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-42 object-cover rounded flex justify-center items-center "

                                                />
                                            </div>
                                            <h3 className="mt-4 text-sm font-semibold">
                                                {product.name}
                                            </h3>
                                            <p className="text-lg font-bold text-red-600">
                                                {product.price}
                                            </p>
                                            <p className="text-sm line-through text-gray-500">
                                                {product.oldPrice}
                                            </p>
                                            <p className="text-sm text-green-600">
                                                {product.discount}
                                            </p>
                                            <button className="mt-4 w-full font-bold bg-yellow-400 flex flex-row justify-center items-center text-black text-bold py-2 rounded-lg hover:bg-yellow-500">
                                                <p className="flex flex-row ">
                                                    <FaShoppingCart className="pt-2 text-lg" />
                                                    Agregar
                                                </p>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>


                        <button
                            onClick={scrollRight}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 shadow-md hover:text-blue-400 rounded-full border-2"
                        >
                            <IoChevronForward size={24} />
                        </button>
                    </div>


                    <div className="flex justify-center mt-4">
                        {groupedProducts.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToIndex(index)}
                                className={`h-3 w-3 rounded-full border-2 mx-1 ${currentIndex === index ? "bg-black" : "bg-gray-300"
                                    }`}
                            ></button>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Ofertas;