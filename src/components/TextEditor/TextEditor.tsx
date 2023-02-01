import styled from 'styled-components';

const Editor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: #282a36;
`;

const EditorInput = styled.textarea`
  width: 90%;
  height: 90%;

  background: white;
`;

export default function TextEditor() {
  return(
    <>
      <Editor>
        <EditorInput></EditorInput>
      </Editor>
    </>
  );
}
