"use client"
import { useEffect, useState } from "react";

export default function Emoticons({children, faceIndex}: {children: React.ReactNode, faceIndex: number}) {

    const emoticons = ["(･ω´･ )", "( ☉_☉)≡☞o────★°", "ლ(╹◡╹ლ)"];
    const [currentEmo, setCurrentEmo] = useState(0);

    const face = ["o_o","-_-"];
    const [currentFace, setCurrentFace] = useState(0);
    const [counter, setCounter] = useState(0);
    
    useEffect(() => {
        setTimeout(()=>{
            console.log("10s");
        }, 10000);

        setInterval(()=>{
            if(counter % 5 == 0){
                setCurrentFace(1);
            }else{
                setCurrentFace(0);
            }
            console.log(counter);
            //為什麼 counter 會一直是零？
            // +0.5 總分，下週四 5/21 23:59 以前說明為什麼以及解法

            setCounter(counter + 1);
        }, 1000);
    }, []);
    

    return (
        <>
        {children}
        { face[currentFace] }
        
        </>
    );
}
