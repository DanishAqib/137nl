import React from 'react';
import { PageLoader } from './common/PageLoader';
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700', '800', '900'] })

const WithLayout = ({ 
    component: Component,
    layout: Layout,
    className,
    ...rest
 }) => (
    <div className={`${className} ${poppins.className}`}>
        <PageLoader />
        <Layout {...rest}>
            <Component {...rest} />
        </Layout>
    </div>
)

export default WithLayout;