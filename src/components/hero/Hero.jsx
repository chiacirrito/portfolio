import Image from "next/image";
import styles from "./index.module.scss";

const Hero = ({ dati }) => {
  console.log(dati);

  return (
    <div className={styles.Hero}>
      <h2>Web Developer</h2>
      <Image
        src="/foto.jpg"
        alt="foto profilo"
        width={150}
        height={150}
        className={styles.foto}
      />
    </div>
  );
};

export default Hero;
