import Image from "next/image";
import styles from "./index.module.scss";

const Hero = ({ dati }) => {
  console.log(dati);

  return (
    <div className={styles.Hero}>
      <h1>Front-End Developer</h1>
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
