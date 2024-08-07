import img1 from '../../assets/desktop/image-gallery-milkbottles.jpg'
import img2 from '../../assets/desktop/image-gallery-orange.jpg'
import img3 from '../../assets/desktop/image-gallery-cone.jpg'
import img4 from '../../assets/desktop/image-gallery-sugarcubes.jpg'

export default function Content4() {
    return (
        <div className='content4 w-full bg-black grid grid-cols-2 sm:grid-cols-4'>
            <img 
                src={img1}
                alt="" 
                className='object-cover w-full h-full content-image'
            />
            <img 
                src={img2}
                alt="" 
                className='object-cover w-full h-full content-image'
            />
            <img 
                src={img3}
                alt="" 
                className='object-cover w-full h-full content-image'
            />
            <img 
                src={img4}
                alt="" 
                className='object-cover w-full h-full content-image'
            />
        </div>
    )
}
