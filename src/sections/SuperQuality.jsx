import ViewButton from "../components/ViewButton"
import { shoe8 } from "../assets/images"
const SuperQuality = () => {
  return (
    <div id="About Us" className="flex xl:flex-row flex-col gap-8 justify-center items-center w-full">
      <div className="text-white xl:w-2/5 ">
        <h2 className="text-4xl font-palanquin font-bold lg:max-w-lg">We Provide You <span className="text-coral-red">Super Quality</span> Shoes
        </h2>
        <p className="mt-4 font-montserrat leading-normal text-slate-gray lg:max-w-lg">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance</p>
        <p className="mt-6 font-montserrat text-slate-gray lg:max-w-lg">Our dedication to detail and excellence ensures your satisfaction</p>
         <ViewButton />
      </div>
      <div >
        <img src={shoe8} alt={shoe8} width={570} height={520}  />
      </div>
    </div>
  )
}

export default SuperQuality
