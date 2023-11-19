import { ReactNode } from "react";

interface Props {
  label: string;
  children: ReactNode;
}

const PrimaryInfoArticle: React.FC<Props> = ({ label, children }) => {
  return (
    <article className="text-sm font-semibold">
      {label} <span className="font-light">{children}</span>
    </article>
  );
};

export default PrimaryInfoArticle;
