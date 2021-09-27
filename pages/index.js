import React, {useState} from 'react';

import Link from 'next/link'

const InputElement = () => {

    const [inputText,setInputText] = useState("");

    return <div> 
        <input onChange={(e) => {setInputText(e.target.value)} } placeholder="Inserisci la tua mail" /> 
        <br/>
        {inputText}
        
        </div>
};

export default InputElement;