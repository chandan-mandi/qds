import React, {useState, useEffect} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Box from '../components/Box';
import styled from 'styled-components';
import Head from "next/head";

const ExamsExcelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  
  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 20px;
  } 
  @media (min-width: 1284px) {
    padding: 30px;
  }
`;


const PrivacyPage = (props) => {
  
  const [activeFeatureTab, setActiveFeatureTab] = useState(1);
  
  return (
    <div>
      <Head>
        <title>QDS Pro Coaching Institute | Privacy Policy</title>
        <meta
          name="description"
          content="This Privacy Policy outlines the way in which QDS Pro gathers, uses and manages website users' information."
        />
      </Head>
      <div className="page-loader">
        <div className="clock" />
      </div>
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
                  Privacy Policy
                </h1>
              </div>
            </div>
            {/* About us title */}
          
            <div className="section-wrapper">
                <ExamsExcelWrapper
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-linear"
                  style={{ padding: 0 }}
                >
                  <Box
                    active={activeFeatureTab === 1}
                    onClick={() => setActiveFeatureTab(1)}
                  >
                    <span>Website</span>
                  </Box>
                  <Box
                    active={activeFeatureTab === 2}
                    onClick={() => setActiveFeatureTab(2)}
                  >
                    <span>Mock Test</span>
                  </Box>
             </ExamsExcelWrapper>
            

{ activeFeatureTab === 1 && (
              <div>
              <h2
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                Disclaimer
              </h2>
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                www.qdspro.com is owned and operated by QDS Pro. All rights of
                this website are reserved with QDS Pro. No part or content of
                this website may be reproduced, replicated, distributed or
                transmitted in any form whatsoever or through any means, which
                includes printing, recording or other electronic methods or any
                other methods, as the case may be, without prior written
                permission from the administrator of this website. Users may
                download material from the website only for their own personal,
                non- commercial use. For commercial permission requests, please
                contact the Web administrator.{" "}
              </p>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                QDS Pro reserves the right to make changes to any information
                contained on the website at any time whatsoever, and without
                notice or limitation of any kind, including, but not limited to,
                information relating to countries, courses, universities
                scholarships, fees, study material, doubt solving and other
                related service. We are very sensitive to the privacy concerns
                of visitors to our website. QDS Pro is committed to respect your
                online privacy and recognize your need for appropriate
                protection and management of any personally identifiable
                information or private communication. We take care that the
                content posted on this website is appropriate for their viewing
                and/or use. This Privacy Policy outlines the way in which QDS
                Pro gathers and uses information relating to you.
              </p>
              <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                Personally Identifiable Information We Collect:{" "}
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                We collect no personal information about you when you visit our
                website unless you choose to provide this information to us. If
                you do nothing during your visit but browse through the website,
                read pages, or download information, we will gather and store
                certain information about your visit automatically. This
                information does not identify you personally. Rather,
                information is kept in the aggregate. We automatically collect
                and store only the information about your visit. We use the
                information we collect to understand the traffic to our site and
                to help us make our site more useful to visitors like you.{" "}
              </p>
              <p></p>
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                We collect personally identifiable information (via online or
                offline registration forms), such as name, contact details, e-
                mail address, postal address, telephone/mobile number, your
                gender, date of birth etc. and whether you have chosen to
                receive future communications from QDS Pro when you provide it
                to us, or when you register on our website (either directly with
                us or through our centers), sign up for email newsletters, enter
                a contest, register for site membership, any subscriptions,
                participate in surveys, or to otherwise communicate with us.
                Several of the services that we offer, including but not limited
                to Doubt Solving, Test Preparation, Seminars, Career Counseling,
                etc require registration as a condition of use. We may also
                receive information about you from other sources and add it to
                the information you have provided to us.{" "}
              </p>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                We may combine personal information collected from you with
                other information from data available with us to provide a
                better overall experience, including customizing content for you
                in both forms - online (or electronic) as well offline. We do
                not monitor your use of the Internet; neither do we use cookie
                technology or any other technology to monitor your use of
                www.qdspro.com. We may receive and collect certain anonymous
                information in standard usage logs through our Web server. This
                information may include the IP address assigned to the computer
                you use while accessing www.qdspro.com.{" "}
              </p>
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                We may use personal information about you to build up a profile
                of your performance(s), analysis, preferences and to track your
                progress over the duration of the package for which you have
                enrolled with us. We may use personal information to provide the
                services you've requested, including services that display
                customized content and advertising. We may use this information
                for billing purposes and to fill your orders. If we have trouble
                processing an order, we will use this information to contact
                you. We may also use personal information for auditing, research
                and analysis to operate and improve QDS Pro’s products and
                services. We will not sell your personal information to any
                third party for commercial gains. However, we may, at times,
                mail promotional material that we believe will be of relevance
                to you on behalf of third parties and for which we may receive a
                consideration from the party in question. However, even in such
                situations, all data will remain solely in the possession of QDS
                Pro and will not be shared with any third party save and except
                for authorized law enforcement investigations. We are the sole
                owners of your information collected by us at several different
                points on our Website. However we may share information with
                third parties in limited circumstances, including when complying
                with legal process, preventing fraud or imminent harm, and
                ensuring the security of our network and services.{" "}
              </p>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                We may present information to advertisers who wish to advertise
                on our website. When we present information to our advertisers
                it is to help them understand our audience and confirm the value
                of advertising on our website. Such information is in the form
                of aggregated statistics on traffic to various pages within our
                site.{" "}
              </p>
              <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                Information security:{" "}
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                We take appropriate security measures to protect against
                unauthorized access to or unauthorized alteration, disclosure or
                destruction of data.{" "}
              </p>
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                The information you provide to us will be held on QDS Pros’ own
                servers or on third party servers contracted by QDS Pro. The
                database is stored on servers secured behind a firewall; access
                to the servers is password- protected and is strictly limited.
                However, as effective as our security measures are, no security
                system is impenetrable. We cannot guarantee the security of our
                database, virus attacks, and system errors/bugs nor can we
                guarantee that information you supply will not be intercepted
                while being transmitted to us over the Internet.
              </p>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                We use reasonable precautions to keep the personal information
                you disclose to our magazines and websites, secure and to only
                release this information to third parties we believe share our
                commitment to privacy. However, we are not responsible for any
                breach of security or for the actions of these parties.
              </p>
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                Although, we will endeavor to meet the requirements of the
                Internet Security policy envisaged under this section, we cannot
                accept any responsibility for any loss, disruption or damage to
                your data or your computer system that may occur whilst using
                material derived from this website. As best practice, we also
                strongly recommend that you regularly run an anti-virus
                programme on all material downloaded from the Internet.{" "}
              </p>
              <h2
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                Information Sharing and Disclosure:{" "}
              </h2>
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                QDS Pro does not rent, sell, or share personal information about
                you with other people (save with your consent) or non-affiliated
                companies except to provide products or services you've
                requested, when we have your permission, or under the following
                circumstances:
              </p>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                We provide the information to our trusted partners who work on
                behalf of or with QDS Pro under confidentiality agreements.
                These companies may use your personal information to help QDS
                Pro communicate with you about offers from QDS Pro and our
                marketing partners. However, these companies do not have any
                independent right to share this information.{" "}
              </p>
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                We respond to subpoenas, court orders, or legal process, or to
                establish or exercise our legal rights or defend against legal
                claims; We also may disclose personal information to third
                parties if we have reason to believe that disclosing such
                information is necessary to conduct investigations of possible
                breaches of law, to cooperate in any legal investigation, or to
                identify, contact, or bring legal action against someone who may
                be violating the terms of use of our site.
              </p>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                We believe it is necessary to share information in order to
                investigate, prevent, or take action regarding illegal
                activities, suspected fraud, situations involving potential
                threats to the physical safety of any person, violations of QDS
                Pro’s terms of use, or as otherwise required by law.
              </p>
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                We transfer information about you if QDS Pro is acquired by or
                merged with another company. In this event, QDS Pro will notify
                you before information about you are transferred and becomes
                subject to a different privacy policy.{" "}
              </p>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                QDS Pro displays targeted advertisements based on personal
                information. Advertisers (including ad serving companies) may
                assume that people who interact with, view, or click on targeted
                ads meet the targeting criteria.{" "}
              </p>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                QDS Pro does not provide any personal information to the
                advertiser when you interact with or view a targeted ad.
                However, by interacting with or viewing an ad you are consenting
                to the possibility that the advertiser will make the assumption
                that you meet the targeting criteria used to display the ad.
              </p>
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                QDS Pro is not responsible for the information, you volunteer
                about yourself in the course of discussions in our forums, chat
                rooms, mail box facility or other forms of publicly accessible
                interaction or information that you choose to make public in
                your member profile. As a member, you can view, correct or
                change your publicly available information at any time via your
                member profile page.{" "}
              </p>
              <h2
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                Online Ad Serving:
              </h2>
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                QDS Pro may use advertising services of third parties, to serve
                advertisements when you visit our sites. These companies may use
                information (not including your name, address, e-mail address,
                telephone number, or any other information you’ve provided to
                us) about your visits to our and other web sites in order to
                provide advertisements about goods and services of interest to
                you. You agree and understand that QDS Pro neither owns nor
                operates/controls any information or services provided on such
                third party websites. You further agree and understand that such
                links do not constitute an endorsement by QDS Pro of any such
                websites and are provided only as a convenience. QDS Pro is not
                responsible for the content or links displayed on such websites.
              </p>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                Several companies may provide email deployment services for our
                email messages. The personally identifiable information, such as
                e-mail address, we provide to these vendors for the purposes of
                e-mail deployment is only used by them for that purpose and not
                for any other business activity. We do not give any personally
                identifiable information to them as part of this relationship.
                Use of their tracking technology is subject to their own privacy
                policies. Your decision to use any information contained herein
                will be your decision alone based solely on your own evaluation
                and assessment. We are not responsible for the consequences of
                any actions taken based on the information provided on the
                website. We shall not be held liable for any material or non
                material damage caused by omissions, incorrect or incomplete
                information.{" "}
              </p>
              <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                Links to Other websites:{" "}
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                Our website has links to partners and other sites. When you link
                to another site, you are no longer on our site and are subject
                to the privacy policy of the new site. Other websites may
                collect and treat information collected differently, so we
                encourage you to carefully read and review the privacy policy
                for each website you visit. We will not be responsible for any
                information that you may provide to such websites accessible
                through our website.{" "}
              </p>
              <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                Restriction of Liability:{" "}
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                QDS Pro makes no claims, promises or guarantees about the
                accuracy, completeness, or adequacy of the contents of this
                website and expressly disclaims liability for errors and
                omissions in the contents of this website. No warranty of any
                kind, implied, expressed or statutory, including but not limited
                to the warranties of non- infringement of third party rights,
                title, merchantability, fitness for a particular purpose and
                freedom from computer virus, is given with respect to the
                contents of this website or its hyperlinks to other Internet
                resources. Reference in this website to any specific commercial
                products, processes, or services, or the use of any trade, firm
                or corporation name is for the information and convenience of
                the public, and does not constitute endorsement, recommendation,
                or favoring by QDS Pro. Advertisements are subject to the
                Privacy Policy of the advertising site.{" "}
              </p>
              <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                Changes to this Privacy Policy:{" "}
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                QDS Pro reserves the right to update, change or modify this
                policy at any time without any prior notification. The policy
                shall come to effect from the date of such update, change or
                modification. By using this website, you consent to the terms of
                this Privacy Policy and signify your assent to all of the terms
                of this Privacy Policy and our Terms of Use. If you do not agree
                with any term of this Privacy Policy or our Terms of Use, please
                do not use this site or submit any personally identifiable info
              </p>
              </div>
              )}
              
              { activeFeatureTab === 2 && (
                <div>
              <h2
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                Commitment to Privacy
              </h2>
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                Your privacy is important to us and we, at QDS Pro, respect the need to protect your private
information. We understand the sensitivity of the personal information which may concern
such diverse fields ranging from your career aspirations to your gender preferences. We
shall take such reasonable steps as may be necessary to ensure that your private
information remains confidential.
This Privacy Policy outlines our online information practices and the choices you can make in
giving information about yourself and how such information would be used by us.
This Website is hosted by or on behalf of QDS Pro and we are committed to a safe method
of collecting and maintaining in a secure environment any personal information which may
be requested from you and/or collected from you in accordance with this Privacy Policy and
such laws, rules and regulations as may be applicable.{" "}
              </p>
              
              <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
               What Information Is Collected?{" "}
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
               In general, you may visit this Website without identifying yourself or revealing any personal
information. QDS Pro collects and stores personal information about its users to customize
their experience and enable personalized distribution of content. The personal information
including, but not limited to, Full name, Email address, Mobile number, Gender, Date of
birth etc. is collected by QDS Pro, only when you voluntarily choose to submit it to us. If you
opt to provide us that sort of information, we also may use it for purposes such as verifying
your identity, sending you information or contacting you. While you are visiting QDS Pro, we
get server logs from your browser including your IP address, Browser Information,
requested page and cookies. You can select which information you want to share with us
but by not sharing information, you may lose our features and services. We keep user logs in
order to improve platform and to provide better user experience. It is important to read our
Privacy Policy for Mobile Apps carefully because we may collect some data in order to
provide enhanced experience to users. We ask for limited permissions for our Mobile Apps.
We obtain your personal data (name, email address, phone number, and password) when
you download and register with our Mobile Apps.{" "}
              </p>
              <p></p>
               <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
               How Is Such Information Used?{" "}
              </h2>
               <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
              Website{" "}
              </h2>
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
               It is our policy to keep the data we collect from the users (through our services) in secured
data servers. Personal data (e.g. contact number, email, Full name, Location etc.) is
gathered by QDS Pro to notify about new product information, support services offered on
the website, technical updates and changes in policy, to improve the content and 
functionality or services, to help us better understand our users, or to deliver other services
related regular information, new add-on information. We get this data when a user enters
his details to sign up for our services. This data is used for improving your abilities and to let
you know about your weak areas. With the help of data we gather, we provide individual
analysis in our Analytics. We provide several analysis such as qualification wise, gender wise,
state wise, city wise in order to provide details of top user in each test.{" "}
              </p>
              <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                Mobile Apps:-{" "}
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
               We will request the following permissions when you install our Mobile Apps:-
1. We ask for the access of Location which allows users to share location to show nearby
Centres/Institutes. If the user allows sharing his/her location, the nearby Centres/Institutes
will be shown; otherwise, the default view will be shown.
2. We ask for the access of Storage because we allow users to store Test Sheets, Answer
Sheets and Performance Reports to view their test analysis.
3. We ask for the access of Device Camera because it is used to get the user profile image to
display on the Profile page; to get the same in the User listings on the different analytics
displayed on the website; or to get the Subjective Test Sheets captured, which will then be
shared with the tutor to evaluate the sheets. 
4. We ask for the access of Device Microphone which is used to record the audio for the
Speaking Tests. 
5. We ask for the access of Identity to auto-fill the Gmail account on the device in order to
provide the user a fast sign up process. 
6. We ask for the access of Photos/Media/Files which helps the user to select profile picture
from device’s gallery. 
7. We ask for the access of SMS for auto-filling of OTP through SMS in order to provide the
user a fast sign up process. 
8. We ask for the access of Device ID & Call Information for getting Device ID of user's
device, so we can find and fix bugs appearing on a specific device in order to provide better
UX. {" "}
              </p>
              
             
              <h2
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                Is The Information Shared or Disclosed?{" "}
              </h2>
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
               QDS Pro is not in the business of selling your information. There are, somehow, few
circumstances in which we may share your personal information with certain third parties
without further notice to you, as set forth below:
Business Transfers: As we are developing our business day-by-day, QDS Pro is expanding
business to new places. .For certain programs, we may make your information available to a 
third party, for marketing and other purposes which we believe may be beneficial to you.
QDS Pro will not be responsible for any further agreement / sale / partnership between you
and any other third party.
Legal Requirements: QDS Pro may share your personal information in response to a legal
request or in the good faith belief that the response is required by law to conduct a legal
processing or if it is asked by the Government Official or in unavoidable circumstances to
protect the safety of users on our website.
Related Companies: We may share your personal data with any entity, affiliated with us,
that may or may not adhere to the standards set forth in this privacy policy. We share
minimal data with our affiliates.
PLEASE NOTE THAT QDS Pro SHALL IN NO WAY BE HELD RESPONSIBLE OR LIABLE FOR ANY
INFORMATION WHICH YOU PROVIDE TO A THIRD PARTY, WHICH MAY BE TABBED INTO OUR
WEBSITE. THE INFORMATION BEING PROVIDED TO THE THIRD PARTY APPLICATIONS AND
SITES SHALL BE GOVERNED BY THE INDIVIDUAL PRIVACY POLICIES OF THESE THIRD PARTY
SERVICE PROVIDERS. 
              </p>
              <h2
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                The Security of Your Information:-
              </h2>
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
               We will secure your information with full responsibility in order to keep data from loss,
misuse, and unauthorized access, disclosure, alteration, and destruction. We run security
check every hour and try to keep your data 100% secure. But still, we cannot guarantee its
absolute security. 
              </p>
              
              <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                Data Security:-{" "}
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                We take appropriate security measures to protect against unauthorized access to or
unauthorized alteration, disclosure or destruction of data. These may include such data
collection, storage and processing practices and security measures, as well as physical
security measures as may be necessary to guard against unauthorized access to systems
where we store personal data. However, given that the nature of Internet is changing
rapidly and more malicious code is being developed with every passing day, we do not
guarantee the absolute protection of your information from being destroyed or stolen by
means of introduction of such code into our servers, though we shall put our best efforts to
prevent such an occurrence. However, you understand and agree that when you approach
or are guided to third party gateways for payment, QDS Pro shall not be liable for the
information provided by you (credit card number, debit card information, bank account
detail or any personal information) to the third party.
We restrict access to personal information to QDS Pro employees, contractors and agents
who need to know that information in order to operate, develop or improve our services.
These individuals are bound by confidentiality obligations and may be subject to discipline,
including termination of services, if they fail to meet these obligations. 
However, in case of an unlikely eventuality of a data leakage, we shall endeavour to take all
reasonable steps, as may be possible, to protect your information from being passed onto
the hands of third parties, and shall proceed to recover such information, which, by means
of physical or technological means may be deemed to be recoverable.
NOT WITHSTANDING ANYTHING CONTAINED HERE IN, QDS Pro SHALL IN NO WAY BE MADE
LIABLE OR RESPONSIBLE FOR ANY LOSS OF INFORMATION AND/ OR DATA AND/ OR DIRECT
OR INDIRECT DAMAGES OR LOSSES WHICH MAY OCCUR FROM SUCH ACTS AND/ OR DEEDS
AND CONSEQUENCES, OF WHATSOEVER NATURE ARISING THEREFROM.
You may also note that your computer system shall have to be kept up-to-date with the
latest anti-virus/ anti-spyware for your information which is residing in your system to be
protected.
PLEASE NOTE THAT QDS Pro SHALL IN NO WAY BE RESPONSIBLE FOR ANY LOSS OF
INFORMATION/ DATA WHICH MAY OCCUR FROM YOUR SYSTEM DUE TO INTRODUCTION OF
ANY TROJANS, VIRUSES, BUGS, LOGIC BOMBS OR SPYWARE INTO YOUR SYSTEM. {" "}
              </p>
              <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
               Data Removal:-{" "}
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                QDS Pro has no objection to remove your data. You can contact us on
“support@qdspro.com” with your concern, we can remove your personal information on
urgent basis. Still, it may take 24 hours to remove your entire data from website and more
than 7-9 days from the cached version of web. This may subject to the search engines and
their own policy. But once your data has been removed, you won’t be able to access it
again. {" "}
              </p>
              <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
               Data Quality and Access:-{" "}
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                QDS Pro strives to keep your information and data accurate, complete and current. We will
promptly take steps to correct any inaccuracies in your personally identifiable information
that we are made aware of.
              </p>
               <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
              Business Relationships:- {" "}
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
                The Website contains (or the Website or Service may provide) links to other websites
("Third Party Sites") as well as to articles, photographs, text, graphics, pictures, designs,
presentations, music, sound, video, information, applications, software and other content or
items belonging to or originating from third parties (the "Third Party Applications, Software
or Content"). Such Third Party Sites or Third Party Applications, Software or Content are not
investigated, monitored or checked for accuracy, appropriateness, or completeness by us.
QDS Pro is not responsible for the privacy practices or the content of such websites. QDS
Pro will not and cannot censor or edit the content of any third-party site. You understand
and agree that by affording use of the Website, QDS Pro does not become liable for any loss
or damage that you may incur by approaching such external site or resource, or by relying
on the completeness, accuracy or existence of any advertising, product or material available 
on or from, such website or resource. Hence, you are advised to verify the contents on your
own before acting thereon. 
              </p>
               <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
               Pixels and Tracking:- {" "}
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
               QDS Pro uses pixels, or transparent GIF files and Web Beacons, to track online movement of
users on our website and manage online advertising. We also use it for emails and URL clicks
to gauge the effectiveness of our activities and track certain user activities. These GIF files
are provided by our ad management department. These files enable the department to
recognize a unique cookie on your Web browser, which in turn enables us to know which
advertisements bring users to our Website. The cookie has been placed by us. With cookies
technology, the information that we collect and share is anonymous and not personally
identifiable. It does not contain your name, address, telephone number, or email address. 
              </p>
               
               <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
               Third Party Analytics Tools:- {" "}
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
               QDS Pro uses third party analytics tools such as Google Analytics. QDS Pro does not control
what data third parties collect, or what they will do with it. Their collection and use of
information is subject to their own privacy policies. 
              </p>        
               
               <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
              Cookies:- {" "}
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
              Portions of this website use cookies to keep track of your visit, or to deliver content specific
to your interests. A "Cookie" is a small amount of data transferred to your browser and read
by the Web server that placed it there. It works as a sort of identification card, recording
your preferences and previously entered information. You can set your browser to notify
you when you receive a cookie, giving you the chance to accept or reject it. 
              </p> 
                 
               <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
             Choice / Opt-Out:-{" "}
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
              It is our intent to inform you before we collect personally identifiable information, and tell
you what we intend to do with it. You will have the option of not providing the information,
in which case you may still be able to access other portions of this website, although you
may not be able to access certain programs or services. In certain portions of this website,
we also may enable you to "opt out" of certain uses of your information, or elect not to
receive future communications or services.  
              </p>   
              
                   
               <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
             Contact Us:-{" "}
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
              >
             If you have any questions or comments about our privacy statement or practices, please
contact us via email at support@qdspro.com with the words "PRIVACY POLICY" in the
subject line. QDS Pro reserves the right to modify or update this privacy statement at any
time without prior notice.
We may modify this User Agreement in few parts from time to time. 
              </p>        
                                                       
                                                      
              </div>
              )}
              
              
              
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default PrivacyPage;

