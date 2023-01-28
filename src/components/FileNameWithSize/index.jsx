import styled from "styled-components";

const FileNameWithSizeStyled = styled.p`
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
`

const FileSizeStyled = styled.span`
  color: var(--gray);
  min-width: fit-content;
  display: inline-block;
  margin-left: 0.2rem;
`

export const FileNameWithSize = (props) => {
  const { name, size } = props;

  return ( 
    <FileNameWithSizeStyled>
      {name}
      <FileSizeStyled>
        {`(${size})`}
      </FileSizeStyled>
    </FileNameWithSizeStyled>
  );
}