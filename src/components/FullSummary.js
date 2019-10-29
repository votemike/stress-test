import React from 'react';

const FullSummary = ({properties}) => (
  <>
    <h2>Summary</h2>
    <p>
      Your current monthly payments are around<br/>
      Your monthly net income is around
    </p>
    <p>
      <span>If interest rates were to rise to 10%:</span><br/>
      <span>If interest rates were to rise to 15%:</span>
    </p>
  </>
);

export default FullSummary;
