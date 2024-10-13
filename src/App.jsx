/* eslint-disable no-unused-vars */
import Hero from './sections/Hero';
import Footer from './sections/Footer'
import CustomerReview from './sections/CustomerReview'
import Products from './sections/Products'
import Services from './sections/Services'
import SpecialOffers from './sections/SpecialOffers'
import Subscribe from './sections/Subscribe'
import SuperQuality from './sections/SuperQuality'
import Nav from './components/Nav';
import Clone from './sections/Clone';

function App(){
  return(
    <main className="relative">
      <Nav />
      <section className="x1:padding-l wide:padding-r px-7 padding-b">
        <Hero />
      </section>
      <section className="padding">
        <Products />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10"> 
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className='px-8'>
        <Clone/>
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>

    </main>
  )
}

export default App;