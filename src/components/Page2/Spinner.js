import React from "react"
import ReactLoading from "react-loading"
import "./Spinner.css"

const Spinner=() => {

    return(  
    <div className="load">
        <ReactLoading 
        type="spokes" 
        color="#ffff00"
        width={"5%"}
        />
    </div>
    )
}


export default Spinner