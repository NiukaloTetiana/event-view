export const Filter = ({
  onChange,
}: {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex justify-center mb-[40px]">
      <input
        className="sm-max:w-full w-[300px] md:w-[635px] lg:w-full h-[47px] bg-transparent shadow-sm border border-borderColor rounded-[12px] px-[18px] py-[14px] lg:py-[16px] font-normal text-[14px] lg:text-[16px] leading-[1.25] text-textColor placeholder:text-secondtextColor lg:hover:shadow-md lg:hover:border-accentColor focus:border-accentColor transition duration-300"
        name="filter"
        placeholder="Find participants by name or email"
        type="text"
        onChange={onChange}
      />
    </div>
  );
};
