import { PropsWithChildren } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "danger";
type ButtonSize = "small" | "medium" | "large";

interface Props {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export default function Button({
  children,
  variant = "primary",
  size = "medium",
}: PropsWithChildren<Props>) {
  function getTheme() {
    switch (variant) {
      case "secondary":
        return "outline outline-lime-900 text-lime-900 hover:outline-lime-950 hover:outline-2 focus:outline-2 focus:font-semibold";
      case "danger":
        return "bg-red-800 text-white hover:bg-red-900 focus:outline-red-900 focus:outline-offset-2 focus:outline-2";
      case "primary":
        return "bg-lime-900 text-white hover:bg-lime-950 focus:outline-lime-950 focus:outline-offset-2 focus:outline-2";
    }
  }
  function getSize() {
    switch (size) {
      case "medium":
        return "px-6 py-2";
      case "large":
        return "px-12 py-4";
      case "small":
        return "px-4 py-0.5";
    }
  }
  return (
    <button
      className={clsx([getTheme(), getSize(), "w-fit rounded-lg transition"])}
    >
      {children}
    </button>
  );
}
