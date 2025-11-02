import properties from "../data/properties";
import PropertyCard from "../components/PropertyCard";

const Home = () => {
  return (
    <div className="home-container">
      {properties.map((property) => (
        <PropertyCard property={property} key={property.id} />
      ))}
    </div>
  );
};

export default Home;
