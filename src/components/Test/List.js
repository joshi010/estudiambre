import React, { useEffect, useState } from "react";

export default function List(props){
    const [shuffled, setShuffled] = useState(['loading']);
    const [quest, setQuest] = useState(props.quest);
    const [copy, setCopy] = useState(JSON.parse(JSON.stringify(props.questions)));

    const shuffle = (a) => {
        for(let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    useEffect(() => {
        props.setRight([...props.questions]);
    },[])

    useEffect(() => {
        setQuest(props.quest);
    }, [props.quest]);

    useEffect(() => {
        setShuffled(shuffle(copy[quest].options));
    }, [quest]);

    useEffect(() => {
        props.setCorrect(copy[quest].answer);
    }, [quest])
    

    return(
        <>
          {shuffled.map(x => {
             return <div key={x} className="card" onClick={()=>props.handleClick(x)}>{x}</div>
          })}
        </>
    )
}