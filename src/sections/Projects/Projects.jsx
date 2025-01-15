import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Ajvvs/pong-game"
          h3="Pong Game"
          p="Vintage Pong Game"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Ajvvs/pong-game"
          h3="TBA"
          p="TBA"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ajvvs/pong-game"
          h3="TBA"
          p="TBA"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ajvvs/pong-game"
          h3="TBA"
          p="TBA"
        />
      </div>
    </section>
  );
}

export default Projects;
