import { Rings } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="flex items-center justify-center fixed bg-[#0b0b0b99] backdrop-blur-sm w-full h-full left-0 top-0 z-50">
      <Rings
        visible={true}
        height="120"
        width="120"
        color="#54be96"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
