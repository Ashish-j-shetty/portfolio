import React from "react";
import Particles from "react-tsparticles";

import BootstrapIcon from "../../assets/icons/bootstrap-icon.svg";
import CssIcon from "../../assets/icons/css-icon.svg";

import HtmlIcon from "../../assets/icons/html-icon.svg";
import TailwindIcon from "../../assets/icons/tailwindcss-icon.svg";
import NodeIcon from "../../assets/icons/node-icon.svg";
import ReactIcon from "../../assets/icons/react-icon.svg";

import JsIcon from "../../assets/icons/js-icon.svg";
import TypescriptIcon from "../../assets/icons/typescript-icon.svg";
import VscodeIcon from "../../assets/icons/vscode-icon.svg";
import SassIcon from "../../assets/icons/sass-icon.svg";
import GitHubIcon from "../../assets/icons/github-icon.svg";
import GraphqlIcon from "../../assets/icons/graphql-icon.svg";

export default function Main() {
  return (
    <main className="relative z-0 py-0 px-36  overflow-x-hidden ">
      <Particles
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          detectRetina: true,
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onDiv: {
                elementId: "repulse-div",
                enable: false,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 2,
              },
              connect: {
                distance: 80,
                lineLinked: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance: 400,
                lineLinked: {
                  opacity: 1,
                },
              },
              push: {
                quantity: 2,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            lineLinked: {
              blink: false,
              color: "#000",
              consent: false,
              distance: 150,
              enable: false,
              opacity: 0.4,
              width: 1,
            },
            move: {
              attract: {
                enable: false,
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              bounce: false,
              direction: "none",
              enable: true,
              outMode: "out",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              limit: 20,
              value: 15,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.2,
                speed: 1,
                sync: false,
              },
              random: true,
              value: 1,
            },
            rotate: {
              animation: {
                enable: true,
                speed: 5,
                sync: false,
              },
              direction: "random",
              random: true,
              value: 0,
            },
            shape: {
              character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
              },
              image: [
                {
                  src: BootstrapIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: CssIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: HtmlIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: NodeIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: TailwindIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: ReactIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: JsIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: TypescriptIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: VscodeIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: GitHubIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: SassIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: GraphqlIcon,
                  width: 20,
                  height: 20,
                },
              ],
              polygon: {
                sides: 5,
              },
              stroke: {
                color: "#000000",
                width: 0,
              },
              type: "image",
            },
            size: {
              animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 40,
                sync: false,
              },
              random: false,
              value: 16,
            },
          },
          polygon: {
            draw: {
              enable: false,
              lineColor: "#ffffff",
              lineWidth: 0.5,
            },
            move: {
              radius: 10,
            },
            scale: 1,
            url: "",
          },
          background: {
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />
    </main>
  );
}
