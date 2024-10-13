/* eslint-disable react/prop-types */

const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className="flex-1 sm:min-w-[350px] w-full px-10 py-16 shadow-custome-light rounded-lg bg-blue-900">
       <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
           <img src={imgURL} alt={label} width={24} height={24} />
       </div>
       <h2  className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
       </h2>
       <p className="mt-3 font-montserrat break-words text-lg text-slate-gray leading-normal">
        {subtext}
       </p>
    </div>
  )
}

export default ServiceCard
