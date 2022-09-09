import {FC} from "react";

type ButtonPropType = {
  text: string
}

export const Button: FC<ButtonPropType> = (props) => {
  return (
    <button>{props.text}</button>
  )
}
