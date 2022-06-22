import React from 'react'

function Banner() {
    return (
        <div>

                {/* <!-- Background image --> */}
                <div
                    className="p-5 h-[300px] lg:h-[800px] text-center bg-image"
                    style={{backgroundImage: "url('https://i.ibb.co/m6mpWhN/829012.webp')", backgroundSize: 'cover'}}

                >
                    <div className="mask h-full" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                        <div className="flex justify-center items-center h-full">
                            <div className="text-white">
                                <h1 className="mb-3">Heading</h1>
                                <h4 className="mb-3">Subheading</h4>
                                <a className="btn btn-outline-light btn-lg" href="#!" role="button"
                                >Call to action</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
       
        </div >
    )
}

export default Banner
