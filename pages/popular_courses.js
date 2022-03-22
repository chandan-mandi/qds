import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import { useRouter } from "next/router";
import Box from "../components/Box";
import styled from "styled-components";
import AboutGMAT from "./about_gmat";
import AboutCAT from "./about_cat";
import AboutGRE from "./about_gre";
import AboutSAT from "./about_sat";
import AboutMAHSET from "./about_mahcet";
import CompareOnlinePrepCompanies from "../Fragments/CompareOnlinePrepCompanies";
import VideoModal from "./Videomodal";
//import { GMATPackages } from '../Fragments/GMATPackages';
import Link from "next/link";
// import { CATPackages } from '../Fragments/CATPackages';
//import { GREPackages } from '../Fragments/GREPackages';
//import { MAHSETPackages } from '../Fragments/MAHCETPackages';
//import { SATPackages } from '../Fragments/SATPackages';
import UpcomingBatches from "./upcoming_batches";
import $ from "jquery";
import CourseCard from "../components/Card/CourseCard";
import KeyHighlightCard from "../components/Card/KeyHighlightCard";

const USPPackages = [
  {
    id: 0,
    title: "Personalised AI-Powered Tools",
    description: "54+ hours of live online sessions where you can directly interact with experts and get your doubts resolved",
    img: "https://i.ibb.co/nfsNGhg/rechargeable.png"
  },
  {
    id: 1,
    title: "faculty through our 24*7 Live system",
    description: "7 full length adaptive mock test powered by Veritas Prep to help you prepare for the real test scenario",
    img: "https://cdn-icons.flaticon.com/png/512/2980/premium/2980980.png?token=exp=1647898415~hmac=299081219b583e431cefe5b4f834798a"
  },
  {
    id: 2,
    title: "Exclusive Student Progress Tracking Software",
    description: "Procoted workshops on Critical Reasoning Reading Comprehension Sentence Correction Problem Solving and Data Sufficiency",
    img: "https://cdn-icons-png.flaticon.com/512/3273/3273399.png"
  },
  {
    id: 3,
    title: "Master Workshops",
    description: "Get the best study materials available for GMAT with answers and explanations. Get hours of quality practice in our e-learning platform",
    img: "https://cdn-icons.flaticon.com/png/512/4823/premium/4823358.png?token=exp=1647898669~hmac=539ff650881da7a3d567c57fba067413"
  },
  {
    id: 4,
    title: "Live Reviser Classes",
    description: "1000+ practice questions of GMAT with answers and explanations Get hours of quality practice in our e-learning platform",
    img: "https://cdn-icons.flaticon.com/png/512/4646/premium/4646944.png?token=exp=1647898645~hmac=fe370b5660bd46d8c3a284ec9c63821d"
  },
  {
    id: 5,
    title: "Power-Packed Testing System",
    description: "Balance the demands of your job/ college and GMAT preparation with late night swssions (from 21:00-23:00 hrs) & option of Weekend classes.",
    img: "https://cdn-icons-png.flaticon.com/512/2942/2942707.png"
  },
]
const conceptualUnderstandings = [
  {
    id: 0,
    title: "Personalised Batches of only 4-5 students",
    description: "54+ hours of live online sessions where you can directly interact with experts and get your doubts resolved",
    img: "https://i.ibb.co/nfsNGhg/rechargeable.png"
  },
  {
    id: 1,
    title: "Concepts covered from the very basics",
    description: "7 full length adaptive mock test powered by Veritas Prep to help you prepare for the real test scenario",
    img: "https://cdn-icons.flaticon.com/png/512/2980/premium/2980980.png?token=exp=1647898415~hmac=299081219b583e431cefe5b4f834798a"
  },
  {
    id: 2,
    title: "Recorded Live Classes",
    description: "Procoted workshops on Critical Reasoning Reading Comprehension Sentence Correction Problem Solving and Data Sufficiency",
    img: "https://cdn-icons-png.flaticon.com/512/3273/3273399.png"
  },
  {
    id: 3,
    title: "Higly Qualified and Experience Faculty",
    description: "Get the best study materials available for GMAT with answers and explanations. Get hours of quality practice in our e-learning platform",
    img: "https://cdn-icons.flaticon.com/png/512/4823/premium/4823358.png?token=exp=1647898669~hmac=539ff650881da7a3d567c57fba067413"
  },
]
const applications = [
  {
    id: 0,
    title: "Access to QDS Pro Online Prep Portal",
    description: "54+ hours of live online sessions where you can directly interact with experts and get your doubts resolved",
    img: "https://i.ibb.co/nfsNGhg/rechargeable.png"
  },
  {
    id: 1,
    title: "Huge Study Library",
    description: "7 full length adaptive mock test powered by Veritas Prep to help you prepare for the real test scenario",
    img: "https://cdn-icons.flaticon.com/png/512/2980/premium/2980980.png?token=exp=1647898415~hmac=299081219b583e431cefe5b4f834798a"
  },
  {
    id: 2,
    title: "Question Banks, Practice Worksheets",
    description: "Procoted workshops on Critical Reasoning Reading Comprehension Sentence Correction Problem Solving and Data Sufficiency",
    img: "https://cdn-icons-png.flaticon.com/512/3273/3273399.png"
  },
  {
    id: 3,
    title: "Detailed Explanatory Answers and Video Solutions",
    description: "Get the best study materials available for GMAT with answers and explanations. Get hours of quality practice in our e-learning platform",
    img: "https://cdn-icons.flaticon.com/png/512/4823/premium/4823358.png?token=exp=1647898669~hmac=539ff650881da7a3d567c57fba067413"
  },
  {
    id: 4,
    title: "Live Online Doubt Solving Sessions",
    description: "Get the best study materials available for GMAT with answers and explanations. Get hours of quality practice in our e-learning platform",
    img: "https://cdn-icons.flaticon.com/png/512/4823/premium/4823358.png?token=exp=1647898669~hmac=539ff650881da7a3d567c57fba067413"
  },
]
const testings = [
  {
    id: 0,
    title: "Mock Tests",
    description: "54+ hours of live online sessions where you can directly interact with experts and get your doubts resolved",
    img: "https://i.ibb.co/nfsNGhg/rechargeable.png"
  },
  {
    id: 1,
    title: "Analytics",
    description: "7 full length adaptive mock test powered by Veritas Prep to help you prepare for the real test scenario",
    img: "https://cdn-icons.flaticon.com/png/512/2980/premium/2980980.png?token=exp=1647898415~hmac=299081219b583e431cefe5b4f834798a"
  },
]
const utilities = [
  {
    id: 0,
    title: "Study Planner",
    description: "54+ hours of live online sessions where you can directly interact with experts and get your doubts resolved",
    img: "https://i.ibb.co/nfsNGhg/rechargeable.png"
  },
  {
    id: 1,
    title: "Exam-Related Alerts",
    description: "7 full length adaptive mock test powered by Veritas Prep to help you prepare for the real test scenario",
    img: "https://cdn-icons.flaticon.com/png/512/2980/premium/2980980.png?token=exp=1647898415~hmac=299081219b583e431cefe5b4f834798a"
  },
  {
    id: 2,
    title: "Discussion Forum",
    description: "7 full length adaptive mock test powered by Veritas Prep to help you prepare for the real test scenario",
    img: "https://cdn-icons.flaticon.com/png/512/2980/premium/2980980.png?token=exp=1647898415~hmac=299081219b583e431cefe5b4f834798a"
  },
]

