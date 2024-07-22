import styled from "styled-components";

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
`;

const StyledSearchInput = styled.input`
  align-content: center;
  outline: none;
  height: 40px;
  padding: 0px 12px 0px 12px;
  border-radius: 8px;
  background: #4a3b5f;
  color: #fff;
  border: none;
  width: 100%;
`;

// eslint-disable-next-line react/prop-types
function SearchInput({ onChange }) {
  return (
    <SearchContainer className="gap-2">
      <div className=" bg-gradient-button h-10 align-baseline content-center px-3 rounded-md hover:">
        <SearchSVG />
      </div>
      <StyledSearchInput placeholder="Search... " onChange={onChange} />
    </SearchContainer>
  );
}

function SearchSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20.5 20.5L15 15"
        stroke="#fff"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
        stroke="#fff"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default SearchInput;
