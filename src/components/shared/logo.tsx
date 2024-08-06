import { ComponentPropsWithoutRef } from "react";

export interface LogoProps extends ComponentPropsWithoutRef<"svg"> {}

export const Logo = (props: LogoProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" {...props}>
      <path
        id="Background"
        d="M0 0h1024v1024H0z"
        style={{ fill: "transparent" }}
      />
      <g id="Icon">
        <path
          d="M171 282.8c-18.5 0-33.5 15-33.5 33.5s15 33.5 33.5 33.5 33.5-15 33.5-33.5-15-33.5-33.5-33.5zM315.7 205.1c18.5 0 33.5-15 33.5-33.5s-15-33.5-33.5-33.5-33.5 15-33.5 33.5c.1 18.5 15.1 33.5 33.5 33.5z"
          style={{ fill: "#00aa58" }}
        />
        <circle cx="903" cy="512" r="33.5" style={{ fill: "#00aa58" }} />
        <path
          d="M852 674.3c-18.5 0-33.5 15-33.5 33.5s15 33.5 33.5 33.5 33.5-15 33.5-33.5c-.1-18.5-15.1-33.5-33.5-33.5zM707.3 819c-18.5 0-33.5 15-33.5 33.5s15 33.5 33.5 33.5 33.5-15 33.5-33.5c-.1-18.5-15.1-33.5-33.5-33.5zM511.5 870.1c-18.5 0-33.5 15-33.5 33.5s15 33.5 33.5 33.5 33.5-15 33.5-33.5-15-33.5-33.5-33.5zM315.7 819c-18.5 0-33.5 15-33.5 33.5s15 33.5 33.5 33.5 33.5-15 33.5-33.5-15-33.5-33.5-33.5zM171 674.3c-18.5 0-33.5 15-33.5 33.5s15 33.5 33.5 33.5 33.5-15 33.5-33.5-15-33.5-33.5-33.5z"
          style={{ fill: "#00aa58" }}
        />
        <circle cx="120" cy="512" r="33.5" style={{ fill: "#00aa58" }} />
        <path
          d="M645.2 463.4 521 463c-9.3 0-16.6-8-15.8-17.3l15-167.9c0-10-6.7-18.4-16.4-20.6-9.7-2.2-19.4 2.6-23.6 11.6l-129.9 279c-3 6.5-2.5 14.1 1.3 20.1 3.9 6.1 10.5 9.7 17.7 9.7l124.2.4c9.3 0 16.6 8 15.8 17.3l-15 167.9c0 9.9 6.7 18.4 16.4 20.6 1.6.3 3.1.5 4.7.5 8.2 0 15.4-4.7 18.9-12.2l129.9-279c3-6.5 2.6-14.1-1.3-20.1-3.9-6-10.5-9.6-17.7-9.6z"
          style={{ fill: "currentColor" }}
        />
        <path
          d="M849.4 347.7c5.9 0 11.8-1.6 16.9-4.6 7.7-4.5 13.2-11.8 15.5-20.4 2.3-8.6 1-17.7-3.5-25.4C802.2 167.6 661.7 87 511.5 87 493 87 478 102 478 120.5s15 33.5 33.5 33.5c126.5 0 244.9 67.9 309 177.2 6 10.2 17.1 16.5 28.9 16.5z"
          style={{ fill: "#00aa58" }}
        />
      </g>
    </svg>
  );
};