import Image from 'next/image';
import styles from "./globals.css";

const Testimonial = () => {
  return (
    <section className={styles.testimonial}>
      <div className="container">
        <div className={styles.testimonialTitle} data-aos="fade-up">
          <span className={styles.spanWithIcon}>Testimonial</span>
          <h2>
            What My <span className={styles.redBorderText}>Clients</span> Say
          </h2>
        </div>
        <div className={styles.testimonialSlider}>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-5">
              <div className={styles.testimonialSliderFor} data-aos="fade-in">
                <div className={styles.testimonialItem}>
                  <div className={styles.quote}>
                    <Image
                      className={styles.quoteIcon}
                      src="/assets/img/v1/quote.png"
                      alt="quote"
                      width={50}
                      height={50}
                    />
                    <div className={styles.name}>Leslie Alexander</div>
                    <div className={styles.testimonialStar}>
                      <ul>
                        <li className={styles.active}>
                          <span>★</span>
                        </li>
                        <li className={styles.active}>
                          <span>★</span>
                        </li>
                        <li className={styles.active}>
                          <span>★</span>
                        </li>
                        <li className={styles.active}>
                          <span>★</span>
                        </li>
                        <li>
                          <span>☆</span>
                        </li>
                      </ul>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                      Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
                      nibh elementum imperdiet. Duis sagittis ipsum. Nullam rutrum placerat urna,
                      sit amet efficitur nulla efficitur ut. Donec nec urna eu justo fermentum
                      consequat.
                    </p>
                  </div>
                </div>
                {/* More testimonial items */}
              </div>
              <div className={styles.testimonialSliderNavigation} data-aos="zoom-out" data-aos-delay="400">
                <ul>
                  <li className={styles.testimonialPrev}>
                    <Image
                      src="/assets/img/v1/pre-1.png"
                      className={styles.outHoverArrow}
                      alt="prev"
                      width={24}
                      height={24}
                    />
                    <Image
                      src="/assets/img/v1/pre-2.png"
                      className={styles.hoverArrow}
                      alt="prev"
                      width={24}
                      height={24}
                    />
                  </li>
                  <li>
                    <div className={styles.sliderDotsBox}></div>
                  </li>
                  <li className={styles.testimonialNext}>
                    <Image
                      src="/assets/img/v1/next-1.png"
                      className={styles.outHoverArrow}
                      alt="next"
                      width={24}
                      height={24}
                    />
                    <Image
                      src="/assets/img/v1/next-2.png"
                      className={styles.hoverArrow}
                      alt="next"
                      width={24}
                      height={24}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <div className={styles.testimonialSliderNav} data-aos="fade-in">
                <div className="grid grid-cols-4 gap-4">
                  <div className={styles.testimonialImgBox}>
                    <div className={styles.testimonialImg}>
                      <Image
                        src="/assets/img/v1/claint/claint-1.png"
                        alt="client-1"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  {/* More testimonial images */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
