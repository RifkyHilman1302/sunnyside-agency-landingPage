import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
    return (
        <div className='footer w-full  flex flex-col gap-8 items-center justify-center  bg-dark-moderate-cyan text-dark-desaturated-cyan'>
            <p className=' text-4xl font-barlow '>sunnyside</p>
            <div className='flex items-center gap-10 text-lg font-semibold  '>
                <p>Home</p>
                <p>Services</p>
                <p>Profile</p>
            </div>
            <div className='flex items-center justify-center gap-3 text-md '>
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faGithub} />
            </div>
        </div>
    )
}
