export const CategoryCard = ({ title, img }) => {
  return (
    <div>
      <img src={img} alt="img" />
      <h3 className="absolute top-[157px], left-[14px], right-0, bottom-[] text-blue-600">{title}</h3>
    </div>
  );
};
