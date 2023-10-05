const MatchCard = ({ name, age, img, style }) => {
  return (
    <button className="w-full flex items-center space-x-5 focus:outline-none appearance-none">
      <div className="w-[60px] h-[60px] bg-black rounded-full ml-3 overflow-hidden">
        <img src={img} alt="matched person" />
      </div>
      <div className={`flex flex-grow flex-col  py-2 ${style} pr-3`}>
        <div className=" h-[60px] w-full flex flex-col justify-center space-y-0.5">
          <h1 className=" text-lg font-medium dark:text-white text-gray-700">
            {name}
          </h1>
          <p className="text-sm dark:text-white text-gray-500">Age: {age}</p>
        </div>
      </div>
    </button>
  );
};

export default MatchCard;
