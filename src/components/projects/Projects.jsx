import { ProjectList } from "@/mocks/project";
import Link from "next/link";
import styles from "./index.module.scss";

const Projects = () => {
  return (
    <div className={styles.Projects}>
      <div className={styles.card}>
        {ProjectList.map((project) => (
          <div className={styles.div} key={project.id}>
            <Link href={project.link}>
              <h1>{project.img}</h1>
              <h3>{project.title}</h3>
              <h4>{project.data}</h4>
              <h5>{project.tech}</h5>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
