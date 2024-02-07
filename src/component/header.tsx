import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import { PlanetType, useDark, usePlanet } from "../utils/global.store";

const Header = () => {
  const animatedHeader = useSpring({
    from: { top: "-100%" },
    to: { top: "0" },
  });

  const planetsList = [
    {
      id: 1,
      value: "moon",
    },
    {
      id: 2,
      value: "mars",
    },
    {
      id: 3,
      value: "earth",
    },
  ];

  const [show, setShow] = useState(false);
  const { dark, setDark } = useDark();
  const { planet, setPlanet } = usePlanet();

  return (
    <animated.header
      style={{ ...animatedHeader }}
      className="fixed top-0 w-full p-[30px] text-white z-50 flex justify-between"
    >
      <div className="relative w-fit h-fit">
        <button
          onClick={() => setShow(!show)}
          className="font-bold font-mono text-[28px]"
        >
          {planet.toUpperCase()}
        </button>
        {show && (
          <div className="absolute top-[50px] flex flex-col gap-[3px] font-mono text-[20px]">
            {planetsList.map((p) => {
              return (
                <span
                  onClick={() => {
                    setPlanet(p.value as PlanetType), setShow(false);
                  }}
                  className="cursor-pointer"
                >
                  {p.value.toUpperCase()}
                </span>
              );
            })}
          </div>
        )}
      </div>
      {planet === "earth" && (
        <button
          onClick={() => setDark()}
          className="font-bold font-mono text-[28px]"
        >
          {dark ? "DAY" : "NIGHT"}
        </button>
      )}
    </animated.header>
  );
};

export default Header;
