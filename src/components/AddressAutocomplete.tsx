import React, { useState } from 'react';

interface AddressAutocompleteProps {
  onChange: (value: string) => void;
}

const AddressAutocomplete = ({ onChange }: AddressAutocompleteProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.length > 2) {
      const response = await fetch(
        `https://atlas.microsoft.com/search/address/json?api-version=1.0&query=${value}&subscription-key=D2ETXaUe63EBy7ufGI5PhcOUtqJ1KBwOKPbpl4Qlh70YCGEH6j55JQQJ99AJACYeBjFGkfR9AAAgAZMP70FU`
      );
      const result = await response.json();
      setSuggestions(result.results);
    }
  };

  const handleSuggestionClick = (suggestion: any) => {
    setSearchTerm(suggestion.address.freeformAddress);
    setSuggestions([]);
    onChange(suggestion.address.freeformAddress);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        placeholder="Enter address"
        onChange={handleInputChange}
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion.address.freeformAddress}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddressAutocomplete;