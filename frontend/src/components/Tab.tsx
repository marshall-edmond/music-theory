import styles from '../styles/Tab.module.css';

interface TabProps {
    setLogin : boolean;
}


function Tab ({setLogin = false} : TabProps){
  

    return (
        <>
            <div className={styles.mainContainer}>
                {setLogin ? (
                    <>
                        <div className={styles.deactivated}> Sign Up </div>
                        <div className={styles.activated}> Log in </div>
                    </>


                ) : (
                    <>
                        <div className={styles.activated}> Sign Up </div>
                        <div className={styles.deactivated}> Log in</div>
                    </> 

                    
            </div>

        </>

    )
}


export default Tab;