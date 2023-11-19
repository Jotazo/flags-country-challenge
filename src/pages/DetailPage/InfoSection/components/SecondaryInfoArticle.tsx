interface Props {
  label: string;
  messageNoArrValues: string;
  strArr: string[];
}

const SecondaryInfoArticle: React.FC<Props> = ({
  label,
  messageNoArrValues,
  strArr,
}) => {
  return (
    <article className="text-sm font-semibold flex flex-col xl:flex-row xl:items-center gap-2">
      {label}
      <ul className="font-light flex gap-x-2 flex-wrap">
        {strArr.length === 0
          ? messageNoArrValues
          : strArr.map((str) => (
              <li
                key={str}
                className="inputs !py-2 !my-2 !px-6 bg-white text-center"
              >
                {str}
              </li>
            ))}
      </ul>
    </article>
  );
};

export default SecondaryInfoArticle;
