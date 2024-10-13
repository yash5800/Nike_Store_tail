import ContactInput from "../components/ContactInput"

const Subscribe = () => {
  return (
    <div className="max-container flex max-lg:flex-col justify-between items-center gap-10 text-white" id="Contact Us">
      <h2 className="text-3xl font-montserrat font-bold max-w-sm">Sign Up for <span className="text-coral-red">Updates</span> & Newletter</h2>
      <ContactInput />
    </div>
  )
}

export default Subscribe
