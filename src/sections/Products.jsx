import  PopularProductCard  from "../components/PopularProductCard";
import {shoe4,shoe5,shoe6,shoe7} from "../assets/images"


const Products = () => {
  const shope_products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

  return (
    <section id="Products" className="text-white max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">
           Popular
          </span> Products
        </h2>
        <p className="text-slate-gray lg:max-w-lg font-montserrat">
          Experience top-notch quality ans style with our sought-after selections. Discover a world of comfort,design, and value
        </p>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-sm:gap-4 gap-14">
          {
            shope_products.map((product) =>
            <PopularProductCard key={product.name} {...product}/> )
          }
        </div>

      </div>

    </section>
  )
}

export default Products
