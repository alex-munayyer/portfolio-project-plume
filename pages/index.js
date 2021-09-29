import Head from 'next/head'
import { attributes } from '../content/home.md';

export default function Index() {
  let { title, date, cats } = attributes;
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{title}</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/css/bootstrap-datepicker.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        <link rel="stylesheet" href="css/styles.css" />
        <link rel="stylesheet" href="css/responsive-styles.css" />
      </Head>
      <div>
        <header>
          <nav>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn"><i style={{ color: '#4d4d4d' }} className="fas fa-bars" /></label>
            <img className="logo" src="images/Plume-logo.png" alt="" />
            <ul className="nav-menu">
              <li><a href="#">For your home</a></li>
              <li><a href="#">For your small business </a></li>
              <li><a href="#">For service providers</a></li>
              <li><a className="active" href="#">About Plume</a></li>
            </ul>
          </nav>
        </header>
        <section className="hero-section">
          <div className="hero-title">
            <h1 className="title-text">The foundations of Plume</h1>
          </div>
          <div className="hero-video">
            <div className="video-label">
              <h2>Watch the video</h2>
            </div>
            <div className>
              <video className="video" src="videofile.ogg" width="100%" height="auto" preload="none">
              </video>
              <img className="play-btn" src="images/Play-Button.svg" alt="" />
            </div>
          </div>
        </section>
        <section className="section-2">
          <div className="title-box">
            <hr />
            <h2 className="title-race">In the race to create smart home devices, something was lost</h2>
          </div>
          <div className="text-box">
            <p className="race-text">Most companies failed to recognize that a device is only as intelligent as the network it’s connected to.
              ISPs were blind to performance inside the home and relied on expensive, time consuming
              truck rolls to investigate concerns.
              As a result, customers are stuck with generic WiFi, unsafe networks, and a gaping
              hole where awesome experiences could be. We set to work, designing a new way forward from scratch.</p>
          </div>
          <div className="group-image">
            <img className="group-image1" src="images/group.svg" alt="" />
          </div>
        </section>
        <section className="section-3">
          <div className="title-wifi-box">
            <h1 className="title-wifi">Welcome to the new generation of WiFi</h1>
          </div>
          <div className="inner-section-3">
            <div className="history-text">
              <h2 className="text-historyPlume">Defining moments in Plume’s history</h2>
              <span className="dot-text">Click the dots to explore <img className="img-arrow" src="images/Vector-228.png" /></span>
            </div>
            <div className="history-image">
              <img className="dot-image" src="images/group-291.png" alt="" />
              <button className="dot-1 dot" type="button" />
              <button className="dot-2 dot" type="button" />
              <button className="dot-3 dot" type="button" />
              <button className="dot-4 dot" type="button" />
              <button className="dot-5 dot" type="button" />
              <button className="dot-6 dot" type="button" />
              <button className="dot-7 dot" type="button" />
              <button className="dot-8 dot" type="button" />
              <button className="dot-9 dot" type="button" />
              <button className="dot-10 dot" type="button" />
              <button className="dot-11 dot" type="button" />
              <button className="dot-12 dot" type="button" />
            </div>
          </div>
        </section>
        <section className="section-4">
          <div className="textbox-cloud">
            <h2 className="title-cloud">Our completely new approach</h2>
            <p className="text-cloud">Our cloud-controlled, software-defined approach gave ISPs the ability to
              go to market with new services–and a scaled offering–faster than ever before.
              Our system gives them a crystal-clear view of the data they need, and the
              ability to react to it, all in one place. And it allows for brand-agnostic
              harmonization of the smart home.</p>
          </div>
          <div className="image-cloud">
            <img className="image-clock" src="images/image-174.png" alt="" />
          </div>
        </section>
        <section className="section-5">
          <div className="image-map">
            <img className="image-map1" src="images/image-175.png" alt="" />
          </div>
          <div className="textbox-map">
            <h2 className="text-map">Not just for ISPs, but for the world at large</h2>
          </div>
        </section>
        <section className="section-6">
          <div className="textbox-globe">
            <h2 className="title-globe">We’ve rapidly expanded around the globe</h2>
            <p className="text-globe">We’re headquartered in Silicon Valley, California and have locations in Poland, Slovenia, Switzerland, Canada, Japan, and Taiwan. As an international company, we serve households in over 23 countries (and over 20 million homes), and that number is ever-growing. Our staff represents a diverse swath of talent, adding to our drive to bring new, cutting-edge smart home experiences to as many different people with different needs as possible.</p>
          </div>
          <div className="imagebox-globe">
            <img className="image-globe" src="images/Group-3.png" alt="" />
          </div>
        </section>
        <section className="section-7">
          <div className="imagebox-roles">
            <img className="img-r1 img-role" src="images/Vector.png" alt="" />
            <img className="img-r2 img-role" src="images/Vector-2.png" alt="" />
            <img className="img-r3 img-role" src="images/Vector-3.png" alt="" />
            <img className="img-r4 img-role" src="images/Vector-4.png" alt="" />
            <img className="img-r5 img-role" src="images/Vector-5.png" alt="" />
            <img className="img-r6 img-role" src="images/Vector-6.png" alt="" />
            <img className="img-r7 img-role" src="images/Vector-7.png" alt="" />
            <img className="img-r8 img-role" src="images/Vector-8.png" alt="" />
            <h1 className="text-roles">Want to join us?</h1>
            <div className="btn-box">
              <button className="btn-roles" type="button">View open roles<img style={{ width: '20px', marginLeft: '8px' }} src="images/group-2046.png" /></button>
            </div>
          </div>
          <div className>
          </div>
        </section>
        <section className="section-8">
          <div className="techbox">
            <div className="tech-textbox">
              <h2 className="award-title">Award-winning technology</h2>
              <ul>
                <li className="award-text"><img className="star-img" style={{ marginRight: '15px' }} src="images/star.png" /><span style={{ fontWeight: 'bold' }}>MOST INNOVATIVE 1OT/M2M STRATEGY 2020</span>
                  <br /><span className="inner-text">Light Reading’s Leading Light Awards</span></li>
                <li className="award-text"><img className="star-img" style={{ marginRight: '15px' }} src="images/star.png" /><span style={{ fontWeight: 'bold' }}>BEST PRACTICES AWARD</span>
                  <br /><span className="inner-text">Frost &amp; Sullivan</span></li>
                <li className="award-text"><img className="star-img" style={{ marginRight: '15px' }} src="images/star.png" /><span style={{ fontWeight: 'bold' }}>BEST CUSTOMER EXPERIENCE 2020</span>
                  <br /><span className="inner-text">Broadband Awards</span></li>
                <li className="award-text"><img className="star-img" style={{ marginRight: '15px' }} src="images/star.png" /><span style={{ fontWeight: 'bold' }}>BEST CONNECTED HOME STRATEGY 2020</span>
                  <br /><span className="inner-text">Broadband Awards</span></li>
              </ul>
            </div>
            <div className="tech-imagebox">
              <img className="tech-image1" src="images/Phone-Pod.png" alt="" />
            </div>
          </div>
          <section className="inner-section-1">
            <div className="inner-heading">
              <h2 className="title-inner">See what people are saying about us</h2>
            </div>
            <div className="testimonial-box">
              <div className="testimonial-1">
                <img className="testimonial-image" src="images/Forbes-Logo.png" alt="" />
                <p className="testimonial-text">“Plume's cloud-based algorithms might as well be magic
                  with how they're able to serve up top speeds to every
                  device in your home, even the ones stuck in tricky
                  corners of the house, without using massive amounts of
                  bandwidth to punch through. Plume doesn't just provide a
                  network that you don't have to think about, it serves up
                  internet that's always fast, safe, and reliable.”</p>
              </div>
              <div className="testimonial-2">
                <img className="testimonial-image" src="images/logo2.png" alt="" />
                <p className="testimonial-text">“Plume is fast becoming one of the biggest names in
                  Wi-Fi extension innovation, and its Superpods are some
                  of the best you can buy. They’re packed to the brim with
                  features, including adaptive software that dynamically
                  adjusts the Wi-Fi in your home in order to accommodate
                  changing conditions and usages.”</p>
              </div>
              <div className="testimonial-3">
                <img className="testimonial-image" src="images/logo3.png" alt="" />
                <p className="testimonial-text">“One simple issue we encounter continually while
                  working from home is connectivity. Plume brings
                  office-grade connectivity with an adaptive Wi-Fi
                  system that learns users’ habits and makes advanced
                  optimizations to allocate bandwidth where it is needed
                  most. Plume integrates a broader smart-home system that
                  connects devices and detects cyber threats.”</p>
              </div>
            </div>
          </section>
        </section>
        <section className="section-9">
          <div className="plume-textbox">
            <h2 className="plume-title">PlumeStrong</h2>
            <p className="plume-subtitle">PlumeStrong is a corporate social responsibility program designed to apply our resources (time, brainpower, product, money) for good. </p>
            <h3 className="plume-title2">Mission</h3>
            <p className="plume-text">As Plumians, our ambition is to build on our diversity of lived experiences to create more equitable opportunities for underserved communities through community engagement and education.</p>
            <h3 className="plume-title3">Tenets</h3>
            <ul>
              <li className="plume-text tenets"><strong>Empowerment:</strong> Agency resides with those we serve.</li>
              <li className="plume-text tenets"><strong>Partnership:</strong> Collaboration with communities &amp; organizations; outreach and education.
              </li><li className="plume-text tenets"><strong>Pioneership:</strong>Take a forward-thinking approach and help communities adapt.</li>
              <li className="plume-text tenets"><strong>Empathy:</strong>  Be kind and understanding of each other and those we serve.</li>
            </ul>
            <h3 className="plume-text foot-text"> <strong>Stay tuned to learn more about our pilot programs.</strong></h3>
          </div>
          <div className="plume-imagebox">
            <img className="plume-image" src="images/image-1.png" alt="" />
          </div>
        </section>
        <section className="footer">
          <section className="footer-wrap">
            <section className="footer-section1">
              <div className="foot-image ">
                <img src="images/Plume-logo-footer.png" alt="" />
              </div>
              <div className="foot-menu-1">
                <h2 className="menu-title">Support for</h2>
                <ul className="menu-items">
                  <li>HomePass</li>
                  <li>WorkPass</li>
                  <li>Plume partners</li>
                </ul>
              </div>
              <div className="foot-menu-2">
                <h2 className="menu-title">Resources for</h2>
                <ul className="menu-items">
                  <li>Smart homes</li>
                  <li>Small-medium businesses</li>
                  <li>Service Providers</li>
                </ul>
              </div>
              <div className="foot-menu-3">
                <h2 className="menu-title1">Support for</h2>
                <ul className="menu-items">
                  <li>Investors</li>
                  <li>Developers</li>
                  <li>Press and media</li>
                </ul>
              </div>
              <div className="foot-menu-4">
                <h2 className="menu-title">Info about</h2>
                <ul className="menu-items">
                  <li>Plume</li>
                  <li>Leadership</li>
                  <li>Careers</li>
                  <li>Legal</li>
                </ul>
              </div>
              <div className="foot-menu-5">
                <h2 className="menu-title1">Support for</h2>
                <ul className="menu-items">
                  <li>Trust</li>
                  <li>Trademarks</li>
                  <li>Accessibility statement</li>
                  <li>Site-map</li>
                </ul>
              </div>
            </section>
            <div className="responsive-footer">
              <div className="res-imagebox">
                <img className="res-img" src="images/Plume.png" alt="" />
              </div>
              <div className="res-social">
                <div className>
                  <a href="#"><img src="images/FB.png" alt="" /></a>
                </div>
                <div className>
                  <a href="#">  <img src="images/LinkedIn.png" alt="" /></a>
                </div>
                <div className>
                  <a href="#">  <img src="images/twitter.png" alt="" /></a>
                </div>
              </div>
            </div>
            <section className="footer-section2">
              <div className="imagebox-footer">
                <img src="images/country-selector.png" alt="" />
              </div>
              <div className="textbox-footer">
                <p className="copyright-text">© 2021 Plume Design, Inc. All rights reserved. AI Security,
                  Advanced IoT Protection, Harvest, Haystack, HomePass, OpenSync,
                  Plume, Plume Adaptive WiFi, Plume IQ, PowerPod, Signal, SuperPod,
                  and WorkPass are trademarks or registered trademarks of Plume Design,
                  Inc. See trademark guidelines. Other company and product names are
                  used for informational purposes only and may be trademarks of their respective owners.</p>
              </div>
              <div className="social-icons">
                <div className>
                  <a href="#"><img src="images/FB.png" alt="" /></a>
                </div>
                <div className>
                  <a href="#">  <img src="images/LinkedIn.png" alt="" /></a>
                </div>
                <div className>
                  <a href="#">  <img src="images/twitter.png" alt="" /></a>
                </div>
              </div>
            </section>
          </section>
        </section>
      </div>
    </div>
  )
}
