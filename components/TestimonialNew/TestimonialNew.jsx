import Image from "next/image";
import styles from "./testimonial-new.module.scss";

const TestimonialNew = () => {
  return (
    <div className={styles.clients_testimonials_container}>
      <div className={styles.clients_rating}>
        <a
          href="https://www.google.com/search?q=jc+constructiuon&rlz=1C5CHFA_enUS884US884&oq=jc+constructiuon&aqs=chrome..69i57.1799j0j1&sourceid=chrome&ie=UTF-8#lrd=0x809ad92812931ad7:0xdb53a117be8ea501,1,,,"
          target="_blank"
        >
          <Image
            src="//images/google1.svg"
            width={157}
            height={129}
            layout="intrinsic"
            objectFit="contain"
          />
        </a>
        <a href="https://www.facebook.com/Jcconstruction.us/" target="_blank">
          <Image
            src="//images/facebook.svg"
            width={164}
            height={128}
            layout="intrinsic"
            objectFit="contain"
          />
        </a>
        <a
          href="https://www.angi.com/companylist/us/ca/sacramento/jc-construction-and-remodeling-reviews-9945471.htm"
          target="_blank"
        >
          <Image
            src="//images/angle.svg"
            width={174}
            height={131}
            layout="intrinsic"
            objectFit="contain"
          />
        </a>
        <a
          href="https://www.homeadvisor.com/rated.JCConstruction.82879816.html"
          target="_blank"
        >
          <Image
            src="//images/home.svg"
            width={188}
            height={114}
            layout="intrinsic"
            objectFit="contain"
          />
        </a>
        <a
          href="https://www.yelp.com/biz/jc-construction-and-remodeling-sacramento"
          target="_blank"
        >
          <Image
            src="//images/yelp.svg"
            width={132}
            height={130}
            objectFit="contain"
            layout="intrinsic"
          />
        </a>
        <a
          href="https://www.thumbtack.com/ca/sacramento/handyman/jc-construction-remodeling/service/350362022215368724?project_pk=415753655606534152"
          target="_blank"
        >
          <Image
            src="//images/black.svg"
            width={151}
            height={116}
            objectFit="contain"
            layout="intrinsic"
          />
        </a>
      </div>
    </div>
  );
};

export default TestimonialNew;
