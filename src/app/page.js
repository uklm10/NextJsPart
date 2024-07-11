import Head from 'next/head';
import Header from './Header';
import Testimonial from './Testimonial';
import Footer from './Footer';
import Banner from './Banner';
import AboutUs from './AboutUs';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Udayan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header/>
      <Banner/>
      <AboutUs/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}
