

const ServicesLocal = ({ services }) => {
    const {thumbnail,title,description,price} = services || {}
  console.log(services);
  return (
    <div className="mb-5">
      <div className="h-56 card gap-3 card-side bg-base-100 shadow-xl">
          <img
            src={thumbnail}
            alt="Movie"
            className="w-[300px] h-full"
          />
        <div className="p-4">
          <h2 className="text-3xl font-medium">{title}</h2>
          <p className="text-lg py-2">{description}</p>
          <p className="text-2xl text-orange-500">Price {price}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesLocal;
