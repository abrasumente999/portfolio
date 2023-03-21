import styles from "./Cards.module.css";
import { ProjectType } from "data";
import Image from "next/image";
import imageByIndex from "@/utils/utils";
import { robotoMono } from "@/app/fonts";

export default function Cards({ data }: { data: ProjectType[] }) {
  const flexLayout = (project: ProjectType) => {
    if (+project.id % 2 === 0) {
      return "cardsProjectEven";
    } else {
      return "cardsProjectOdd";
    }
  };

  return (
    <section className={styles.cards}>
      <div className={styles.cardsContainer}>
        {data.map((project) => (
          <article className={styles.cardsProjectContainer} key={project.id}>
            <div className={styles[flexLayout(project)]} onClick={() => {}}>
              <Image
                className={styles.cardsImage}
                src={imageByIndex(+project.id - 1)}
                alt={`Screenshot of ${project.name} project`}
                width={300}
                height={300}
              />

              <div className={styles.projectTextContainer}>
                <h5 className={styles.projectHeader}>{project.name}</h5>
                <p
                  className={
                    styles.projectType +
                    " " +
                    robotoMono.className +
                    " " +
                    styles[`p${project.id}`]
                  }
                >
                  {project.type}
                </p>
                <p className={styles.projectDesc}>{project.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

//if project id is an odd number, flex row reverse
