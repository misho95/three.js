import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import { usePlanet } from "../utils/global.store";

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
  ];

  const [show, setShow] = useState(false);
  const { planet, setPlanet } = usePlanet();

  return (
    <animated.header
      style={{ ...animatedHeader }}
      className="fixed top-0 w-full p-[30px] text-white z-50"
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
                    setPlanet(p.value), setShow(false);
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
    </animated.header>
  );
};

export default Header;
