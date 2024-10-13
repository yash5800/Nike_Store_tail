/* eslint-disable react/prop-types */

import { star } from "../assets/icons"

const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className="justify-center flex items-center flex-col">
       <img src={imgURL} alt={imgURL} className="rounded-full object-cover w-[120px] h-[120px]" />
       <p className="mt-3 max-w-sm text-center info-text">{feedback}</p>
       <div className="flex flex-row gap-2 mt-2">
          <img src={star} alt="star" width={24} height={24} className="object-contain "/>
          <p>({rating})</p>
       </div>
       <p className="mt-4 text-3xl font-palanquin font-bold ">{customerName}</p>
    </div>
  )
}

export default ReviewCard
