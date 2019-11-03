import React from 'react';
import PropertySummary from "./PropertySummary";

const PropertySummaries = ({properties}) => (
  <div>
    {properties.map((property, index) => (
      <PropertySummary key={index} index={index} {...property}/>
    ))}
  </div>
);

export default PropertySummaries
