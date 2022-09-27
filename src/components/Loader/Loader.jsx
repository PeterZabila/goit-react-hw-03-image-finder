import { Audio } from 'react-loader-spinner';
import styles from './loader.module.scss';

export default function Loader () {
    return (
        <>
            <div className={styles.backdrop}>
                <div className={styles.loader}></div>
            </div>
            <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                className="wrapperStyle wrapperClass"
            />
        </>
        
    )
}

