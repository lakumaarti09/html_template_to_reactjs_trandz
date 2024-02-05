import React from 'react'

const Home = () => {
   
  return (
  
    <>
    {/* hero section start*/}
    <section className="hero-section--secondary position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <div className="animation__thumbs position-absolute">
          <img
            src="assets/images/vector_men.png"
            alt="vector"
            className="d-none d-xxxl-flex  previewShapeX "
          />
        </div>
        <div className="animation__thumbs position-absolute">
          <img
            src="assets/images/vector_men2.png"
            alt="vector"
            className=" previewShapeRevX d-none d-xxl-flex"
          />
        </div>
        <img
          src="assets/images/vector_rocket.png"
          alt="vector"
          className="position-absolute d-none d-xxxl-flex bottom-0 end-0 pe-12 pb-10 fadeInTopLeft"
        />
      </div>
      <div className="container pt-20 mt-20">
        <div className="row pt-4 pt-lg-10 gy-12 gy-lg-0 justify-content-center align-items-center">
          <div className="col-lg-10 col-xxl-7">
            <div className="hero-content text-center">
              <h1 className="display-two mb-10 mb-lg-15">"Trading Expansion"</h1>
              <div className="d-center flex-wrap gap-4 gap-lg-10">
                <a
                  href="signup.html"
                  className="cmn-btn secondary-alt fs-five nb4-xxl-bg gap-2 gap-lg-3 align-items-center py-2 px-5 py-lg-3 px-lg-6"
                >
                  Start Trading <i className="ti ti-trending-up" />
                </a>
                <a
                  href="signin.html"
                  className="cmn-btn link  fs-five  gap-2 gap-lg-3 align-items-center "
                >
                  <i className="ti ti-arrow-narrow-right" /> Try demo account
                </a>
              </div>
            </div>
            <div className="circle-text first d-center cus-z1 position-absolute d-none d-xxxl-flex">
              <div className="text d-center">
                <p className="fs-six">Trading Unlocking Diversified</p>
              </div>
              <img
                src="assets/images/circle_star2.png"
                alt="star"
                className="push_animat"
              />
            </div>
            <div className="circle-text first d-center cus-z1 position-absolute end-0 top-0 d-none d-xxl-flex  pe-lg-10 pt-lg-10"></div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-7 col-lg-5 col-xxl-4">
            <div className="hero-video-area pseudo_element_before mb-10 mx-auto ms-auto ms-md-10 ms-lg-20 mt-8 mt-lg-10 justify-content-center justify-content-sm-end">
              <img src="assets/images/hero_video.png" alt="image" />
              <div className="video_content position-absolute end-0 bottom-0 d-flex gap-3 z-1 ps-4">
                <a
                  href="https://www.youtube.com/watch?v=BHACKCNDMW8"
                  className="popup-video small box_10 btn-popup-animation position-absolute d-center rounded-circle"
                >
                  <i className="fa-solid fa-play fs-four" />
                </a>
                <span className="ms-14">Let’s See how we did it</span>
              </div>
            </div>
          </div>
          <div className="col-sm-5 col-lg-5 col-xxl-8 d-none d-md-flex">
            <div className="vector_thumbs position-relative z-0 ms-4 pt-8 pt-lg-10">
              <img
                src="assets/images/hero_mobile.png"
                className=" ms-8 ms-lg-15"
                alt="image"
              />
              <div className="position-absolute z-n1 start-0 top-0">
                <img
                  src="assets/images/hero_mobile_star.png"
                  alt="image"
                  className="rotate time_dur"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* hero section end */}
    {/* Client Company Section Start */}
    <div className="client_company_section py-10 p1-bg align-items-center justify-content-center">
      {/* Swiper */}
      <div className="swiper client_company">
        {/* <div className="swiper-wrapper align-items-center">
          <div className="swiper-slide text-center">
            <img src="assets/images/company_logo.png" alt="Client Logo" />
          </div>
          <div className="swiper-slide text-center">
            <img src="assets/images/company_logo2.png" alt="Client Logo" />
          </div>
          <div className="swiper-slide text-center">
            <img src="assets/images/company_logo3.png" alt="Client Logo" />
          </div>
          <div className="swiper-slide text-center">
            <img src="assets/images/company_logo4.png" alt="Client Logo" />
          </div>
          <div className="swiper-slide text-center">
            <img src="assets/images/company_logo5.png" alt="Client Logo" />
          </div>
          <div className="swiper-slide text-center">
            <img src="assets/images/company_logo6.png" alt="Client Logo" />
          </div>
          <div className="swiper-slide text-center">
            <img src="assets/images/company_logo7.png" alt="Client Logo" />
          </div>
        </div> */}
      
  <iframe
    src="https://fxpricing.com/fx-widget/ticker-tape-widget.php?id=1,2,3,5,14,20&border=show&speed=50&click_target=blank&theme=transparent&by-cr=28A745&sl-cr=DC3545&flags=circle&d_mode=compact-name&column=ask,bid,spread&lang=en&font=Arial, sans-serif"
    width="100%"
    height={85}
    style={{ border: "unset" }}
  />

  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "#fx-pricing-widget-copyright{text-align: center; font-size: 13px; font-family: sans-serif; margin-top: 10px; margin-bottom: 10px; color: #9db2bd;} #fx-pricing-widget-copyright a{text-decoration: unset; color: #bb3534; font-weight: 600;}"
    }}
  />



      </div>
    </div>
    {/*Trade On start*/}
    <section className="trade_on a2-bg pt-120 pb-120 position-relative z-0">
      <div className="animation vector position-absolute top-0 left-0 w-100 h-100 z-n1">
        <img
          src="assets/images/star3.png"
          alt="vector"
          className="position-absolute top-0 end-0 pe-15 pt-20 push_animat d-none d-xxxl-flex"
        />
        <img
          src="assets/images/vector.png"
          alt="vector"
          className="position-absolute top-0 start-0 pt-20 ms-20 jello d-none d-xxxl-flex"
        />
        <img
          src="assets/images/vector5.png"
          alt="vector"
          className="position-absolute bottom-0 end-0 d-none d-lg-flex previewShapeRevX "
        />
      </div>
      <div className="container">
        <div className="row gy-10 gy-xxl-0 justify-content-center justify-content-xxl-between align-items-center">
          <div className="col-10 col-sm-8 col-md-7 col-lg-6 order-2 order-lg-0">
            <div className="trade_on__thumbs d-flex justify-content-end">
              <img src="assets/images/trade_on2.png" alt="Imgae" />
            </div>
          </div>
          <div className="col-lg-6 col-xxl-5">
            <div className="trade_on__content">
              <span className="heading p1-color fs-five mb-5">Trade On Our</span>
              <h3 className="mb-4 mb-lg-5">World Class Platform</h3>
              <p className="fs-six mx-ch">
                Trading in financial markets involves a wide range of strategies
                that traders employ to make informed decisions. From trading to
                swing trading and long-term investing, each strategy has its own
                set of principles and risk factors.
              </p>
              <ul className="d-flex gap-4 flex-column mt-6">
                <li className="d-flex align-items-center gap-3 fs-six-up">
                  <i className="ti ti-circle-check p1-color fs-four" />
                  Charts trading
                </li>
                <li className="d-flex align-items-center gap-3 fs-six-up">
                  <i className="ti ti-circle-check p1-color fs-four" />
                  Understanding Trading Strategies{" "}
                </li>
                <li className="d-flex align-items-center gap-3 fs-six-up">
                  <i className="ti ti-circle-check p1-color fs-four" />
                  Risk Management in Trading{" "}
                </li>
                <li className="d-flex align-items-center gap-3 fs-six-up">
                  <i className="ti ti-circle-check p1-color fs-four" />
                  Technical vs. Fundamental Analysis{" "}
                </li>
              </ul>
              <a
                href="signup.html"
                className="cmn-btn fs-six-up nb4-xxl-bg gap-2 gap-lg-3 align-items-center py-2 px-3 py-lg-3 px-lg-4 mt-7 mt-xxl-8"
              >
                Sign up Now <i className="ti ti-arrow-right fs-four" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Trade On end */}
    {/* Why Trade start*/}
    <section className="why-trade s1-bg alt-color position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <img
          src="assets/images/sun.png"
          alt="vector"
          className="position-absolute push_animat"
        />
        <img
          src="assets/images/star.png"
          alt="vector"
          className="position-absolute  d-xxxl-flex previewSkew"
        />
      </div>
      <div className="container">
        <div className="row gy-3 gy-lg-0 justify-content-center">
          <div className="col-sm-7 col-lg-6 col-xxl-5 order-2 order-lg-0">
            <div className="why-trade__thumbs h-100 d-flex align-items-end ps-20 ps-sm-5 ps-lg-0">
              <img src="assets/images/why_trade.png" alt="Imgae" />
            </div>
          </div>
          <div className="col-lg-6 col-xxl-7">
            <div className="row pt-120 pb-120">
              <div className="col-xxl-6 offset-xxl-2">
                <div className="why-trade__part">
                  <span className="heading fs-five">Why Trade With</span>
                  <h3 className="mb-3 mt-5">Trade Genius</h3>
                  <p>
                    Trading is the art and science of buying and selling financial
                    instruments, such as stocks bonds currencies.{" "}
                  </p>
                  <a
                    href="about.html"
                    className="cmn-btn link secondary-link fs-six-up  gap-2 gap-lg-3 align-items-center mt-5"
                  >
                    {" "}
                    Learn more <i className="ti ti-arrow-narrow-right fs-four" />
                  </a>
                </div>
              </div>
              <div className="col-xxl-12 mt-7 mt-md-8 mt-xxl-3">
                <div className="why-trade__part d-flex align-items-center">
                  <div className="vector d-none d-xxl-flex px-xxl-15">
                    <img
                      src="assets/images/trade_vector.png"
                      alt="Image"
                      className="max-xxl-un"
                    />
                  </div>
                  <div className="content">
                    <h3 className="mb-3">Trade Apex</h3>
                    <p>
                      Trading is the art and science of buying and selling
                      financial instruments, suc stocks, bonds, currencies
                      commodities, and cryptocurrencies, with the aim of making a
                      profit. It's a dynamic and multifaceted professionals from
                      around the world.
                    </p>
                    <a
                      href="about.html"
                      className="cmn-btn link secondary-link fs-six-up  gap-2 gap-lg-3 align-items-center mt-5"
                    >
                      {" "}
                      Learn more{" "}
                      <i className="ti ti-arrow-narrow-right fs-four" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Why Trade end */}
    {/*provide-world start*/}
    <section className="provide-world pt-120 pb-120  position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <img
          src="assets/images/vector.png"
          alt="vector"
          className="position-absolute top-0 pt-120 ms-20 ps-xxl-20 jello d-none d-xl-flex"
        />
        <img
          src="assets/images/vector9.png"
          alt="vector"
          className="position-absolute rotate top-0 end-0 p-20 mt-5 me-7 d-none d-xxxl-flex"
        />
        <img
          src="assets/images/vector_rocket1.png"
          alt="vector"
          className="position-absolute bottom-0 start-0 d-none d-xxxl-flex pb-120 mb-10 ms-20 fadeInTopRight"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xxl-7">
            <div className="heading__content mb-10 mb-lg-15 text-center">
              <h3 className="mb-5 mb-lg-6">
                Low spreads on more than 150 instruments{" "}
              </h3>
            </div>
          </div>
        </div>
        <div className="row gy-6 gy-xxl-0">
          <div className="col-12">
            <iframe
              scrolling="no"
              allowTransparency="true"
              frameBorder={0}
              src="https://www.tradingview-widget.com/embed-widget/forex-heat-map/?locale=in#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A400%2C%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22CNY%22%5D%2C%22isTransparent%22%3Afalse%2C%22colorTheme%22%3A%22dark%22%2C%22utm_source%22%3A%22shiningstarmarkets.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-heat-map%22%2C%22page-uri%22%3A%22shiningstarmarkets.com%2F%22%7D"
              title="forex heat-map TradingView widget"
              lang="en"
              className="custom-tradingview-widget"
            />
          </div>
        </div>
      </div>
    </section>
    {/* provide-world end */}
    {/*Worldwide start*/}
    <section className="worldwide alt-color p1-bg pseudo_element_after">
      <div className="animation vector position-absolute top-0 left-0 w-100 h-100 z-n1">
        <img
          src="assets/images/cross.png"
          alt="vector"
          className="position-absolute push_animat ms-lg-20 ps-4 top-0 pt-120 mt-20 start-0 d-none d-xxxl-flex"
        />
        <img
          src="assets/images/star.png"
          alt="vector"
          className="position-absolute push_animat end-0 top-0 mt-20 pt-xl-15 me-xl-20 pe-10 d-none d-md-flex"
        />
        <img
          src="assets/images/vector2.png"
          alt="vector"
          className="position-absolute bottom-0 start-0 d-none d-xxxl-flex"
        />
        <img
          src="assets/images/vector_rocket2.png"
          alt="vector"
          className="position-absolute d-none d-xxxl-flex bottom-0 end-0  pe-12 pb-10 fadeInTopLeft"
        />
        <img
          src="assets/images/cross2.png"
          alt="vector"
          className="position-absolute push_animat ms-lg-20 ps-4 top-0 start-50 pt-120 mt-20 d-none d-xxxl-flex"
        />
      </div>
      <div className="container position-relative">
        <div className="row gy-10 gy-lg-0 justify-content-center justify-content-lg-between align-items-end">
          <div className="col-lg-6 col-xxl-5 pt-xl-20">
            <div className="trade_on__content me-xl-10 pt-120 pb-0 pb-lg-120">
              <h3 className="mb-4">
                Millions Worldwide Building a Brighter Future
              </h3>
              <p className="mx-ch">
                The rise of cryptocurrencies has opened up new trading In this
                beginner's guide to cryptocurrency trading we demystify the world
                of digital currencies
              </p>
              <ul className="list_divided d-flex flex-wrap gap-3 gap-lg-5 mt-5 mt-xxl-6">
                <li className="d-flex align-items-center gap-3 fs-six-up">
                  <i className="ti ti-circle-check s1-color fs-four" />
                  Charts trading
                </li>
                <li className="d-flex align-items-center gap-3 fs-six-up">
                  <i className="ti ti-circle-check s1-color fs-four" />
                  Supreme Authority
                </li>
                <li className="d-flex align-items-center gap-3 fs-six-up">
                  <i className="ti ti-circle-check s1-color fs-four" />
                  Worldly Power
                </li>
                <li className="d-flex align-items-center gap-3 fs-six-up">
                  <i className="ti ti-circle-check s1-color fs-four" />
                  Global Dominance
                </li>
              </ul>
              <div className="mt-8 mt-xxl-10">
                <div className="counter-area d-flex gap-8 gap-xxl-10 ">
                  <div className="counter-part">
                    <div className="counters d-flex">
                      <span
                        className="odometer display-four s1-color"
                        data-odometer-final={12}
                      >
                        0
                      </span>
                      <span className="display-four symbol s1-color">K</span>
                    </div>
                    <span className="mt-4">Users Joined</span>
                  </div>
                  <div className="counter-part">
                    <div className="counters d-flex">
                      <span
                        className="odometer display-four s1-color"
                        data-odometer-final="5.5"
                      >
                        0
                      </span>
                      <span className="display-four symbol s1-color">M</span>
                    </div>
                    <span className="mt-4">Monthly Voulme (In USD)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8 col-sm-7 col-lg-6 col-xxl-5">
            <div className="worldwide_thumb d-flex ms-lg-15 ms-xl-0">
              <img
                src="assets/images/worldwide_thumb.png"
                className="max-xl-un"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Worldwide end */}
    {/*team start*/}
    <section className="team pt-120 pb-120 position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <img
          src="assets/images/vector6.png"
          alt="vector"
          className="position-absolute rotate d-none d-xl-flex"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="heading__content text-center mb-10 mb-lg-15 ">
            <span className="heading p1-color fs-five mb-5">Team</span>
            <h3>Our Leaders</h3>
            <p className="mt-5 mt-xxl-6 mx-ch mx-auto">
              Trading has always been a passion, but it wasn't until I refined my
              strategy and embraced risk management.
            </p>
          </div>
        </div>
        <div className="row gy-6">
          <div className="col-sm-6 col-lg-4 col-xxl-3">
            <div className="team__card nb3-bg cus-rounded-1 overflow-hidden">
              <div className="team__thumbs position-relative">
                <img src="assets/images/team.png" alt="Image" className="w-100" />
              </div>
              <div className="team__content pseudo_element_after transition text-center py-6 py-lg-7 py-xxl-8 px-4 px-lg-5 px-xxl-6">
                <a href="team-details.html">
                  <h5 className="team__title d-center pb-4 mb-4 pseudo_element_after">
                    Wade Warren
                  </h5>
                </a>
                <p className="mb-3">
                  When I first started trading But with time and experience.
                </p>
                <div className="social-area alt">
                  <ul className="d-flex align-items-center justify-content-center gap-2 gap-md-3">
                    <li>
                      <a className="d-center fs-four" href="#">
                        <i className="ti ti-brand-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="d-center fs-four" href="#">
                        <i className="ti ti-brand-twitch" />
                      </a>
                    </li>
                    <li>
                      <a className="d-center fs-four" href="#">
                        <i className="ti ti-brand-instagram" />
                      </a>
                    </li>
                    <li>
                      <a className="d-center fs-four" href="#">
                        <i className="ti ti-brand-discord-filled" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xxl-3">
            <div className="team__card nb3-bg cus-rounded-1 overflow-hidden">
              <div className="team__thumbs position-relative">
                <img
                  src="assets/images/team2.png"
                  alt="Image"
                  className="w-100"
                />
              </div>
              <div className="team__content pseudo_element_after transition text-center py-6 py-lg-7 py-xxl-8 px-4 px-lg-5 px-xxl-6">
                <a href="team-details.html">
                  <h5 className="team__title d-center pb-4 mb-4 pseudo_element_after">
                    Alice Stone
                  </h5>
                </a>
                <p className="mb-3">
                  When I first started trading But with time and experience.
                </p>
                <div className="social-area alt">
                  <ul className="d-flex align-items-center justify-content-center gap-2 gap-md-3">
                    <li>
                      <a className="d-center fs-four" href="#">
                        <i className="ti ti-brand-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="d-center fs-four" href="#">
                        <i className="ti ti-brand-twitch" />
                      </a>
                    </li>
                    <li>
                      <a className="d-center fs-four" href="#">
                        <i className="ti ti-brand-instagram" />
                      </a>
                    </li>
                    <li>
                      <a className="d-center fs-four" href="#">
                        <i className="ti ti-brand-discord-filled" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xxl-3">
            <div className="team__card nb3-bg cus-rounded-1 overflow-hidden">
              <div className="team__thumbs position-relative">
                <img
                  src="assets/images/team3.png"
                  alt="Image"
                  className="w-100"
                />
              </div>
              <div className="team__content pseudo_element_after transition text-center py-6 py-lg-7 py-xxl-8 px-4 px-lg-5 px-xxl-6">
                <a href="team-details.html">
                  <h5 className="team__title d-center pb-4 mb-4 pseudo_element_after">
                    Jessica Jones
                  </h5>
                </a>
                <p className="mb-3">
                  When I first started trading But with time and experience.
                </p>
                <div className="social-area alt">
                  <ul className="d-flex align-items-center justify-content-center gap-2 gap-md-3">
                    <li>
                      <a className="d-center fs-four" href="#">
                        <i className="ti ti-brand-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="d-center fs-four" href="#">
                        <i className="ti ti-brand-twitch" />
                      </a>
                    </li>
                    <li>
                      <a className="d-center fs-four" href="#">
                        <i className="ti ti-brand-instagram" />
                      </a>
                    </li>
                    <li>
                      <a className="d-center fs-four" href="#">
                        <i className="ti ti-brand-discord-filled" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xxl-3">
            <div className="team__card nb3-bg cus-rounded-1 overflow-hidden">
              <div className="team__thumbs position-relative">
                <img
                  src="assets/images/team4.png"
                  alt="Image"
                  className="w-100"
                />
              </div>
              <div className="team__content pseudo_element_after transition text-center py-6 py-lg-7 py-xxl-8 px-4 px-lg-5 px-xxl-6">
                <a href="team-details.html">
                  <h5 className="team__title d-center pb-4 mb-4 pseudo_element_after">
                    Chris Moore
                  </h5>
                </a>
                <p className="mb-3">
                  When I first started trading But with time and experience.
                </p>
                <div className="social-area alt">
                  <ul className="d-flex align-items-center justify-content-center gap-2 gap-md-3">
                    <li>
                      <a className="d-center fs-four" href="#">
                        <i className="ti ti-brand-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="d-center fs-four" href="#">
                        <i className="ti ti-brand-twitch" />
                      </a>
                    </li>
                    <li>
                      <a className="d-center fs-four" href="#">
                        <i className="ti ti-brand-instagram" />
                      </a>
                    </li>
                    <li>
                      <a className="d-center fs-four" href="#">
                        <i className="ti ti-brand-discord-filled" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-10 mt-lg-15  d-flex justify-content-center">
            <a
              href="team.html"
              className="cmn-btn py-2 py-lg-3 px-4 px-lg-6 gap-2 gap-lg-3 align-items-center"
            >
              {" "}
              View More
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* team end */}
    {/* FAQ Section Starts */}
    <section className="faq a2-bg pb-120 pt-120 position-relative z-0">
      <div className="animation vector position-absolute top-0 left-0 w-100 h-100 z-n1">
        <img
          src="assets/images/button.png"
          alt="vector"
          className="position-absolute pt-6 pt-xl-15 previewShapeRevX d-none d-md-flex"
        />
        <img
          src="assets/images/star2.png"
          alt="vector"
          className="position-absolute push_animat end-0 top-0 mt-20 pt-5 me-xl-20 pe-5 d-none d-md-flex"
        />
        <img
          src="assets/images/vector20.png"
          alt="vector"
          className="position-absolute bottom-0 start-0 ps-8 pb-10 d-none d-xxxl-flex"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xxl-7">
            <div className="heading__content mb-10 mb-lg-15 text-center">
              <span className="heading fs-five p1-color mb-5">Faq’s</span>
              <h3>Frequently Asked Question</h3>
            </div>
          </div>
        </div>
        <div className="row gy-10 justify-content-center align-items-center">
          <div className="col-md-12 col-lg-7 col-xxl-6">
            <div className="faq__part">
              <div className="accordion-section d-grid gap-6">
                <div className="accordion-single  cus-rounded-1 nb3-bg box-shadow py-3 py-md-4 px-4 px-md-5">
                  <h5 className="header-area">
                    <button
                      className="accordion-btn transition fw-semibold text-start d-flex position-relative w-100"
                      type="button"
                    >
                      {" "}
                      What is trading?
                    </button>
                  </h5>
                  <div className="content-area">
                    <div className="content-body pt-5">
                      <p>
                        Trading involves buying and selling financial instruments
                        like stocks advantage of price fluctuations in these
                        assets.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-single cus-rounded-1 nb3-bg box-shadow py-3 py-md-4 px-4 px-md-5">
                  <h5 className="header-area">
                    <button
                      className="accordion-btn transition fw-semibold text-start d-flex position-relative w-100"
                      type="button"
                    >
                      How can I get started with trading?
                    </button>
                  </h5>
                  <div className="content-area">
                    <div className="content-body pt-5">
                      <p>
                        Trading involves buying and selling financial instruments
                        like stocks advantage of price fluctuations in these
                        assets.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-single cus-rounded-1 nb3-bg box-shadow py-3 py-md-4 px-4 px-md-5">
                  <h5 className="header-area">
                    <button
                      className="accordion-btn transition fw-semibold text-start d-flex position-relative w-100"
                      type="button"
                    >
                      How can I stay updated on market news and trends?
                    </button>
                  </h5>
                  <div className="content-area">
                    <div className="content-body pt-5">
                      <p>
                        Trading involves buying and selling financial instruments
                        like stocks advantage of price fluctuations in these
                        assets.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-single cus-rounded-1 nb3-bg box-shadow py-3 py-md-4 px-4 px-md-5">
                  <h5 className="header-area">
                    <button
                      className="accordion-btn transition fw-semibold text-start d-flex position-relative w-100"
                      type="button"
                    >
                      What are the different types of trading?
                    </button>
                  </h5>
                  <div className="content-area">
                    <div className="content-body pt-5">
                      <p>
                        Trading involves buying and selling financial instruments
                        like stocks advantage of price fluctuations in these
                        assets.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-single cus-rounded-1 nb3-bg box-shadow py-3 py-md-4 px-4 px-md-5">
                  <h5 className="header-area">
                    <button
                      className="accordion-btn transition fw-semibold text-start d-flex position-relative w-100"
                      type="button"
                    >
                      Is trading suitable for everyone?
                    </button>
                  </h5>
                  <div className="content-area">
                    <div className="content-body pt-5">
                      <p>
                        Trading involves buying and selling financial instruments
                        like stocks advantage of price fluctuations in these
                        assets.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-single cus-rounded-1 nb3-bg box-shadow py-3 py-md-4 px-4 px-md-5">
                  <h5 className="header-area">
                    <button
                      className="accordion-btn transition fw-semibold text-start d-flex position-relative w-100"
                      type="button"
                    >
                      What is fundamental analysis?
                    </button>
                  </h5>
                  <div className="content-area">
                    <div className="content-body pt-5">
                      <p>
                        Trading involves buying and selling financial instruments
                        like stocks advantage of price fluctuations in these
                        assets.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-single cus-rounded-1 nb3-bg box-shadow py-3 py-md-4 px-4 px-md-5">
                  <h5 className="header-area">
                    <button
                      className="accordion-btn transition fw-semibold text-start d-flex position-relative w-100"
                      type="button"
                    >
                      What are the risks associated with trading?
                    </button>
                  </h5>
                  <div className="content-area">
                    <div className="content-body pt-5">
                      <p>
                        Trading involves buying and selling financial instruments
                        like stocks advantage of price fluctuations in these
                        assets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9 col-sm-8 col-lg-5 col-xxl-6">
            <div className="faq_thumbs d-flex justify-content-center justify-content-xl-end">
              <img src="assets/images/faq.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* FAQ Section Ends */}
    {/*Testimonial start*/}
    <section className="testimonial-secondary te pt-120 pb-120 position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <img
          src="assets/images/icon/quote_bg.png"
          alt="vector"
          className="position-absolute push_animat d-none d-md-flex"
        />
        <img
          src="assets/images/icon/quote_bg.png"
          alt="vector"
          className="position-absolute push_animat d-none d-md-flex"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xxl-7">
            <div className="heading__content mb-10 mb-lg-15 text-center">
              <span className="heading fs-five s1-color mb-5">Testimonial</span>
              <h3>What people say</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="swiper testimonial_swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide d-flex justify-content-center">
                  <div className="col-lg-10 col-xl-8 col-xxl-6">
                    <div className="testimonial__par text-center">
                      <div className="author_thumbs">
                        <img
                          src="assets/images/author10.png"
                          alt="icon"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="author_content">
                        <p className=" fs-six-up mt-5 mt-xxl-6">
                          "Trading has always been a passion, but it wasn't the
                          lessons I learned along the way have been embraced
                          riskinvaluable.
                        </p>
                        <h5 className="heading p1-color mt-5">
                          Brooklyn Simmons
                        </h5>
                        <span className="fs-eight fw_500 mt-2">
                          Marketing Director
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide d-flex justify-content-center">
                  <div className="col-lg-10 col-xl-8 col-xxl-6">
                    <div className="testimonial__par text-center">
                      <div className="author_thumbs">
                        <img
                          src="assets/images/author11.png"
                          alt="icon"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="author_content">
                        <p className=" fs-six-up mt-5 mt-xxl-6">
                          "Trading has always been a passion, but it wasn't the
                          lessons I learned along the way have been embraced
                          riskinvaluable.
                        </p>
                        <h5 className="heading p1-color mt-5">Cody Fisher</h5>
                        <span className="fs-eight fw_500 mt-2">
                          Account Executive
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide d-flex justify-content-center">
                  <div className="col-lg-10 col-xl-8 col-xxl-6">
                    <div className="testimonial__par text-center">
                      <div className="author_thumbs">
                        <img
                          src="assets/images/author12.png"
                          alt="icon"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="author_content">
                        <p className=" fs-six-up mt-5 mt-xxl-6">
                          "Trading has always been a passion, but it wasn't the
                          lessons I learned along the way have been embraced
                          riskinvaluable.
                        </p>
                        <h5 className="heading p1-color mt-5">Wade Warren</h5>
                        <span className="fs-eight fw_500 mt-2">
                          Medical Assistant
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide d-flex justify-content-center">
                  <div className="col-lg-10 col-xl-8 col-xxl-6">
                    <div className="testimonial__par text-center">
                      <div className="author_thumbs">
                        <img
                          src="assets/images/author13.png"
                          alt="icon"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="author_content">
                        <p className=" fs-six-up mt-5 mt-xxl-6">
                          "Trading has always been a passion, but it wasn't the
                          lessons I learned along the way have been embraced
                          riskinvaluable.
                        </p>
                        <h5 className="heading p1-color mt-5">Esther Howard</h5>
                        <span className="fs-eight fw_500 mt-2">
                          Marketing Director
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide d-flex justify-content-center">
                  <div className="col-lg-10 col-xl-8 col-xxl-6">
                    <div className="testimonial__par text-center">
                      <div className="author_thumbs">
                        <img
                          src="assets/images/author14.png"
                          alt="icon"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="author_content">
                        <p className=" fs-six-up mt-5 mt-xxl-6">
                          "Trading has always been a passion, but it wasn't the
                          lessons I learned along the way have been embraced
                          riskinvaluable.
                        </p>
                        <h5 className="heading p1-color mt-5">
                          Brooklyn Simmons
                        </h5>
                        <span className="fs-eight fw_500 mt-2">
                          President of Sales
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination mt-8 mt-md-10 mt-lg-15" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Testimonial end */}
  </>
  
  )
}

export default Home
