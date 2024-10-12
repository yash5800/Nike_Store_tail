/* eslint-disable react/prop-types */
const Button = ({label,iconUrl}) => {
  return (
    <button className="flex justify-center items-center px-7 py-4 border font-montserrat leading-none gap-2 rounded-full text-lg bg-coral-red text-white">
       {label}
       <img src={iconUrl} alt="arrow" className="rounded-full w-5 h-5 " />
    </button>
  )
}

export default Button
