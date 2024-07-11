import Image from 'next/image';
import styles from "./globals.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.ctaBox}>
        <div className="container">
          <div className={styles.getInTouch}>
            <div className={styles.getTouchVactor} data-aos="zoom-in">
              <Image src="/assets/img/v1/footer-vactor.png" alt="vector" width={50} height={50} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className={styles.ctaLeftImg} data-aos="zoom-out">
                <Image src="/assets/img/v1/cta-left-img.png" alt="cta" width={300} height={200} />
              </div>
              <div className={styles.getInTouchContent} data-aos="fade-in">
                <h2>Have Any Projects in Mind? Get in Touch</h2>
                <a href="#" className={styles.secondaryCustomButton}>Explore More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.copyrightWrapper} data-aos="fade-in">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className={styles.copyrightLeft}>
              <p>Crafted with care by Myportfy @2024</p>
            </div>
            <ul className={`${styles.footerSocialMedia} flex justify-center lg:justify-end`}>
              <li>
                <a href="#">
                  <Image src="/assets/img/v1/social-media/facebook.png" alt="facebook" width={24} height={24} />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src="/assets/img/v1/social-media/instagram.png" alt="Instagram" width={24} height={24} />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src="/assets/img/v1/social-media/twitter.png" alt="Twitter" width={24} height={24} />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src="/assets/img/v1/social-media/dribbble.png" alt="dribbble" width={24} height={24} />
                </a>
              </li>
            </ul>
            <div className={styles.copyrightLink}>
              <a href="#">Terms &amp; Condition</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
