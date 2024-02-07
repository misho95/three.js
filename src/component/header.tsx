import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

const Header = () => {
  const animatedHeader = useSpring({
    from: { top: "-100%" },
    to: { top: "0" },
  });

  const [show, setShow] = useState(false);

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
          Moon
        </button>
        {show && (
          <div className="absolute top-[50px] flex flex-col gap-[3px] font-mono text-[20px]">
            <span className="cursor-pointer">Mars</span>
            <span className="cursor-pointer">Earth</span>
          </div>
        )}
      </div>
    </animated.header>
  );
};

export default Header;
