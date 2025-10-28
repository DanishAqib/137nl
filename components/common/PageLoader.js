import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
// import { LOGOS } from '@/shared/constants';

export const PageLoader = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [animateOut, setAnimateOut] = useState(false);

    useEffect(() => {
        const handleRouteChangeStart = () => {
            setLoading(true);
            setAnimateOut(false);
        };
        const handleRouteChangeComplete = () => {
            setAnimateOut(true);
            setTimeout(() => setLoading(false), 500); // 500ms for the animation to complete
        };

        router.events.on('routeChangeStart', handleRouteChangeStart);
        router.events.on('routeChangeComplete', handleRouteChangeComplete);
        router.events.on('routeChangeError', handleRouteChangeComplete);

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart);
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
            router.events.off('routeChangeError', handleRouteChangeComplete);
        }
    }, [router]);

    return (
        <>
            {loading && (
                <div className={`z-[100] fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center transition-opacity duration-500 ${animateOut ? 'opacity-0' : 'opacity-100'}`}>
                    {/* <Image 
                        src={LOGOS.appLogo} 
                        alt="NowHow Logo" 
                        width={200} 
                        height={200} 
                        className="sm:w-32 w-10 h-auto animate-spin"
                        quality={100} 
                    /> */}
                </div>
            )}
        </>
    )
}
