
const Services = ({title, description, icon}) => {
  return (
      <div class="font-light text-center flex flex-col items-center p-6 border border-[#eeeeee] cursor-pointer">
        <div class="mb-3">
            {icon}
        </div>
        <h3 class="text-[20px] font-manrope text-secondary font-semibold">
          {title}
        </h3>
        <p class="flex items-center gap-2.5 my-2">
            {description}
        </p>
      </div>
  );
};

export default Services;
