import { MapPin } from "lucide-react";

export default function AboutMe() {
    return (

        <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-[#f0f5ef]">
            <div className="md:w-3/5">
                <h1 className="text-5xl font-bold mb-2">Hi, I’m Ben</h1>
                <h2 className="text-gray-400 text-xl mb-4">Creator, Artist, Software Developer</h2>
                <p className="mb-4 text-gray-700">
                I recently graduated from the University of Guelph after completing my
                bachelors in software engineering.
                </p>
                <p className="mb-6 text-gray-700">
                Regardless of the medium, creation is my passion—through code, art,
                games, or otherwise I love to dive in and get my hands dirty.
                </p>
                <div className="flex items-center gap-2 text-gray-800">
                <MapPin size={20} />
                <span>Guelph ON, Canada</span>
                </div>
            </div>

            <div className="md:w-2/5 flex justify-center mt-8 md:mt-0 relative">
                <div className="relative w-60 h-60 rounded-full overflow-hidden border-r-8 border-b-8 border-green-800 shadow-lg">
                <img
                    src="images/Ben PFP.jpg"
                    alt="Ben"
                    className="w-full h-full object-cover"
                />
                </div>
                {/* Decorative elements could be SVG or divs positioned around the image */}
                <div className="absolute bottom-0 left-75 p-30 w-screen -z-10 rotate-285 stripe">
                </div>
                <div className="absolute bottom-0 left-25 p-5 w-screen -z-10 rotate-285 stripe">
                </div>
            </div>            
        </div>
    );  
}