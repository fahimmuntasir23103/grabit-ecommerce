
const Collection = ({title,image}) => {
    return (
        <div className="relative">
            <img src={image} alt="" />
            <div className="absolute top-1/2 -translate-y-1/2 right-6 text-right text-white"> 
                <h3 className="font-manrope w-40 text-[28px] mb-2 font-bold text-right">{title}</h3>
                <button className="bg-primary py-1.5 px-4 rounded-xs">Shop Now</button>
            </div>
        </div>
    );
};

export default Collection;