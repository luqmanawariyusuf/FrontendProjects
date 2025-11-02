import { useParams, Link } from "react-router-dom";
import properties from "../data/properties";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((item) => item.id === Number(id));

  if (!property) return <h2>Property Not Found</h2>;

  return (
    <div className="details-container">
      <img src={property.image} alt={property.title} />
      <h2>{property.title}</h2>
      <p><strong>Price:</strong> ₦{property.price.toLocaleString()}</p>
      <Link to="/" className="back-btn">Back to Home</Link>
    </div>
  );
};

export default PropertyDetails;
