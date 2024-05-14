import * as React from "react";
import { SVGProps } from "react";

const SuspenseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24.77 24.9"
    fill="currentColor"
    {...props}
  >
    <g data-name="Layer 2">
      <g data-name="Layer 1">
        <path
          d="m10.55 7.37 7 7-1.83 1.83-7-7 1.83-1.83ZM6.46 22.9A3.16 3.16 0 1 1 2 18.44l8-8 4.46 4.47-8 8ZM1.93 22.96.49 24.41M12.38 7l1.7 1.2m3 2.13 1.71 1.2m-.95-10 1.7 1.2m3 2.13 1.7 1.2M16 3.38l1.7 1.21m3 2.13 1.71 1.2M14.2 5.21l1.71 1.2m3 2.13 1.7 1.2"
          style={{
            strokeWidth: ".4px",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            stroke: "currentColor",
          }}
        />
        <path
          d="m20.62.49 3.65 3.65-8.48 8.48-3.65-3.66L20.62.49h0z"
          style={{
            strokeWidth: ".4px",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            stroke: "#1557ff",
          }}
        />
      </g>
    </g>
  </svg>
);

export default SuspenseIcon;
