import { FC } from "react";


interface Props {
    color?: string;
}

const LeftArrow: FC<Props> = ({ color = '#E0E0E0' }) => {

    return (
        <svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 11L2 11M2 11L11.0435 20M2 11L11.0435 2" stroke={color} strokeWidth="2" strokeLinecap="square" />
        </svg>
    )
}
export default LeftArrow;