import LessonLayout from "../LessonLayout";
import Piano from '../../components/Piano';
import styles from '../../styles/Theory.module.css';


export default function Intervals (){

    const leftContent =
    <>
        
    </>

    const rightContent =
    <>
    <Piano />
    </> 
    return (
        <LessonLayout left = {leftContent} right = {rightContent}/>
    )
}