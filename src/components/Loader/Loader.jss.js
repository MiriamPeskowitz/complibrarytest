const styles = {
  spinner: {
    "& svg": {
      animation: "rotator 1.4s linear infinite",
      width: "100%",
      height: "100%"
    },
    "& circle": {
      strokeDasharray: 187,
      strokeDashoffset: 0,
      transformOrigin: "center",
      strokeWidth: "6px",
      strokeLinecap: "round",
      animation:
        "dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite"
    }
  },
  "@global": {
    "@keyframes rotator": {
      "0%": {
        transform: "rotate(0deg)"
      },
      "100%": {
        transform: "rotate(270deg)"
      }
    },
    "@keyframes colors": {
      "0%": {
        stroke: "#152e5f"
      },
      "25%": {
        stroke: "#1b4c8d"
      },
      "50%": {
        stroke: "#2071bd"
      },
      "75%": {
        stroke: "#3399e1"
      },
      "100%": {
        stroke: "#d8ecfa"
      }
    },
    "@keyframes dash": {
      "0%": {
        strokeDashoffset: 187
      },
      "50%": {
        strokeDashoffset: 46.75,
        transform: "rotate(135deg)"
      },
      "100%": {
        strokeDashoffset: 187,
        transform: "rotate(450deg)"
      }
    }
  }
};

export default styles;
