/* eslint-disable react/prop-types */

const ShoeImg = ({imgUrl , changeShoe ,activeShoe}) => {
  return (
    <div 
    className={`border-2 rounded-xl ${imgUrl === activeShoe ? "border-coral-red" : "border-transparent"} cursor-pointer max-sm:flex-1`}
    onClick={() => changeShoe(imgUrl)}
    >
      <div className="flex justify-center items-center sm:w-40 sm:h-40 rounded-xl bg-cover bg-center bg-card ">
        <img src={"./src/assets/images/"+imgUrl+".png"} alt={imgUrl} width={127} height={103} />
      </div>
    </div>
  )
}

export default ShoeImg
