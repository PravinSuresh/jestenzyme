import React,{useState} from "react";
import { ButtonWrapper } from "./Button.styles";

const Button = ({text, callBackFn}) => {
    const [click, setClick]= useState(false);
    return(
        <ButtonWrapper click={click} onClick={()=>{callBackFn()}} onMouseDown={()=>{setClick(true);}} onMouseUp={()=>{setClick(false)}}>
            {text}
        </ButtonWrapper>
    );
}

export default Button;
