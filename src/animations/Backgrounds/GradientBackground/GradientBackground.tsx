import { NeatConfig, NeatGradient } from "@firecms/neat";

// Define your config
export const config: NeatConfig = {
    colors: [
        {
            color: '#cdb4db',
            enabled: true,
        },
        {
            color: '#ffc8dd',
            enabled: true,
        },
        {
            color: '#ffafcc',
            enabled: true,
        },
        {
            color: '#bde0fe',
            enabled: true,
        },
        {
            color: '#a2d2ff',
            enabled: false,
        },
    ],
    speed: 4,
    horizontalPressure: 4,
    verticalPressure: 6,
    waveFrequencyX: 2,
    waveFrequencyY: 4,
    waveAmplitude: 6,
    shadows: 0,
    highlights: 4,
    colorBrightness: 1,
    colorSaturation: 3,
    wireframe: false,
    colorBlending: 5,
    backgroundColor: '#003FFF',
    backgroundAlpha: 1,
    grainScale: 0,
    grainIntensity: 0,
    grainSpeed: 0,
    resolution: 1,
};


// define an element with id="gradient" in your html
const gradientElement = document.getElementById("gradient") as HTMLCanvasElement | null;
if (gradientElement) {
    const neat = new NeatGradient({
        ref: gradientElement,
        ...config
    });

    // you can change the config at any time
    neat.speed = 6;

    // you can also destroy the gradient for cleanup
    // e.g. returning from a useEffect hook in React
    neat.destroy();
}