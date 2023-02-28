import { SchoolList } from "@/mocks/school";
import { MdSchool } from "react-icons/md";
import { FaDesktop } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import styles from "./index.module.scss";

const Schools = () => {
  return (
    <div className={styles.Schools}>
      <div className={styles.icons}>
        <ul>
          <li>
            <FaDesktop />
            <BiLibrary />
            <MdSchool />
          </li>
        </ul>
      </div>
      <div className={styles.div}>
        {SchoolList.map((school) => (
          <ul className={styles.ul}>
            <li>
              {school.title} | {school.name} | {school.year}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Schools;
