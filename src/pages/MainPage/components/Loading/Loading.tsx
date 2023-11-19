import Spinner from "./Spinner";

const Loading = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-center text-darkBlueLightText dark:text-white font-semibold text-2xl md:text-4xl mt-12">
        Loading Countries...
      </h1>
      <Spinner />
    </div>
  );
};

export default Loading;
