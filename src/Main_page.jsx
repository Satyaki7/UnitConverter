import UnitConverter from "./components/UnitConverter";
import FaultyTerminal from "./component/FaultyTerminal";

export default function Main_page() {
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
          <FaultyTerminal
    scale={1.5}
    gridMul={[2, 1]}
    digitSize={1.2}
    timeScale={1}
    pause={false}
    scanlineIntensity={1}
    glitchAmount={1}
    flickerAmount={1}
    noiseAmp={1}
    chromaticAberration={0}
    dither={0}
    curvature={0}
    tint="#ffffff"
    mouseReact={true}
    mouseStrength={0.5}
    pageLoadAnimation={false}
    brightness={1}
  />
      </div>
      <div className="relative z-10 h-full w-full flex justify-center items-center pointer-events-none">
        <div className="md:w-[60%] w-[80%] pointer-events-auto">
          <UnitConverter />
        </div>
      </div>

    </section>
  );
}
