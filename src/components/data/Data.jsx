import { DataList } from "@/mocks/data";
import { FaBirthdayCake, FaCar } from "react-icons/fa";
import { GrLocationPin, GrMail } from "react-icons/gr";
import { RiEnglishInput } from "react-icons/ri";
import Link from "next/link";
import styles from "./index.module.scss";

const Data = () => {
  return (
    <div className={styles.Data}>
      <div className={styles.dati}>
        {DataList.map((dati) => (
          <ul className={styles.ul} key={dati.id}>
            <li>
              <FaBirthdayCake />
              {dati.nascita}
            </li>
            <li>
              <GrLocationPin />
              {dati.indirizzo}
            </li>
            <li>
              <GrMail />
              <Link href="mailto:chiara.cirrito1602@gmail.com">
                {dati.mail}
              </Link>
            </li>
            <li>
              <FaCar />
              {dati.patente}
            </li>
            <li>
              <RiEnglishInput />
              {dati.inglese}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Data;
