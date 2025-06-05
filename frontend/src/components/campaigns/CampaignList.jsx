import React, { useEffect, useState } from 'react';
import axios from 'axios';
const apiUrl = "https://crmapp-backend.onrender.com"; 


const CampaignList = () => {
  const [segments, setSegments] = useState([]);
  const [selectedSegment, setSelectedSegment] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState('');

  const fetchSegments = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/segments`, {
        headers: { 
          Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
      });
      setSegments(res.data);
    } catch (err) {
      console.error('Failed to load segments', err);
    }
  };

  const fetchCampaigns = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/campaigns`, {
        headers: { 
          Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
      });
      setCampaigns(res.data);
    } catch (err) {
      console.error('Failed to load campaigns', err);
    }
  };

  const handleSendCampaign = async () => {
    if (!selectedSegment || !message || !name) return alert('All fields required');
    setLoading(true);
    try {
      await axios.post(
        `${apiUrl}/api/campaigns/send`,
        {
          name,
          message,
          segmentId: selectedSegment,
        },
        {
          headers: { 
            Authorization: `Bearer ${localStorage.getItem('token')}` 
          }
        }
      );
      setMessage('');
      setName('');
      setSuggestions([]);
      setShowSuggestions(false);
      fetchCampaigns();
      alert('Campaign Sent!');
    } catch (err) {
      console.error('Error sending campaign', err);
      alert('Failed to send campaign');
    }
    setLoading(false);
  };

  const suggestMessage = async () => {
    if (!name) {
      alert('Please enter a campaign name to generate suggestions.');
      return;
    }

    try {
      const res = await axios.post(
        `${apiUrl}/api/campaigns/aiSuggestions`,
        { campaignName: name },
        {
          headers: { 
            Authorization: `Bearer ${localStorage.getItem('token')}` 
          }
        }
      );

      if (res.data.suggestions?.length) {
        setSuggestions(res.data.suggestions);
        setShowSuggestions(true);
      } else {
        alert('No suggestions received.');
      }
    } catch (err) {
      console.error('Error fetching AI suggestions:', err);
      alert('Failed to get AI suggestions.');
    }
  };

  useEffect(() => {
    fetchSegments();
    fetchCampaigns();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Create Campaign</h2>

      <div className="mb-4 space-y-2">
        <input
          type="text"
          placeholder="Campaign Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <select
          value={selectedSegment}
          onChange={(e) => setSelectedSegment(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="">Select Segment</option>
          {segments.map((seg) => (
            <option key={seg._id} value={seg._id}>
              {seg.name}
            </option>
          ))}
        </select>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message (e.g. Hi {name}, here's 10% off...)"
          className="border p-2 rounded w-full min-h-[100px]"
        ></textarea>

        {showSuggestions && suggestions.length > 0 && (
          <select
            value={selectedSuggestionIndex}
            onChange={(e) => {
              const index = e.target.value;
              if (index !== '') {
                setMessage(suggestions[index]);
                setSelectedSuggestionIndex(''); // Reset dropdown after selection
              }
            }}
            className="border p-2 rounded w-full bg-yellow-50"
          >
            <option value="">Select a suggested message</option>
            {suggestions.map((s, idx) => (
              <option key={idx} value={idx}>
                {s}
              </option>
            ))}
          </select>
        )}

        <div className="flex gap-4">
          <button
            onClick={suggestMessage}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Suggest Message
          </button>
          <button
            onClick={handleSendCampaign}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {loading ? 'Sending...' : 'Create Campaign'}
          </button>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-8 mb-2">Past Campaigns</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Audience</th>
            <th className="border p-2">Sent</th>
            <th className="border p-2">Failed</th>
            <th className="border p-2">Created</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((c) => (
            <tr key={c._id}>
              <td className="border p-2">{c.name}</td>
              <td className="border p-2">{c.audienceSize}</td>
              <td className="border p-2">{c.sent}</td>
              <td className="border p-2">{c.failed}</td>
              <td className="border p-2">{new Date(c.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CampaignList;



