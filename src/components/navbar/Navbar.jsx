import Link from "next/link";
import { BsPersonLinesFill, BsChatText } from "react-icons/bs";
import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul>
        <Link href={"/"}>
          <li>
            <BsPersonLinesFill />
          </li>
        </Link>
        <Link href={"/contact"}>
          <li>
            <BsChatText />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
