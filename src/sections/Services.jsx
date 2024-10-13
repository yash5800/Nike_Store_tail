import { truckFast,shieldTick,support } from "../assets/icons";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];
  return (
    <section className="flex flex-wrap justify-center gap-9 max-container text-white">
        {
          services.map((service,index)=>(
             <ServiceCard key={index} {...service}/>
          ))
        }
    </section>
  )
}

export default Services
