/* eslint-disable react/prop-types */
import {star} from '../assets/icons'
const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt={imgURL} className="w-[280px] h-[280px]" />
        <div className="mt-8 flex justify-start gap-2.5">
              <img src={star} alt="rating" width={24} height={24} />
              <h2 className='text-slate-gray font-montserrat leading-normal text-xl'>(4.5)</h2>
        </div>
        <h3 className='mt-2 font-palanquin font-semibold leading-normal text-2xl'>{name}</h3>
        <p className='text-coral-red mt-2 font-montserrat'>{price}</p>
    </div>
    
  )
}

export default PopularProductCard
