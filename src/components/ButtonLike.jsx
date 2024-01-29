import { useState } from "react";
import { useEffect } from "react";

const ButtonLike = () => {
    //Definimos en React dos constantes a las que se les asigna 1 con useState
    const [like, setLike] = useState(1);
    //Ponemos y quitamos like cada vez que se pulsa
    const handledClick = ()=>{
        //Usando el localStorage para cambiar de true a false y viceversa
        window.localStorage.setItem('like',!like);        
        setLike(!like); 
    };
    useEffect(()=>{
        setLike(JSON.parse(localStorage.getItem('like')) ||  false);
    })
    //Cada vez que se pulse en el botón, se ejecuta una arrow function que ejecuta setLike y que a su vez  incrementa en uno la variable like.
    return(<button 
        className={`text-2xl transition-color ${like && 'text-yellow-400'} bg-sky-950 py-1 px-4`}
        onClick={handledClick}>
        ★{like}
    </button>);
}
export default ButtonLike;