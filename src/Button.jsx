import styled from "styled-components";
const Button = (props) => {
  const colorTheme = {
    color: "",
    hoverColor: "",
  };
  if (props.color) {
    switch (props.color) {
      case "default":
        colorTheme.color = "#E0E0E0";
        colorTheme.hoverColor = "#AEAEAE";
        break;
      case "primary":
        colorTheme.color = "#2962FF";
        colorTheme.hoverColor = "#0039CB";
        break;
      case "secondary":
        colorTheme.color = "#455A64";
        colorTheme.hoverColor = "#1C313A";
        break;
      case "danger":
        colorTheme.color = "#D32F2F";
        colorTheme.hoverColor = "#9A0007";
        break;
      default:
        break;
    }
  }
  let classes = props.variant;
  if (props.disabled) classes += " disabled";
  return (
    <Btn
      className={classes}
      colorTheme={colorTheme}
      {...props}
      onClick={() => console.log(props)}
    >
      {props.startIcon !== "none" && (
        <span className="material-icons md-18">{props.startIcon}</span>
      )}
      {props.label}
      {props.endIcon !== "none" && (
        <span className="material-icons md-18">{props.endIcon}</span>
      )}
    </Btn>
  );
};
const Btn = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@500&display=swap");
  //shape
  padding: ${(props) => {
    switch (props.size) {
      case "sm":
        return ".375rem .75rem";
      case "md":
        return "0.5rem 1rem";
      case "lg":
        return ".6875rem 1.375rem";

      default:
        return "0.5rem 1rem";
    }
  }};
  border-radius: 6px;
  //text
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
  //flex
  display: flex;
  justify-content: center;
  align-items: center;
  //transition
  transition: all ease 0.3s;
  &.default {
    background: ${(props) => {
      if (props.color === "custom") {
        return props.customBackgroundColor;
      } else {
        return props.colorTheme.color;
      }
    }};
    box-shadow: ${(props) =>
      !props.disableShadow && "0rem 0.125rem 0.1875rem rgba(51, 51, 51, 0.2)"};
    border: none;
    color: ${(props) => {
      if (props.color === "custom") {
        return props.customColor;
      } else if (props.color === "default") {
        return "#3F3F3F";
      } else {
        return "#FFFFFF";
      }
    }};
    &:hover,
    &:focus {
      ${(props) => {
        if (props.color === "custom") {
          return "filter: saturate(200%) contrast(75%);";
        } else {
          return `background: ${props.colorTheme.hoverColor};`;
        }
      }}
    }
  }

  &.outline {
    background: none;
    border: 1px solid
      ${(props) => {
        if (props.color === "custom") {
          return props.customColor;
        } else {
          return props.colorTheme.color;
        }
      }};
    color: ${(props) => {
      if (props.color === "custom") {
        return props.customColor;
      } else {
        return props.colorTheme.color;
      }
    }};
    box-shadow: none;
    &:hover,
    &:focus {
      background: ${(props) => {
        if (props.color === "custom") {
          return `${props.customColor}40`;
        } else {
          return props.colorTheme.hoverColor;
        }
      }};
      color: #ffffff;
    }
  }

  &.text {
    border: none;
    background: none;
    color: ${(props) => {
      if (props.color === "custom") {
        return props.customColor;
      } else {
        return props.colorTheme.color;
      }
    }};
    box-shadow: none;
    &:hover,
    &:focus {
      background: ${(props) => {
        if (props.color === "custom") {
          return `${props.customColor}40`;
        } else {
          return props.colorTheme.hoverColor;
        }
      }};
      color: #ffffff;
    }
  }
  &:hover {
    cursor: pointer;
  }

  &.disabled {
    background: ${(props) => (props.variant === "text" ? "none" : " #E0E0E0")};
    color: #9e9e9e;
    border: none;
    &:hover,
    &:focus {
      background: ${(props) =>
        props.variant === "text" ? "none" : " #E0E0E0"};
      color: #9e9e9e;
      border: none;
    }
  }

  .material-icons {
    margin: 0 5%;
    .md-18 {
      font-size: 18px;
    }
  }
`;
export default Button;