const CATPackages = [
  {
    id: 0,
    title: "CAT Online Comprehensive Package",
    description: "Need help with your full CAT Prep, end-to-end?",
    pointers: [
      " Learn from CAT 99+%iler",
      " 125+ Hours of Rigorous Online-Classroom Training",
      " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
      " Study from Fully Customized Study Material",
      " Daily Homework Worksheets / Assignments",
      " 20,000+ CAT Practice Questions Segregated Topic-Wise",
      " 25+ Mock Tests",
      " Master Workshops - Mental Math, Vocabulary Building, Motivational Sessions, etc...",
      " Reviser Classes, Mock Test Reviews & much more...",
    ],
    link: "https://www.youtube.com/watch?v=mifJWxd-b9s",
  },
  {
    id: 1,
    title: "CAT Online Quant Package",
    description: "Need help with only the CAT Quant Section?",
    pointers: [
      " Learn from CAT 99+%iler",
      " 80+ Hours of Rigorous Online-Classroom Training",
      " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
      " Study from Fully Customized Study Material",
      " Daily Homework Worksheets / Assignments",
      " 15,000+ CAT Quant Practice Questions Segregated Topic-Wise",
      " 35+ CAT Quant Mock Tests",
      " Master Workshops - Mental Math, Motivational Sessions, etc...",
      " Reviser Classes, Mock Test Reviews & much more...",
    ],
    link: "https://www.youtube.com/watch?v=FHFvzdKsRXE",
  },
  {
    id: 2,
    title: "CAT Online Verbal Package",
    description: "Need help with only the CAT Verbal Section?",
    pointers: [
      " Learn from CAT 99+%iler",
      " 40+ Hours of Rigorous Online-Classroom Training",
      " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
      " Study from Fully Customized Study Material",
      " Daily Homework Worksheets / Assignments",
      " 5,000+ CAT Verbal Practice Questions Segregated Topic-Wise",
      " 35+ CAT Verbal Mock Tests",
      " Master Workshops - Vocabulary Building, Motivational Sessions, etc...",
      " Reviser Classes, Mock Test Reviews & much more...",
    ],
    link: "https://www.youtube.com/watch?v=-YYM51KUzBQ",
  },
  {
    id: 3,
    title: "CAT Online Quant, DI and LR Package",
    description: "Need help with CAT Quant, DI and LR Sections?",
    pointers: [
      " Learn from CAT 99+%iler",
      " 100+ Hours of Rigorous Online-Classroom Training",
      " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
      " Study from Fully Customized Study Material",
      " Daily Homework Worksheets / Assignments",
      " 20,000+ CAT Quant, DI and LR Practice Questions Segregated Topic-Wise",
      " 50+ CAT Quant, DI and LR Mock Tests",
      " Master Workshops - Mental Math, Motivational Sessions, etc...",
      " Reviser Classes, Mock Test Reviews & much more...",
    ],
    link: "https://www.youtube.com/watch?v=nO4AEiuw6oI",
  },
];

const GMATPackages = [
  {
    id: 0,
    title: "GMAT Online Comprehensive Package",
    description: "Need help with your full GMAT Prep, end-to-end?",
    pointers: [
      " Learn from GMAT 99%iler",
      " 125+ Hours of Rigorous Online-Classroom Training",
      " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
      " Study from Popular Author Books & Publications (GMAT Official Guides, Manhattan Prep, Veritas Prep, Kaplan, etc...)",
      " Daily Homework Worksheets / Assignments",
      " 20,000+ GMAT Practice Questions Segregated Topic-Wise & Difficulty-Wise",
      " 15+ GMAT Full-Length Computer Adaptive Tests",
      " Master Workshops - Mental Math, Vocabulary Building, Motivational Sessions, etc...",
      " Reviser Classes, Mock Test Reviews & much more...",
    ],
    link: "https://www.youtube.com/watch?v=BPXk_DOO8lc",
  },
  {
    id: 1,
    title: "GMAT Online Quant Package (IR Included)",
    description: "Need help with only the GMAT Quant Section?",
    pointers: [
      " Learn from GMAT 99%iler",
      " 100+ Hours of Rigorous Online-Classroom Training",
      " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
      " Study from Popular Author Books & Publications (GMAT Official Guides, Manhattan Prep, Veritas Prep, Kaplan, etc...)",
      " Daily Homework Worksheets / Assignments",
      " 15,000+ GMAT Quant Practice Questions Segregated Topic-Wise & Difficulty-Wise",
      " 25+ GMAT Quant Mock Tests",
      " Master Workshops - Mental Math, Motivational Sessions, etc...",
      " Reviser Classes, Mock Test Reviews & much more...",
    ],
    link: "https://www.youtube.com/watch?v=PHdrlPIAzMk",
  },
  {
    id: 2,
    title: "GMAT Online Verbal Package (AWA Included)",
    description: "Need help with only the GMAT Verbal Section?",
    pointers: [
      " Learn from GMAT 99%iler",
      " 40+ Hours of Rigorous Online-Classroom Training",
      " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
      " Study from Popular Author Books & Publications (GMAT Official Guides, Manhattan Prep, Veritas Prep, Kaplan, etc...)",
      " Daily Homework Worksheets / Assignments",
      " 5,000+ GMAT Verbal Practice Questions Segregated Topic-Wise & Difficulty-Wise",
      " 25+ GMAT Verbal Mock Tests",
      " Master Workshops - Vocabulary Building, Motivational Sessions, etc...",
      " Reviser Classes, Mock Test Reviews & much more...",
    ],
    link: "https://www.youtube.com/watch?v=g8ixF5FTplo",
  },
  {
    id: 3,
    title: "GMAT Online Crash Course Package",
    description:
      "Limited Time in hand? Looking for a Crash Course for your full GMAT Prep?",
    pointers: [
      " Learn from GMAT 99%iler",
      " 80+ Hours of Rigorous Online-Classroom Training",
      " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
      " Study from Popular Author Books & Publications (GMAT Official Guides, Manhattan Prep, Veritas Prep, Kaplan, etc...)",
      " Daily Homework Worksheets / Assignments",
      " 15,000+ GMAT Practice Questions Segregated Topic-Wise & Difficulty-Wise",
      " 10+ GMAT Full-Length Computer Adaptive Tests",
      " Master Workshops - Mental Math, Vocabulary Building, Motivational Sessions, etc...",
      " Reviser Classes, Mock Test Reviews & much more...",
    ],
    link: "https://www.youtube.com/watch?v=XDyt8F8VwUE",
  },
  {
    id: 4,
    title: "GMAT Online Super Week Package",
    description:
      "Very close to the D-Day? Just one week or so remaining? Still wish to undergo the full GMAT Prep Course?",
    pointers: [
      " Learn from GMAT 99%iler",
      " 80+ Hours of Rigorous Online-Classroom Training (7 days x 12 hours per day)",
      " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
      " Study from Popular Author Books & Publications (GMAT Official Guides, Manhattan Prep, Veritas Prep, Kaplan, etc...)",
      " Daily Homework Worksheets / Assignments",
      " 15,000+ GMAT Practice Questions Segregated Topic-Wise & Difficulty-Wise",
      " 5+ GMAT Full-Length Computer Adaptive Tests",
      " Mental Math Workshops",
    ],
    link: "https://www.youtube.com/watch?v=ZZPSTvtT-o0",
  },
  {
    id: 5,
    title: "GMAT Hybrid Package",
    description:
      "Left Quant long back? Need more help with it? Prefer one-to-one? Not comfortable with other quick learners? Hesitant to ask doubts? Don't worry we've got you covered.",
    pointers: [
      " Learn from GMAT 99%iler",
      " All One-To-One Sessions for GMAT Quant",
      " Personalised Tutoring for GMAT Verbal (4-5 students)",
      " 80+ Hours of Rigorous Classroom Training",
      " Study from Popular Author Books & Publications (GMAT Official Guides, Manhattan Prep Guides, Veritas Prep Guides, Kaplan, etc...) ",
      " Daily Homework Worksheets & Assignments",
      " 20,000+ GMAT Practice Questions Segregated Section-Wise, Topic-Wise & Difficulty-Wise",
      " Mental Math Workshops",
      " 15+ Full-Length GMAT Computer Adaptive Tests",
      " Reviser Classes, Mock Test Reviews & much more...",
    ],
    link: "https://www.youtube.com/watch?v=DJkdb3GNAEg",
  },
  {
    id: 6,
    title: "GMAT Last Minute Reviser Package",
    description:
      "Done with your GMAT Prep, still lacking confidence? Want to revise some Quant and/or Verbal topics? Looking for someone to solve your doubts? Wish someone experienced could review your mock tests? Need that final touch? We're there!",
    pointers: [
      " Learn from GMAT 99%iler",
      " All One-To-One Sessions",
      " Reviser Classes for any topic that you'd like to revise from Quant/Verbal/IR",
      " Live Doubt Solving Sessions to instantly resolve all your Quant/Verbal/IR Doubts",
      " Mock Test Review Sessions to review your mock tests, to identify your strengths and weaknesses (SWOT Analysis), to discuss test-taking strategies, etc...",
      " All Classes on our QDS Pro Online Prep Portal",
      " Free Resources to aid your GMAT Prep & much more...",
    ],
    link: " https://youtu.be/DJbM2NoQE5Q",
  },
  {
    id: 7,
    title: "2 Days To Crack GMAT Package",
    description:
      "3 Days to the D-Day? Wish to revise everything? Too much ground to cover, don't know where to start? Freaking out? Don't. Just sit back & relax, cause we have your back.",
    pointers: [
      " Learn from GMAT 99%iler",
      " Personalised Batch of only 4-5 students",
      " 24+ Hours of Rigorous Classroom Training (spread evenly across 2 days)",
      " A Thorough Revision of All Quant, Verbal, IR and AWA Topics",
      " Mental Math Workshop",
      " Doubt Solving Session",
      " Mock Test Review Session",
      " Key Test-Taking Strategies Session & much more...",
    ],
    link: "https://www.youtube.com/watch?v=dY8BMAzfyrw",
  },
];

