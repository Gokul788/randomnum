import { useState } from "react"

function Randomnum(){
    var [num,random] = useState(0)

    function createRandom(){
        num = Math.floor(Math.random()*10)+1

        random(num)
    }
    return(
        <>
        <div style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
            <div style={{backgroundColor:"black",padding:"1.5rem",color:"wheat",display:"flex",flexDirection:"column",borderRadius:".7rem",textAlign:"center"}}>
                <h1>Random Number Generator</h1>
                <h1>{num}</h1>
                <button className="btn" onClick={createRandom}>Generate</button>
            </div>
        </div>
        </>
    )
}
export default Randomnum