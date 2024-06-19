import React, { useState } from "react";
import styled from "styled-components";
import { SearchOutlinedIcon } from "@mui/material/SearchOutlined";

const SearchMain = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 20px 9px;
  }
`;
const SearchBar = styled.div`
  width: 100%
  max-width: 700px;
  display: flex;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 30px;
  cursor: pointer;
  padding: 12px 16px;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.text_secondary};
`;

// const SearchOutlinedIcon = styled.div``;

const Search = () => {
  const [searched, setSearched] = useState("");
  const handleChange = async (e) => {
    setSearched(e.target.value);
  };
  return (
    <SearchMain>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          background: "inherit",
          color: "inherit",
        }}
      >
        <SearchBar>
          <SearchOutlinedIcon sx={{ color: "inherit" }}></SearchOutlinedIcon>
          <input
            type="text"
            placeholder="Search Artists/Podcasts"
            style={{
              border: "none",
              outline: "none",
              width: "100%",
            }}
            value={searched}
            onChangeCapture={(e) => handleChange(e)}
            onChange
          ></input>
        </SearchBar>
      </div>
      {searched === "" ? (
        <Categories>
          <Heading>Browse All</Heading>
        </Categories>
      ) : (
        <BrowseAll></BrowseAll>
      )}
    </SearchMain>
  );
};

export default Search;
