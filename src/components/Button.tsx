import classNames from "classnames";
import {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
} from "react";

type ButtonProps = {
  active?: boolean;
};

export const Button: FunctionComponent<
  PropsWithChildren<ButtonProps & ComponentPropsWithoutRef<"button">>
> = ({ children, active, ...props }) => {
  return (
    <button
      type="button"
      {...props}
      className={classNames(
        "flex whitespace-nowrap items-center h-8 px-5 font-medium rounded-lg outline-none hover:ring-2 hover:ring-white hover:ring-inset text-white  shadow bg-yellow-600",
        {
          "bg-yellow-600 ring-2 ring-white": active,
          "text-white": active,
        },
      )}
    >
      {children}
    </button>
  );
};
