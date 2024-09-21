import styled from "styled-components";

const Form = styled.form`
  display: grid;
  gap: 10px;
  width: 60%;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Textarea = styled.textarea`
  font-family: inherit;
  padding: 0.2rem;
  border-radius: 0.5rem;
  &:focus {
    color: #00684a;
    border: 3px solid #5df0dd;
  }
`;

const Button = styled.button`
  background-color: #00684a;
  color: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-weight: bold;
  &:hover {
    box-shadow: 3px 4px 5px #5df0dd;
  }
`;

export default function CommentForm({ addComment }) {
  function handleSubmit(event) {
    event.preventDefault();
    const { comment } = event.target.elements;
    addComment(comment.value);
    event.target.reset();
    comment.focus();
  }

  return (
    <Form onSubmit={handleSubmit} aria-label="add comments about art piece">
      <Label htmlFor="comment">Write Your Comment</Label>
      <Textarea type="text" id="comment" name="comment" rows="3" required />
      <Button type="submit">Add Comment</Button>
    </Form>
  );
}
