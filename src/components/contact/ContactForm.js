import styles from './ContactForm.module.css';

const ContactForm = props => {

    const submitForm = e => {
        e.preventDefault();
    }

    return (
        <form onSubmit={submitForm} className={styles['contact-form']}>
            <h4>Contact Me</h4>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
            </div>
        </form>
    )
}

export default ContactForm;