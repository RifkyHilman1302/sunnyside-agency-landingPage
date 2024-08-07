import Profile1 from '../../assets/image-emily.jpg'
import Profile2 from '../../assets/image-jennie.jpg'
import Profile3 from '../../assets/image-thomas.jpg'

export default function ContentCard() {
    return (
        <div className='contentCard flex flex-col items-center justify-center gap-3'>
            <p className='font-fraunces text-gray-400 -tracking-tighter'>CLIENT TESTIMONIALS</p>
            <div className='Card grid grid-cols-1 sm:grid-cols-3  w-10/12 gap-6'>
                <div className='flex flex-col justify-center items-center gap-10 bg-white'>
                    <img 
                        src={Profile1} 
                        alt="" 
                        className='w-14 h-14 rounded-full'
                    />
                    <p className='text-center'>
                        We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                    </p>
                    <div className='flex flex-col items-center gap-1'>
                        <p className='font-barlow text-md'>Emile R.</p>
                        <p className='text-sm font-bold text-gray-400'> Marketing Director</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-10 bg-white'>
                    <img 
                        src={Profile2} 
                        alt="" 
                        className='w-14 h-14 rounded-full'
                    />
                    <p className='text-center'>
                    Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience. 
                    </p>
                    <div className='flex flex-col items-center gap-1'>
                        <p className='font-barlow text-md'>Thomas S.</p>
                        <p className='text-sm font-bold text-gray-400'>  Chief Operating Officer</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-10 bg-white'>
                    <img 
                        src={Profile3} 
                        alt="" 
                        className='w-14 h-14 rounded-full'
                    />
                    <p className='text-center'>
                    Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
                    </p>
                    <div className='flex flex-col items-center gap-1'>
                        <p className='font-barlow text-md'>Jennie F.</p>
                        <p className='text-sm font-bold text-gray-400'> Business Owner</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
