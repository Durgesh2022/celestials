
// app/page.tsx


// import Header from '../components/header';
import Header3 from '../components/header3';
import Layout from '../components/layout';
// import Layout2 from '../components/layout2';
import EnrollPage from '../components/enroll';
import Team from '../components/team';
// import Testimonial from '../components/testimonial';
// import Layout3 from '../components/layout3';
// import ProductCarousel from '../components/offerings';
// import FAQs from '../components/faq';
// import ContactForm from '../components/contactform';
// import NewsletterSubscription from '../components/newsletter';
// import Header2 from '../components/header2';
import WellnessLandingPage from '../components/video';
import Enroll2 from '../components/courses';

// Initialize the font




export default function Home() {
  return (
    <div>
     
       <Header3 /> 

     
      
       <Layout /> 
   
       <EnrollPage />
       <Enroll2 />
       <WellnessLandingPage />
      <Team />
       
      {/* <Testimonial />
      <Layout3 /> */}
      {/* <FAQs />  
      
       <NewsletterSubscription /> */}
     
    </div>
  );
}
