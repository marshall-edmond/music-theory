import styles from '../../styles/Debrief.module.css';

const userScore = 4;

export default function KeysandScalesDebrief() {

    const congrats = `Congratulations, of the 5 questions you scored ${userScore} out of 5. You have a strong understanding of keys and scales. These concepts will be essential as you move into chords.`

    const encouragement = `You scored ${userScore} out of 5 questions. Keys and scales are foundational — before moving on, consider revisiting the lessons in this section as the next topics will build directly on this knowledge.`

    const question1 = 'Building a major scale requires applying the Whole - Whole - Half - Whole - Whole - Whole - Half formula from any root note. Each step determines the distance between consecutive notes in the scale.'

    const question2 = 'The natural minor scale follows the formula Whole - Half - Whole - Whole - Half - Whole - Whole. Notice how shifting the pattern of tones and semitones changes the overall feel of the scale.'

    const question3 = 'A major or minor scale contains 8 notes including the octave — the root note repeated at a higher pitch. The octave closes the scale and gives it a sense of resolution.'

    const question4 = 'A key is a tonal center — a home base for a group of notes. When a piece of music is in a key, the notes and chords used generally belong to the scale of that key, giving the music its overall sound and direction.'

    const question5 = 'The natural minor scale lowers the 3rd, 6th, and 7th degrees of the major scale by a half step each. These three changes are what give the minor scale its darker, more somber character compared to the major scale.'

    return (
        <div className={styles.mainContainer}>
            <div className={styles.pageFrame}>
                <div className={styles.title}>
                    Keys & Scales Debrief
                </div>

                {userScore >= 4 ? (
                    <div className={styles.text}>
                        {congrats}
                    </div>
                ) : (
                    <div className={styles.text}>
                        {encouragement}
                    </div>
                )}

                <div className={styles.question}>
                    1. Build the Major Scale
                </div>
                <div className={styles.text}>
                    {question1}
                </div>

                <div className={styles.question}>
                    2. Build the Minor Scale
                </div>
                <div className={styles.text}>
                    {question2}
                </div>

                <div className={styles.question}>
                    3. How many notes are in a Major/Minor Scale (including octave)?
                </div>
                <div className={styles.text}>
                    {question3}
                </div>

                <div className={styles.question}>
                    4. What is a key?
                </div>
                <div className={styles.text}>
                    {question4}
                </div>

                <div className={styles.question}>
                    5. Which scale degrees are flattened in a natural minor scale compared to a major scale?
                </div>
                <div className={styles.text}>
                    {question5}
                </div>

            </div>
        </div>
    )
}
