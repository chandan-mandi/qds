import React, {useState} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from 'next/head';
import Link from 'next/link';


const Store = (props) => {

    const [bookDetails, setBookDetails] = useState([{
        id: 1,
        title: "GMAT Official Guide 2020, GMAT Official Guide Quantitative Review 2020 & GMAT Official Guide Verbal Review 2020",
        description: "",
        price: "3,482",
        mrp: "4,097",
        discount: {
            percent: "15%",
            amt: "615"
        },
        img: "/assets/images/store/1.webp"
    },{
        id: 2,
        title: "GMAT Official Guide Quantitative Review 2020 & GMAT Official Guide Verbal Review 2020",
        description: "",
        price: "1,613",
        mrp: "1,898",
        discount: {
            percent: "15%",
            amt: "285"
        },
        img: "/assets/images/store/2.webp"
    },{
        id: 3,
        title: "GMAT Official Guide 2020 & GMAT Official Guide Quantitative Review 2020 ",
        description: "",
        price: "2,676",
        mrp: "3,148",
        discount: {
            percent: "15%",
            amt: "472"
        },
        img: "/assets/images/store/3.webp"
    },{
        id: 4,
        title: "GMAT Official Guide 2020 & GMAT Official Guide Verbal Review 2020",
        description: "",
        price: "2,676",
        mrp: "3,148",
        discount: {
            percent: "15%",
            amt: "472"
        },
        img: "/assets/images/store/4.webp"
    },{
        id: 5,
        title: "GMAT Official Guide 2020",
        description: "",
        price: "1,869",
        mrp: "2,199",
        discount: {
            percent: "15%",
            amt: "330"
        },
        img: "/assets/images/store/5.webp"
    },
    {
        id: 6,
        title: "GMAT Official Guide Quantitative Review 2020",
        description: "",
        price: "807",
        mrp: "949",
        discount: {
            percent: "15%",
            amt: "142"
        },
        img: "/assets/images/store/6.webp"
    },{
        id: 7,
        title: "GMAT Official Guide Verbal Review 2020",
        description: "",
        price: "807",
        mrp: "949",
        discount: {
            percent: "15%",
            amt: "142"
        },
        img: "/assets/images/store/7.webp"
    },
    ]);
 

    return (
      <div>
        <Head>
          <title>QDS Pro Coaching Institute | Store </title>
          <meta
            name="description"
            content="Visit our store to buy your relevant study materials at a discounted amount and start your prep journey soon."
          />
        </Head>
        <style>
          {`
                    .section-wrapper
                    {
                        width: 75%;
                    }
                    .card
                    {
                        margin: 2%;
                        width: 90%;
                    }
                    .btn, .btn:hover
                    {
                        color: #fff;
                        background-color: #77bf43;
                    }
                    .book-img
                    {
                        height: 15em;
                        width: 100%;
                    }
                    .book-title
                    {
                        font-size: 16px;
                        margin-bottom: 0%;
                        height: 6em;
                    }
                    .book-price
                    {
                        margin: 0%;
                        padding: 3%;
                        font-size: 14px;
                        text-align: right;
                        font-weight: 400;   
                        color: #fff;
                    }
                    .sale-price
                    {
                        font-weight: bold;
                    }
                    .book-mrp
                    {
                        text-decoration: line-through;
                    }
                    .book-desc
                    {
                        width: 100%;
                    }
                    .badge-success
                    {
                        color: #fff;
                        background-color: #77bf43;
                        height: fit-content;
                        padding: 1%;
                        border-bottom-left-radius: 50%;
                        border-top-left-radius: 50%;
                    }

                `}
        </style>
        {/* page loader */}
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
                    Store
                  </h1>
                </div>
              </div>
              {/* main container */}
              <div className="section-wrapper">
                <div className="container">
                  <div className="row" style={{display:"none"}}>
                    {bookDetails.map((book) => {
                      return (
                        <div className="col-sm-4">
                          <div
                            className="card"
                            data-aos="fade"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-linear"
                          >
                            <img
                              className="card-img-top book-img"
                              src={book.img}
                              alt="Book Image"
                            />
                            <div
                              className="card-img-overlay p-0"
                              data-aos="zoom-out-left"
                              data-aos-delay="300"
                              data-aos-duration="500"
                              data-aos-easing="ease-in-linear"
                            >
                              <span className="badge badge-success float-right">
                                <p className="card-text book-price sale-price">
                                  &#8377;{" " + book.price}
                                </p>
                                <p className="card-text book-price">
                                  M.R.P.:{" "}
                                  <span className="book-mrp">
                                    {" "}
                                    &#8377;{" " + book.mrp}
                                  </span>
                                </p>
                                <p className="card-text book-price">You Save</p>
                                <p className="card-text book-price pl-4">
                                  &#8377;{" " + book.discount.amt + " "}(
                                  {book.discount.percent})
                                </p>
                              </span>
                            </div>
                            <div className="card-body" style={{position:"relative"}}>
                              <h6 className="card-title float-left book-title mb-3">
                                {book.title}
                              </h6>
                              {/* <p className="card-text float-left book-desc">{book.description}</p> */}
                              <Link
                                href={{
                                  pathname: "/store_items_desc",
                                  query: { item: book.title, p_id: book.id },
                                }}
                              >
                                <a
                                  href="#"
                                  className="btn btn-success float-left"
                                >
                                  Know More
                                </a>
                              </Link>
                              <a
                                href="#"
                                className="btn btn-success float-right"
                                style={{position:"relative", zIndex:"100"}}
                              >
                                Buy Now
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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

export default Store;

