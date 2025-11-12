import image1 from "../../../assets/image/12.jpg";
import image2 from "../../../assets/image/13.jpg";
import image3 from "../../../assets/image/14.jpg";
import Collection from "../../../Components/Collection/Collection";
const Collections = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 ">
      <Collection title={"Women's Collection "} image={image1}/>
      <Collection title={"Kid's Collection"} image={image2}/>
      <Collection title={"Men's Collection"} image={image3}/>
    </div>
  );
};

export default Collections;
