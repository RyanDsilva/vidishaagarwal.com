import { PopupButton } from "react-calendly";

export default function Calendly({}) {
  return (
    <PopupButton
      key={"calendly"}
      className="text-base font-medium font-main-black"
      url="https://calendly.com/vidisha-agarwal212000/meet"
      rootElement={document.getElementById("root")}
      text="Book A Call"
    />
  );
}
