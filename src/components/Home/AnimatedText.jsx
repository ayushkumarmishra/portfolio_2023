/* eslint-disable react/prop-types */
const AnimatedText = ({ className = "", text }) => {
  return (
    <div className=" py-2 flex text-center overflow-hidden">
      <h1
        className={`w-full inline-block text-dark font-bold capitalize text-6xl ${className}`}
      >
        {text.split(" ").map((words, index) => (
          <span className="inline-block" key={words + "-" + index}>
            {words}&nbsp;
          </span>
        ))}
      </h1>
    </div>
  );
};

export default AnimatedText;
