'use client';

import { motion, useScroll } from 'motion/react';

export default function ScrollIndicator() {
    const { scrollYProgress } = useScroll();
    // smooth scrollX
    /* const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    }); */

    return (
        <motion.div
            id="scroll-indicator"
            style={{
                zIndex: 100,
                scaleX: scrollYProgress,
                position: 'fixed',
                borderTopRightRadius: '100px',
                borderBottomRightRadius: '100px',
                top: 0,
                left: 0,
                right: 0,
                height: 5,
                originX: 0,
                backgroundColor: '#925FE2',
            }}
        />
    );
}
