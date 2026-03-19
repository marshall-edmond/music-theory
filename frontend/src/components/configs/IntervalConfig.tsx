import { useParams } from 'react-router';
import Intervals from '../../components/lessons/Intervals';

type lessonConfig = {
    component : React.FC,
    back?: string,
    next?: string,
    number: string,
}

//object for different lessons
const Lessons = [
    "intervals" {
        component: Intervals,
        back: undefined,
        next: undefined,
        number: 1,
    }
]

export default function IntervalRouting (){
    const lookupKey = useParams();
    
    //find active component from dynamic routing
    const ActiveComponent = Lessons[]
}