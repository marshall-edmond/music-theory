import { useParams } from 'react-router';
import IntroInterval from '../intro/IntroInterval';
import Intervals from '../../components/lessons/Intervals';
import react from 'react';


type lessonConfig = {
    component : React.FC,
    back?: string,
    next?: string,
    number: string,
}

//object for different lessons
const Lessons : Record<string, lessonConfig> = {
    "Intro" : {
        component: IntroInterval,
        back: undefined,
        next: undefined,
        number: '1',
    },

    "intervals" : {
        component: Intervals,
        back: undefined,
        next: undefined,
        number: '2',
    }
}

export default function IntervalRouting (){
    const { lessonId } = useParams<{ lessonId : string}>();

    const lookupKey = lessonId || 'Intro';
    
    //find active component from dynamic routing
    const config = Lessons[lookupKey];

    const ActiveComponent = config?.component;




    return (
        <div>
            <ActiveComponent />
        </div>
    )
}