"use client";

import Link from "next/link";
import Image from "next/image";

export default function EnterpriseScaleSection() {
    return (

        <section className="relative mx-auto  max-w-7xl text-white py-24 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden">
            <div className="w-full md:w-1/2 space-y-6 z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                    <span className="text-white">Solutions that scale</span>
                </h2>

                <p className=" text-lg max-w-xl">
                    As a leader in multilingual voice transcription, Lingoscribe empowers organizations and communities by converting audio into accurate text — even in the world’s most underserved and indigenous languages — securely, responsibly, and at scale.
                </p>


                <Link href="#">
                    <div className="relative group w-fit">
                        <div className="absolute inset-0 rounded-md border border-transparent group-hover:border-green-400 transition duration-300" />
                        <div className="absolute -inset-1.5 bg-green-400 blur-xl opacity-20 group-hover:opacity-40 rounded-md transition duration-500 animate-glow-slow" />
                        <a 
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            href="#contact" 
                            className="relative z-10 px-6 py-3 bg-black border border-green-500 text-white rounded-md text-sm font-semibold transition duration-300 hover:bg-neutral-900 cursor-pointer"
                        >
                            View Enterprise Solutions
                        </a>
                    </div>
                </Link>
            </div>


            <div className="w-full md:w-1/2 flex justify-center items-center relative z-10">

                <div className="w-[400px] h-[300px] bg-[#111827] rounded-xl border border-gray-700 shadow-xl flex items-center justify-center text-gray-500 text-sm">

                    <Image
                        src="/images/image.webp"
                        alt="3D stack illustration"
                        width={600}
                        height={400}
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
