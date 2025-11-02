import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <h3>{property.title}</h3>
      <p>₦{property.price.toLocaleString()}</p>
      <Link to={`/property/${property.id}`} className="details-btn">View Details</Link>
    </div>
  );
};

export default PropertyCard;
