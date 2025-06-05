import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = "https://crmapp-backend.onrender.com"; 


const SegmentList = () => {
  const [conditions, setConditions] = useState([{ type: '', operator: '', value: '' }]);
  const [logicType, setLogicType] = useState('AND');
  const [name, setName] = useState('');
  const [previewSize, setPreviewSize] = useState(null);
  const [segments, setSegments] = useState([]);

  const fieldOptions = ['totalSpend', 'visits', 'lastActive'];
  const operatorOptions = ['is', 'equals', 'greater than', 'less than', 'not equals'];

  const handleConditionChange = (index, field, value) => {
    const updated = [...conditions];
    updated[index][field] = value;
    setConditions(updated);
  };

  const addCondition = () => {
    setConditions([...conditions, { type: '', operator: '', value: '' }]);
  };

  const removeCondition = (index) => {
    setConditions(conditions.filter((_, i) => i !== index));
  };

  const isValidRule = () => {
    return (
      conditions.length > 0 &&
      conditions.every(
        (cond) =>
          cond.type.trim() !== '' &&
          cond.operator.trim() !== '' &&
          cond.value.trim() !== ''
      )
    );
  };

  const previewAudience = async () => {
    try {
      const res = await axios.post(
        `${apiUrl}/api/segments/preview`,
        { rule: { logicType, conditions } },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      setPreviewSize(res.data.count);
    } catch (err) {
      console.error('Error previewing audience:', err.response?.data || err.message);
    }
  };

  const saveSegment = async () => {
    try {
      await axios.post(
        `${apiUrl}/api/segments`,
        { name, rule: { logicType, conditions } },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      setName('');
      setConditions([{ type: '', operator: '', value: '' }]);
      setPreviewSize(null);
      fetchSegments();
    } catch (err) {
      console.error('Error saving segment:', err.response?.data || err.message);
    }
  };

  const fetchSegments = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/segments`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
      });
      setSegments(res.data);
    } catch (err) {
      console.error('Error fetching segments:', err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchSegments();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Create Segment</h1>

      <input
        type="text"
        placeholder="Segment Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />

      <div className="flex items-center mb-4">
        <label className="mr-2 font-semibold">Match:</label>
        <select
          value={logicType}
          onChange={(e) => setLogicType(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="AND">All (AND)</option>
          <option value="OR">Any (OR)</option>
        </select>
      </div>

      {conditions.map((cond, index) => (
        <div key={index} className="flex gap-2 mb-2">
          <select
            value={cond.type}
            onChange={(e) => handleConditionChange(index, 'type', e.target.value)}
            className="border p-2 rounded w-1/3"
          >
            <option value="">Select Field</option>
            {fieldOptions.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>

          <select
            value={cond.operator}
            onChange={(e) => handleConditionChange(index, 'operator', e.target.value)}
            className="border p-2 rounded w-1/3"
          >
            <option value="">Select Operator</option>
            {operatorOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Value"
            value={cond.value}
            onChange={(e) => handleConditionChange(index, 'value', e.target.value)}
            className="border p-2 rounded w-1/3"
          />

          <button
            onClick={() => removeCondition(index)}
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
          >
            &times;
          </button>
        </div>
      ))}

      <button
        onClick={addCondition}
        className="bg-blue-600 text-white px-3 py-1 rounded mb-4"
      >
        + Add Condition
      </button>

      <div className="flex gap-4 mb-6">
        {isValidRule() && (
          <button
            onClick={previewAudience}
            className="bg-purple-600 text-white px-4 py-2 rounded"
          >
            Preview Audience Size
          </button>
        )}
        <button
          onClick={saveSegment}
          className={`px-4 py-2 rounded text-white ${isValidRule() ? 'bg-green-600' : 'bg-gray-400 cursor-not-allowed'
            }`}
          disabled={!isValidRule()}
        >
          Save Segment
        </button>
      </div>

      {previewSize !== null && (
        <div className="mb-6">
          <p className="font-semibold">Audience Size: {previewSize}</p>
        </div>
      )}

      <h2 className="text-xl font-bold mb-2">Saved Segments</h2>
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Conditions</th>
            <th className="border p-2">Logic</th>
          </tr>
        </thead>
        <tbody>
          {segments.map((seg) => (
            <tr key={seg._id}>
              <td className="border p-2">{seg.name}</td>
              <td className="border p-2">
                {seg.rule?.conditions?.map((c, i) => (
                  <div key={i}>
                    {c.type} {c.operator} {c.value}
                  </div>
                ))}
              </td>
              <td className="border p-2">{seg.rule?.logicType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SegmentList;




