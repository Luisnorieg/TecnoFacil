const productos = [
  {
    img: "https://www.tecnofacil.com.gt/media/wysiwyg/oc1-impresoras-d.jpg",
    title: "Hasta 35% de descuento",
    subtitle: "Impresión sin limites",
    bold: "Hasta 35% de descuento",
    description: "Impresión sin limites",
  },
  {
    img: "https://www.tecnofacil.com.gt/media/wysiwyg/oc2-microondas-d.jpg",
    title: "Hasta 50% de descuento",
    subtitle: "Encuentra lo mejor en electrodomésticos",
    bold: "Renueva tu hogar",
    description: "Encuentra lo mejor en electrodomésticos",
  },
  {
    img: "https://www.tecnofacil.com.gt/media/wysiwyg/oc3-regulados_de_voltaje-d_1.jpg",
    title: "Hasta 25% de descuento",
    subtitle: "Protege tus equipos con 25% de descuento.",
    bold: "Tus equipos, siempre a salvo 25% de descuento",
    description: "Protege tus equipos con 25% de descuento.",
  },
  {
    img: "https://www.tecnofacil.com.gt/media/wysiwyg/oc4-bicicletas-d_1.jpg",
    title: "Hasta 10% de descuento",
    subtitle: "Rueda con 10% de descuento",
    bold: "Tu nueva bicicleta está aquí",
    description: "Rueda con 10% de descuento",
  },
];

function ProductosDestacados() {
  return (
    <section className="w-full flex justify-center items-center py-12 bg-white">
      <div className="flex flex-row gap-6 w-full h-auto max-w-7xl px-4">
        {productos.map((prod, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow border border-gray-200 flex flex-col overflow-hidden w-full max-w-xl"
          >
            <div className="h-48 w-full bg-cover flex items-center justify-center ">
              <img src={prod.img} alt={prod.bold} className="h-62 w-full " />
            </div>
            <div className="p-6 flex flex-col gap-2">
              <h2 className="font-bold text-lg pt-5 w-full">{prod.bold}</h2>
              <p className="text-gray-600 text-base w-full">{prod.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductosDestacados;