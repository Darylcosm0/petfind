import React from "react";

function Home() {
  return (
    <home className='bg-green-400 relative'>
            
            <div className="px-10 md:px-16 lg:px-24 flex flex-col md:flex-row items-center text-slate-50">
                <div className="w-full mt-4 lg:mt-0 lg:basis-1/2">
                    <h1 className="text-4xl lg:text-7xl font-white">
                        HELLO PET LOVERS😍 
                    </h1>
                    <p className="text-green-100 mt-4 text-lg">An online platform to search for animals who need homes. A directory of animal shelters and adoption organizations in Canada. </p>
                </div>
                <div className="w-100 lg:basis-1/2">
                    <img className="mx-auto max-w-[75%] sm:max-w-[auto]"  alt='A dog looking up' />
                </div>
            </div>
                
            

        </home>
    );
}

export default Home;
