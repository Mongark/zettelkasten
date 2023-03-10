import styled from 'styled-components';

const Editor = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding: 12px;

  font-family: monospace;

  background: #282a36;
`;

const Title = styled.h1`
  color: white;
  width: 100%;
  height: auto;
  margin: 0;
  padding-bottom: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;

  border-radius: 4px;

  resize: none;

  background: white;
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;

  flex-direction: row;

  padding-top: 5px;
  padding-bottom: 5px;

  width: 100%;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
`;

const Button = styled.button`
  padding: 5px;
`;

export default function TextEditor() {
  return(
    <>
      <Editor>
        <HeaderSection>
          <Title>Zettel Editor</Title>

          <Toolbar>
            <Button>Save</Button>
          </Toolbar>
        </HeaderSection>
        <TextArea />
      </Editor>
    </>
  );
}
