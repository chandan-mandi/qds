// import App from 'next/app'
import React, { useEffect, useState } from "react";
import Popup from "../components/Popup";
import "../node_modules/aos/dist/aos.css";
import AOS from "aos";

function MyApp({ Component, pageProps }) {
const [iconsVisible, setIconVisibility] = useState(false);
const [moreIconsVisible, setMoreIconsVisibility] = useState(false);

function handleMoreIcons() {
  setMoreIconsVisibility(!moreIconsVisible);
}

function handleIconVisibility() {
  setIconVisibility(!iconsVisible);
}

function handleCollapseIcons() {
  setIconVisibility(!iconsVisible);
  document.querySelector(".icons-ul").classList.toggle("collapse-icon-pack");
}

const handleExit = (e) => {
  e = e ? e : window.event;

  // Get the current viewport width.
  var vpWidth = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  if (e.clientX >= vpWidth - 50) return;

  // If the current mouse Y position is not within 50px of the top
  // edge of the viewport, return.
  if (e.clientY >= 50) return;

  // Reliable, works on mouse exiting window and
  // user switching active program
  var from = e.relatedTarget || e.toElement;
  if (!from) {
    if (!$("#myModal").is(":visible")) {
      var audio = new Audio("/assets/sound/pop_up.mp3");
      // console.log("Playing audio");
      //audio.play();
    }
    $("#myModal").modal();
  }
};

useEffect(() => {
  document.addEventListener("mouseout", handleExit);
});

useEffect(() => {
  AOS.init();
}, []);

useEffect(() => {
  AOS.refresh();
}, [Component, pageProps]);

return (
  <>
    {/* <Popup />  */}
    <div className="top-numbers">
      <ul className="top-numbers-list" data-aos="fade-right">
        <li className="contact-no-item">
          <a
            title="Whatsapp Us"
            href="https://api.whatsapp.com/send?phone=919920715001"
	    target="_blank"
          >
            <i className="fa fa-whatsapp mr-2 top-icon"></i>
            <span> +91-99207 15001</span>
          </a>
        </li>
        <li className="contact-no-item">
          <a title="Call Us" href="tel:7303315003" target="_blank">
            <i className="fa fa-mobile mr-2 top-icon"></i>
            <span> +91-73033 15003</span>
          </a>
        </li>
        <li className="contact-no-item">
          <a title="Call Us" href="tel:7303315004" target="_blank">
            <i className="fa fa-mobile mr-2 top-icon"></i>
            <span> +91-73033 15004</span>{" "}
          </a>
          </li>

            <li className="contact-no-item">
            <a
            href="mailto:admin@qdspro.com"
            target="_blank"
            title="Email Us"
	    id= "firstMail">
          <i class="fa fa-envelope green"></i>{" "}
                      
                        <span>admin@qdspro.com</span>
                      </a>
        </li>

        <li className="contact-no-item">
            <a
            href="mailto:support@qdspro.com"
            target="_blank"
            title="Email Us">
          <i class="fa fa-envelope green"></i>{" "}
                      
                        <span>support@qdspro.com</span>
                      </a>
        </li>
      </ul>
    </div>
    <Component {...pageProps} />
    <div className="icon-pack">
      <ul className="icons-ul">
        <li>
          <a
            href=" https://www.google.com/search?hl=en&source=hp&ei=LyNKYMLhA4bl9QO5vZKQBA&iflsig=AINFCbYAAAAAYEoxP4yX8LYLhYYMQyep1bcMOP39uNrw&q=QDS+Pro&oq=QDS+Pro&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEMcBEK8BEJMCMgUIABDJAzICCAAyAggAMgIIADICCAAyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjoFCAAQsQM6CAguELEDEIMBOggILhDHARCjAjoFCC4QsQM6CAgAELEDEIMBOggILhDHARCvAVDdD1i9G2CbIGgBcAB4AIABpQGIAYwHkgEDMC43mAEAoAEBqgEHZ3dzLXdperABAA&sclient=gws-wiz&ved=0ahUKEwiCtfP6s6jvAhWGcn0KHbmeBEIQ4dUDCAc&uact=5"
            target="_blank"
            title="Google"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 172 172"
              style={{ fill: "#000000;", borderRadius: "50%"}}
            >
              <g transform="">
                <g
                  fill="none"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <path d="M0,172v-172h172v172z" fill="#ffffff"></path>
                  <path d="" fill="none"></path>
                  <path d="" fill="none"></path>
                  <path d="" fill="none"></path>
                  <g>
                    <path
                      d="M156.27275,71.96408h-5.77275v-0.29742h-64.5v28.66667h40.50242c-5.90892,16.68758 -21.78667,28.66667 -40.50242,28.66667c-23.74675,0 -43,-19.25325 -43,-43c0,-23.74675 19.25325,-43 43,-43c10.96142,0 20.93383,4.13517 28.52692,10.88975l20.27092,-20.27092c-12.79967,-11.92892 -29.92083,-19.2855 -48.79783,-19.2855c-39.57792,0 -71.66667,32.08875 -71.66667,71.66667c0,39.57792 32.08875,71.66667 71.66667,71.66667c39.57792,0 71.66667,-32.08875 71.66667,-71.66667c0,-4.80525 -0.4945,-9.49583 -1.39392,-14.03592z"
                      fill="#f1c40f"
                    ></path>
                    <path
                      d="M22.5965,52.64275l23.54608,17.26808c6.37117,-15.77383 21.801,-26.91083 39.85742,-26.91083c10.96142,0 20.93383,4.13517 28.52692,10.88975l20.27092,-20.27092c-12.79967,-11.92892 -29.92083,-19.2855 -48.79783,-19.2855c-27.52717,0 -51.39933,15.54092 -63.4035,38.30942z"
                      fill="#ff3d00"
                    ></path>
                    <path
                      d="M86,157.66667c18.5115,0 35.33167,-7.08425 48.04892,-18.60467l-22.18083,-18.7695c-7.19533,5.45025 -16.13933,8.7075 -25.86808,8.7075c-18.6405,0 -34.46808,-11.88592 -40.43075,-28.47317l-23.3705,18.00625c11.86083,23.20925 35.948,39.13358 63.80125,39.13358z"
                      fill="#4caf50"
                    ></path>
                    <path
                      d="M156.27275,71.96408h-5.77275v-0.29742h-64.5v28.66667h40.50242c-2.838,8.01592 -7.99442,14.92817 -14.64508,19.96275c0.00358,-0.00358 0.00717,-0.00358 0.01075,-0.00717l22.18083,18.7695c-1.5695,1.42617 23.61775,-17.22508 23.61775,-53.05842c0,-4.80525 -0.4945,-9.49583 -1.39392,-14.03592z"
                      fill="#1976d2"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </li>
        <li>
          <a title="Facebook" href="https://www.facebook.com/qdspro">
            <i
              className="icons fa fa-facebook"
              style={{ backgroundColor: "rgb(59, 89, 152)", color: "#fff" }}
            ></i>
          </a>
        </li>
        <li>
          <a title="Twitter" href="https://twitter.com/qdspro">
            <i
              className="icons fa fa-twitter"
              style={{ backgroundColor: "rgb(29, 161, 242)", color: "#fff" }}
            ></i>
          </a>
        </li>
        <li>
          <a title="Instagram" href="https://www.instagram.com/qds_pro/">
            <i
              className="icons fa fa-instagram"
              style={{ backgroundColor: "#f11061", color: "#fff" }}
            ></i>
          </a>
        </li>

        {moreIconsVisible ? (
          <ul>
            <li>
              <a
                title="WhatsApp"
                href="https://api.whatsapp.com/send?phone=919920715001"
              >
                <i
                  className="icons fa fa-whatsapp"
                  style={{
                    backgroundColor: "rgb(77, 194, 71)",
                    color: "#fff",
                  }}
                ></i>
              </a>
            </li>
            <li>
              <a
                title="YouTube"
                href="https://www.youtube.com/channel/UCThSB8MetfOBMlK28t9ilXA"
              >
                <i
                  className="icons fa fa-youtube-play"
                  style={{
                    backgroundColor: "rgb(203, 32, 39)",
                    color: "#fff",
                  }}
                ></i>
              </a>
            </li>
            <li>
              <a
                title="LinkedIn"
                href="https://www.linkedin.com/company/qds-pro"
              >
                <i
                  className="icons fa fa-linkedin"
                  style={{
                    backgroundColor: "rgb(0, 119, 181)",
                    color: "#fff",
                  }}
                ></i>
              </a>
            </li>
            <li>
              <a title="Email" href="mailto:admin@qdspro.com">
                <i
                  className="icons fa fa-envelope"
                  style={{
                    backgroundColor: "rgb(132, 132, 132)",
                    color: "#fff",
                  }}
                ></i>
              </a>
            </li>
            <li>
              <a title="Pinterest" href="https://in.pinterest.com/qdspro/">
                <i
                  className="icons fa fa-pinterest"
                  style={{
                    backgroundColor: "rgb(203, 32, 39)",
                    color: "#fff",
                  }}
                ></i>
              </a>
            </li>
            <li onClick={handleMoreIcons} title="Less">
              <i
                className="icons fa fa-minus"
                style={{ backgroundColor: "#77bf43", color: "#fff" }}
              ></i>
            </li>
          </ul>
        ) : (
          <li onClick={handleMoreIcons} title="More">
            <i
              className="icons fa fa-plus"
              style={{ backgroundColor: "#77bf43", color: "#fff" }}
            ></i>
          </li>
        )}
      </ul>
      <ul className="open-close-icons">
        {iconsVisible ? (
          <li onClick={handleCollapseIcons} title="Show">
            <i
              className="icons icon-close fa fa-chevron-left"
              style={{ backgroundColor: "#77bf43", color: "#fff" }}
            ></i>
          </li>
        ) : (
          <li onClick={handleCollapseIcons} title="Hide">
            <i
              className="icons icon-open fa fa-chevron-right"
              style={{ backgroundColor: "#77bf43", color: "#fff" }}
            ></i>
          </li>
        )}
      </ul>
    </div>
    <style>
      {`
				  .top-numbers{
					position:absolute;
					top:0;
					left:0;
					width:100vw;
				  }
				  .top-numbers-list{
					  display:flex;
					  justify-content:center;
					  list-style:none;
					  padding-left:0;
					  height:50px;
				  }
				  .top-numbers-list li{
					  margin:5px 15px;
					  align-self:center;
					  position:relative;
					  z-index:999;
				  }
				  .top-icon{
					  font-size:28px;
					  position:relative;
					  top:4px;
					  left:4px;
				  }
				  @media (max-width:1200px)
				  {
					.top-numbers-list{
						height:90px;
					}
					.top-numbers-list li{
						z-index:unset;
					}
				  }
				  @media (max-width:1000px)
				  {
					.top-numbers-list{
						height:90px;
						padding-left:100px;
					}
				  }

				  @media (max-width:800px)
				  {
					  .top-numbers-list{
						  height:50px;
						  padding-left:0;
					  }
					  .top-numbers-list li{
						  margin:2px 15px;
					  }
				  }
				  @media (max-width:600px)
				  {
					  .top-numbers-list li{
						  margin:2px;
					  }
				  }
				  @media (max-width:500px)
				  {
					.top-numbers-list{
						display:flex;
						flex-wrap:wrap;
						height:90px;
						
					} 
					.top-numbers-list li{
						margin:0px 10px;
						font-size:15px;
					}
					.top-numbers-list li:last-child{
						margin-top:-20px;
						
					}
					
					.top-icon{
						font-size:26px;
					}
				  }
				  @media (max-width:360px)
				  {
					.top-numbers-list{
						display:flex;
						flex-wrap:wrap;
						height:90px;
						
					} 
					.top-numbers-list li{
						margin:0px 10px;
						font-size:13px;
					}
					.top-numbers-list li:last-child{
						margin-top:-40px;
						
					}
				  }
				  @media (max-width:300px)
				  {
					.top-numbers-list{
						display:flex;
						flex-wrap:wrap;
						height:70px;
						
					} 
					.top-numbers-list li{
						margin:0px 10px;
						font-size:13px;
					}
					.top-numbers-list li:last-child{
						margin-top:0px;
						
					}
				  }
  

				  /* Upper List Of All Icons */
				  .icon-pack{
					  position:fixed;
					  top:140px;
					  right:10px;
					  z-index:999;
				  }
				  .icon-pack ul{
					  list-style:none;
					  padding-left:0;
				  }
				  .icons{
					  cursor:pointer;
					  background-color:#fff;
					  width:43px;
					  height:43px;
					  padding-top:9px;
					  border-radius:50%;
					  text-align:center;
					  font-size:24px;
					  margin:-3px;
				  }

				  /* Styling Open Close Icon Direction */
				  .icon-close
				   {
					  font-size:15px;
					  width:43px;
					  height:43px;
					  padding-top:14px;
					  padding-right:2px;
					  font-weight:lighter;
				  }
				  .icon-open
				   {
					font-size:15px;
					width:43px;
					height:43px;
					padding-top:14px;
					padding-left:2px;
					font-weight:lighter;
				  }
				  .open-close-icons{
					  list-style:none;
					  margin-top:-5px;
				  }

				  /* List Of Icons Will Be Hidden On Click */
				  .icons-ul{
					  position:relative;
					  right:0;
					  transition: all 0.3s linear;
				  }
				  .collapse-icon-pack{
					  right:-100px;
				  }
				  .contact-no-item i,
				  .contact-no-item span{
					  color:#77bf43;
					  font-weight:bold;
					  text-shadow:0 2px 10px #000;
				  }

				  @media (max-width:768px)
				  {
					.contact-no-item i,
			     	.contact-no-item span{
					  font-weight:unset;  
					  text-shadow:0 2px 10px #000;
				    }  
				  }
				  .fa-google {
            background: conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
          }
				`}
    </style>
  </>
);
}

export default MyApp;
