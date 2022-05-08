import {useRef, useContext} from 'react';
import NotificationContext from '../../store/notification-context';

import styles from './newsletter-registration.module.css';

function NewsletterRegistration() {
    const emailInputRef = useRef();

    const {showNotification} =
        useContext(NotificationContext);

    function registrationHandler(event) {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;

        showNotification({
            title: 'Signing up...',
            message: 'Registering for newsletter',
            status: 'pending',
        });

        fetch('/api/newsletter', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: enteredEmail}),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }

                return response.json().then((data) => {
                    throw new Error(data.message || 'Something went wrong!');
                });
            })
            .then((data) => {
                showNotification({
                    title: 'Success!',
                    message: 'Successfully registered for newsletter',
                    status: 'success',
                });
                console.log(data);
            })
            .catch((error) => {
                showNotification({
                    title: 'Error!',
                    message: error.message || 'Something went wrong!',
                    status: 'error',
                });
                console.log(error);
            });
    }

    return (
        <section className={styles.newsletter}>
            <h2>Sign up to stay updated!</h2>
            <form onSubmit={registrationHandler}>
                <div className={styles.control}>
                    <input
                        type="email"
                        id="email"
                        placeholder="Your email"
                        aria-label="Your email"
                        ref={emailInputRef}
                    />
                    <button>Register</button>
                </div>
            </form>
        </section>
    );
}

export default NewsletterRegistration;
