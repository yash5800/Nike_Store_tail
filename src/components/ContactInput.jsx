
const ContactInput = () => {
  return (
    <div className="flex justify-center items-center relative w-full lg:max-w-lg">
      <input type="text" className="rounded-full px-12 py-3 w-full outline-none text-black" placeholder="subscrib@nike.com" />

      <button className="but flex absolute right-1 justify-center items-center px-3 py-3 border font-montserrat leading-none gap-2 rounded-full text-sm bg-coral-red text-white ">
       Sign Up
    </button>
    </div>
  )
}

export default ContactInput
