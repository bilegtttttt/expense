import { GoDotFill } from "react-icons/go";
export const ChartResult = (props) => {
  const { color, desc, amount, percent } = props;
  return (
    <div className="flex w-full items-center gap-7 justify-between">
      <div className="flex items-center w-[100px]">
        <GoDotFill color={color} size={20} />
        <p>{desc}</p>
      </div>
      <div className="flex w-fit text-[16px]">
        <p>{amount}</p>
      </div>
      <div className="flex w-fit">
        <p>{percent}</p>
      </div>
    </div>
  );
};
