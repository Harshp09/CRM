// frontend/src/components/CreateCampaign.js
import React, { useState } from 'react';
import axios from 'axios';
import './CreateCampaign.css'; // Import CSS file

const CreateCampaign = () => {
    const [name, setName] = useState('');
    const [rules, setRules] = useState([]);
    const [audienceSize, setAudienceSize] = useState(0);

    const addRule = () => {
        setRules([...rules, { field: '', condition: '', value: '' }]);
    };

    const handleRuleChange = (index, field, value) => {
        const newRules = [...rules];
        newRules[index][field] = value;
        setRules(newRules);
    };

    const checkAudienceSize = () => {
        // Call backend to check audience size
        axios.post('/api/audience-size', { rules })
            .then(response => setAudienceSize(response.data.size))
            .catch(error => console.error('Error checking audience size:', error));
    };

    const createCampaign = () => {
        // Call backend to create campaign
        axios.post('/api/campaigns', { name, rules })
            .then(response => console.log('Campaign created:', response))
            .catch(error => console.error('Error creating campaign:', error));
    };

    return (
        <div className="container">
            <div className="box">
                <h1>Create Campaign</h1>
                <div className="form-group">
                    <label htmlFor="campaignName">Campaign Name:</label>
                    <input
                        id="campaignName"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter campaign name"
                    />
                </div>
                <div className="rules">
                    <h2>Rules:</h2>
                    {rules.map((rule, index) => (
                        <div key={index} className="rule">
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
                </div>
                <div className="audience-size">
                    <button onClick={checkAudienceSize}>Check Audience Size</button>
                    <p>Audience Size: {audienceSize}</p>
                </div>
                <div className="create-campaign">
                    <button onClick={createCampaign}>Create Campaign</button>
                </div>
            </div>
        </div>
    );
};

export default CreateCampaign;
