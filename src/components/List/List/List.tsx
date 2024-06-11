import { HTMLAttributes, PropsWithChildren } from "react";

import "./List.scss";

export const List = ({
  children,
  className,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLUListElement>>) => {
  className = "list" + (className ? " " + className : "");
  return (
    <ul {...rest} className={className}>
      {children}
    </ul>
  );
};
