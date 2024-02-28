import Image from "next/image";
import hero1 from './../../public/images/pexels-tanathip-rattanatum-2026324-1.png';
import ExpandCard from "./expand-card";
const Hero = () => {

    return (
        <div className="relative">
            <Image src={hero1} alt={'Hero Image'} objectFit="cover" className="max-h-[700px]"></Image>
            <ExpandCard/>
        </div>
    )
}
export default Hero;