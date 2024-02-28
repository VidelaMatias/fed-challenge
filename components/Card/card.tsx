'use client';
import React, { FC } from "react";

import Image from "next/image";
import ButtonAction from "../Common/ButtonAction";
import notImage from './../../public/images/notimage.jpg'
interface Props {
    image: string;
    title:string,
    actionURL: string,
    description: string
}

const Card: FC<Props> = ({ title, image, actionURL, description }) => {

    const onClickHandler = () => {
        console.log('calling action: ' + actionURL);
    }

    return (
        <div className="h-[25rem] w-[24rem]  p-3 m-4 inline">
            <Image src={image ? image : notImage} width="380" height={282} alt="image " className="w-full max-h-72 rounded-lg"  />
            <hr className="w-full border-t-2 my-4"></hr>
            <h1 className="font-bold text-xl  text-primaryGray">{title}</h1>
            <span className="font-normal text-sm text-secondaryGray">{description}</span>
            <ButtonAction onClickHandler={onClickHandler} classname={"underline text-primaryBlue border-none font-medium text-start my-3 block"}/>
        </div>
    )
}

export default Card;