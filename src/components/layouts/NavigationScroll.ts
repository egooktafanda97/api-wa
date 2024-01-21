import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import {useRouter, usePathname} from 'next/navigation'

// ==============================|| NAVIGATION SCROLL TO TOP ||============================== //
interface chid {
    children: React.ReactNode
}

const NavigationScroll = ({children}: chid) => {
    const pathname = usePathname();


    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [pathname]);

    return children || null;
};

NavigationScroll.propTypes = {
    children: PropTypes.node
};

export default NavigationScroll;
