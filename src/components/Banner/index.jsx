import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Banner() {
    return (
        <div className='banner w-full flex  flex-col items-center  gap-10 '>
            <p className="text-3xl sm:text-5xl font-fraunces -tracking-tighter text-white mt-32">
                WE ARE CREATIVES
            </p>
            <FontAwesomeIcon 
                icon={faArrowDown} 
                className="text-white text-5xl"
            />
        </div>
    )
}
