import style from "./index.module.css";
import type { ReactNode } from "react";

interface PageContainerProps {
  children?: ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return <div className={style.pageContainer}>{children}</div>;
};

export default PageContainer;
