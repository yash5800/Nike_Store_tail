/* eslint-disable react/prop-types */
import {bigShoe1,bigShoe2,bigShoe3} from "../assets/images"

const ShoeImg = ({imgUrl , changeShoe ,activeShoe}) => {
  return (
    <div 
    className={`border-2 rounded-xl ${imgUrl === activeShoe ? "border-coral-red" : "border-transparent"} cursor-pointer max-sm:flex-1`}
    onClick={() => changeShoe(imgUrl)}
    >
      <div className="flex justify-center items-center sm:w-40 sm:h-40 rounded-xl bg-cover bg-center bg-card ">
        <img src={
            imgUrl === 'big-shoe1' ? bigShoe1 : imgUrl === 'big-shoe2' ? bigShoe2 : imgUrl === 'big-shoe3' && bigShoe3
        } alt={imgUrl} width={127} height={103} />
      </div>
    </div>
  )
}

export default ShoeImg
