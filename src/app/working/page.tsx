'use client'

import BlurText from '@/animations/TextAnimations/BlurText/BlurText';

const Working = () => {
    return <>
        <div className="relative w-full overflow-hidden">
            <div className="bg-neutral-200 w-full h-[93.3vh] border border-neutral-300 rounded-[0.5em]">
                <BlurText
                    text="Working on it..."
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-8xl font-bold text-neutral-600 absolute top-[25rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{ fontFamily: 'Compressa VF' }} animationFrom={undefined} animationTo={undefined} onAnimationComplete={undefined} />
            </div>
        </div>
    </>
}

export default Working;