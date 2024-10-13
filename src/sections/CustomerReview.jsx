import { customer1,customer2 } from "../assets/images"
import ReviewCard from "../components/ReviewCard";
const CustomerReview = () => {
  const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];

  return (
    <div className="max-container flex flex-col justify-center items-center">
       <h3 className="font-palanquin text-4xl font-bold text-center">
         What Our <span className="text-coral-red">Customers</span> Say?
       </h3>
       <p className="info-text mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their exceptional experience with us.
       </p>
       <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {
            reviews.map((review,index)=>(
              <ReviewCard key={index} {...review}/>
            ))
          }
       </div>
    </div>
  )
}

export default CustomerReview
