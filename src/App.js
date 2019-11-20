import React from 'react';
import './App.scss';
import PropertySummaries from "./components/PropertySummaries";
import FullSummary from "./components/FullSummary";
import AddProperty from "./components/AddProperty";

function App() {
  const useStateWithLocalStorage = (storageKey, defaultValue) => {
    const [name, setter] = React.useState(JSON.parse(localStorage.getItem(storageKey)) || defaultValue);

    React.useEffect(() => {
      localStorage.setItem(storageKey, JSON.stringify(name));
    }, [name, storageKey]);

    return [name, setter];
  };
  const [properties, setProperties] = useStateWithLocalStorage('properties', []);

  const addPropertyHandler = formState => {
    setProperties([...properties, {...formState}]);
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
          <h1>Mortgage Stress Test</h1>
          <p>This stress test is provided as a rough guide only. You should not base any decisions solely on it.</p>
          <p>It is currently a work in progress.</p>
        </header>
        <PropertySummaries properties={properties} removePropertyHandler={removePropertyHandler}/>
        <FullSummary properties={properties}/>
        <AddProperty addPropertyHandler={addPropertyHandler}/>
      </div>
      <footer>
        <p>Created by <a href="https://www.votemike.co.uk">Michael Gwynne</a></p>
        <p>You may also like <a href="https://votemike.github.io/amortisation-calculator/">Amortisation Calculator</a></p>
      </footer>
    </>
  );
}

export default App;
