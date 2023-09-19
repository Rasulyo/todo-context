import styled from 'styled-components';

export const ThemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
`;

export const AddBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.border};
`;

export const TodoAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: ${(props) => props.theme.bg};
  border: 1px solid #433;
  border-radius: 8px;
  width: 100%;
  max-width: 860px;
  color: ${(props) => props.theme.base};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.gray};
  border: none;
  outline: none;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.gray};
  height: 30px;
  color: ${(props) => props.theme.base};
  border-radius: 5px;
`;

export const FirstBlock = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.gray};
  display: flex;
  align-items: justify;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding-bottom: 20px;

  & * {
    min-height: 25px;
    outline: none;
  }

  & label {
    display: flex;
    align-items: center;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${(props) => props.theme.border};
  color: ${(props) => props.theme.base};
  border-radius: 5px;
  border-style: hidden;
  box-shadow: 0 0 0 1px ${(props) => props.theme.border};
  overflow: hidden;

  thead {
    background: ${(props) => props.theme.gray};
    color: ${(props) => props.theme.base};
    &::first-child tr:first-child th {
      border-top-width: 0;
    }
    &:hover {
      background: ${(props) => props.theme.gray};
    }
  }

  th {
    display: grid;
    grid-template-columns: repeat(4, 30px);
    background: transparent;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
  }

  tr {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4px;
  }

  tbody tr:hover {
    background-color: ${(props) => props.theme.gray};
  }
`;
export const StyledTableBody = styled.tbody`
  display: block;
  overflow-y: auto;
  max-height: 380px;
`;

export const ToggleSwitch = styled.label`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.invertedBg};
  cursor: pointer;
`;

export const ToggleSlider = styled.span`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 26px;
  height: 26px;
  background-color: #fff;
  background-color: ${(props) => props.theme.bg};
  border-radius: 50%;
  transition: 0.2s;
`;

export const Checkbox = styled.input`
  border: 1px solid green;
  height: 20px;
  width: 20px;
  margin-right: 5px;
`;

export const Select = styled.select`
  background-color: #fff;
  border: 1px solid green;
  border-radius: 4px;
  padding: 8px;
  width: 100%;
  height: 30px;

  &:focus {
    border-color: #000;
  }
`;

export const Option = styled.option`
  color: #fff;
  background-color: #ccc;

  &:hover {
    background-color: #ddd;
  }
`;

export const Input = styled.input`
  ::placeholder {
    color: #ccc;
  }
`;
