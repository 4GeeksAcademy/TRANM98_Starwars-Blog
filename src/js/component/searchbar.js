import React, { useState, useContext } from "react";
import Autosuggest from "react-autosuggest";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

const SearchBar = () => {
  const { store } = useContext(Context);
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const history = useHistory();

  const getSuggestions = (inputValue) => {
    const results = [...store.people, ...store.planets];
    return results.filter(
      (item) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const getSuggestionValue = (suggestion) => suggestion.name;

  const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (_, { suggestion }) => {
    history.push(`/info/${suggestion.id}`);
    setValue("");
  };

  const inputProps = {
    placeholder: "Search for characters or planets",
    value,
    onChange: (_, { newValue }) => setValue(newValue),
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      onSuggestionSelected={onSuggestionSelected}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};

export default SearchBar;
