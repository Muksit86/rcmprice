import React from 'react';
import { LuPhone, LuMail, LuMapPin } from 'react-icons/lu';
import { CiLocationOn } from "react-icons/ci";
import { FaStore, FaCode } from 'react-icons/fa';

const About = () => {
    return (
        <div className="min-h-screen bg-white pt-20 pb-12 px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold bg-black from-blue-600 via-cyan-600 to-green-600 bg-clip-text text-transparent mb-4'>
                        About Us
                    </h1>
                    <div className="h-1 w-24 bg-black from-blue-600 to-green-600 mx-auto rounded-full mb-8"></div>
                    <p className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mb-2'>RCM World</p>
                </div>

                {/* Sponsor Section */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:p-12 border border-white/20 hover:shadow-3xl">
                        <div className="flex items-center justify-center mb-6">
                            <FaStore className="text-5xl text-blue-600 mr-4" />
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Sponsored by</h2>
                        </div>
                        <p className='text-3xl sm:text-4xl font-bold bg-black from-blue-600 to-green-600 bg-clip-text text-transparent text-center mb-8'>
                            Noor Enterprize
                        </p>

                        {/* Location Card */}
                        <div className='bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 sm:p-8 mb-6 hover:shadow-lg'>
                            <div className='flex items-start justify-center gap-3 mb-3'>
                                <LuMapPin className="text-3xl text-blue-600 mt-1 flex-shrink-0" />
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Location</h3>
                                    <p className='text-base sm:text-lg text-gray-700 leading-relaxed'>
                                        RCM WWQ, UTTAR DARIAPUR<br />
                                        (Infront of Kalimia Madrasha)<br />
                                        West Bengal
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Button */}
                        <a
                            href="tel:8250451178"
                            className='group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary from-blue-600 to-cyan-600 text-black text-xl font-semibold rounded-xl shadow-lg hover:shadow-2xl w-full sm:w-auto mx-auto'
                        >
                            <LuPhone color='white' className="text-2xl" />
                            <span className='text-white'>8250451178</span>
                        </a>
                    </div>
                </div>

                {/* Developer Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="border-black border-2 rounded-3xl shadow-2xl flex flex-col gap-8 p-4 sm:p-12 hover:shadow-3xl">
                        <div className="text-xs flex items-center justify-center gap-3">
                            <FaCode className="text-cyan-400" />
                            <h2 className="font-bold text-black">Developed by</h2>
                        </div>

                        <div className="flex flex-col text-center gap-2">
                            <p className='text-3xl sm:text-4xl font-bold bg-black bg-clip-text text-transparent'>
                                XeroCorp
                            </p>
                            <p className='text-xl sm:text-2xl text-black'>
                                Abdul Muksit
                            </p>

                            <div className='bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 inline-block'>
                                <a
                                    href="tel:7872377782"
                                    className='group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-500 from-blue-600 to-cyan-600 text-black text-xl font-semibold rounded-xl shadow-lg hover:shadow-2xl w-full sm:w-auto mx-auto'
                                >
                                    <LuPhone color='white' className="text-2xl" />
                                    <span className='text-white'>7872377782</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
