import img from '../../assets/desktop/image-transform.jpg'

export default function Content() {
    return (
        <div className='content w-full flex sm:flex-row flex-col-reverse  justify-between '>
            <div className='content2 flex items-center flex-col justify-center w-full h-full font-fraunces gap-3'>
                <p className='text-3xl text-very-dark-desaturated-blue w-2/3'>Transform your brand</p>
                <p className='text-md text-dark-grayish-blue font-extralight font-barlow w-2/3'>
                    We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
                </p>
                <div className='flex items-center w-2/3 mt-3'>
                    <button className='font-fraunces border-b-4 border-transparent hover:border-yellow'>
                        LEARN MORE
                    </button>
                </div>
            </div>
            <div className='content2 w-full'>
                <img 
                    src={img} 
                    alt="" 
                    className='w-full h-full object-cover'
                />
            </div>
        </div>
    )
}
