import React from 'react'

export default function Content3() {
    return (
        <div className='content  w-full sm:grid-cols-2 grid-cols-1 grid'>
            <div className="content3-first flex flex-col items-center justify-end">
                <div className='p-5 flex-col items-center flex gap-3'>
                    <p className='text-2xl font-fraunces font-extralight'>Graphic Design</p>
                    <p className='w-3/4 text-center text-sm text-very-dark-desaturated-blue font-extralight font-barlow'>
                    Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
                    </p>
                </div>
            </div>
            <div className="content3-second flex flex-col items-center justify-end">
                <div className='p-5 flex-col items-center flex gap-3'>
                    <p className='text-2xl font-fraunces font-extralight'>Photography</p>
                    <p className='w-3/4 text-center text-sm text-very-dark-desaturated-blue font-extralight font-barlow'>
                    Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                    </p>
                </div>
            </div>
        </div>
    )
}
