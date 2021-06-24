import styles from '../styles/Home.module.css';
import Navbar from './Navbar/Navbar';
import Head from 'next/head';
import LandingBody from './LandingBody/LandingBody';

export default function Home() {
  return (
    <div style = {{margin: "0px", padding: "0px"}}>
    <Head>
      {/* fonts and other links */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,900&display=swap" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Roboto&display=swap"/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      {/* Reset CSS */}
      <link rel="stylesheet" href="reset.css" type="text/css" />
      {/* MDB icon */}
      <link rel="icon" href="img/mdb-favicon.ico" type="image/x-icon" />
      {/* Font Awesome */}
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"/>
      {/* Background Swirl animation */}
      <script src="swirl.js" defer></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js"></script>
      <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/PixiPlugin.min.js?r=3"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.5.1/pixi.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/pixi-filters/1.0.6/filters.min.js"></script>
      <link rel="stylesheet" href="swirl.css" />
      {/* Animate.css CDN */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css"/>
  </Head>
    <div className={styles.container}>
      <Navbar />
      <LandingBody/>
    </div>
    </div>
  )
}
