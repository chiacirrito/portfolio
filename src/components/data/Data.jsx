import { DataList } from "@/mocks/data";
import { FaBirthdayCake, FaCar } from "react-icons/fa";
import { GrLocationPin, GrMail } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { RiEnglishInput } from "react-icons/ri";
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
              {dati.mail}
            </li>
            <li>
              <FiPhoneCall />
              {dati.telefono}
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
