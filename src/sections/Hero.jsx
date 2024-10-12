import Button from "../components/Button"
import ShoeImg from "../components/ShoeImg"
import { arrowRight } from "../assets/icons"
import {bigShoe1,bigShoe2,bigShoe3} from "../assets/images"
import { useState } from "react"

const statistics = [
     {state:"1k+",value:"Brands"},
     {state:"500+",value:"Shops"},
     {state:"200k",value:"Customers"}
    ]
const shoes = ["big-shoe1","big-shoe2","big-shoe3"];
const Hero = () => {

  const [activeShoe,active_up] = useState("big-shoe1");

  function changeShoe(shoe) {
    active_up(shoe);
  }

  return (
    <section
       id="home"
       className="flex justify-center gap-10 p-2 min-h-screen max-container xl:flex-row flex-col w-full"
    >
      <div className="relative flex flex-col xl:w-2/5 justify-center text-white-400 items-start max-xl:padding-x pt-28">
             <p className="text-xl font-montserrat text-coral-red">Our Summer Collections</p>
             <h1 className="mt-10 font-palanquin text-[92px] max-sm:text-[62px] font-bold">
                <span className="xl:bg-blue-900 xl:whitespace-nowrap relative z-10">The New Arrival</span> <br />
                <span className="text-coral-red">Nike</span> Shoes
             </h1>
             <p className="font-montserrat text-slate-gray text-lg mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals,quality comfort,and innovation for your active life</p>
             <Button label={"Shope now"} iconUrl={arrowRight}/>
             <div className="flex relative  justify-start items-start gap-16 w-full mt-20 max-xs:my-size ">
                {
                  statistics.map((stat,index)=> 
                  <div  key={index}>
                    <p className="text-4xl max-sm:text-2xl font-palanquin font-bold">{stat.state}</p>
                    <p className="font-montserrat leading-7 text-slate-gray">{stat.value}</p>
                  </div>)
                }
             </div>
      </div>
      <div className="flex-1 flex justify-center items-center rounded-md xl:min-h-screen max-xl:py-40 bg-blue-900 bg-cover bg-center relative max-sm:px-6">
        <img 
        className="object-contain relative z-10"
        width={610}
        height={500}
        src={
          activeShoe === "big-shoe1" ? bigShoe1 : activeShoe === "big-shoe2" ? bigShoe2 :
          activeShoe === "big-shoe3" && bigShoe3
        } 
        alt="shoe1" />
          <div className="absolute gap-4 flex sm:gap-6 -bottom-[10%] sm:left-[%10]">
         {
          shoes.map((shoe) =>
             <div key={shoe}>
                <ShoeImg imgUrl={shoe} changeShoe={changeShoe} activeShoe={activeShoe} />
             </div>
          )
         }
        </div>
      </div>

    </section>
  )
}

export default Hero
