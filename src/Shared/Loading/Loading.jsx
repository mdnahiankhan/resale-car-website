import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center max-w-[1440px] mx-auto mt-10'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </div>
    );
};

export default Loading;