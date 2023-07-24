import { useState } from "react"

const Movies=()=>{
    const [sentence, setText] = useState("")
    const[result,setResult]=useState("")
    const url = 'https://text-translator2.p.rapidapi.com/translate';

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'fc6829f85amsh200d16001ffcd60p1149e9jsn1ff66918683c',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        body: new URLSearchParams({
            source_language: 'en',
            target_language: 'hi',
            text: sentence
        })
    };
    
  
    async function handleApi() {
        
        const response = await fetch(url, options);
        result = await response.text();
        console.log(result.padStart.translatedText[0]);
    }
    
     

    
    return(
        <>
        <div className="">
        <input value={sentence} className="border-4 border-blue-400" type="text" onChange={(e)=>{
                    setText(e.target.value)
                    
        }}/>
        <button onClick={()=> handleApi()}>Translate</button>
        <p className="m-2 p-2">{result}</p>
        </div>
        </>










    )
}
export default Movies;