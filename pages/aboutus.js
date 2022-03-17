import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <div>
      <style>
        {`
          #star{
            color:yellow
          }
           .zero-img{
             min-height:350px;
             position:relative;
             top:100px; 
           }
           .zero-trusted-img{
            min-height:350px;
             position:relative;
             top:40px;
             max-width:80%;
          }
          .fd-quote
          {
            width: 50%;
          }


          /*Values Section*/
          .card{
            width: 100%!important;
          }
          .card
          {
            height: 20rem;
            width: 24rem;
            margin-left:3px;
          }
          .card-flip > div {
            backface-visibility: hidden;
            transition: transform 300ms;
            transition-timing-function: linear;
            width: 100%;
            height: 100%;
            margin: 0;
            display: flex;
          }
          
          .card-front {
            transform: rotateY(0deg);
          }
          
          .card-back {
            transform: rotateY(180deg);
            position: absolute;
            top: 0;
          }
          
          .card-flip:hover .card-front {
            transform: rotateY(-180deg);
          }
            
          .card-flip:hover .card-back {
            transform: rotateY(0deg);
          }


           @media (max-width:1200px)
           {
             .zero-img{
               top:0px; 
             }
             .col-sm-4.p-1.value-card-col{
              margin-left:10%;
              float:left;
            }
           }
           @media (max-width:768px)
           {
             .zero-img{
               top:0px; 
             }
             .review-card{
              margin-top: 50px!important;
             }
             .review-item h2{
               font-size:18px;
             }
           }
           @media (max-width:600px)
           {
             .zero-img{
               top:0px; 
               min-height:200px;
             }
             .zero-trusted-img{
              min-height:150px;
             }
             .col-sm-4.p-1.value-card-col{
               margin-left:0!important;
             }
           }
        `}
      </style>
      <Head>
        <title>QDS Pro Entrance Exams Coaching Institute | About Us</title>
        <meta
          name="description"
          content="Visit the About Us section of our website to know about QDS Pro Entrance Exams Coaching Institute, our services, accomplishments and our mission & vision."
        />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />

        {/* Apple Touch icon */}

        <link
          rel="apple-touch-icon"
          href="/assets/images/apple-touch-icon.png"
        />

        <script src="/assets/js/animatedModal.min.js"></script>
        {/* <link rel="stylesheet" type="text/css" href="/assets/css/slick.css" /> */}
      </Head>

      <div className="aboutus-section">
        <div className="qds-wrapper">
          <Header />
          <div>
            <div className="aboutus-banner">
              <div className="about-title">
                <h1
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-linear"
                  className="white-text banner-title"
                >
                  ABOUT US
                </h1>
              </div>
            </div>
            {/* About us title */}
            {/* Mission vission section */}
            <div className="mission-vision-section text-center section-wrapper">
              <div>
                <h2 className="section-title blue-heading">
                  Mission &amp; Vision
                </h2>
                <div className="mv-content">
                  <p
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-linear"
                  >
                    Our mission is to revolutionalize the way Test Prep industry
                    works currently. We intend to give back to the students the
                    powers they deserve. Having served as Visiting Faculties at
                    leading coaching institutes for couple of years now, we have
                    personally observed and minutely studied the difficulties
                    faced by the students out there. To eliminate these
                    challenges faced by the students and to provide them with a
                    lasting solution, we have started providing these test prep
                    services. Broadly, our range of services includes coaching
                    classes, video lectures, doubt solving and online live
                    tutoring.
                  </p>
                  <p
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-linear"
                  >
                    We aim to equip the students with all the resources required
                    for their test prep, under one roof – ‘QDS Pro’. Our
                    services are affordable, accessible from anywhere and
                    available at all times. We have been very innovative in
                    designing all of our products, keeping the needs of the
                    students in mind.
                  </p>
                  <p
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-linear"
                  >
                    Our vision is to play a crucial role in empowering students
                    with the necessary tools required to achieve their dreams
                    and through this, creating a ripple effect that will
                    transform the education sector as a whole.
                  </p>
                </div>
              </div>
            </div>
            {/* Mission vission section end*/}
            {/* QDSPro Values Section */}
            <div className="qdspro-values-section text-center section-wrapper">
              <div>
                <h2 className="section-title blue-heading">QDS Pro Values</h2>
                <div className="row">
                  {[1, 2, 3, 4, 5, 6].map((i) => {
                    return (
                      <div class="col-sm-4 p-1 value-card-col">
                        <div
                          class={
                            "card card-flip" +
                            " " /*+(i%2 !== 0 ? "float-right" : "")*/
                          }
                        >
                          <div class="card-front text-white bg-dark">
                            <img
                              className="card-img-top value-img p-0 m-0"
                              src={
                                "/assets/images/values/" +
                                i.toString() +
                                "-front.webp"
                              }
                              alt={"Front Image - " + i.toString()}
                            ></img>
                          </div>
                          <div class="card-back bg-white">
                            <img
                              className="card-img-top value-img"
                              src={
                                "/assets/images/values/" +
                                i.toString() +
                                "-rear.webp"
                              }
                              alt={"Rear Image - " + i.toString()}
                            ></img>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="row">
                  {[7, 8].map((i) => {
                    return (
                      <div
                        class="col-sm-4 p-1 value-card-col"
                        style={{ marginLeft: "100px" }}
                      >
                        <div class={"card card-flip" + " "}>
                          <div class="card-front text-white bg-dark">
                            <img
                              className="card-img-top value-img p-0 m-0"
                              src={
                                "/assets/images/values/" +
                                i.toString() +
                                "-front.webp"
                              }
                              alt={"Front Image - " + i.toString()}
                            ></img>
                          </div>
                          <div class="card-back bg-white">
                            <img
                              className="card-img-top value-img"
                              src={
                                "/assets/images/values/" +
                                i.toString() +
                                "-rear.webp"
                              }
                              alt={"Rear Image - " + i.toString()}
                            ></img>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* QDSPro Values Section End  */}

            {/*From the Founder's Desk*/}
            <div className="founders-desk-section text-center section-wrapper">
              <div>
                <h2 className="section-title blue-heading">
                  From the Founders’ Desks
                </h2>
                <div className="fd-content">
                  <p
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-linear"
                    className="fd-quote m-auto"
                  >
                    <q>
                      Right attitude and right aptitude is all that you need to
                      succeed in life.
                    </q>{" "}
                    <br></br>
                    <span className="float-right">–QDS Pro</span>
                  </p>
                  <br></br>
                  <br></br>
                  <p
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-linear"
                  >
                    We feel immensely glorified in sharing our experience and
                    endeavours with you all who have entrusted their time as
                    well as faith in QDS Pro. The journey from the very
                    beginning till date has strengthened the foundation of our
                    company by leaps and bounds.
                  </p>
                  <p
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-linear"
                  >
                    We aim to restructure the test prep industry holistically.
                    We have observed that most of the leading MBA entrance exams
                    coaching classes are primarily concerned with making money
                    at the cost of ethics. Since most of our faculties have
                    served as tutors with these leading coaching institutes we
                    have specifically analysed and keenly examined the
                    complications faced by the students. We are completely
                    against such practices and therefore we have decided to come
                    up with revolutionary fixes to solve the challenges that the
                    students preparing for these exams are facing today.
                  </p>
                  <p
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-linear"
                  >
                    The expectations of the students have surpassed their needs
                    of only attending monotonous lectures and they prefer to
                    have all the attributes like convenience, customisation,
                    personalisation as well as professionalism. Nowadays,
                    students expect that extra care and attention from their
                    faculties which is provided only at QDS Pro. QDS Pro is the
                    only institute who gets their students prepared for the
                    utmost difficult level questions from top popular author
                    books and publications which no other institutes are willing
                    to consider because it commands more efforts from their end.
                  </p>
                  <p
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-linear"
                  >
                    QDS Pro understands all the challenges faced by the students
                    and promises to deliver the best for their test preparation.
                  </p>
                </div>
              </div>
            </div>
            {/*From the Founder's Desk End*/}

            {/* trusted brand section */}
            <div className="awards-section">
              <div className="section-wrapper">
                <div className="row">
                  <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-linear"
                    className="col-lg-5 col-md-5 col-sm-12 col-xs-12"
                  >
                    <h2 className="section-title mobile-only-display text-center">
                      Most Trusted Brand Worldwide
                    </h2>
                    <div className="award-img text-center award-slider-trusted outer-quora">
                      <img
                        src="assets/images/icon/quora.svg"
                        className="img-fluid zero-trusted-img quora-img"
                        alt="Quora logo"
                      />
                      <a href="https://studysid.com/gmat-coaching-classes-mumbai?sort=popular" target="_blank">
                      <img
                        src="assets/images/icon/studysid_ext.webp"
                        className="img-fluid"
                        alt="Studysid logo"
                        style={{ paddingTop: "95px" }}
                        
                      />
                      </a>
                      {/* <img src="assets/images/trophy/2.webp" class="img-fluid"> */}
                      <img
                        src="assets/images/icon/learnpick.webp"
                        className="img-fluid"
                        alt="learnpick logo"
                      />
                      {/*<img
                        src="assets/images/trophy/5.webp"
                        className="img-fluid"
                      />
                      <img
                        src="assets/images/trophy/4.webp"
                        className="img-fluid"
                      />
                      <img
                        src="assets/images/trophy/6.webp"
                        className="img-fluid"
                      />*/}
                    </div>
                  </div>
                  <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-linear"
                    className="col-lg-7 col-md-7 col-sm-12 col-xs-12 clearfix"
                  >
                    <div className="award-card">
                      <h2 className="section-title desktop-only-display">
                        Most Trusted Brand Worldwide
                      </h2>
                      <div className="award-details award-slider-trusted">
                        {/* 0 award */}
                        <div className="award-item">
                          <h2 className="award-title">
                            <i className="fa fa-trophy mr-2"></i> Ranked #1 -
                            Quora
                          </h2>
                          <p>
                            Quora is the World's Largest Knowledge Sharing
                            Platform.
                          </p>
                        </div>
                        {/* 1 award */}
                        <div className="award-item">
                          <h2 className="award-title">
                            <i className="fa fa-trophy mr-2"></i> Ranked #1 -
                            StudySid
                          </h2>
                          <p>
                            Studysid is India's Leading Coaching Class
                            Aggregation And Education Consulting Platform.
                          </p>
                        </div>
                        {/* 2 award */}
                        <div className="award-item">
                          <h2 className="award-title">
                            <i className=" fa fa-trophy mr-2"></i> Ranked #1 -
                            LearnPick
                          </h2>
                          <p>
                            Learnpick is India's Leading Tutor And Coaching
                            Institute Search Platform Trusted Brand Worldwide.
                          </p>
                        </div>
                        {/* 3 award
                        <div className="award-item">
                          <h2 className="award-title">
                            Mumbai University Rank Holder
                          </h2>
                          <p>
                            Somil stood fourth in the University of Mumbai
                            during the final year of his undergraduate program
                            B.Com whilst at H.R. College.
                          </p>
                        </div>
                        {/* 4 award
                        <div className="award-item">
                          <h2 className="award-title">
                            High Achiever's Trophy
                          </h2>
                          <p>
                            Somil received the Class Prize in addition to 5
                            subject prizes in the final year of his high school
                            because of which he was awarded the High Achiever's
                            Trophy.
                          </p>
                        </div>
                        {/* 5 award
                        <div className="award-item">
                          <h2 className="award-title">The Human Calculator</h2>
                          <p>
                            Somil has earned himself the recognition of "The
                            Human Calculator" among his relatives and friends
                            owing to his incredible number crunching skills. He
                            hosts a YouTube Channel wherein he periodically
                            uploads videos of his new feats in Mental Math.
                          </p>
                        </div>*/}
                      </div>
                      <div className="paginator-cd">
                        <span className="prev" id="f-prev-trusted">
                          <i className="fa fa-chevron-left" />
                        </span>
                        <span className="next ml-4" id="f-next-trusted">
                          <i className="fa fa-chevron-right" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* trusted brand section end*/}

            {/* review section */}
            <div className="awards-section">
              <div className="section-wrapper">
                <div className="row">
                  <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-linear"
                    className="col-lg-5 col-md-5 col-sm-12 col-xs-12"
                  >
                     <h2 className="section-title mobile-only-display text-center">
                      Our Reviews &amp; Ratings
                    </h2>
                    <div className="review-img text-center reviews-slider">
                      <a href="https://www.google.com/search?q=QDS+Pro&source=hp&ei=rT1oYLLwLo7Xz7sPidmAuAo&iflsig=AINFCbYAAAAAYGhLvQOZF7qRqanv3Bz4oVsA51hqA2hx&oq=QDS+Pro&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEMcBEK8BEJMCMgUIABDJAzICCAAyAggAMgIIADIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB46BQgAELEDOggIABCxAxCDAToFCC4QsQM6CAguEMcBEKMCOgIILjoICC4QxwEQrwE6DgguELEDEIMBEMcBEK8BOgQIABAKUNcJWNIbYLAfaAJwAHgBgAGFBIgB3g6SAQkwLjUuMi41LTGYAQCgAQGqAQdnd3Mtd2l6sAEA&sclient=gws-wiz&ved=0ahUKEwjy-pK56eHvAhWO63MBHYksAKcQ4dUDCAc&uact=5" target = "_blank">
                      <img
                        src="assets/images/reviews/google.jpeg"
                        className="img-fluid"
                        style={{ marginTop: "40px" }}
                        alt="Google rating "

                      />
                      </a>
                      <a href="https://www.justdial.com/Mumbai/QDS-Pro-Charni-Road/022PXX22-XX22-190212010002-D4Y3_BZDET" target="_blank">
                      <img
                        src="assets/images/reviews/justdial.jpeg"
                        className="img-fluid"
                        style={{ marginTop: "40px" }}
                        alt="Justdial rating"
                      />
                      </a>
                      <a href="https://studysid.com/gmat-coaching-classes-mumbai?sort=popular" target="_blank">
                      <img
                        src="assets/images/reviews/studysid.jpeg"
                        className="img-fluid"
                        style={{ marginTop: "40px" }}
                        alt="Studysid rating"
                      />
                      </a>
                    </div>
                  </div>
                  <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-linear"
                    className="col-lg-7 col-md-7 col-sm-12 col-xs-12 clearfix"
                  >
                    <div className="review-card" style={{ marginTop: "40px" }}>
                      <h2 className="section-title desktop-only-display">
                        Our Reviews &amp; Ratings
                      </h2>
                      <div className="award-details reviews-slider">
                        {/* 0 award*/}
                        <div className="review-item">
                          <h2 className="review-title">
                            <span id="star" class="fa fa-star checked"></span>
                            <span id="star" class="fa fa-star checked"></span>
                            <span id="star" class="fa fa-star checked"></span>
                            <span id="star" class="fa fa-star checked"></span>
                            <span id="star" class="fa fa-star checked"></span>
                          </h2>
                          <h4>Rated 5 star on Google</h4>
                        </div>
                        {/* 1 award */}
                        <div className="review-item">
                          <h2 className="review-title">
                            <span id="star" class="fa fa-star checked"></span>
                            <span id="star" class="fa fa-star checked"></span>
                            <span id="star" class="fa fa-star checked"></span>
                            <span id="star" class="fa fa-star checked"></span>
                            <span id="star" class="fa fa-star checked"></span>
                          </h2>
                          <h4>Rated 5 star on Justdial</h4>
                        </div>
                        {/* 2 award */}
                        <div className="review-item">
                          <h2 className="review-title">
                            <span id="star" class="fa fa-star checked"></span>
                            <span id="star" class="fa fa-star checked"></span>
                            <span id="star" class="fa fa-star checked"></span>
                            <span id="star" class="fa fa-star checked"></span>
                            <span id="star" class="fa fa-star checked"></span>
                          </h2>
                          <h4>Rated 5 star on Studysid</h4>
                        </div>
                      </div>
                      <div className="paginator-cd">
                        <span className="prev" id="f-prev-review">
                          <i className="fa fa-chevron-left" />
                        </span>
                        <span
                          className="next"
                          id="f-next-review"
                          style={{ marginLeft: "30px" }}
                        >
                          <i className="fa fa-chevron-right" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* review section ends*/}

            {/* award section */}
            <div className="awards-section">
              <div className="section-wrapper">
                <div className="row">
                  <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-linear"
                    className="col-lg-5 col-md-5 col-sm-12 col-xs-12"
                  >
                    <h2 className="section-title mobile-only-display text-center">
                      Awards &amp; Achievments
                    </h2>
                    <div className="award-img text-center award-slider">
                      <img
                        src="assets/images/trophy/0.jpg"
                        className="img-fluid zero-img"
                        alt="India book of records certificate 2019"
                      />
                      <img
                        src="assets/images/trophy/1.webp"
                        className="img-fluid"
                        alt="India book of records certificate 2018"
                      />
                      {/* <img src="assets/images/trophy/2.webp" class="img-fluid"> */}
                      <img
                        src="assets/images/trophy/3.webp"
                        className="img-fluid"
                        alt="Master numero trophy"
                      />
                      <img
                        src="assets/images/trophy/5.webp"
                        className="img-fluid"
                        alt="Rank holder medal"
                      />
                      <img
                        src="assets/images/trophy/4.webp"
                        className="img-fluid"
                        alt="Palanpur samaj kendra trophy"
                      />
                      <img
                        src="assets/images/trophy/6.webp"
                        className="img-fluid"
                        alt="Numero medal"
                      />
                    </div>
                  </div>
                  <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-linear"
                    className="col-lg-7 col-md-7 col-sm-12 col-xs-12 clearfix"
                  >
                    <div className="award-card">
                      <h2 className="section-title desktop-only-display">
                        Awards &amp; Achievments
                      </h2>
                      <div className="award-details award-slider">
                        {/* 0 award */}
                        <div className="award-item">
                          <h2 className="award-title">
                            International Record Holders Certificate
                          </h2>
                          <p>
                            Somil’s National Record in the field of Mental Math
                            (also selected as one of the Top 100 National
                            Records of 2019), was later classified as an
                            International Record, because there was no other
                            record in the same category, also recognised by
                            Vietnam Book of Records, Nepal Book of Records, Asia
                            Book of Records, IPSA and Bangladesh Book of
                            Records.
                          </p>
                        </div>
                        {/* 1 award */}
                        <div className="award-item">
                          <h2 className="award-title">
                            India Book of Records Record Holder
                          </h2>
                          <p>
                            Somil holds a National Record for :- "Reciting First
                            100 Multiplication Tables in Least Possible Time."
                            He has achieved the aforesaid feat in 7 minutes 48
                            seconds.
                          </p>
                        </div>
                        {/* 2 award */}
                        <div className="award-item">
                          <h2 className="award-title">Master Numero Uno</h2>
                          <p>
                            Somil has won the ultimate title of Numero Uno Event
                            – 'Master Numero Uno.' Numero Uno is the largest
                            inter – collegiate mathematics and statistics fest
                            in Mumbai hosted by the H.R. College of Commerce and
                            Economics.
                          </p>
                        </div>
                        {/* 3 award */}
                        <div className="award-item">
                          <h2 className="award-title">
                            Mumbai University Rank Holder
                          </h2>
                          <p>
                            Somil stood fourth in the University of Mumbai
                            during the final year of his undergraduate program
                            B.Com whilst at H.R. College.
                          </p>
                        </div>
                        {/* 4 award */}
                        <div className="award-item">
                          <h2 className="award-title">
                            High Achiever's Trophy
                          </h2>
                          <p>
                            Somil received the Class Prize in addition to 5
                            subject prizes in the final year of his high school
                            because of which he was awarded the High Achiever's
                            Trophy.
                          </p>
                        </div>
                        {/* 5 award */}
                        <div className="award-item">
                          <h2 className="award-title">The Human Calculator</h2>
                          <p>
                            Somil has earned himself the recognition of "The
                            Human Calculator" among his relatives and friends
                            owing to his incredible number crunching skills. He
                            hosts a YouTube Channel wherein he periodically
                            uploads videos of his new feats in Mental Math.
                          </p>
                        </div>
                      </div>
                      <div className="paginator-cd">
                        <span className="prev" id="f-prev">
                          <i className="fa fa-chevron-left" />
                        </span>
                        <span className="next" id="f-next">
                          <i className="fa fa-chevron-right" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* award section */}
            {/* team section */}
            <div className="team-section">
              <div className="section-wrapper text-center">
                <h2 className="section-title blue-heading">
                  Meet Our Core Team
                </h2>
                <div className="row team-list">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="team-detail">
                      <img
                        src="assets/images/team/1.webp"
                        className="img-fluid"
                        alt="Somil Shah"
                      />
                      <p className="team-name">
                        <a id="t-1" href="#animatedModal-1">
                          Somil Shah
                        </a>
                      </p>
                      <p className="team-desg">
                        Co-Founder, Chief Executive Officer
                      </p>
                      <div className="team-social">
                        <a
                          href="https://in.linkedin.com/in/somilshahqdspro"
                          target="_blank"
                          title="LinkedIn"
                        >
                          <i className="fa fa-linkedin-square" />
                        </a>
                        <a
                          href="https://www.superprof.co.in/learn-from-gmat-iler-founder-ceo-qds-pro-fastest-online-doubt-solving-platform-and-the-human-calculator-somil.html"
                          target="_blank"
                          title="SuperProf"
                        >
                          <img src="assets/images/icon/9-SuperProf-Logo.png" alt="Somil Shah" width="35px" height="35px" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="team-detail">
                      <img
                        src="assets/images/team/2.webp"
                        className="img-fluid"
                        alt="Ravina Parikh"
                      />
                      <p className="team-name">
                        <a id="t-2" href="#animatedModal-2">
                          Ravina Parikh
                        </a>
                      </p>
                      <p className="team-desg">
                        Co-Founder, Chief <br /> Financial Officer
                      </p>
                      <div className="team-social">
                        <a
                          href="https://in.linkedin.com/in/ravina-shah-92b37811b"
                          target="_blank"
                          title="LinkedIn"
                        >
                          <i className="fa fa-linkedin-square" />
                        </a>
                        <a
                          href="https://www.superprof.co.in/extremely-structured-and-comprehensive-course-program-complete-handholding-and-personalised-approach-leave-your-worries-gmat.html"
                          target="_blank"
                          title="SuperProf"
                        >
                           <img src="assets/images/icon/9-SuperProf-Logo.png" alt="Ravina Parikh" width="35px" height="35px" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="team-detail">
                      <img
                        src="assets/images/team/3.webp"
                        className="img-fluid"
                        alt="Yashvi Shah"
                      />
                      <p className="team-name">
                        <a id="t-3" href="#animatedModal-3">
                          Yashvi Shah
                        </a>
                      </p>
                      <p className="team-desg pb-2 ">
                        Web and App <br /> Designer
                      </p>
                      <div className="team-social">
                        <a
                          href="https://in.linkedin.com/in/yashvi-shah-040a7198"
                          target="_blank"
                          title="LinkedIn"
                        >
                          <i className="fa fa-linkedin-square" />
                        </a>
                       
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="team-detail">
                      <img
                        src="assets/images/team/4.webp"
                        className="img-fluid"
                        alt="Aashay Shah"
                      />
                      <p className="team-name">
                        <a id="t-4" href="#animatedModal-4">
                          Aashay Shah
                        </a>
                      </p>
                      <p className="team-desg pb-2">
                        Web and App Developer
                      </p>
                      <div className="team-social">
                        {/* <a href="#" title="Instagram"><i class="fa fa-instagram"></i></a>
                  <a href="#" title="Facebook"><i class="fa fa-facebook-square"></i></a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*DEMO01*/}
            <div id="animatedModal-1" className="team-modal">
              <div className="close-animatedModal-1">
                <i className="fa fa-close" />
              </div>
              <div className="modal-content qds-team-modal text-center">
                <div className>
                  <img
                    src="assets/images/team/1.webp"
                    className="img-fluid clearfix"
                    alt="Somil Shah"
                  />
                  <p>
                    {/* Somil Shah (Co-Founder, Chief Executive Officer):- Somil is
                    a B.Com graduate from H.R. College of Commerce and
                    Economics, Mumbai and a C.A. Final student. He has a keen
                    desire to pursue his M.B.A. from an Ivy League Business
                    School. He has been a consistent rank holder, through all
                    the semesters of his undergraduate program and has secured
                    99 percentile in his GMAT exam. He has had an experience of
                    more than a year serving as a faculty at some of the leading
                    management entrance preparation institutes. Somil is a math
                    and logic enthusiast. He is well versed with the practices
                    followed by the leading coaching institutes and the latest
                    developments and happenings in the various entrance exams.*/}
                    <span style={{ borderBottom: "1px solid white" }}>
                      SOMIL SHAH
                    </span>
                    <br />
                    <ul style={{ listStylePosition:"inside" }}>
                    <li>( Co-Founder and CEO, QDS Pro )</li>
                    <li>GMAT 99%iler </li>
                    <li>The Human Calculator </li>
                    <li>International Record Holder </li>
                    <li>India Book of Record Holder (Also, chosen as one of the Top
                    100 Record Holders of 2018)
                    </li>
                    <li>4th Rank Holder in the University of Mumbai (T. Y. B.Com)
                    </li>
                    <li>Master Numero Uno (Ultimate Title of Numero Uno Fest) -
                    Numero Uno is India's largest Inter-Collegiate Mathematics
                    and Statistics Fest, hosted by the H. R. College of Commerce
                    and Economics, Mumbai
                    </li>
                    <li>Winner of Multiple Academic Trophies and Certificates</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div id="animatedModal-2" className="team-modal">
              <div className="close-animatedModal-2">
                <i className="fa fa-close" />
              </div>
              <div className="modal-content qds-team-modal text-center">
                <div className>
                  <img
                    src="assets/images/team/2.webp"
                    className="img-fluid clearfix"
                    alt="Ravina Parikh"
                  />
                  <p>
                    {/*Ravina Parikh (Co-Founder, Chief Financial Officer):- Ravina
                    is a B.Com graduate from H.R. College of Commerce and
                    Economics, Mumbai and a C.A. Final student. She has pursued
                    her M.B.A. from Symbiosis Institute of Business Management,
                    Pune (SIBM, Pune). She is a finance enthusiast and is
                    currently working as a credit risk analyst at J.P. Morgan
                    Chase and Co, Mumbai. Ravina firmly believes that education
                    should be made accessible and affordable to everyone and
                    should not be restricted to a few privileged. She intends to
                    make the platform as financially feasible as possible for
                    all the students across the world.{" "*/}
                    <span style={{ borderBottom: "1px solid white" }}>
                      RAVINA PARIKH
                    </span>
                    <br />
                    <ul style={{ listStylePosition:"inside" }}>
                    <li>( Co-Founder and CFO, QDS Pro )</li>
                    <li>Former Credit Risk Analyst, Corporate and Investment
                    Banking, J.P. Morgan
                    </li>
                    <li>Former Business Development Manager, Godrej Properties Ltd.,
                    Godrej Industries
                    </li>
                    <li>Visiting Faculty at leading test prep institutes like IMS,
                    TIME and Career Launcher
                    </li>
                    <li>Chartered Accountancy - Nimesh Shah & Co. | Khatau Shah &
                    Associates | Vijay J. Shah and Associates
                    </li>
                    <li>B.Com., C.A. Intermediate and MBA</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div id="animatedModal-3" className="team-modal">
              <div className="close-animatedModal-3">
                <i className="fa fa-close" />
              </div>
              <div className="modal-content qds-team-modal text-center">
                <div className>
                  <img
                    src="assets/images/team/3.webp"
                    className="img-fluid clearfix"
                    alt="Yashvi Shah"
                  />
                   <ul style={{ listStylePosition:"inside" }}>
                    <li>Yashvi Shah (Web and App Designer)</li>
                    <li> Yashvi is a Visual and Communication Artist from Raheja School of Arts, Mumbai.</li>
                    <li>She is also a B.Com and an M.Com graduate from the University of
                    Mumbai. </li>
                    <li>She is currently working as an associate graphic
                    designer at Chimp&amp;z Inc., Mumbai.</li>
                    <li>She loves to create unique things and brings life to dull and boring things
                    through her designs. </li>
                    <li>She aims to design the platform in such
                    a manner that it becomes extremely user-friendly and easy to
                    operate.</li>
                    </ul>
                </div>
              </div>
            </div>
            <div id="animatedModal-4" className="team-modal">
              <div className="close-animatedModal-4">
                <i className="fa fa-close" />
              </div>
              <div className="modal-content qds-team-modal text-center">
                <div className>
                  <img
                    src="assets/images/team/4.webp"
                    className="img-fluid clearfix"
                    alt="Aashay Shah"
                  />
                   <ul style={{ listStylePosition:"inside" }}>
                    <li>Aashay Shah (Web and App Developer)</li>
                     <li>Aashay is a Web
                    Developer and overlooks all the backend infrastructure for
                    QDS Pro.</li>
                     <li>He has pursued Bachelors of Science in Computer
                    Science from D.G. Ruparel College.</li>
                     <li>He loves to experiment
                    with new technologies and reads books in his free time.</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
