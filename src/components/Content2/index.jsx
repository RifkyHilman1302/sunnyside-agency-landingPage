import img from '../../assets/desktop/image-stand-out.jpg'

export default function Content2() {
    return (
        <div className='content w-full flex sm:flex-row flex-col justify-between '>
            <div className='content2 w-full'>
                <img 
                    src={img} 
                    alt="" 
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='content2 flex items-center flex-col justify-center w-full h-full font-fraunces gap-3'>
                <p className='text-3xl text-very-dark-desaturated-blue w-2/3'>
                Stand out to the right audience
                </p>
                <p className='text-md text-dark-grayish-blue font-extralight font-barlow w-2/3'>
                    Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
                </p>
                <div className='flex items-center w-2/3 mt-3'>
                    <button className='font-fraunces border-b-4 border-transparent hover:border-grayish-blue'>
                        LEARN MORE
                    </button>
                </div>
            </div>
        </div>
    )
}
