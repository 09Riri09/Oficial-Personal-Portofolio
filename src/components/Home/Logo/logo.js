import "./logo.scss";
import raresdev from "../../../assets/images/raresdev.png";
import raresdevlines from "../../../assets/images/raresdevlines.svg";
import { useRef } from "react";
import { gsap } from "gsap-trial";
import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";
import { useEffect } from "react";

function Logo() {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 1,
      });

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    );
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        ref={solidLogoRef}
        className="solid-logo"
        src={raresdev}
        alt="rares"
      />

      <svg
        width="2666.7"
        height="2666.7"
        version="1.1"
        viewBox="0 0 2666.7 2666.7"
        
        
      >
        <path
          d="m658.19 971.75s40.96-117.23 151.13-214.69c110.17-97.458 192.09-120.06 192.09-120.06s38.136-26.836 146.89-45.198c108.76-18.362 211.86 1.4124 211.86 1.4124s139.83 16.949 298.02 132.77c158.19 115.82 210.45 307.91 207.63 298.02-2.8249-9.887 48.023 118.64 31.073 296.61-16.949 177.97-144.07 326.27-144.07 326.27s-83.333 107.34-213.28 169.49-207.63 62.147-207.63 62.147-204.8 48.023-437.85-100.28c-233.05-148.3-283.9-425.14-283.9-425.14l-8.4746-110.17s-5.6497-90.396 16.949-153.95 16.949-59.322 16.949-59.322z"
          fill="none"
          stroke="#1b1717"
          stroke-width="5"
        />
        <path
          d="m973.16 1353.1v-473.16l367.23 2.8249-248.59 227.4 94.633 39.548z"
          fill="none"
          stroke="#1b1717"
          stroke-width="5"
        />
        <path
          d="m973.16 1392.7 423.73-283.9-91.808-33.898 196.33-135.59s43.785 29.661 56.497 72.034c12.712 42.373 15.537 81.921 15.537 81.921s2.8248 56.497-4.2373 73.446c-7.0622 16.949-1.4124 14.124-1.4124 14.124l-11.3 32.486s-1.4124 4.2373-4.2373 9.887c-2.8248 5.6497 0 4.2373-11.299 16.949-11.299 12.712-16.949 18.362-16.949 18.362l-26.836 25.424-31.074 19.774-28.248 16.949 162.43 235.88-220.34 1.4125-135.59-201.98-86.158-2.8248 4.2373 203.39-187.85-1.4124z"
          fill="none"
          stroke="#1b1717"
          stroke-width="5"
        />
      </svg>
    </div>
  );
}

export default Logo;
