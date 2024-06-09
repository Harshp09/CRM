// frontend/src/components/Campaigns.js
import React, { useState } from 'react';
import axios from 'axios';

const Campaigns = () => {
  const [name, setName] = useState('');
  const [rules, setRules] = useState([{ field: '', condition: '', value: '' }]);
  const [audienceSize, setAudienceSize] = useState(0);

  const handleRuleChange = (index, field, value) => {
    const newRules = [...rules];
    newRules[index][field] = value;
    setRules(newRules);
  };

  const addRule = () => {
    setRules([...rules, { field: '', condition: '', value: '' }]);
  };

  const checkAudienceSize = async () => {
    try {
      console.log('Sending request to check audience size with rules:', rules);
      const response = await axios.post('/api/audience-size', { rules });
      console.log('Received response:', response.data);
      setAudienceSize(response.data.size);
    } catch (error) {
      console.error('Error checking audience size:', error);
    }
  };

  const createCampaign = async () => {
    try {
      const response = await axios.post('/api/campaigns', { name, rules });
      alert('Campaign created successfully!');
      console.log('Create Campaign Response:', response.data);
    } catch (error) {
      console.error('Error creating campaign:', error);
    }
  };

  return (
    <div>
      <h1>Create Campaign</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Campaign Name"
      />
      {rules.map((rule, index) => (
        <div key={index}>
          <input
            type="text"
            value={rule.field}
            onChange={(e) => handleRuleChange(index, 'field', e.target.value)}
            placeholder="Field"
          />
          <input
            type="text"
            value={rule.condition}
            onChange={(e) => handleRuleChange(index, 'condition', e.target.value)}
            placeholder="Condition"
          />
          <input
            type="text"
            value={rule.value}
            onChange={(e) => handleRuleChange(index, 'value', e.target.value)}
            placeholder="Value"
          />
        </div>
      ))}
      <button onClick={addRule}>Add Rule</button>
      <button onClick={checkAudienceSize}>Check Audience Size</button>
      <p>Audience Size: {audienceSize}</p>
      <button onClick={createCampaign}>Create Campaign</button>
    </div>
  );
};

export default Campaigns;
