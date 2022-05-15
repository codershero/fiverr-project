// import React from "react";
// import { Typography, Grid } from "@mui/material";
// import Image from "next/image";
// import Slider from "react-slick";
// import styles from "./testimonials.module.scss";
// let testimonials_data = [
//   {
//     name: "Chris Cardoso",
//     description:
//       "“Mario, Nick, and the team were kind, prompt, and got the work done within a week. The team was very professional and made every attempt to keep our house clean and remove all of their tools every evening. We are very happy with the end result and will work with them again on future projects.“",
//   },
//   {
//     name: "Christy Riolo",
//     description:
//       "“JC Construction & Remodeling does great work! I had my entire kitchen revamped, a big job, that included moving water, electric and gas lines. Nick, the CEO, came to take measurements to provide an estimate which included diagrams showing the new layout of the kitchen. These diagrams are very helpful and were given without having to provide a down payment to start the project, which isn’t the case with all contractors. I appreciate Nick’s honesty in providing and recommending the best route for what I was trying to accomplish, along with his good customer service and communication throughout the process.“",
//   },
//   {
//     name: "Kathy Magnani",
//     description:
//       "“We had JC Construction replace our direct vent fireplace and add stacked stone from floor to ceiling. Everything about the job was thorough and professionally done! We are thrilled with the outcome and will definitely use them again for future jobs.“",
//   },
//   {
//     name: "Johnny World Traveler Soria",
//     description:
//       "“Nick did an excellent job from start to finish! He started the job right away, one of the primary reason for going with his company. His prices and quality of work was exceptional! I was in a bind with trying to get my house on the market and he started and completed the job in one week! I’m very satisfied with the job and highly recommend JC construction for any home improvement needs.“",
//   },
//   {
//     name: "Ro Sharma",
//     description:
//       "“It was a great pleasure to work with Nick and his team on our garage remodel. Changes were suggested and we worked it for resolution. Remodeling in an old house isn’t easy at all. Very pleased the way our cabana/ADU turned out. Realizing how expensive things are today in construction, Nick managed the budget very well. All his guys were collaborative with customer satisfaction in mind. My project was done in under 5 weeks. Very pleased with all the guys. The 2 leads were Antonio and Ray. They were all super!“",
//   },
//   {
//     name: "Miriam G",
//     description:
//       "“I love how my kitchen turned out, Nick and Mario were very knowledgeable, answered all of my questions, and were always professional, showed up on time, and kind during the whole process. I highly recommend JC construction.“",
//   },
//   {
//     name: "Uriel Centeno cano",
//     description:
//       "“I was looking for a local contractor to work at my kitchen remodel and found JC Construction very close by to our home. Called and had an estimate done by nick the owner. He was very thorough and explained everything completely. We felt so confident in his estimate that we didn’t even bother to get any other bids. They did an excellent job, very thorough and professional. We have recommended them to a friend for their work needed.“",
//   },
//   {
//     name: "Garrett Blank",
//     description:
//       "“Nick’s team is dedicated to finding the right way to handle situations as they come up. COVID issues abound with supply chain issues, they turned my 80's living space into a beautiful, open area that is functional and gets plenty of praise from family, friends, and visitors. Nick does what he can to make things turn out as intended. His interior design sense is impeccable and I was mostly able to rely on his judgement. I’m excited to spend the rest of my at-home work time in this space.“",
//   },
// ];

// const Testimonials = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//   };
//   return (
//     <div className={styles.testimonials_container}>
//       <Typography variant="h2">
//         Sacramento’s #1 Home <br /> Remodeling & Construction
//       </Typography>
//       <div className={styles.testimonials_list_container}>
//         <Slider {...settings}>
//           {testimonials_data.map((item, index) => (
//             <div key={index} className={styles.testimonial_item_container}>
//               <Typography varient="body1">{item.description}</Typography>
//               <div className={styles.author_container}>
//                 <span></span>
//                 <Typography component="small">{item.name}</Typography>
//               </div>
//               <br />
//               <br />
//               <Image
//                 src={"//images/rating_stars.svg"}
//                 width={384}
//                 height={68}
//                 alt="testimonial"
//                 placeholder="blur"
//                 blurDataURL="/images/rating_stars.svg"
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>
//       <div className={styles.social_icons_container}>
//         <Image
//           src={"//images/fb_icon.png"}
//           width={40}
//           height={40}
//           alt="fb-icon"
//           placeholder="blur"
//           blurDataURL="/images/fb_icon.png"
//         />

//         <Image
//           src={"//images/google_icon.png"}
//           width={40}
//           height={40}
//           alt="google-icon"
//           placeholder="blur"
//           blurDataURL="/images/google_icon.png"
//         />
//         <Image
//           src={"//images/social_icon.png"}
//           width={40}
//           height={50}
//           alt="social-icon"
//           placeholder="blur"
//           blurDataURL="/images/social_icon.png"
//         />
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

import React from "react";

const Testimonials = () => {
  return <div>hello</div>;
};

export default Testimonials;
