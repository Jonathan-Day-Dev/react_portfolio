import styles from './ProjectList.module.css';

import Project from './Project';

const ProjectList = props => {
    return (
        <div className={styles['project-list']}>
            <h4>ProjectList.js</h4>
            {props.projects.map(project => <Project projectName={project.name} key={project.name} />)}
        </div>
    )
}

export default ProjectList;