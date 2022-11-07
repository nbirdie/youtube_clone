import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: ${(props) => (props.type === "sm" ? "300px" : "100%")};;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  border-radius: 12px;
  object-fit: cover;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  display: ${(props) => props.type === "sm" && "none"};
  width: 36px;
  height: 36px;
  background-color: #999;
  border-radius: 50%;
`;
const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

function Card({ type }) {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://i.ytimg.com/vi/sqTeQ6pVGKQ/maxresdefault.jpg"
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src="https://i.ytimg.com/vi/sqTeQ6pVGKQ/maxresdefault.jpg"
          />
          <Texts>
            <Title>Test video</Title>
            <ChannelName>KateTube</ChannelName>
            <Info>690.543 views · 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
}
export default Card;
