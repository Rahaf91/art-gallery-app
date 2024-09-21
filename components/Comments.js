import styled from "styled-components";

const Wrapper = styled.section`
  width: 50%;
`;

const Title = styled.h3`
  margin: 0;
`;

const List = styled.ul`
  list-style: none;
  background-color: white;
  border-radius: 10px;
`;

const ListItem = styled.li`
  margin: 10px;
  text-align: center;
`;

const Comment = styled.ul`
  list-style: none;
`;

const Date = styled.li`
  font-weight: 200;
`;

export default function Comments({ comments }) {
  return (
    <Wrapper>
      <Title>Comments</Title>
      <List role="list">
        {comments.map((comment, index) => (
          <ListItem key={index}>
            <Comment>
              <Date>{comment.date}</Date>
              <li>
                <q>{comment.text}</q>
              </li>
            </Comment>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
}
