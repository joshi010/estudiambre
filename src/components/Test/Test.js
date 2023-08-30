import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import '../Inicio/inicio.css';
import List from "./List";


export default function Test(){
    const { topic } = useParams();
    const [topicData, setTopicData] = useState(null);
    const [ quest, setQuest ] = useState(0);
    const [correct, setCorrect] = useState(0)
    const [points, setPoints] = useState(0);
    
    function randomNum(array){
        const num = Math.floor(Math.random() * array.length);
        console.log(num)
        return num;
    }

    useEffect(()=>{
        import(`../../Topics/${topic}.js`).then((m) => {
            setTopicData(m.default);
        });


    }, [topic]);


    
    if(!topicData){
        return <div>Cargando...</div>
    }
    
    const { questions } = topicData;
    


    const  handleClick = (e) => {
        if(questions[quest].options[correct] === e){
            setPoints(x => x +1)
            setQuest(randomNum(questions));
        }
    }


    return(
        <>
            <div className="hero">
                {
                    '¿' + questions[quest].question + '?'
                }
            </div>
            <div className="points">
                    Puntuación: {points}
             </div>
            {
                <div className="mosaic-container">
                    <List  questions={questions} quest={quest} setCorrect={setCorrect} handleClick={handleClick} />
                </div>

            }
        </>
    )
}