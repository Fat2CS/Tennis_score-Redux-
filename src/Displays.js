// on import useSelector depuis react-redux
import { useSelector } from "react-redux";
import { selectDisplayText } from "./Selector";

export function Display() {
  const displayText = useSelector(selectDisplayText);

  return <p className="display">{displayText}</p>;
}