const MAHSETPackages = [
  {
    id: 0,
    title: "MAH-CET Online Comprehensive Package",
    description: "Need help with your full MAH-CET Prep, end-to-end?",
    pointers: [
      " Learn from CAT 99+%iler",
      " 100+ Hours of Rigorous Online-Classroom Training",
      " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
      " Study from Fully Customized Study Material",
      " Daily Homework Worksheets / Assignments",
      " 20,000+ MAH-CET Practice Questions Segregated Topic-Wise",
      " 25+ Mock Tests",
      " Master Workshops - Mental Math, Vocabulary Building, Motivational Sessions, etc...",
      " Reviser Classes, Mock Test Reviews & much more...",
    ],
    link: "https://www.youtube.com/watch?v=hTorXd1KenE",
  },
  {
    id: 1,
    title: "MAH-CET Online Quant Package (DI Included)",
    description: "Need help with only the MAH-CET Quant Section?",
    pointers: [
      " Learn from CAT 99+%iler",
      " 70+ Hours of Rigorous Online-Classroom Training",
      " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
      " Study from Fully Customized Study Material",
      " Daily Homework Worksheets / Assignments",
      " 15,000+ MAH-CET Quant Practice Questions Segregated Topic-Wise",
      " 35+ MAH-CET Quant Mock Tests",
      " Master Workshops - Mental Math, Motivational Sessions, etc...",
      " Reviser Classes, Mock Test Reviews & much more...",
    ],
    link: "https://www.youtube.com/watch?v=eyt3npPfSVA",
  },
  {
    id: 2,
    title: "MAH-CET Online Verbal Package",
    description: "Need help with only the MAH-CET Verbal Section?",
    pointers: [
      " Learn from CAT 99+%iler",
      " 30+ Hours of Rigorous Online-Classroom Training",
      " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
      " Study from Fully Customized Study Material",
      " Daily Homework Worksheets / Assignments",
      " 5,000+ MAH-CET Verbal Practice Questions Segregated Topic-Wise",
      " 35+ MAH-CET Verbal Mock Tests",
      " Master Workshops - Vocabulary Building, Motivational Sessions, etc...",
      " Reviser Classes, Mock Test Reviews & much more...",
    ],
    link: "https://www.youtube.com/watch?v=eQy0RkaPXSQ",
  },
  {
    id: 3,
    title: "MAH-CET Online Quant, DI and LR Package",
    description: "Need help with MAH-CET Quant, DI and LR Sections?",
    pointers: [
      " Learn from CAT 99+%iler",
      " 90+ Hours of Rigorous Online-Classroom Training",
      " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
      " Study from Fully Customized Study Material",
      " Daily Homework Worksheets / Assignments",
      " 20,000+ MAH-CET Quant, DI and LR Practice Questions Segregated Topic-Wise",
      " 50+ MAH-CET Quant, DI and LR Mock Tests",
      " Master Workshops - Mental Math, Motivational Sessions, etc...",
      " Reviser Classes, Mock Test Reviews & much more...",
    ],
    link: "https://www.youtube.com/watch?v=_LbBmX0pe3M",
  },
];

const GREPackages = [
  {
    id: 0,
    title: "GRE Online Comprehensive Package",
    description: "Need help with your full GRE Prep, end-to-end?",
    pointers: [
      " Learn from GMAT 99%iler",
      " 65+ Hours of Rigorous Online-Classroom Training",
      " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
      " Study from Popular Author Books & Publications (GRE Official Guides, Manhattan Prep, Veritas Prep, Kaplan, etc...)",
      " Daily Homework Worksheets / Assignments",
      " 20,000+ GRE Practice Questions Segregated Topic-Wise",
      " 15+ MockTests",
      " Master Workshops - Mental Math, Vocabulary Building, Motivational Sessions, etc...",
      " Reviser Classes, Mock Test Reviews & much more...",
    ],
    link: "https://www.youtube.com/watch?v=EOIehhuKmlo",
  },
  {
    id: 1,
    title: "GRE Online Quant Package",
    description: "Need help with only the GRE Quant Section?",
    pointers: [
      " Learn from GMAT 99%iler",
      " 40+ Hours of Rigorous Online-Classroom Training",
      " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
      " Study from Popular Author Books & Publications (GRE Official Guides, Manhattan Prep, Veritas Prep, Kaplan, etc...)",
      " Daily Homework Worksheets / Assignments",
      " 15,000+ GRE Quant Practice Questions Segregated Topic-Wise",
      " 25+ GRE Quant MockTests",
      " Master Workshops - Mental Math, Motivational Sessions, etc...",
      " Reviser Classes, Mock Test Reviews & much more...",
    ],
    link: "https://www.youtube.com/watch?v=sNBr0wq8XDU",
  },
  {
    id: 2,
    title: "GRE Online Verbal Package (Analytical Writing Included)",
    description: "Need help with only the GRE Verbal Section?",
    pointers: [
      " Learn from GMAT 99%iler",
      " 30+ Hours of Rigorous Online-Classroom Training",
      " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
      " Study from Popular Author Books & Publications (GRE Official Guides, Manhattan Prep, Veritas Prep, Kaplan, etc...)",
      " Daily Homework Worksheets / Assignments",
      " 5,000+ GRE Verbal Practice Questions Segregated Topic-Wise",
      " 25+ GRE Verbal MockTests",
      " Master Workshops - Vocabulary Building, Motivational Sessions, etc...",
      " Reviser Classes, Mock Test Reviews & much more...",
    ],
    link: "https://www.youtube.com/watch?v=5ujcLumtJEE",
  },
];

