import styles from '../../styles/Debrief.module.css';
import NoFunction from '../../components/NoFunction';
//take userScore from NotesQuiz
const userScore = 4;


export default function NotesDebrief(){

    const congrats = `Congratulations, of the 5 questions you scored ${userScore} out of 5. This is a great start to your journey of learning music theory. Please feel free to revisit this section as these topics will be used in future sections.
    `
    const encouragement = `This is only the first quiz of this roadmap. Although you scored ${userScore} out of 5 questions, this is a step towards the right direction.
    Before moving on I would encourage you to go back and reread the notes section as the next sections will build upon your knowledge of the notes section.`

    //strings for the 5 questions asked.
    const question1 = 'If you were not able to identify the correct note there is nothing wrong with you. Being able to visually identify notes on a piano purely comes with practice. Below is a piano with all of the notes labeled.'

    const question2 = 'Remember the prefix Oct- means 8. Including accidentals there are 12 different notes on the piano. However this question asks specifically for the number of white notes on a piano.'

    const question3 = 'Including accidentals there are 12 notes on a piano. Remember accidentals alter the pitch of a note, and on a piano they are represented by the black keys.';
    const question4 = "Enharmonic equivalance occurs when two notes with the same pitch and sound have different names and notation. An example of this is that a black note between a C and a D, can take on the notation of either based on rulesets which we will go over later. If we choose to refer to the black name according to C, since it's to the right of C it would be C#, and if we choose D we will have D flat.               ";

    const question5 = '';



    return (
        <div className={styles.mainContainer}>
            <div className={styles.pageFrame}>
                <div className={styles.title}>
                    Notes Debrief
                </div>

                {userScore >= 4 ? (
                    <div className = {styles.text}>
                        {congrats}
                    </div>
            ) : (
                    <div className={styles.text}>
                        {encouragement}
                    </div>
                )}

            <div className={styles.question}>
                1. Identify the Note
            </div>

                <div className={styles.text}>
                    {question1}
                </div>

            <NoFunction />
            
            <div className={styles.question}>
                2. How many white notes are on an octave?
            </div>

            <div className={styles.text}>
                {question2}
            </div> 

            <div className={styles.question}>
                3. How many notes are on a piano including accidentals?
            </div>

            <div className={styles.text}>
                {question3}
            </div>

            <div className={styles.question}>
                4. What is enharmonic equivalence?
            </div>

            <div className={styles.text}>
                {question4}
            </div>

            </div>
        </div>
    )
}