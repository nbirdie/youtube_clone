import styled from "styled-components";
import Comment from "./Comment";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  padding: 5px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
`;

function Comments() {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://www.gameinformer.com/sites/default/files/styles/full/public/2021/07/09/c0990f76/the_witcher_pas5.jpg" />
        <Input placeholder="Add a comment..." />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />

    </Container>
  );
}
export default Comments;
