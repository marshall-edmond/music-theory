import LessonLayout from '.././LessonLayout.tsx';
import Piano from '../Piano';
import styles from '../../styles/Theory.module.css';
import { GiGrandPiano } from 'react-icons/gi';



export default function Notes () {

    const leftContent = (
        <>
            <h1 className={styles.h1}>What is Music?</h1>
                <div className={styles.pianoIcon}>
                    <GiGrandPiano size={32}/>
                </div>
            <p className={styles.p}>Music is the universal language of the world. Meaning we can all speak it regardless of factors like age, culture, gender & so on. Like any other language, music has a foundation as well as rules which generally shouldn't be broken. The entire western world of music rests on the shoulders of the first 7 letters of our alphabet.</p>
            <p className={styles.p}>A, B, C, D, E, F, G</p>
            <p className={styles.p}>It's hard to fathom that every single song is simply made from these letters (although its true). Within music these letters are referred to as notes. Every note consists of a letter which maps the sound as well as a number to represent the frequency of the sound.</p>
            <p className={styles.p}>ex: C4</p>
            <p className={styles.p}>Notes are the building block to all forms of music. The 7 previously mentioned letters are called Natural notes because they have no accidentals. An accidental takes the pitch of a note and slightly alters it. The types of accidentals are flats(♭), sharps(#), double flats(♭♭), and double sharps(♯♯).</p>
        </>
    )
    const rightContent = (
        <> 
            < Piano />
        </>
    )


    return (
            <LessonLayout
                left={leftContent}
                right={rightContent}
             />

    )

}
