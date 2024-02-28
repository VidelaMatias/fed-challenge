import { FC } from "react";

interface Props {
    color?: string;
}

const RightArrow: FC<Props> = ({ color = '#E0E0E0' }) => {

    return (
        <svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 11L27 11M27 11L17.9565 2M27 11L17.9565 20" stroke={color} strokeWidth="2" strokeLinecap="square" />
        </svg>
    )
}
export default RightArrow;