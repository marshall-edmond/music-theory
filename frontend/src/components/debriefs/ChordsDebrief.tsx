import styles from '../../styles/Debrief.module.css';
import logo_png from '../../assets/logo_circle.png'
export default function ChordsDebrief(){
    const question1 = "To build a major chord remember the formula W-W-H-W-W-W-H, once you're comfortable with that you've done most of the work. From here take the scale you've calculated and take the 1st, 3rd and 5th degrees.";
    const question2 = "To build the minor scale now we'll use the W-H-W-W-H-W-W formula from the root. An alternative is to build the major scale and flatten the 3rd degree.";
    const question3 = "To build the diminished scale we can simply just take the minor 3rd and diminished 5th degrees of the major scale of the root.";
    const question4 = "Since we've covered major triads, minor triads, and diminishedt triads, to get the correct answer pay attention to the scale degrees. The root will give you the first half of the answer, from there check that the 3rd and 5th are relative to the root."
    return (
        <div className={styles.mainContainer}>
            <div className={styles.pageFrame}>
                <img src={logo_png} alt='logo' className={styles.logo}></img>
                <div className={styles.title}> Chords Debrief </div>
                
                <div className={styles.question}> Question 1: Build the major scale </div> 
               <div className={styles.text}> {question1} </div> 
               <div className={styles.question}> Question 2: Build the minor scale </div>
               <div className={styles.text}>{question2}</div>
               <div className={styles.question}> Question 3: Build the diminsished scale  </div>
               <div className={styles.text}>{question3}</div>
               <div className={styles.question}>Question 4: Indentify the chord</div>
               <div className={styles.text}>{question4}</div>
               <div className={styles.question}>Question 5: What scale degrees make up a diminished chord?</div>
               <div className={styles.text}>A diminished chord is made up of the root/ 1st, minor 3rd, and a diminished 5th.</div>
            </div>
        </div> 
            ) }
