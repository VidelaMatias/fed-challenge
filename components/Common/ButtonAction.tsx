'use client'
import { FC } from "react";

interface Props {
    classname:string;
    onClickHandler:any
}

const ButtonAction : FC<Props> = ({classname, onClickHandler }) => {
    return (
        <button className={`${classname}`} onClick={onClickHandler}>Call to action</button>
    )
}
export default ButtonAction;