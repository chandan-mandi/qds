import React from 'react';
import styled from 'styled-components';
import Header from "../components/Header";
import Footer from "../components/Footer";
const firebase = require('firebase')
var firebaseConfig = {
  apiKey: "AIzaSyAQa2W4kDr1JyewSSXWqCDDijEN1DPcxuE",
  authDomain: "qdsprowebsiteadmin.firebaseapp.com",
  databaseURL: "https://qdsprowebsiteadmin.firebaseio.com",
  projectId: "qdsprowebsiteadmin",
  storageBucket: "qdsprowebsiteadmin.appspot.com",
  messagingSenderId: "846377315055",
  appId: "1:846377315055:web:846ed4a2071667f14e091a",
  measurementId: "G-4LL22BT1YG"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const PackageContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;  
    
  }
  
`;
const Package = styled.div`
  flex: 1;
  display: flex;
  padding: 10px;
`;
firebase.database().ref('users/quiz/PackagePrice').once('value').then(function(snapshot) {
  var ss=  (snapshot.val() && snapshot.val().packpriceft)
  var s1=  (snapshot.val() && snapshot.val().packpricefp)
  var s2=  (snapshot.val() && snapshot.val().packpricefdes)
  var s3=  (snapshot.val() && snapshot.val().packpricebt)
  var s4=  (snapshot.val() && snapshot.val().packpricebnd)
  var s5=  (snapshot.val() && snapshot.val().packpricebp)
  var s6=  (snapshot.val() && snapshot.val().packpricebdes)
  var s7=  (snapshot.val() && snapshot.val().packagepriceit)
  var s8=  (snapshot.val() && snapshot.val().packagepriceind)
  var s9=  (snapshot.val() && snapshot.val().packagepriceip)
  var s10=  (snapshot.val() && snapshot.val().packagepriceides)
  var s11=  (snapshot.val() && snapshot.val().packagepriceet)
  var s12=  (snapshot.val() && snapshot.val().packagepriceend)
  var s13=  (snapshot.val() && snapshot.val().packagepriceep)
  var s14=  (snapshot.val() && snapshot.val().packagepriceedes)
  $("#freepa").append(ss);
  $("#freeprice").append(s1);
  $("#freepara").append(s2);
  $("#doubtb").append(s3);
  $("#ndoubtsb").append(s4);
  $("#doubtsbp").append(s5);
  $("#doubtp").append(s6);
  $("#doubtint").append(s7);
  $("#ndoubtint").append(s8);
  $("#ndoubtintprice").append(s9);
  $("#ndoubtintp").append(s10);
  $("#doubtexp").append(s11);
  $("#ndoubtexp").append(s12);
  $("#ndoubtexpprice").append(s13);
  $("#ndoubtexpdes").append(s14);
}) .catch(error => 
  console.log(error)
  )
function Pricing() {
  return (
    <div className="packages-section">
      <div className="heading-section">
        <h3 className="heading-text">Packages</h3>
      </div>
      
      <style>
        {`
          .add-on-card{
            height:450px;
          }
        `}
      </style>
      <div className="addon-section pt-5"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-easing="ease-in-linear"
      >
        
        {/* addon card list */}
        <PackageContainer>
    
            <Package>
              
                <div className="add-on-card w-100">
                  <h4 id='freepa' className="card-title text-center border-bottom">
                  
                  </h4>
                  <div className="p-2 card-details">
                    <div className="text-center">
                      {/* <h6 className="card-q addon-sub-text">Doubts: 3</h6> */}
                      <h6 id='freeprice'className="card-q addon-sub-text">
                     
                      </h6>
                      
                      <p id='freepara' className="white-text addon-sub-text text-left">
                       
                      </p>

                      <a
                        href="https://app.qdspro.com"
                        className="btn btn-primary btn-lg"
                        target="_blank"
                        style={{position: 'absolute', bottom: '30px', left: '50px', right: '40px'}}
                      >
                        Try for Free
                      </a>

                    </div>
                  </div>
                </div>
              
            </Package>
            

            <Package>
              
                <div className="add-on-card w-100">
                  <h4 id='doubtb' className="card-title text-center border-bottom">
                   
                  </h4>
                  <div className="p-2 card-details">
                    <div className="text-center">
                      <h6 id='ndoubtsb'className="card-q addon-sub-text"> </h6>
                      <h6 id='doubtsbp' className="card-q addon-sub-text">
                      
                      </h6>
                      <p id='doubtp' className="white-text addon-sub-text text-left">
                        
                      </p>


                    </div>
                    <a
                        href="https://app.qdspro.com"
                        className="btn btn-primary btn-lg"
                        target="_blank"
                        style={{position: 'absolute', bottom: '30px', left: '50px', right: '40px'}}
                      >
                        Buy Now
                      </a>
                  </div>
                </div>
              
            </Package>
            
            <Package>
              
                <div className="add-on-card w-100">
                  <h4 id= 'doubtint'className="card-title text-center border-bottom">
                   
                  </h4>
                  <div className="p-2 card-details">
                    <div className="text-center">
                      <h6 id='ndoubtint' className="card-q addon-sub-text"></h6>
                      <h6 id='ndoubtintprice' className="card-q addon-sub-text">
                       
                      </h6>
                      <p id='ndoubtintp' className="white-text addon-sub-text text-left">
                       
                      </p>
                      
                    </div>
                    <a
                        href="https://app.qdspro.com"
                        className="btn btn-primary btn-lg"
                        target="_blank"
                        style={{position: 'absolute', bottom: '30px', left: '50px', right: '40px'}}
                      >
                        Buy Now
                      </a>
                  </div>
                </div>
              
            </Package>
            

            <Package>
              
                <div className="add-on-card w-100">
                  <h4  id='doubtexp' className="card-title text-center border-bottom">
                   
                  </h4>
                  <div className="p-2 card-details">
                    <div className="text-center">
                      <h6 id='ndoubtexp' className="card-q addon-sub-text"></h6>
                      <h6 id='ndoubtexpprice' className="card-q addon-sub-text">
                       
                      </h6>
                      <p id='ndoubtexpdes' className="white-text addon-sub-text text-left">
                       
                      </p>

                    </div>
                  </div>
                  <a
                        href="https://app.qdspro.com"
                        className="btn btn-primary btn-lg"
                        target="_blank"
                        style={{position: 'absolute', bottom: '30px', left: '50px', right: '40px'}}
                      >
                        Buy Now
                      </a>
                </div>
              
            </Package>
          
        </PackageContainer>
      </div>
    </div>
  );
}

export default Pricing;

