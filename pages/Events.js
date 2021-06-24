import React from 'react'
import {Helmet} from 'react-helmet';
import Background from './Background';
import PastEvents from './slick-slider/PastEvents';
import styles from '../styles/Home.module.css';
import Navbar from './Navbar/Navbar';
import FooterLanding from './Footer/Footer';
import Slider from 'react-slick';


function Events() {
   return (
      <div>
         {/* <!-- Dynamic Title --> */}
         <Helmet>
               <title>Geeksforgeeks | KIIT - Events</title>
         </Helmet>
         <div className={styles.container}>
            <Navbar />
         </div>
         <Background clipType="clipping-events" overlayColor="bgcolor-events" style = {{position: "absolute", height: "100vh"}}></Background>
         <div id="Events_title">
            <div style={{fontWeight: "600", fontSize: "35px"}}>Events</div><br></br>
            Events are what make a club flourish, connect people, and provide an individual the opportunity to assert their identities.
         </div>
         <PastEvents/>
         <FooterLanding bgColor="footer-events"/>
      </div>
   )
}
export default Events;