import { footerLogo } from "../assets/images"
import { facebook,twitter,instagram, copyrightSign } from "../assets/icons";

const Footer = () => {
  const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
  ];
  const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
  ];

  return (
    <footer className="max-container">
        <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
           <div className="flex flex-col items-start">
               <a href="/">
                 <img src={footerLogo} alt="logo" width={150} height={46} />
               </a>
               <p className="mt-6 leading-7 text-base text-slate-gray font-montserrat sm:max-w-sm ">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size in Store. Get Rewards</p>
               <div className="flex items-center gap-8 mt-5">
                 {
                  socialMedia.map((icon,index)=>(
                      <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full" key={index}>
                        <img src={icon.src} alt={icon.alt} />
                      </div>
                  ))
                 }
               </div>
           </div>
           <div className="flex flex-1 text-slate-gray justify-between lg:gap-10 gap-20 flex-wrap">
             {
              footerLinks.map((link,index)=>(
                <div key={index}>
                    <h4 className="text-2xl font-montserrat font-medium leading-normal mb-6">
                      {link.title}
                    </h4>
                    <ul>
                      {
                        link.links.map((link,index)=>(
                          <li key={index} className="font-palanquin mt-3 leading-normal hover:text-white-400 cursor-pointer">
                            <a href="/">{link.name}</a>
                          </li>
                        ))
                      }
                    </ul>
                </div>
              ))
             }
           </div>
        </div>
        <div className="flex justify-between text-slate-gray mt-24 max-sm:flex-col max-sm:items-center">
            <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
                    <img src={copyrightSign} alt="copy right" width={20} height={20} className="rounded-full" />
                    <p>
                      Copyright. All rights reserved.
                    </p>
            </div>
            <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
        </div>
    </footer>
  )
}

export default Footer
