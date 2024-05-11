import type { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  return <div className="max-w-screen-sm mx-auto">{children}</div>;
};
