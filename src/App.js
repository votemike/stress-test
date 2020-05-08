import React from 'react';
import './App.scss';
import PropertySummaries from "./components/PropertySummaries";
import FullSummary from "./components/FullSummary";
import AddProperty from "./components/AddProperty";
import {Finance, Payment, Property, Rental} from "@votemike/property";

function App() {
  const updatePropertySchema = property => {
    return {
      name: property.name,
      finances: [
        {
          amount: parseFloat(property.mortgage),
          repayment: !property.interestOnly,
          length: parseFloat(property.monthsLeft) / 12,
          rate: parseFloat(property.baseRate),
          teaserRate: parseFloat(property.teaserRate),
          fees: []
        }
      ],
      rentals: [
        {
          lettingFee: 0,
          monthlyRent: property.income
        }
      ],
      payments: []
    };
  };

  const useStateWithLocalStorage = (storageKey, defaultValue) => {
    let initialProperties = defaultValue;
    if (localStorage.getItem(storageKey)) {
      initialProperties = JSON.parse(localStorage.getItem(storageKey)).map((property) => {
        if (property.interestOnly !== undefined) {
          alert(`${property.name} has been updated. Please double check the details are still correct`);
          property = updatePropertySchema(property);
        }
        return Property.fromJson(property);
      });
    }
    const [name, setter] = React.useState(initialProperties);

    React.useEffect(() => {
      localStorage.setItem(storageKey, JSON.stringify(name));
    }, [name, storageKey]);

    return [name, setter];
  };
  const [properties, setProperties] = useStateWithLocalStorage('properties', []);

  const addPropertyHandler = formState => {
    const finances = [new Finance(parseFloat(formState.mortgage), !formState.interestOnly, parseInt(formState.monthsLeft) / 12, parseFloat(formState.baseRate), [], parseFloat(formState.teaserRate))];
    const payments = [new Payment(parseFloat(formState.expenses), 'monthly')];
    const rentals = [new Rental(parseFloat(formState.rent), parseFloat(formState.fee))];

    const property = new Property(formState.name, finances, payments, rentals);
    setProperties([...properties, property]);
  };

  const removePropertyHandler = index => {
    const newProperties = [...properties];
    newProperties.splice(index, 1);
    setProperties(newProperties);
  };

  return (
    <>
      <div className="stress-test">
        <header>
          <h1 className="title is-1">Mortgage Stress Test</h1>
          <p>What would happen if interest and mortgage rates went up?<br/>What if you couldn't remortgage once your introductory rate ran out?</p>
          <p>This stress test is provided as a rough guide only. You should not base any decisions solely on it.</p>
        </header>
        <PropertySummaries properties={properties} removePropertyHandler={removePropertyHandler}/>
        <FullSummary properties={properties}/>
        <AddProperty addPropertyHandler={addPropertyHandler}/>
      </div>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>Created by <a href="https://votemike.co.uk">Michael Gwynne</a></p>
          <p>You may also like <a href="https://votemike.github.io/amortisation-calculator/">Amortisation Calculator</a></p>
        </div>
      </footer>
    </>
  );
}

export default App;
