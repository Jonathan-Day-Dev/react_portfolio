import styles from './Project.module.css';

const Project = props => {
    return (
        <div className={styles.project}>
            {props.projectName}
        </div>
    )
}

export default Project;