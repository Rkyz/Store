import React, { useEffect } from 'react';
import { gsap, Power0, TimelineMax } from 'gsap';

const WaveAnimation = () => {
  useEffect(() => {
    const waveTl = new TimelineMax({ repeat: -1, yoyo: true });

    waveTl.to('#wave1', {
      duration: 2,
      attr: {
        d:
          'M0,224 C160,224 320,128 480,192 C640,256 800,96 960,160 C1120,224 1280,288 1440,224 L1440,320 L0,320 Z',
      },
      ease: Power0.easeNone,
    });

    waveTl.to(
      '#wave2',
      {
        duration: 2,
        attr: {
          d:
            'M0,192 C160,192 320,96 480,160 C640,224 800,64 960,128 C1120,192 1280,256 1440,192 L1440,320 L0,320 Z',
        },
        ease: Power0.easeNone,
      },
      '-=2'
    );

    waveTl.to(
      '#wave3',
      {
        duration: 2,
        attr: {
          d:
            'M0,160 C160,160 320,64 480,128 C640,192 800,32 960,96 C1120,160 1280,224 1440,160 L1440,320 L0,320 Z',
        },
        ease: Power0.easeNone,
      },
      '-=2'
    );

    // Repeat the animation indefinitely

    return () => {
      waveTl.kill(); // Clean up the animation when the component unmounts
    };
  }, []);

  return (
    <div className="relative h-24 w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 z-0"
        preserveAspectRatio="none"
      >
        {/* Ombak 1 */}
        <path
          fill="#3498db"
          fillOpacity="1"
          d="M0,224 C160,224 320,128 480,192 C640,256 800,96 960,160 C1120,224 1280,288 1440,224 L1440,320 L0,320 Z"
          id="wave1"
        ></path>
        {/* Ombak 2 */}
        <path
          fill="#3498db"
          fillOpacity="1"
          d="M0,192 C160,192 320,96 480,160 C640,224 800,64 960,128 C1120,192 1280,256 1440,192 L1440,320 L0,320 Z"
          id="wave2"
        ></path>
        {/* Ombak 3 */}
        <path
          fill="#3498db"
          fillOpacity="1"
          d="M0,160 C160,160 320,64 480,128 C640,192 800,32 960,96 C1120,160 1280,224 1440,160 L1440,320 L0,320 Z"
          id="wave3"
        ></path>
      </svg>
      <div className="z-10 relative text-white text-center font-semibold pt-5">
        {/* Konten Anda di sini */}
      </div>
    </div>
  );
};

export default WaveAnimation;
