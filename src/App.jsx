import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Add Google Fonts
    const link1 = document.createElement('link');
    link1.rel = 'preconnect';
    link1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://fonts.gstatic.com';
    link2.crossOrigin = 'anonymous';
    document.head.appendChild(link2);

    const link3 = document.createElement('link');
    link3.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap';
    link3.rel = 'stylesheet';
    document.head.appendChild(link3);

    // Add Favicon
    const favicon = document.createElement('link');
    favicon.rel = 'shortcut icon';
    favicon.type = 'image/x-icon';
    favicon.href = '/images/favicon.png';
    document.head.appendChild(favicon);

    // Load CSS files from public folder
    const cssFiles = [
      '/css/bootstrap.min.css',
      '/css/slicknav.min.css',
      '/css/swiper-bundle.min.css',
      '/css/all.min.css',
      '/css/animate.css',
      '/css/magnific-popup.css',
      '/css/mousecursor.css',
      '/css/custom.css',
    ];

    cssFiles.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    });

    // Load JS files with proper order
    const scriptQueue = [
      { src: '/js/jquery-3.7.1.min.js', key: 'jquery' },
      { src: '/js/jquery.slicknav.js', key: 'slicknav' },
      { src: '/js/jquery.waypoints.min.js', key: 'waypoints' },
      { src: '/js/jquery.counterup.min.js', key: 'counterup' },
      { src: '/js/jquery.magnific-popup.min.js', key: 'magnific' },
      { src: '/js/jquery.mb.YTPlayer.min.js', key: 'ytplayer' },
      { src: '/js/bootstrap.min.js', key: 'bootstrap' },
      { src: '/js/validator.min.js', key: 'validator' },
      { src: '/js/swiper-bundle.min.js', key: 'swiper' },
      { src: '/js/isotope.min.js', key: 'isotope' },
      { src: '/js/SmoothScroll.js', key: 'smoothscroll' },
      { src: '/js/parallaxie.js', key: 'parallaxie' },
      { src: '/js/gsap.min.js', key: 'gsap' },
      { src: '/js/SplitText.js', key: 'splittext' },
      { src: '/js/ScrollTrigger.min.js', key: 'scrolltrigger' },
      { src: '/js/magiccursor.js', key: 'magiccursor' },
      { src: '/js/wow.min.js', key: 'wow' },
      { src: '/js/function.js', key: 'function' },
    ];

    // Track loaded scripts to prevent duplicates
    const loadedScripts = new Set();

    // Function to load a single script
    const loadScript = (src, key) => {
      return new Promise((resolve, reject) => {
        // Check if script already exists
        const existingScript = document.querySelector(`script[data-key="${key}"]`);
        if (existingScript) {
          console.log(`Script ${key} already loaded, skipping`);
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.dataset.key = key;
        script.async = false; // Load sequentially for dependencies
        script.onload = () => {
          loadedScripts.add(key);
          console.log(`Loaded: ${key}`);
          resolve();
        };
        script.onerror = () => {
          console.error(`Failed to load: ${key} (${src})`);
          reject(new Error(`Failed to load ${key}`));
        };
        document.body.appendChild(script);
      });
    };

    // Load scripts sequentially
    const loadAllScripts = async () => {
      for (const item of scriptQueue) {
        try {
          await loadScript(item.src, item.key);
        } catch (error) {
          console.error('Error loading script:', error);
        }
      }
      console.log('All scripts loaded!');
      window.dispatchEvent(new Event('scriptsLoaded'));
    };

    // Start loading
    loadAllScripts();

    // Cleanup
    return () => {
      const scriptsToRemove = document.querySelectorAll('script[data-key]');
      scriptsToRemove.forEach(script => script.remove());
    };
  }, []);

  return (
    <>
      {/* Preloader Start */}
      <div className="preloader">
        <div className="loading-container">
          <div className="loading"></div>
          <div id="loading-icon"><img src="/images/loader.svg" alt="" /></div>
        </div>
      </div>
      {/* Preloader End */}

      {/* Header Start */}
      <header className="main-header">
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              {/* Logo Start */}
              <a className="navbar-brand" href="./">
                <img src="/images/logo.svg" alt="Logo" />
              </a>
              {/* Logo End */}

              {/* Main Menu Start */}
              <div className="collapse navbar-collapse main-menu">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    <li className="nav-item submenu"><a className="nav-link" href="./">Home</a>
                      <ul>
                        <li className="nav-item"><a className="nav-link" href="index.html">Home - Main</a></li>
                        <li className="nav-item"><a className="nav-link" href="index-image.html">Home - Image</a></li>
                        <li className="nav-item"><a className="nav-link" href="index-slider.html">Home - Slider</a></li>
                      </ul>
                    </li>
                    <li className="nav-item"><a className="nav-link" href="about.html">About Us</a></li>
                    <li className="nav-item"><a className="nav-link" href="services.html">Services</a></li>
                    <li className="nav-item submenu"><a className="nav-link" href="#">Pages</a>
                      <ul>
                        <li className="nav-item"><a className="nav-link" href="service-single.html">Service Details</a></li>
                        <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
                        <li className="nav-item"><a className="nav-link" href="blog-single.html">Blog Details</a></li>
                        <li className="nav-item"><a className="nav-link" href="projects.html">Projects</a></li>
                        <li className="nav-item"><a className="nav-link" href="project-single.html">Project Details</a></li>
                        <li className="nav-item"><a className="nav-link" href="team.html">Team</a></li>
                        <li className="nav-item"><a className="nav-link" href="team-single.html">Team Details</a></li>
                        <li className="nav-item"><a className="nav-link" href="pricing.html">Pricing Plan</a></li>
                        <li className="nav-item"><a className="nav-link" href="testimonial.html">Testimonials</a></li>
                        <li className="nav-item"><a className="nav-link" href="image-gallery.html">Image Gallery</a></li>
                        <li className="nav-item"><a className="nav-link" href="video-gallery.html">Video Gallery</a></li>
                        <li className="nav-item"><a className="nav-link" href="faqs.html">FAQs</a></li>
                        <li className="nav-item"><a className="nav-link" href="404.html">404</a></li>
                      </ul>
                    </li>
                    <li className="nav-item"><a className="nav-link" href="contact.html">Contact Us</a></li>
                  </ul>
                </div>

                {/* Header Social Box Start */}
                <div className="header-social-box d-inline-flex">
                  {/* Header Social Links Start */}
                  <div className="header-social-links">
                    <ul>
                      <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    </ul>
                  </div>
                  {/* Header Social Links End */}

                  {/* Header Btn Start */}
                  <div className="header-btn">
                    <button className="btn btn-popup" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                      <img src="/images/header-btn-dot.svg" alt="" />
                    </button>

                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight">
                      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                      <div className="offcanvas-body">
                        <div className="header-contact-box">
                          <div className="icon-box">
                            <img src="/images/icon-phone-accent.svg" alt="" />
                          </div>
                          <div className="header-contact-box-content">
                            <h3>phone</h3>
                            <p>+123 456 789</p>
                          </div>
                        </div>
                        <div className="header-contact-box">
                          <div className="icon-box">
                            <img src="/images/icon-mail-accent.svg" alt="" />
                          </div>
                          <div className="header-contact-box-content">
                            <h3>email</h3>
                            <p>info@domainname.com</p>
                          </div>
                        </div>
                        <div className="header-contact-box">
                          <div className="icon-box">
                            <img src="/images/icon-location-accent.svg" alt="" />
                          </div>
                          <div className="header-contact-box-content">
                            <h3>address</h3>
                            <p>123 Creative Lane London, SW1A 1AA United Kingdom</p>
                          </div>
                        </div>
                        <div className="header-social-links sidebar-social-links">
                          <h3>stay connected</h3>
                          <ul>
                            <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-toggle"></div>
            </div>
          </nav>
          <div className="responsive-menu"></div>
        </div>
      </header>
      {/* Header End */}

      {/* Hero Section Start*/}
      <div className="hero">
        <div className="hero-bg-video">
          <video autoPlay muted loop id="myVideo">
            <source src="https://demo.awaikenthemes.com/assets/videos/artistic-seo-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <div className="hero-content">
                <div className="section-title">
                  <h1 className="text-anime-style-2" data-cursor="-opaque">Elevate your business with our tailored <span>digital marketing solutions</span></h1>
                  <p className="wow fadeInUp">Elevate your brand's online presence with our expert SEO solutions. We help you attract the right audience, improve search rankings.</p>
                </div>
                <div className="hero-content-btn wow fadeInUp" data-wow-delay="0.2s">
                  <div className="hero-btn">
                    <a href="contact.html" className="btn-default">get started</a>
                  </div>
                  <div className="video-play-button">
                    <p>watch video</p>
                    <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video" data-cursor-text="Play">
                      <i className="fa-solid fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="our-agency-circle">
                <a href="contact.html">
                  <figure>
                    <img src="/images/our-agency-circle.svg" alt="" />
                  </figure>
                  <div className="agency-circle-arrow">
                    <img src="/images/our-agency-arrow.svg" alt="" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section End*/}

      {/* Scrolling Ticker Section Start */}
      <div className="our-scrolling-ticker">
        <div className="scrolling-ticker-box">
          <div className="scrolling-content">
            <span><img src="/images/asterisk-icon.svg" alt="" />Keyword Research</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Content Optimization</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Mobile Optimization</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Analytics Tracking</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Keyword Research</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Content Optimization</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Mobile Optimization</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Analytics Tracking</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Keyword Research</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Content Optimization</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Mobile Optimization</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Analytics Tracking</span>
          </div>
          <div className="scrolling-content">
            <span><img src="/images/asterisk-icon.svg" alt="" />Keyword Research</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Content Optimization</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Mobile Optimization</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Analytics Tracking</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Keyword Research</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Content Optimization</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Mobile Optimization</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Analytics Tracking</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Keyword Research</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Content Optimization</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Mobile Optimization</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Analytics Tracking</span>
          </div>
        </div>
      </div>
      {/* Scrolling Ticker Section End */}

      {/* About Us Section Start */}
      <div className="about-us">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-7">
              <div className="section-title">
                <h3 className="wow fadeInUp">about us</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Driving <span>growth</span> through smarter SEO</h2>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="section-content-btn">
                <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                  <p>Our digital services empower brands with innovative strategies and solutions for sustainable growth and engagement.</p>
                </div>
                <div className="section-btn wow fadeInUp" data-wow-delay="0.4s">
                  <a href="about.html" className="btn-default">more about</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="about-us-images">
                <div className="about-img-1">
                  <figure className="image-anime reveal">
                    <img src="/images/about-img-1.jpg" alt="" />
                  </figure>
                  <div className="about-more-circle">
                    <a href="about.html">
                      <img src="/images/about-more-circle.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="about-img-2">
                  <figure className="image-anime reveal">
                    <img src="/images/about-img-2.jpg" alt="" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-agency-list">
                <div className="about-agency-item active wow fadeInUp">
                  <div className="icon-box">
                    <img src="/images/icon-about-agency-1.svg" alt="" />
                  </div>
                  <div className="agency-item-content">
                    <h3>Results-Driven Optimization</h3>
                    <p>We focus on delivering measurable results by optimizing website to achieve higher rankings, increased traffic.</p>
                  </div>
                </div>
                <div className="about-agency-item wow fadeInUp" data-wow-delay="0.2s">
                  <div className="icon-box">
                    <img src="/images/icon-about-agency-2.svg" alt="" />
                  </div>
                  <div className="agency-item-content">
                    <h3>Tailored Marketing Solutions</h3>
                    <p>We focus on delivering measurable results by optimizing website to achieve higher rankings, increased traffic.</p>
                  </div>
                </div>
                <div className="about-agency-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="icon-box">
                    <img src="/images/icon-about-agency-3.svg" alt="" />
                  </div>
                  <div className="agency-item-content">
                    <h3>Keyword Research Excellence</h3>
                    <p>We focus on delivering measurable results by optimizing website to achieve higher rankings, increased traffic.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Us Section End */}

      {/* Our Services Section Start */}
      <div className="our-services">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="our-services-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">services</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">Comprehensive SEO <span>services</span> to elevate Your online presence</h2>
                </div>
                <div className="service-btn wow fadeInUp" data-wow-delay="0.2s">
                  <a href="services.html" className="btn-default">view all services</a>
                </div>
                <div className="our-agency-circle">
                  <a href="contact.html">
                    <figure>
                      <img src="/images/our-agency-circle.svg" alt="" />
                    </figure>
                    <div className="agency-circle-arrow">
                      <img src="/images/our-agency-arrow.svg" alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="our-services-box">
                <div className="our-services-list">
                  <div className="service-item wow fadeInUp">
                    <div className="icon-box">
                      <img src="/images/icon-service-1.svg" alt="" />
                    </div>
                    <div className="service-title">
                      <h3><a href="service-single.html">keywords research and strategy</a></h3>
                    </div>
                    <div className="service-image">
                      <figure>
                        <img src="/images/service-1.jpg" alt="" />
                      </figure>
                      <div className="readmore-btn">
                        <a href="service-single.html">
                          <img src="/images/arrow-dark.svg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="service-item wow fadeInUp" data-wow-delay="0.2s">
                    <div className="icon-box">
                      <img src="/images/icon-service-2.svg" alt="" />
                    </div>
                    <div className="service-title">
                      <h3><a href="service-single.html">Content Creation and Optimization</a></h3>
                    </div>
                    <div className="service-image">
                      <figure>
                        <img src="/images/service-2.jpg" alt="" />
                      </figure>
                      <div className="readmore-btn">
                        <a href="service-single.html">
                          <img src="/images/arrow-dark.svg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="service-item wow fadeInUp" data-wow-delay="0.4s">
                    <div className="icon-box">
                      <img src="/images/icon-service-3.svg" alt="" />
                    </div>
                    <div className="service-title">
                      <h3><a href="service-single.html">SEO Consultation and Strategies</a></h3>
                    </div>
                    <div className="service-image">
                      <figure>
                        <img src="/images/service-3.jpg" alt="" />
                      </figure>
                      <div className="readmore-btn">
                        <a href="service-single.html">
                          <img src="/images/arrow-dark.svg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="service-item wow fadeInUp" data-wow-delay="0.6s">
                    <div className="icon-box">
                      <img src="/images/icon-service-4.svg" alt="" />
                    </div>
                    <div className="service-title">
                      <h3><a href="service-single.html">SEO Performance Tracking and Analytic</a></h3>
                    </div>
                    <div className="service-image">
                      <figure>
                        <img src="/images/service-4.jpg" alt="" />
                      </figure>
                      <div className="readmore-btn">
                        <a href="service-single.html">
                          <img src="/images/arrow-dark.svg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="our-service-footer wow fadeInUp" data-wow-delay="0.8s">
                  <p>Let's make something great work together. <a href="contact.html">get free quote</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Services Section End */}

      {/* How it Work Section Start */}
      <div className="how-it-work">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-7">
              <div className="section-title">
                <h3 className="wow fadeInUp">how it work</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Step by Step <span>guide</span> to SEO success</h2>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                <p>Our process simplifies SEO into clear, actionable steps keyword research and content optimization to link building and performance tracking, we ensure your website achieves sustainable.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="how-work-step-box wow fadeInUp" data-wow-delay="0.4s">
                <div className="how-work-step-item">
                  <h2>01</h2>
                  <h3>keyword research</h3>
                  <p>We identify high-impact keywords tailored to your target audience, industry, and goals.</p>
                </div>
                <div className="how-work-step-item">
                  <h2>02</h2>
                  <h3>content optimization</h3>
                  <p>We identify high-impact keywords tailored to your target audience, industry, and goals.</p>
                </div>
                <div className="how-work-step-item">
                  <h2>03</h2>
                  <h3>technical SEO tools</h3>
                  <p>We identify high-impact keywords tailored to your target audience, industry, and goals.</p>
                </div>
                <div className="how-work-step-item">
                  <h2>04</h2>
                  <h3>performance tracking</h3>
                  <p>We identify high-impact keywords tailored to your target audience, industry, and goals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* How it Work Section End */}

      {/* Why Choose Us Section Start */}
      <div className="why-choose-us">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-7">
              <div className="section-title">
                <h3 className="wow fadeInUp">why choose us</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Expert <span>strategies</span>, proven SEO success</h2>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="section-btn wow fadeInUp" data-wow-delay="0.2s">
                <a href="contact.html" className="btn-default">contact us</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="why-choose-boxes">
                <div className="why-choose-counter why-choose-counter-img">
                  <img src="/images/why-choose-counter-img.png" alt="" />
                </div>
                <div className="why-choose-counter">
                  <div className="why-choose-counter-title">
                    <h3>project completed</h3>
                  </div>
                  <div className="why-choose-counter-content">
                    <h2><span className="counter">530</span>+</h2>
                    <p>With over 530 successful SEO projects completed, rankings.</p>
                  </div>
                </div>
                <div className="why-choose-counter">
                  <div className="why-choose-counter-title">
                    <h3>satisfied customers</h3>
                  </div>
                  <div className="why-choose-counter-content">
                    <h2><span className="counter">853</span>K+</h2>
                    <p>With over 530 successful SEO projects completed, rankings.</p>
                  </div>
                </div>
                <div className="why-choose-counter">
                  <div className="why-choose-counter-title">
                    <h3>achieve awards</h3>
                  </div>
                  <div className="why-choose-counter-content">
                    <h2><span className="counter">850</span>+</h2>
                    <p>With over 530 successful SEO projects completed, rankings.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="why-choose-image">
                <figure className="image-anime reveal">
                  <img src="/images/why-choose-image.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us Section End */}

      {/* Our Projects Section Start */}
      <div className="our-projects">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <h3 className="wow fadeInUp">our project</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Delivering results with every <span>project</span></h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-btn wow fadeInUp" data-wow-delay="0.2s">
                <a href="projects.html" className="btn-default">all projects</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="project-item wow fadeInUp">
                <div className="project-image">
                  <figure>
                    <img src="/images/project-1.jpg" alt="" />
                  </figure>
                  <div className="readmore-btn">
                    <a href="project-single.html">
                      <img src="/images/our-agency-arrow.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <p>content optimization</p>
                  <h3><a href="project-single.html">E-commerce Optimization Success Stories</a></h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="project-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="project-image">
                  <figure>
                    <img src="/images/project-2.jpg" alt="" />
                  </figure>
                  <div className="readmore-btn">
                    <a href="project-single.html">
                      <img src="/images/our-agency-arrow.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <p>Mobile optimization</p>
                  <h3><a href="project-single.html">High-Impact Content Marketing Strategies</a></h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="project-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="project-image">
                  <figure>
                    <img src="/images/project-3.jpg" alt="" />
                  </figure>
                  <div className="readmore-btn">
                    <a href="project-single.html">
                      <img src="/images/our-agency-arrow.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <p>E-commerce SEO</p>
                  <h3><a href="project-single.html">Competitive Market Domination Plans</a></h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="project-item wow fadeInUp" data-wow-delay="0.6s">
                <div className="project-image">
                  <figure>
                    <img src="/images/project-4.jpg" alt="" />
                  </figure>
                  <div className="readmore-btn">
                    <a href="project-single.html">
                      <img src="/images/our-agency-arrow.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <p>Analytics tracking</p>
                  <h3><a href="project-single.html">Start-to-Finish Website Optimization</a></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Projects Section End */}

      {/* Company Benefit Section Start */}
      <div className="company-benefits">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="company-benefit-box">
                <div className="company-benefit-content">
                  <div className="section-title">
                    <h3 className="wow fadeInUp">company benefits</h3>
                    <h2 className="text-anime-style-2" data-cursor="-opaque">Maximizing growth with expert <span>SEO</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">Unlock your business's full potential with our expert SEO services We focus driving sustainable growth through improved search rankings, increased website traffic enhanced online visibility, ensuring your brand reaches.</p>
                  </div>
                  <div className="company-benefit-body wow fadeInUp" data-wow-delay="0.4s">
                    <ul>
                      <li>Higher Search Engine Rankings</li>
                      <li>Boosted Online Visibility</li>
                    </ul>
                  </div>
                  <div className="company-benefit-list">
                    <div className="company-benefit-item wow fadeInUp">
                      <div className="icon-box">
                        <img src="/images/icon-company-benefit-1.svg" alt="" />
                      </div>
                      <div className="company-benefit-item-content">
                        <h3>Cost-Effective Marketing</h3>
                      </div>
                    </div>
                    <div className="company-benefit-item wow fadeInUp" data-wow-delay="0.2s">
                      <div className="icon-box">
                        <img src="/images/icon-company-benefit-2.svg" alt="" />
                      </div>
                      <div className="company-benefit-item-content">
                        <h3>Stronger Brand Credibility</h3>
                      </div>
                    </div>
                    <div className="company-benefit-item wow fadeInUp" data-wow-delay="0.4s">
                      <div className="icon-box">
                        <img src="/images/icon-company-benefit-3.svg" alt="" />
                      </div>
                      <div className="company-benefit-item-content">
                        <h3>Competitive Advantage</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="company-benefit-images">
                  <div className="company-benefit-img">
                    <figure className="image-anime reveal">
                      <img src="/images/company-benefit-img.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="company-since-circle">
                    <img src="/images/company-since-circle.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Company Benefit Section End */}

      {/* Our Pricing Section Start */}
      <div className="our-pricing">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <h3 className="wow fadeInUp">pricing plan</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Flexible <span>plans</span> for every business</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                <p>Our pricing plans are designed to fit businesses of all sizes and goals. Whether you're a startup or an established brand, we offer tailored SEO solutions that deliver measurable results while staying within your budget.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="our-pricing-box wow fadeInUp">
                <div className="our-pricing-swich form-check form-switch">
                  <label className="form-check-label" htmlFor="planToggle" id="toggleLabelMonthly">Monthly</label>
                  <input className="form-check-input" type="checkbox" id="planToggle" />
                  <label className="form-check-label" htmlFor="planToggle" id="toggleLabelYearly">Yearly</label>
                </div>
                <div className="pricing-tab-item" id="monthly">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="pricing-item">
                        <div className="pricing-header">
                          <h3>Basic plan</h3>
                          <p>Our popular plan for small teams.</p>
                          <h2>$29<sub>/per month</sub></h2>
                        </div>
                        <div className="pricing-body">
                          <ul>
                            <li>comprehensive website audit</li>
                            <li>keyword research and analysis</li>
                            <li>content creation and optimization</li>
                            <li>local seo implementation</li>
                          </ul>
                        </div>
                        <div className="pricing-btn">
                          <a href="#" className="btn-highlighted">get started now</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="pricing-item highlighted-box">
                        <div className="pricing-header">
                          <h3>standard plan</h3>
                          <p>Our popular plan for small teams.</p>
                          <h2>$39<sub>/per month</sub></h2>
                        </div>
                        <div className="pricing-body">
                          <ul>
                            <li>comprehensive website audit</li>
                            <li>keyword research and analysis</li>
                            <li>content creation and optimization</li>
                            <li>local seo implementation</li>
                          </ul>
                        </div>
                        <div className="pricing-btn">
                          <a href="#" className="btn-highlighted">get started now</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="pricing-item">
                        <div className="pricing-header">
                          <h3>Premium plan</h3>
                          <p>Our popular plan for small teams.</p>
                          <h2>$49<sub>/per month</sub></h2>
                        </div>
                        <div className="pricing-body">
                          <ul>
                            <li>comprehensive website audit</li>
                            <li>keyword research and analysis</li>
                            <li>content creation and optimization</li>
                            <li>local seo implementation</li>
                          </ul>
                        </div>
                        <div className="pricing-btn">
                          <a href="#" className="btn-highlighted">get started now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pricing-tab-item d-none" id="yearly">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="pricing-item">
                        <div className="pricing-header">
                          <h3>Basic plan</h3>
                          <p>Our popular plan for small teams.</p>
                          <h2>$129<sub>/per year</sub></h2>
                        </div>
                        <div className="pricing-body">
                          <ul>
                            <li>comprehensive website audit</li>
                            <li>keyword research and analysis</li>
                            <li>content creation and optimization</li>
                            <li>local seo implementation</li>
                          </ul>
                        </div>
                        <div className="pricing-btn">
                          <a href="#" className="btn-highlighted">get started now</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="pricing-item highlighted-box">
                        <div className="pricing-header">
                          <h3>standard plan</h3>
                          <p>Our popular plan for small teams.</p>
                          <h2>$139<sub>/per year</sub></h2>
                        </div>
                        <div className="pricing-body">
                          <ul>
                            <li>comprehensive website audit</li>
                            <li>keyword research and analysis</li>
                            <li>content creation and optimization</li>
                            <li>local seo implementation</li>
                          </ul>
                        </div>
                        <div className="pricing-btn">
                          <a href="#" className="btn-highlighted">get started now</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="pricing-item">
                        <div className="pricing-header">
                          <h3>Premium plan</h3>
                          <p>Our popular plan for small teams.</p>
                          <h2>$149<sub>/per year</sub></h2>
                        </div>
                        <div className="pricing-body">
                          <ul>
                            <li>comprehensive website audit</li>
                            <li>keyword research and analysis</li>
                            <li>content creation and optimization</li>
                            <li>local seo implementation</li>
                          </ul>
                        </div>
                        <div className="pricing-btn">
                          <a href="#" className="btn-highlighted">get started now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pricing-benefit-list wow fadeInUp" data-wow-delay="0.4s">
                <ul>
                  <li><img src="/images/icon-pricing-benefit-1.svg" alt="" />Get 30 day free trial</li>
                  <li><img src="/images/icon-pricing-benefit-2.svg" alt="" />No any hidden fees pay</li>
                  <li><img src="/images/icon-pricing-benefit-3.svg" alt="" />You can cancel anytime </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Pricing Section End */}

      {/* Our Testimonial Section Start */}
      <div className="our-testimonial">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-7">
              <div className="section-title">
                <h3 className="wow fadeInUp">client testimonials</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Expert <span>strategies</span>, proven SEO Success</h2>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="section-btn wow fadeInUp" data-wow-delay="0.2s">
                <a href="testimonial.html" className="btn-default">all testimonials</a>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="testimonial-review-box">
                <div className="testimonial-review-header">
                  <div className="testimonial-review-counter-title">
                    <h2><span className="counter">4.9</span></h2>
                  </div>
                  <div className="testimonial-review-image">
                    <div className="satisfy-client-images">
                      <div className="satisfy-client-image">
                        <figure className="image-anime reveal">
                          <img src="/images/satisfy-client-img-1.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="satisfy-client-image">
                        <figure className="image-anime reveal">
                          <img src="/images/satisfy-client-img-2.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="satisfy-client-image">
                        <figure className="image-anime reveal">
                          <img src="/images/satisfy-client-img-3.jpg" alt="" />
                        </figure>
                      </div>
                    </div>
                    <div className="satisfy-client-content wow fadeInUp">
                      <p>Our Client</p>
                      <p>(5k+ Reviews)</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-review-content wow fadeInUp" data-wow-delay="0.2s">
                  <h3>Customer experiences that speak for themselves</h3>
                </div>
                <div className="testimonial-review-btn wow fadeInUp" data-wow-delay="0.4s">
                  <a href="contact.html" className="btn-default">contact now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="testimonial-slider">
                <div className="swiper">
                  <div className="swiper-wrapper" data-cursor-text="Drag">
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-header">
                          <div className="testimonial-company-logo">
                            <img src="/images/company-logo-1.svg" alt="" />
                          </div>
                          <div className="testimonial-quote">
                            <img src="/images/testimonial-quote.svg" alt="" />
                          </div>
                        </div>
                        <div className="testimonial-content">
                          <p>The team transformed our brand's presence creativity precisio exceeded expectations! Their digital marketing strategies helped us reach a broader audience and significantly boosted our sales.</p>
                        </div>
                        <div className="testimonial-body">
                          <div className="author-content">
                            <h3>Sarah Mitchell</h3>
                            <p>Marketing Director</p>
                          </div>
                          <div className="testimonial-rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-header">
                          <div className="testimonial-company-logo">
                            <img src="/images/company-logo-2.svg" alt="" />
                          </div>
                          <div className="testimonial-quote">
                            <img src="/images/testimonial-quote.svg" alt="" />
                          </div>
                        </div>
                        <div className="testimonial-content">
                          <p>The team transformed our brand's presence creativity precisio exceeded expectations! Their digital marketing strategies helped us reach a broader audience and significantly boosted our sales.</p>
                        </div>
                        <div className="testimonial-body">
                          <div className="author-content">
                            <h3>Sarah Mitchell</h3>
                            <p>Marketing Director</p>
                          </div>
                          <div className="testimonial-rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-header">
                          <div className="testimonial-company-logo">
                            <img src="/images/company-logo-2.svg" alt="" />
                          </div>
                          <div className="testimonial-quote">
                            <img src="/images/testimonial-quote.svg" alt="" />
                          </div>
                        </div>
                        <div className="testimonial-content">
                          <p>The team transformed our brand's presence creativity precisio exceeded expectations! Their digital marketing strategies helped us reach a broader audience and significantly boosted our sales.</p>
                        </div>
                        <div className="testimonial-body">
                          <div className="author-content">
                            <h3>Sarah Mitchell</h3>
                            <p>Marketing Director</p>
                          </div>
                          <div className="testimonial-rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-pagination"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="agency-supports-slider">
                <div className="swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="agency-supports-logo">
                        <img src="/images/agency-supports-logo-1.svg" alt="" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="agency-supports-logo">
                        <img src="/images/agency-supports-logo-2.svg" alt="" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="agency-supports-logo">
                        <img src="/images/agency-supports-logo-3.svg" alt="" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="agency-supports-logo">
                        <img src="/images/agency-supports-logo-4.svg" alt="" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="agency-supports-logo">
                        <img src="/images/agency-supports-logo-5.svg" alt="" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="agency-supports-logo">
                        <img src="/images/agency-supports-logo-6.svg" alt="" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="agency-supports-logo">
                        <img src="/images/agency-supports-logo-3.svg" alt="" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="agency-supports-logo">
                        <img src="/images/agency-supports-logo-5.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Testimonial Section End */}

      {/* Our FAQs Section Start */}
      <div className="our-faqs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faqs-contact-box">
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">Get in <span>touch</span></h2>
                  <p className="wow fadeInUp">We're here to help! Reach out to us for expert guidance, personalized SEO solutions, or any questions you have.</p>
                </div>
                <div className="faqs-contact-form">
                  <form id="contactForm" action="#" method="POST" data-toggle="validator" className="wow fadeInUp" data-wow-delay="0.2s">
                    <div className="row">
                      <div className="form-group col-md-6 mb-4">
                        <input type="text" name="fname" className="form-control" id="fname" placeholder="First Name" required />
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="form-group col-md-6 mb-4">
                        <input type="text" name="lname" className="form-control" id="lname" placeholder="Last Name" required />
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="form-group col-md-6 mb-4">
                        <input type="text" name="phone" className="form-control" id="phone" placeholder="Phone No." required />
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="form-group col-md-6 mb-4">
                        <input type="email" name="email" className="form-control" id="email" placeholder="E-mail" required />
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="form-group col-md-12 mb-5">
                        <textarea name="message" className="form-control" id="message" rows="4" placeholder="Message"></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="col-md-12">
                        <button type="submit" className="btn-highlighted"><span>submit message</span></button>
                        <div id="msgSubmit" className="h3 hidden"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faqs-contant">
                <div className="section-title">
                  <h3 className="wow fadeInUp">faqs</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">Common <span>SEO</span> questions</h2>
                </div>
                <div className="faq-accordion" id="faqaccordion">
                  <div className="accordion-item wow fadeInUp">
                    <h2 className="accordion-header" id="heading1">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                        What services does your agency offer?
                      </button>
                    </h2>
                    <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#faqaccordion">
                      <div className="accordion-body">
                        <p>Project timelines vary based on complexity and scope We provide a detailed timeline during the initial consultation.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                    <h2 className="accordion-header" id="heading2">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                        How long does a typical project take?
                      </button>
                    </h2>
                    <div id="collapse2" className="accordion-collapse collapse show" aria-labelledby="heading2" data-bs-parent="#faqaccordion">
                      <div className="accordion-body">
                        <p>Project timelines vary based on complexity and scope We provide a detailed timeline during the initial consultation.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                    <h2 className="accordion-header" id="heading3">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                        Do you work with small businesses?
                      </button>
                    </h2>
                    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqaccordion">
                      <div className="accordion-body">
                        <p>Project timelines vary based on complexity and scope We provide a detailed timeline during the initial consultation.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                    <h2 className="accordion-header" id="heading4">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                        Can you help with existing websites?
                      </button>
                    </h2>
                    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqaccordion">
                      <div className="accordion-body">
                        <p>Project timelines vary based on complexity and scope We provide a detailed timeline during the initial consultation.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our FAQs Section End */}

      {/* Our Blog Section Start */}
      <div className="our-blog">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <h3 className="wow fadeInUp">latest blog</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Latest <span>SEO</span> trends and insights</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                <p>Stay updated with the latest SEO trends and insights to enhance your performance. Our blog covers algorithm updates, optimization strategies, and industry practices to help you stay ahead of the competition and improve your online visibility.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="post-item wow fadeInUp">
                <div className="post-featured-image">
                  <figure>
                    <img src="/images/post-1.jpg" alt="" />
                  </figure>
                  <div className="readmore-btn">
                    <a href="blog-single.html">
                      <img src="/images/our-agency-arrow.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="post-item-content">
                  <h3><a href="blog-single.html">Understanding Google's Latest Algorithm Update</a></h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="post-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="post-featured-image">
                  <figure>
                    <img src="/images/post-2.jpg" alt="" />
                  </figure>
                  <div className="readmore-btn">
                    <a href="blog-single.html">
                      <img src="/images/our-agency-arrow.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="post-item-content">
                  <h3><a href="blog-single.html">How to Track SEO Performance with Analytics</a></h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="post-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="post-featured-image">
                  <figure>
                    <img src="/images/post-3.jpg" alt="" />
                  </figure>
                  <div className="readmore-btn">
                    <a href="blog-single.html">
                      <img src="/images/our-agency-arrow.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="post-item-content">
                  <h3><a href="blog-single.html">Content Optimization Boosting Engagement and Rankings</a></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Blog Section End */}

      {/* Footer Start */}
      <footer className="main-footer">
        <div className="footer-work-together">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="work-together-box">
                  <div className="work-together-content">
                    <h3>Let's Collaborate</h3>
                    <h2>Let's Work Together</h2>
                  </div>
                  <div className="work-together-btn">
                    <a href="contact.html">
                      <img src="/images/arrow-dark.svg" alt="" />
                      <span>Get in Touch</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="about-footer">
                  <div className="footer-logo">
                    <img src="/images/footer-logo.svg" alt="" />
                  </div>
                  <div className="about-footer-content">
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                  </div>
                  <div className="footer-social-links">
                    <ul>
                      <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="footer-links">
                  <h3>quick link</h3>
                  <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="blog.html">Blog</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-links">
                  <h3>projects</h3>
                  <ul>
                    <li><a href="project-single.html">E-commerce Optimization</a></li>
                    <li><a href="project-single.html">High-Impact Content</a></li>
                    <li><a href="project-single.html">Competitive Market Domination</a></li>
                    <li><a href="project-single.html">Start-to-Finish Website</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-links footer-contact-details">
                  <h3>Have Questions?</h3>
                  <ul>
                    <li><span>Phone : </span><a href="tel:123456789">+123 456 789</a></li>
                    <li><span>E-mail : </span><a href="#">infodomainame@gmail.com </a></li>
                    <li><span>Address : </span>123 Creative Lane London, SW1A 1AA United Kingdom</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="footer-copyright-text">
                    <p>Copyright © 2025 All Rights Reserved. (Abdullah Nadeem) </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="footer-privacy-policy">
                    <ul>
                      <li><a href="#">help</a></li>
                      <li><a href="#">privacy policy</a></li>
                      <li><a href="#">term's & condition</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer End */}
    </>
  );
}

export default App;