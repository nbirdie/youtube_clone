import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: sticky;
  top: 0;
  height: 56px;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  justify-content: space-between;
  position: relative;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 7px;
  border: 1px solid #ccc;
  border-radius: 40px;
  min-width: 50px;
  width: 50%;
`;
const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  width: 100%;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 40px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchOutlinedIcon style={{ fill: "#aaaaaa" }} />
        </Search>
        <Link to="signin" style={{textDecoration: "none"}}>
        <Button>
          <AccountCircleOutlinedIcon />
          SIGN IN
        </Button>
        </Link>
      </Wrapper>
    </Container>
  );
}
export default Navbar;