const SATPackages = [
  {
    id: 0,
    title: "SAT Online Comprehensive Package",
    description: "Need help with your full SAT Prep, end-to-end?",
    pointers: [
      " Learn from GMAT 99%iler",
      " 65+ Hours of Rigorous Online-Classroom Training",
      " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
      " Study from Popular Author Books & Publications (SAT Official Guide, Kaplan, The Princeton Review, etc...)",
      " Daily Homework Worksheets / Assignments",
      " 10,000+ SAT Practice Questions Segregated Topic-Wise",
      " 15+ Mock Tests",
      " Master Workshops - Mental Math, Vocabulary Building, Motivational Sessions, etc...",
      " Reviser Classes, Mock Test Reviews & much more...",
    ],
    link: "https://www.youtube.com/watch?v=2BS6cLfhvwo",
  },
  {
    id: 1,
    title: "SAT Online Math Package",
    description: "Need help with only the SAT Math Section?",
    pointers: [
      " Learn from GMAT 99%iler",
      " 40+ Hours of Rigorous Online-Classroom Training",
      " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
      " Study from Popular Author Books & Publications (SAT Official Guide, Kaplan, The Princeton Review, etc...)",
      " Daily Homework Worksheets / Assignments",
      " 7,500+ SAT Math Practice Questions Segregated Topic-Wise",
      " 25+ SAT Math Mock Tests",
      " Master Workshops - Mental Math, Motivational Sessions, etc...",
      " Reviser Classes, Mock Test Reviews & much more...",
    ],
    link: "https://www.youtube.com/watch?v=vX9ClGiopW4",
  },
  {
    id: 2,
    title: "SAT Online English Package (Essay Included)",
    description: "Need help with only the SAT English Section?",
    pointers: [
      " Learn from GMAT 99%iler",
      " 30+ Hours of Rigorous Online-Classroom Training",
      " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
      " Study from Popular Author Books & Publications (SAT Official Guide, Kaplan, The Princeton Review, etc...)",
      " Daily Homework Worksheets / Assignments",
      " 2,500+ SAT English Practice Questions Segregated Topic-Wise",
      " 25+ SAT English Mock Tests",
      " Master Workshops - Vocabulary Building, Motivational Sessions, etc...",
      " Reviser Classes, Mock Test Reviews & much more...",
    ],
    link: "https://www.youtube.com/watch?v=wrEjW89t7p8",
  },
];

