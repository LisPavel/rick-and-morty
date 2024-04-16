import React, { HTMLAttributes, PropsWithChildren } from "react";
import "./ListItem.scss";

export const ListItem = ({
  className,
  children,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLLIElement>>) => {
  className = "list-item" + (className ? " " + className : "");
  return (
    <li {...rest} className={className}>
      {children}
    </li>
  );
};
