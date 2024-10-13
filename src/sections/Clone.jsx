import Pic from '../assets/images/pic1.jpg';
const Clone = () => {
  return (
    <div className='mb-10 max-lg:py-10 flex flex-1 justify-center items-center max-lg:flex-col gap-10'>
      <div className='border-2 shadow-custome-orange rounded-full border-coral-red' >
      <a href="https://www.linkedin.com/in/alaparthi-yaswanth-kiran-65aa53272" target='__blank'><img  src={Pic} width={254} className='rounded-full' /></a>
      </div>
      <div className='text-center'>
         <h3 className='text-4xl text-white font-montserrat font-bold leading-normal'>This <span className='text-coral-red'>Clone</span> is Made <span className='text-blue-500'>By</span></h3>
         <a href="https://www.linkedin.com/in/alaparthi-yaswanth-kiran-65aa53272" className='text-lg text-slate-gray font-montserrat leading-normal hover:text-white xl:text-xl' target='__blank'>Yaswanth</a>
      </div>
      
    </div>
  )
}

export default Clone