const data = [
  {
    id: 1,
    desc: "Stay connected to your facultythrough our 24*7 Live System(Mentor-Student Relation)",
  },

  {
    id: 2,
    desc: "Exclusive Student Progress Tracking Software",
  },

  {
    id: 3,
    desc: "Master Workshops (Mental Math, Brainstorming, ...)",
  },
  {
    id: 4,
    desc: "Live Reviser Classes",
  },
  {
    id: 5,
    desc: "Power-Packed Testing System (Full-length, Sectional, Topic-wise, Challenger, Speed Enhancement & Remedial Tests; Tests Generator Tool, Challenge your Friends,...)",
  },
];

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
const PopularCourses = (props) => {
  const url = useRouter();
  const course = url.query.course;
  const [activeFeatureTab, setActiveFeatureTab] = useState(1);
  const [activeTab, setActiveTab] = useState(1);
  const [program, setProgram] = useState([]);
  const [prospectus, setProspectus] = useState({ img: "", pdf: "" });
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    if (course === "GMAT") {
      setProspectus({
        ...prospectus,
        img: "/assets/prospectus/card_img.webp",
        pdf: "/assets/prospectus/gmat_prep_prospectus.pdf",
      });
      setProgram(GMATPackages);
    } else if (course === "CAT") {
      setProspectus({
        ...prospectus,
        img: "/assets/prospectus/card_img.webp",
        pdf: "/assets/prospectus/cat_prep_prospectus.pdf",
      });
      setProgram(CATPackages);
    } else if (course === "GRE") {
      setProspectus({
        ...prospectus,
        img: "/assets/prospectus/card_img.webp",
        pdf: "/assets/prospectus/gre_prep_prospectus.pdf",
      });
      setProgram(GREPackages);
    } else if (course === "MAH-CET") {
      setProspectus({
        ...prospectus,
        img: "/assets/prospectus/card_img.webp",
        pdf: "/assets/prospectus/MAH-CET_prospectus.pdf",
      });
      setProgram(MAHSETPackages);
    } else if (course === "SAT") {
      setProspectus({
        ...prospectus,
        img: "/assets/prospectus/card_img.webp",
        pdf: "/assets/prospectus/sat_prep_prospectus.pdf",
      });
      setProgram(SATPackages);
    }
  }, [course]);

  const closeModal = () => {
    $(`#download_files`).modal("hide");
    $("body").removeClass("modal-open");
    $(".modal-backdrop").remove();
  };

  const handleSubmit = () => {
    var oneday = new Date();
    // 2 minutes of interval to download
    // oneday.setTime(oneday.getTime() + 2000 * 60);
    // 24 hours of interval to download
    oneday.setHours(oneday.getHours() + 24);
    try {
      localStorage.setItem("download-pdfs", oneday);
    } catch (e) {
      console.log(e);
    }
  };

  const handleRegister = () => {
    $("#register_seminar").modal();
  };

  const controlAccordionButtons = (i) => {
    for (let j = 0; j < program.length; j++) {
      let icon_id = "#plus-icon-" + j.toString();
      let enquiry_buttons = "#enquiry-buttons-" + j.toString();
      let title_id = "#title-" + j.toString();
      let button_id = "#button-" + j.toString();
      let name_id = "#p-name-" + j.toString();
      let desc_id = "#p-desc-" + j.toString();

      if (j === i) {
        $(icon_id).toggleClass("d-none");
        $(enquiry_buttons).toggleClass("d-none");
        $(desc_id).toggleClass("d-none");
        if ($(title_id).hasClass("col-sm-11")) {
          $(title_id).removeClass("col-sm-11");
          $(button_id).removeClass("col-sm-1");

          $(name_id).removeClass("mb-0");

          $(title_id).addClass("col-sm-6");
          $(button_id).addClass("col-sm-6");
        } else {
          $(title_id).removeClass("col-sm-6");
          $(button_id).removeClass("col-sm-6");

          $(name_id).addClass("mb-0");

          $(title_id).addClass("col-sm-11");
          $(button_id).addClass("col-sm-1");
        }
      } else {
        $(icon_id).removeClass("d-none");
        $(enquiry_buttons).addClass("d-none");
        $(desc_id).removeClass("d-none");
        if ($(title_id).hasClass("col-sm-6")) {
          $(title_id).removeClass("col-sm-6");
          $(button_id).removeClass("col-sm-6");

          $(name_id).addClass("mb-0");

          $(title_id).addClass("col-sm-11");
          $(button_id).addClass("col-sm-1");
        }
      }
    }
  };

  return (
    <div>
      <Head>
        <title>QDS Pro Coaching Institute | {course} </title>
        <meta name="robots" content="nofollow" />
        {/* <meta name="description" content="Get all the information and latest updates pertaining to Gmat, our GMAT Online prep course, our packages, upcoming batches and many more."/> */}
      </Head>
      <style>
        {`
                    .btn, .btn:hover
                    {
                        color: #fff;
                        background-color: #77bf43;
                        margin-left: 2%;
                    }
                    .section-points
                    {
                        margin: 2%;
                        padding-left: 5%;
                    }
                    .compare-section
                    {
                        width: 75%;
                        justify-content: 'center';
                        margin: auto;
                        margin-top: 5%;
                    }
                    label
                    {
                        font-size: 16px;
                    }
                    .clickable-text:hover
                    {
                        color: #77bf43;
                        cursor: pointer;
                    }
                    .container
                    {
                        margin: 5%;
                    }
                    .s-program-container{
                        
                        color: #a9cf37;
                        border-radius: 20px;
                        box-shadow: 0 1px 5px 5px rgba(0,0,0,.02), 0 2px 5px 0 rgba(0,0,0,.3);
                        background-size: 200% 200%;
                        background-image: linear-gradient(to left, #fff 50%, #213247 0%);
                        background-position: left;
                        transition: all 0.5s ease-in;
                    }
                   .s-program-container:hover
                   {
                        background-position: right;
                   }
                   .s-program-container:hover .s-program-content-container
                   {
                       color: #000;
                   }
                    .s-program-title{
                        font-size: 22px;
                        font-weight: bold;
                    }

                    .s-program-description
                    {
                        font-size: 14px;
                    }
    
                    // .s-program-content-container{
                    //     font-size: 18px;
                    // }
    
                    .s-program-content-container{
                        font-size: 16px;
                        color: #fff;
                        padding: -5%;
                        // margin-left: 3rem;
                        // margin-right: .2rem;
                    }
    
                    .s-program-fee-container{
                        font-size: 18px;
                    }

                    .packages
                    {
                        background-color: #213247;
                        transition: background-color 1.25s ease-out;
                    }
                    .packages:hover
                    {
                        background-color: #fff;
                    }
                    .card{
                      width:13em;
                      margin-left:20%;
                    }
                    .col-md-6{
                      margin-top: 5px;
                      margin-bottom: 5px;
                  }
                  .col-md-6 .card{
                      box-shadow: 6px 6px 10px #aaaaaa;
                      width: 57%;
                      margin: auto;
                  }

                  .col-md-6 .card .card-img-top{
                      height: 75%;
                      width: 37%;
                  }
                   
                    // .our-course-points
                    // {
                    //     margin-top: 250px;
                    //     margin-bottom: -2%;
                    // }
                    @media (max-width:768px)
                    {
                        .our-course-points
                        {
                            margin-top: 5%;
                            font-size: 18px;
                        }
                    
                        .compare-section
                        {
                            width: 100%;
                        }
                    }
              .modal-dialog {
                max-width: 800px;
                margin: 30px auto;
              }
              .modal-body {
                position:relative;
                padding:0px;
              }
              .close {
                position:absolute;
                right:20px;
                top:40px;
                z-index:999;
                font-size:2rem;
                font-weight: normal;
                color:#fff;
                opacity:1;
              }
              
                
    .cards {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    padding-right: 110px;
    padding-left: 110px;
}
  
  .boxex-con{
   border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 200px;
    margin-bottom: 22px;
    padding: 10px;
    border: 1px solid #ccc;
    width: 400px;
    height: 167px;
    box-shadow: 2px 2px 6px 0px rgb(0 0 0 / 30%);
  }
  
  p{
    font-size: medium;
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
                  {course}
                </h1>
              </div>
            </div>
          </div>
          <div style={{ width: "95%" }} className="section-wrapper">
            <ExamsExcelWrapper
              data-aos="zoom-out"
              data-aos-delay="0"
              data-aos-duration="1500"
              data-aos-easing="ease-in-linear"
              className="popular-courses-options"
              style={{ padding: 0 }}
            >
              <Box
                active={activeFeatureTab === 1}
                onClick={() => setActiveFeatureTab(1)}
              >
                <span>Live Online Tutoring</span>
              </Box>
              <Box
                active={activeFeatureTab === 2}
                onClick={() => setActiveFeatureTab(2)}
              >
                <span>Coaching Classes</span>
              </Box>
              <Box
                active={activeFeatureTab === 3}
                onClick={() => setActiveFeatureTab(3)}
              >
                <span>Video Lectures</span>
              </Box>
              <Box
                active={activeFeatureTab === 4}
                onClick={() => setActiveFeatureTab(4)}
              >
                <span>Mock Tests</span>
              </Box>
            </ExamsExcelWrapper>

            {/* The section is made for new feature's in GMAT SubMenu  */}
            {activeFeatureTab === 1 && (
              <div style={{ width: "100%" }} className="section-wrapper">
                <ExamsExcelWrapper
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-linear"
                  style={{ padding: 0 }}
                >
                  <Box
                    submenu
                    active={activeTab === 1}
                    onClick={() => setActiveTab(1)}
                  >
                    <span>Key Highlights</span>
                  </Box>
                  <Box
                    submenu
                    active={activeTab === 2}
                    onClick={() => setActiveTab(2)}
                  >
                    <span>Our Packages</span>
                  </Box>
                  <Box
                    submenu
                    active={activeTab === 3}
                    onClick={() => setActiveTab(3)}
                  >
                    <span>Enquiry</span>
                  </Box>
                </ExamsExcelWrapper>
              </div>
            )}
            {/* Coaching classes submenu  */}
            {activeFeatureTab === 2 && (
              <div style={{ width: "100%" }} className="section-wrapper">
                <ExamsExcelWrapper
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-linear"
                  style={{ padding: 0 }}
                >
                  <Box
                    submenu
                    active={activeTab === 1}
                    onClick={() => setActiveTab(1)}
                  >
                    <span>Key Highlights</span>
                  </Box>
                  <Box
                    submenu
                    active={activeTab === 2}
                    onClick={() => setActiveTab(2)}
                  >
                    <span>Our Packages</span>
                  </Box>
                  <Box
                    submenu
                    active={activeTab === 3}
                    onClick={() => setActiveTab(3)}
                  >
                    <span>Tutor Profiles</span>
                  </Box>
                  <Box
                    submenu
                    active={activeTab === 4}
                    onClick={() => setActiveTab(4)}
                  >
                    <span>Enquiry</span>
                  </Box>
                </ExamsExcelWrapper>
              </div>
            )}
            {/* Video Lectures submenu  */}
            {activeFeatureTab === 3 && (
              <div style={{ width: "100%" }} className="section-wrapper">
                <ExamsExcelWrapper
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-linear"
                  style={{ padding: 0 }}
                >
                  <Box
                    submenu
                    active={activeTab === 1}
                    onClick={() => setActiveTab(1)}
                  >
                    <span>Key Highlights</span>
                  </Box>
                  <Box
                    submenu
                    active={activeTab === 2}
                    onClick={() => setActiveTab(2)}
                  >
                    <span>Complementary Resources</span>
                  </Box>
                  <Box
                    submenu
                    active={activeTab === 3}
                    onClick={() => setActiveTab(3)}
                  >
                    <span>Watch Free Trailers</span>
                  </Box>
                  <Box
                    submenu
                    active={activeTab === 4}
                    onClick={() => setActiveTab(4)}
                  >
                    <span>Our Packages</span>
                  </Box>
                  <Box
                    submenu
                    active={activeTab === 5}
                    onClick={() => setActiveTab(5)}
                  >
                    <span>Presented By</span>
                  </Box>
                  <Box
                    submenu
                    active={activeTab === 6}
                    onClick={() => setActiveTab(6)}
                  >
                    <span>Enquire</span>
                  </Box>
                </ExamsExcelWrapper>
              </div>
            )}
            {activeFeatureTab === 4 && (
              <div style={{ width: "100%" }} className="section-wrapper">
                <ExamsExcelWrapper
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-linear"
                  style={{ padding: 0 }}
                >
                  <Box
                    submenu
                    active={activeTab === 1}
                    onClick={() => setActiveTab(1)}
                  >
                    <span>Tests</span>
                  </Box>
                  <Box
                    submenu
                    active={activeTab === 2}
                    onClick={() => setActiveTab(2)}
                  >
                    <span>Analytics</span>
                  </Box>
                  <Box
                    submenu
                    active={activeTab === 3}
                    onClick={() => setActiveTab(3)}
                  >
                    <span>Additional Tools</span>
                  </Box>
                  <Box
                    submenu
                    active={activeTab === 4}
                    onClick={() => setActiveTab(4)}
                  >
                    <span>Our Packages</span>
                  </Box>
                  <Box
                    submenu
                    active={activeTab === 5}
                    onClick={() => setActiveTab(5)}
                  >
                    <span>Enquire</span>
                  </Box>
                </ExamsExcelWrapper>
              </div>
            )}
            {/* The section is made for new feture's in the GMAT section To check the edit below logic */}

            {activeTab === 7 && (
              <div style={{ width: "80%" }} className="section-wrapper">
                <ExamsExcelWrapper
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-linear"
                  style={{ padding: 0 }}
                >
                  <Box
                    submenu
                    active={activeTab === 1}
                    onClick={() => setActiveTab(1)}
                  >
                    <span>Key Highlights</span>
                  </Box>
                  <Box
                    submenu
                    active={activeTab === 2}
                    onClick={() => setActiveTab(2)}
                  >
                    <span>Our Packages</span>
                  </Box>
                  <Box
                    submenu
                    active={activeTab === 3}
                    onClick={() => setActiveTab(3)}
                  >
                    <span>Enquiry</span>
                  </Box>
                </ExamsExcelWrapper>
              </div>
            )}

            {activeFeatureTab === 6 && (
              <div style={{ width: "80%" }} className="section-wrapper">
                <ExamsExcelWrapper
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-linear"
                  style={{ padding: 0 }}
                >
                  <Box
                    active={activeTab === 1}
                    onClick={() => setActiveTab(1)}
                  >
                    <span>Key Highlights</span>
                  </Box>
                  <Box
                    active={activeTab === 2}
                    onClick={() => setActiveTab(2)}
                  >
                    <span>Our Packages</span>
                  </Box>
                  <Box
                    active={activeTab === 3}
                    onClick={() => setActiveTab(3)}
                  >
                    <span>Enquiry</span>
                  </Box>
                </ExamsExcelWrapper>
              </div>
            )}


            {activeFeatureTab === 7 && activeTab === 8 && (
              <div>
                <div data-aos="zoom-out" data-aos-delay="0" data-aos-duration="1500" data-aos-easing="ease-in-linear" className="aos-init aos-animate">
                  <div className="col-md text-center sub-heading">
                    <div className="row">
                      <h2 style={{ width: "100%", textAlign: "center" }} >UPSs</h2>
                    </div>
                  </div>
                  <div className="cards secon-confld text-center" style={{ marginRight: "-15px", marginLeft: "-15px" }}>
                    {data.map((d) => (
                      <div className="col-sm-4 col-md-4">
                        <div className="boxex-con">
                          <p>{d.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div data-aos="zoom-out" data-aos-delay="0" data-aos-duration="1500" data-aos-easing="ease-in-linear" className="aos-init aos-animate">
                  <div className="col-md text-center sub-heading">
                    <div className="row">
                      <h2 style={{ width: "100%", textAlign: "center" }} >UPSs</h2>
                    </div>
                  </div>
                  <div className="cards secon-confld text-center" style={{ marginRight: "-15px", marginLeft: "-15px" }}>
                    {data.map((d) => (
                      <div className="col-sm-4 col-md-4">
                        <div className="boxex-con">
                          <p>{d.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div data-aos="zoom-out" data-aos-delay="0" data-aos-duration="1500" data-aos-easing="ease-in-linear" className="aos-init aos-animate">
                  <div className="col-md text-center sub-heading">
                    <div className="row">
                      <h2 style={{ width: "100%", textAlign: "center" }} >UPSs</h2>
                    </div>
                  </div>
                  <div className="cards secon-confld text-center" style={{ marginRight: "-15px", marginLeft: "-15px" }}>
                    {data.map((d) => (
                      <div className="col-sm-4 col-md-4">
                        <div className="boxex-con">
                          <p>{d.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div data-aos="zoom-out" data-aos-delay="0" data-aos-duration="1500" data-aos-easing="ease-in-linear" className="aos-init aos-animate">
                  <div className="col-md text-center sub-heading">
                    <div className="row">
                      <h2 style={{ width: "100%", textAlign: "center" }} >UPSs</h2>
                    </div>
                  </div>
                  <div className="cards secon-confld text-center" style={{ marginRight: "-15px", marginLeft: "-15px" }}>
                    {data.map((d) => (
                      <div className="col-sm-4 col-md-4">
                        <div className="boxex-con">
                          <p>{d.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div data-aos="zoom-out" data-aos-delay="0" data-aos-duration="1500" data-aos-easing="ease-in-linear" className="aos-init aos-animate">
                  <div className="col-md text-center sub-heading">
                    <div className="row">
                      <h2 style={{ width: "100%", textAlign: "center" }} >UPSs</h2>
                    </div>
                  </div>
                  <div className="cards secon-confld text-center" style={{ marginRight: "-15px", marginLeft: "-15px" }}>
                    {data.map((d) => (
                      <div className="col-sm-4 col-md-4">
                        <div className="boxex-con">
                          <p>{d.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeFeatureTab === 9 && activeTab === 10 && (
              <div>
                <div data-aos="zoom-out" data-aos-delay="0" data-aos-duration="1500" data-aos-easing="ease-in-linear" className="aos-init aos-animate">
                  <div className="col-md text-center sub-heading">
                    <div className="row">
                      <h2 style={{ width: "100%", textAlign: "center" }} >UPSs</h2>
                    </div>
                  </div>
                  <div className="cards secon-confld text-center" style={{ marginRight: "-15px", marginLeft: "-15px" }}>
                    {data.map((d) => (
                      <div className="col-sm-4 col-md-4">
                        <div className="boxex-con">
                          <p>{d.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div data-aos="zoom-out" data-aos-delay="0" data-aos-duration="1500" data-aos-easing="ease-in-linear" className="aos-init aos-animate">
                  <div className="col-md text-center sub-heading">
                    <div className="row">
                      <h2 style={{ width: "100%", textAlign: "center" }} >UPSs</h2>
                    </div>
                  </div>
                  <div className="cards secon-confld text-center" style={{ marginRight: "-15px", marginLeft: "-15px" }}>
                    {data.map((d) => (
                      <div className="col-sm-4 col-md-4">
                        <div className="boxex-con">
                          <p>{d.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div data-aos="zoom-out" data-aos-delay="0" data-aos-duration="1500" data-aos-easing="ease-in-linear" className="aos-init aos-animate">
                  <div className="col-md text-center sub-heading">
                    <div className="row">
                      <h2 style={{ width: "100%", textAlign: "center" }} >UPSs</h2>
                    </div>
                  </div>
                  <div className="cards secon-confld text-center" style={{ marginRight: "-15px", marginLeft: "-15px" }}>
                    {data.map((d) => (
                      <div className="col-sm-4 col-md-4">
                        <div className="boxex-con">
                          <p>{d.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div data-aos="zoom-out" data-aos-delay="0" data-aos-duration="1500" data-aos-easing="ease-in-linear" className="aos-init aos-animate">
                  <div className="col-md text-center sub-heading">
                    <div className="row">
                      <h2 style={{ width: "100%", textAlign: "center" }} >UPSs</h2>
                    </div>
                  </div>
                  <div className="cards secon-confld text-center" style={{ marginRight: "-15px", marginLeft: "-15px" }}>
                    {data.map((d) => (
                      <div className="col-sm-4 col-md-4">
                        <div className="boxex-con">
                          <p>{d.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div data-aos="zoom-out" data-aos-delay="0" data-aos-duration="1500" data-aos-easing="ease-in-linear" className="aos-init aos-animate">
                  <div className="col-md text-center sub-heading">
                    <div className="row">
                      <h2 style={{ width: "100%", textAlign: "center" }} >UPSs</h2>
                    </div>
                  </div>
                  <div className="cards secon-confld text-center" style={{ marginRight: "-15px", marginLeft: "-15px" }}>
                    {data.map((d) => (
                      <div className="col-sm-4 col-md-4">
                        <div className="boxex-con">
                          <p>{d.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div data-aos="zoom-out" data-aos-delay="0" data-aos-duration="1500" data-aos-easing="ease-in-linear" className="aos-init aos-animate">
                  <div className="col-md text-center sub-heading">
                    <div className="row">
                      <h2 style={{ width: "100%", textAlign: "center" }} >UPSs</h2>
                    </div>
                  </div>
                  <div className="cards secon-confld text-center" style={{ marginRight: "-15px", marginLeft: "-15px" }}>
                    {data.map((d) => (
                      <div className="col-sm-4 col-md-4">
                        <div className="boxex-con">
                          <p>{d.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeFeatureTab === 1 && activeTab === 1 && (
              <>
                <div style={{ width: '100%' }}>
                  <h1 style={{ textAlign: 'center' }}>Our USP's</h1>
                  <div className="row" style={{ padding: '0 100px !important' }}>
                    {
                      USPPackages.map((singleUSP) => (
                        // <CourseCard key={gmatPackage.id} gmatPackage={gmatPackage}/>
                        <KeyHighlightCard key={singleUSP.id} singleUSP={singleUSP} />

                      ))
                    }
                  </div>
                </div>
                <div style={{ width: '100%' }}>
                  <h1 style={{ textAlign: 'center', marginTop: '80px'}}>CONCEPTUAL UNDERSTANDING</h1>
                  <div className="row" style={{ padding: '0 100px !important' }}>
                    {
                      conceptualUnderstandings.map((conceptualUnderstanding) => (
                        // <CourseCard key={gmatPackage.id} gmatPackage={gmatPackage}/>
                        <KeyHighlightCard key={conceptualUnderstanding.id} singleUSP={conceptualUnderstanding} />
                      ))
                    }
                  </div>
                </div>
                <div style={{ width: '100%' }}>
                  <h1 style={{ textAlign: 'center', marginTop: '80px'}}>APPLICATION</h1>
                  <div className="row" style={{ padding: '0 100px !important' }}>
                    {
                      applications.map((singleUSP) => (
                        // <CourseCard key={gmatPackage.id} gmatPackage={gmatPackage}/>
                        <KeyHighlightCard key={singleUSP.id} singleUSP={singleUSP} />

                      ))
                    }
                  </div>
                </div>
                <div style={{ width: '100%' }}>
                  <h1 style={{ textAlign: 'center', marginTop: '80px'}}>TESTING</h1>
                  <div className="row" style={{ padding: '0 100px !important' }}>
                    {
                      testings.map((singleUSP) => (
                        // <CourseCard key={gmatPackage.id} gmatPackage={gmatPackage}/>
                        <KeyHighlightCard key={singleUSP.id} singleUSP={singleUSP} />

                      ))
                    }
                  </div>
                </div>
                <div style={{ width: '100%' }}>
                  <h1 style={{ textAlign: 'center', marginTop: '80px'}}>UTILITIES</h1>
                  <div className="row" style={{ padding: '0 100px !important' }}>
                    {
                      utilities.map((singleUSP) => (
                        // <CourseCard key={gmatPackage.id} gmatPackage={gmatPackage}/>
                        <KeyHighlightCard key={singleUSP.id} singleUSP={singleUSP} />

                      ))
                    }
                  </div>
                </div>
                <div
                  className="container"
                  data-aos="fade-left"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-linear"
                  style={{ margin: 0, padding: 0 }}
                >
                  <div className="row">

                    <div className="col-12 our-course-points">
                      <h2
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-linear"
                        className="section-points"
                      >
                        Download Prospectus
                      </h2>
                    </div>
                    {
                      //    course !== "MAH-CET" &&
                      <div className=" col-sm-5">
                        <div
                          data-aos="zoom-out"
                          data-aos-delay="200"
                          data-aos-duration="1000"
                          data-aos-easing="ease-in-linear"
                        >
                          <div class="card">
                            <img
                              class="card-img-top"
                              src={prospectus.img}
                              alt={course + " Prospectus"}
                              style={{
                                borderLeft: "1px solid black",
                                borderRight: "1px solid black",
                              }}
                            />
                            <div
                              class="card-body"
                              style={{
                                display: "flex",
                                justifyContent: "space-evenly",
                                borderLeft: "1px solid black",
                                borderRight: "1px solid black",
                                borderBottom: "2px solid black",
                              }}

                            // style={{
                            //   border: "1px solid black",
                            //   borderTop: "0px",
                            // }}
                            >
                              {/* <a href={prospectus.pdf} download={course.toLowerCase() + "_prep_prospectus"}>Download</a> */}
                              <button
                                data-toggle="modal"
                                data-target="#download_files"
                                className="btn btn-sm float-right"
                              >
                                Download{" "}
                                <i class="fa fa-download" aria-hidden="true"></i>
                              </button>
                              {course === "GMAT" ? (
                                <button
                                  data-toggle="modal"
                                  data-target="#shareGmat"
                                  className="btn btn-sm float-right"
                                >
                                  Share{" "}
                                  <i class="fa fa-share" aria-hidden="true"></i>
                                </button>) : ("")}
                              {course === "CAT" ? (
                                <button
                                  data-toggle="modal"
                                  data-target="#shareCat"
                                  className="btn btn-sm float-right"
                                >
                                  Share{" "}
                                  <i class="fa fa-share" aria-hidden="true"></i>
                                </button>) : ("")}
                              {course === "GRE" ? (
                                <button
                                  data-toggle="modal"
                                  data-target="#shareGre"
                                  className="btn btn-sm float-right"
                                >
                                  Share{" "}
                                  <i class="fa fa-share" aria-hidden="true"></i>
                                </button>) : ("")}
                              {course === "SAT" ? (
                                <button
                                  data-toggle="modal"
                                  data-target="#shareSat"
                                  className="btn btn-sm float-right"
                                >
                                  Share{" "}
                                  <i class="fa fa-share" aria-hidden="true"></i>
                                </button>) : ("")}
                              {course === "MAH-CET" ? (
                                <button
                                  data-toggle="modal"
                                  data-target="#shareMahcet"
                                  className="btn btn-sm float-right"
                                >
                                  Share{" "}
                                  <i class="fa fa-share" aria-hidden="true"></i>
                                </button>) : ("")}
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                    <br></br><br></br>
                    

                  </div>
                </div>
              </>
            )}

            {activeFeatureTab === 1 && activeTab === 3 &&(
              <div className="col-12 our-course-points">
              <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
                className="section-points"
              >
                <span
                  className="clickable-text"
                  data-toggle="modal"
                  data-target="#recordedDemo"
                >
                  Request a Free Recorded Demo <br /> <br />
                </span>


                <span
                  className="clickable-text"
                  data-toggle="modal"
                  data-target="#enroll"
                >
                  Wish to Enroll ?
                </span>
              </h2>
            </div>
            )}
            {activeFeatureTab === 2 && (
              <div className="section-wrapper container-fluid">
                <div className="accordion" id="package-accordion">
                  {program.map((pack, i) => {
                    return (
                      <div className="s-program-container mb-1">
                        <div
                          id="mydiv"
                          className="row"
                          data-toggle="collapse"
                          data-target={"#pack-" + i.toString()}
                          aria-expanded="false"
                          aria-controls="packDetails"
                          onClick={() => controlAccordionButtons(i)}
                        >
                          <div
                            className="col-sm-11 align-self-center pt-3 pl-3"
                            id={"title-" + i.toString()}
                          >
                            <p
                              className="s-program-title mb-0"
                              id={"p-name-" + i.toString()}
                            >
                              {pack.title}
                            </p>
                            <p
                              className="s-program-description mt-0"
                              id={"p-desc-" + i.toString()}
                            >
                              {pack.description}
                            </p>
                          </div>
                          <div
                            className="col-sm-1 align-self-center"
                            id={"button-" + i.toString()}
                          >
                            <div className="float-right">
                              <div
                                className="d-none"
                                id={"enquiry-buttons-" + i.toString()}
                              >
                                <VideoModal link={pack.link} />

                                <Link
                                  href={{
                                    pathname: "/enquiry",
                                    query: {
                                      activeTab: 1,
                                    },
                                  }}
                                >
                                  <button
                                    className="btn btn-primary btn-sm"
                                    title="Enquiry"
                                  >
                                    Enquiry
                                  </button>
                                </Link>
                                <Link
                                  href={{
                                    pathname: "/enquiry",
                                    query: {
                                      activeTab: 6,
                                      select: 0,
                                    },
                                  }}
                                >
                                  <button
                                    className="btn btn-primary btn-sm"
                                    style={{
                                      margin: "5px",
                                    }}
                                    title="Book a Demo"
                                  >
                                    Book a Demo
                                  </button>
                                </Link>
                                <Link
                                  href={{
                                    pathname: "/enquiry",
                                    query: {
                                      activeTab: 7,
                                      select: 0,
                                    },
                                  }}
                                >
                                  <button
                                    className="btn btn-primary btn-sm"
                                    style={{
                                      margin: "5px",
                                    }}
                                    title="Book a Free Career Counseling Session"
                                  >
                                    Book a Free Career Counseling Session
                                  </button>
                                </Link>
                              </div>
                              <span
                                className="fa fa-plus fa-lg p-2"
                                id={"plus-icon-" + i.toString()}
                              ></span>
                            </div>
                          </div>
                        </div>
                        <div
                          className="row collapse"
                          id={"pack-" + i.toString()}
                          data-parent="#package-accordion"
                        >
                          {pack.pointers.map((pointer, i) => {
                            return (
                              <div className="col-sm-6 s-program-content-container pl-4 ">
                                <div>
                                  <p key={i}>
                                    <i class="fa fa-hand-o-right"></i> {pointer}{" "}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeFeatureTab === 3 && (
              <UpcomingBatches course={course}></UpcomingBatches>
            )}

            {activeFeatureTab === 4 && (
              <div className="compare-section">
                <CompareOnlinePrepCompanies />
              </div>
            )}
            {(activeFeatureTab === 5 && course === "GMAT" && (
              <AboutGMAT></AboutGMAT>
            )) ||
              (activeFeatureTab === 5 && course === "CAT" && (
                <AboutCAT></AboutCAT>
              )) ||
              (activeFeatureTab === 5 && course === "GRE" && (
                <AboutGRE></AboutGRE>
              )) ||
              (activeFeatureTab === 5 && course === "SAT" && (
                <AboutSAT></AboutSAT>
              )) ||
              (activeFeatureTab === 5 && course === "MAH-CET" && (
                <AboutMAHSET></AboutMAHSET>
              ))}
          </div>
          {/* Download Prospectus Modal */}
          <div
            className="modal fade"
            id="download_files"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="download_files"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div
                  className="modal-header"
                  style={{ backgroundColor: "#213247" }}
                >
                  <h5 className="modal-title" id="register_modal">
                    Register to Download
                  </h5>
                  <button
                    style={{
                      color: "#77bf43",
                      textShadow: "none",
                      opacity: 1,
                    }}
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div
                  className="modal-body"
                  style={{ backgroundColor: "#213247", padding: "20px" }}
                >
                  <form
                    id="download_files"
                    name="download_files"
                    method="POST"
                    onSubmit={handleSubmit}
                    action="https://formspree.io/mjvazydz"
                  >
                    <div class="form-group">
                      <label for="name">Full Name *</label>
                      <input
                        required
                        name="Name"
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="email">Email *</label>
                      <input
                        required
                        name="Email"
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div class="form-group">
                      <label for="mobile">Mobile Number *</label>
                      <input
                        required
                        name="Mobile Number"
                        type="number"
                        class="form-control"
                        id="mobile"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        hidden
                        required
                        name="Entrance Exam"
                        type="text"
                        className="form-control"
                        id="entrance"
                        placeholder={course}
                        value={course}
                      />
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary mt-3 mb-1 pull-right"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Recorded Demonstration Modal */}
          <div
            className="modal fade"
            id="recordedDemo"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="democlass"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div
                  className="modal-header"
                  style={{
                    backgroundColor: "#213247",
                  }}
                >
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    Request a Free Recorded Demo
                  </h5>
                  <button
                    style={{
                      color: "#77bf43",
                      textShadow: "none",
                      opacity: 1,
                    }}
                    type="button"
                    class="close "
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div
                  className="modal-body"
                  style={{
                    backgroundColor: "#213247",
                    border: "30px solid #213247",
                  }}
                >
                  <form
                    id="popup-form-4"
                    name="popup-form-4"
                    method="POST"
                    action="https://formspree.io/moqkbeze"
                  >
                    <input
                      hidden
                      type="text"
                      name="Form Title"
                      value="Popup - Request a Recorded Version of the Demo Session"
                    />
                    <div className="form-group">
                      <input
                        required
                        name="Name"
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        required
                        name="Email"
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        required
                        name="Mobile Number"
                        type="text"
                        className="form-control"
                        id="mobile"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        hidden
                        required
                        name="Entrance Exam"
                        type="text"
                        className="form-control"
                        id="entrance"
                        placeholder={course}
                        value={course}
                      />
                    </div>
                    <div className="form-group text-justify">
                      <p>
                        <small>
                          <strong>Note : </strong> You will receive a mail from
                          our QDS Pro Online Prep Team within 12 hours of the
                          submission of this form, with all the details to
                          access the free recorded demo.
                        </small>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary mr-3 mt-3"
                      data-dismiss="modal"
                      data-toggle="modal"
                      data-target="#recordedDemo"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary mt-3 pull-right"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Wish To Enroll Modal */}
          <div
            className="modal fade"
            id="enroll"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="democlass"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div
                  className="modal-header"
                  style={{ backgroundColor: "#213247" }}
                >
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    Wish To Enroll ?
                  </h5>
                  <button
                    style={{
                      color: "#77bf43",
                      textShadow: "none",
                      opacity: 1,
                    }}
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div
                  className="modal-body"
                  style={{
                    backgroundColor: "#213247",
                    border: "30px solid #213247",
                  }}
                >
                  <form
                    id="popup-form-4"
                    name="popup-form-4"
                    method="POST"
                    action="https://formspree.io/moqkbeze"
                  >
                    <input
                      hidden
                      type="text"
                      name="Form Title"
                      value="Popup - Request a Recorded Version of the Demo Session"
                    />
                    <div className="form-group">
                      <input
                        required
                        name="Name"
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        required
                        name="Email"
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        required
                        name="Mobile Number"
                        type="text"
                        className="form-control"
                        id="mobile"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        hidden
                        required
                        name="Entrance Exam"
                        type="text"
                        className="form-control"
                        id="entrance"
                        placeholder={course}
                        value={course}
                      />
                    </div>
                    <div className="form-group text-justify">
                      <p>
                        <small>
                          <strong>Note : </strong> You will receive the
                          registration from our QDS Pro Online Prep Team within
                          12 hours of the submission of this form.
                        </small>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary mr-3 mt-3"
                      data-dismiss="modal"
                      data-toggle="modal"
                      data-target="#enroll"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary mt-3 pull-right"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PopularCourses;
