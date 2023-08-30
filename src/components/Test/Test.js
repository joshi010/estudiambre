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
    const [bien, setBien] = useState(0);
    const [mal, setMal] = useState(0);
    const [pop, setPop] = useState(false);

    
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
            setPoints(x => x +1);
            setBien(x => x+1);
            setQuest(randomNum(questions));
        } else {
            setPoints(x => x-1);
            setMal(x => x+1);
            setPop(true);
        }
    }

    const handleNext = () => {
        setPop(false);
        setQuest(randomNum(questions));
    }


    return(
        <>
            <div className="hero">
                {
                    '¿' + questions[quest].question + '?'
                }
            </div>
            <div className="points">
                    <div id="bien">
                        Bien:{bien}
                    </div>
                    <div>
                        Puntuación: {points}
                    </div>
                    <div id="mal">
                        Mal:{mal}
                    </div>
             </div>
            {
                <div className="mosaic-container">
                    <List  questions={questions} quest={quest} setCorrect={setCorrect} handleClick={handleClick} />
                </div>

            }
            { pop ?
                <div className="popup">
                    <h1>Incorrecto</h1>
                    <div>
                    <h3>Respuesta correcta:</h3>
                    {
                        questions[quest].options[correct]
                    }
                    </div>
                    <div className="button" onClick={handleNext}>
                        Siguiente
                    </div>
                </div>
                : null
            }
        </>
    )
}