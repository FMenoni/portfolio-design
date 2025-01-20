'use client'

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation'
import { NeatGradient } from "@firecms/neat";
import { neatConfig } from '@/animations/neat.config';
import TextPressure from "@/animations/TextAnimations/TextPressure/TextPressure";
import '@/styles/home.css'

export default function Home() {
  const gradientRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (gradientRef.current) {
      const neat = new NeatGradient({
        ref: gradientRef.current,
        ...neatConfig
      });

      return () => {
        neat.destroy();
      };
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <canvas
        ref={gradientRef}
        className="inset-0 w-full h-[calc(100vh-63px)] z-40 rounded-[0.5em] border border-neutral-300"
      />

      <div className="absolute z-50 left-1/2 top-[25em] transform -translate-x-1/2 -translate-y-1/2" onClick={() => router.push('/about')}>
        <TextPressure
          text="Fabian Menoni"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={256}
          className='cursor-default'
        />
      </div>
    </div>
  );
}
