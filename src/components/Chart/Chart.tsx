import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface IRegistrationData {
  date: string;
  count: number;
}

interface IChartProps {
  data: IRegistrationData[];
}

interface IPathProps {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface ITriangleBarProps extends IPathProps {
  fill: string;
}

const getPath = ({ x, y, width, height }: IPathProps) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  } ${x + width / 2}, ${y} C${x + width / 2},${y + height / 3} ${
    x + (2 * width) / 3
  },${y + height} ${x + width}, ${y + height} Z`;
};

const TriangleBar = ({ fill, x, y, width, height }: ITriangleBarProps) => {
  return (
    <path d={getPath({ x, y, width, height })} stroke="none" fill={fill} />
  );
};

export const Chart: React.FC<IChartProps> = ({ data }) => {
  const error = console.error;
  console.error = (...args: unknown[]) => {
    if (typeof args[0] === "string" && /defaultProps/.test(args[0])) return;
    error(...args);
  };

  return (
    <div className="relative w-full h-[400px] sm-max:h-[400px] lg:h-[450px] p-6 bg-bgFirstColor rounded-[30px] mb-[35px] shadow-md">
      <p className="absolute top-[10px] left-[22px] font-medium text-[18px] sm-max:text-[14px] lg:text-[24px] leading-[1.2] tracking-[-0.02em] text-textColor mb-[15px]">
        Amount of registrations per day:
      </p>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 40, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="date" stroke="#606a6e" />
          <Tooltip />
          <Bar
            dataKey="count"
            fill="#5b5a61"
            shape={(props: unknown) => (
              <TriangleBar {...(props as ITriangleBarProps)} fill="#b2b3b6" />
            )}
            label={{ position: "top" }}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={"#606a6e"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
