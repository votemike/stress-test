import React from 'react';
import PropertySummary from "./PropertySummary";

const PropertySummaries = ({properties, removePropertyHandler}) => (
  <div>
    {properties.map((property, index) => (
      <PropertySummary key={index} index={index} property={property} removePropertyHandler={removePropertyHandler}/>
    ))}
  </div>
);

export default PropertySummaries
