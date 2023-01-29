import { Status } from "../../components/Status";
import Typography from "../Typography";
import Button from "../Button";
import styled from "styled-components";

const { Text, Copyable, Link } = Typography;

const CardStyles = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border: 1px solid  var(--bg-gray);
  border-radius: 4px;
  padding: 20px 32px;
`

const RowTitleStyled = styled.div`
  margin-right: auto;

  & > div {
    padding-top: 4px;
    padding-bottom: 4px;
    margin-bottom: 8px;
  }
`

const CardContentWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 32px;
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;

  ${RowTitleStyled}:first-child {
    padding-right: 10px;
  }
`

export const Card = () => {
  return (
    <CardStyles>
      <CardContentWrapper>
        <CardContainer>
          <RowTitleStyled>
            <Text >Risk level:</Text>
            <Text >Name:</Text>
            <Text >File name:</Text>
          </RowTitleStyled>

          <RowTitleStyled>
            <Text>
              <Status status={'Medium'} size='sm' />
              Medium
            </Text>
            <Text>Luctus</Text>
            <Text sufix={`(${'2Mb'})`}>{"Luctus.ppt"}</Text>
          </RowTitleStyled>
        </CardContainer>

        <CardContainer>
          <RowTitleStyled>
            <Text >Risk level:</Text>
            <Text >Name:</Text>
            <Text >File name:</Text>
          </RowTitleStyled>

          <RowTitleStyled>
            <Copyable sufix>{'38.21.46.43/5'}</Copyable>
            <Copyable sufix maxWidth='198px'>{'2855:93c2:2469:6cde:643b:e139:6aae:6e00'}</Copyable>
            <Link 
              prefix
              sufix
              wordBreakAll
              whiteSpaceNormal
              href='https://hello.com'
            >
              {'https://dropbox.com/nulla/dapibus.xml'}
            </Link>
          </RowTitleStyled>
        </CardContainer>
      </CardContentWrapper>

      <Button>Show additional info</Button>
    </CardStyles>
  );
};

export default Card;
