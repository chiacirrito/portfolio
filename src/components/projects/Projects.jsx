import { ProjectList } from "@/mocks/project";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";

const Projects = () => {
  return (
    <div className={styles.Projects}>
      <div className={styles.card}>
        {ProjectList.map((project) => (
          <div className={styles.div} key={project.id}>
            <Link href={project.link}>
              <Image
                src={project.img}
                alt="img"
                width={220}
                height={200}
                priority={true}
              />
            </Link>
            <h3>
              <Link href={project.link}>{project.title}</Link>
            </h3>
            <h4>{project.data}</h4>
            <h4>{project.description}</h4>
            <h5>{project.tech}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
