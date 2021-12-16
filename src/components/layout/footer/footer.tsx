import { Button } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../../../context/auth-context';
import { auth } from '../../../utils/firabase';
import styles from './footer.module.css'

function Footer() {
    const signOut = async () => {
        await auth.signOut();
    };

    const user = useContext(AuthContext);

    return (
        <footer className={styles.footer}>

            {
                user ?
                    (<Button variant='contained' color='success' onClick={signOut}>
                        SignOut
                    </Button>)
                    :
                    (<></>)

            }
            <a
                href="https://github.com/EduardoCitelli"
                target="_blank"
                rel="noopener noreferrer"
            >
                Developed by @EduardoCitelli
                <img src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg" alt="github"></img>
            </a>
        </footer>
    );
}

export default Footer;

