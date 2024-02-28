'use client';
import Image from "next/image";
import arrowExpanded from './../../public/icons/arrow.png'
import arrowCollapsed from './../../public/icons/arrowCollapsed.png'
import { useState } from "react";
import ButtonAction from "../Common/ButtonAction";

const ExpandCard = () => {

    const [expanded, setExpand] = useState(false);

    const expandToggle = () => {
        setExpand(!expanded);
    }

    const onClickHandler = () => {
        console.log('calling action: ');
    }

    return (
        <div className="bg-white laptop:rounded-tr-md flex flex-row items-start p-9 justify-center gap-2 h-auto laptop:max-h-[22rem] w-full laptop:w-[37.875rem] relative laptop:absolute bottom-0">
            <div className="flex flex-col align-center justify-center">
                <h3 className="text-[#9E9E9E] font-bold text-xs pb-3">LOREM IPSUM</h3>
                <h1 className="text-[2.5rem] font-bold leading-9">Lorem ipsum dolor sit amet, consectetur</h1>
                {
                    expanded && (
                        <>
                            <hr className="my-3 block border-t-2 w-[7.5rem] text-primaryBlue"></hr>
                            <p className="text-secondaryGray text-base leading-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna.
                            </p>
                            <ButtonAction onClickHandler={onClickHandler} classname={"text-white bg-primaryBlue h-12 laptop:w-36 w-full text-center my-4"}></ButtonAction>
                        </>
                    )
                }
            </div>
            <button onClick={expandToggle}>
                {
                    expanded ?
                        <Image src={arrowExpanded} alt="expanded" className="w-5"></Image>
                        :
                        <Image src={arrowCollapsed} alt="collapsed" className="w-5"></Image>
                }
            </button>
        </div>
    )
}

export default ExpandCard;