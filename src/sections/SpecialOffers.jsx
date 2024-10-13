import Button from "../components/Button"
import TransButton from "../components/TransButton"
import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"

const SpecialOffers = () => {
  return (
    <div className="flex flex-col gap-8 justify-center w-full items-center xl:flex-row-reverse">
      <div className="text-white">
        <h2 className="text-4xl font-palanquin font-bold lg:max-w-lg"><span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 font-montserrat leading-normal text-slate-gray lg:max-w-lg">
        Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 font-montserrat text-slate-gray lg:max-w-lg">
        Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with
        us is nothing short of exceptional.
        </p>
        <div className="mt-5 flex gap-6">
       <Button label={"Shope now"} iconUrl={arrowRight} />
         <TransButton />
       </div>
      </div>
      <div className="flex-1 relative max-lg:-right-6 max-xl:-right-8 ">
          <img src={offer} height={687} width={773} />
      </div>
       
    </div>
  )
}

export default SpecialOffers
