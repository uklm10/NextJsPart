import Image from 'next/image';
import Link from 'next/link';
import styles from './globals.css';

const Banner = () => {
  return (
    <section className={styles.bannerSection} id="hero">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-7">
            <div className={styles.bannerText}>
              <div className={styles.vactorImg}>
                <Image className={styles.vactorImgOne} src="/assets/img/v1/vector-3.png" alt="vector" width={50} height={50} />
                <Image
                  className={styles.vactorImgTwo}
                  src="/assets/img/v1/vector-4.png"
                  alt="vector"
                  width={50}
                  height={50}
                  data-aos="zoom-out"
                  data-aos-delay="200"
                />
                <Image
                  className={`${styles.vactorImgThree} ${styles.spinAnimation}`}
                  src="/assets/img/v1/vector-6.png"
                  alt="vector"
                  width={50}
                  height={50}
                />
                <Image
                  className={`${styles.vactorImgFour} ${styles.spinAnimation}`}
                  src="/assets/img/v1/vector-5.png"
                  alt="vector"
                  width={50}
                  height={50}
                />
              </div>
              <h1 data-aos="fade-in">
                HELLO I<span className={styles.redText}>'</span>M
                <span>
                  <Image src="/assets/img/v1/wave-icon.png" alt="wave" width={30} height={30} />
                </span>
                DIANNE RUSSELL
              </h1>
              <p data-aos="fade-in" data-aos-delay="100">
                I focus on making digital experiences that are easy to use, enjoyable, and get the job done.
              </p>
              <div className={styles.bannerBtn} data-aos="fade-in" data-aos-delay="200">
                <Link legacyBehavior href="#">
                  <a className={styles.primaryCustomButton}>
                    How I, Work
                    <span className={styles.linkIcon}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                        <path
                          d="M0.679968 15.6345L2.63199 17.2365L12.2442 5.52434L13.2067 15.298L15.73 15.0495L14.3441 0.975443L0.270006 2.36142L0.518502 4.88479L10.2922 3.92231L0.679968 15.6345Z"
                          fill="#FA614F"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-5">
            <div className={styles.bannerRightImg} data-aos="zoom-out" data-aos-delay="500">
              <Image src="/assets/img/v1/banner-img.png" alt="banner" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
