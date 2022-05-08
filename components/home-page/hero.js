import Image from 'next/image';

import styles from './hero.module.css';

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.image}>
                <Image
                    src="/images/site/profile.png"
                    alt="person-photo"
                    width={300}
                    height={300}
                />
            </div>
            <h1>
                Hi, I'm <i>Max</i>
            </h1>
            <p>
                I blog about web development - especially frontend frameworks
                like Angular or React.
            </p>
        </section>
    );
}

export default Hero;
