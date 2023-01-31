import { Status } from "../Status";
import { ExtandedAdditionalInfo } from "../ExtandedAdditionalInfo";
import Typography from "../Typography";
import Modal from "../Modal";

import { CardContentWrapperStyles, CardStyles, ContentColumnStyles, CardContainerStyles } from "./styles";

const { Text, Copyable, Link } = Typography;

export const Card = (props) => {
  const { status, name, file, ipV4, ipV6, sourceLink, additionalInfo } = props;

  return (
    <CardContentWrapperStyles>
      <CardStyles>
        <CardContainerStyles>
          <ContentColumnStyles>
            <Text>Risk level:</Text>
            <Text>Name:</Text>
            <Text>File name:</Text>
          </ContentColumnStyles>

          <ContentColumnStyles>
            <Text>
              <Status status={status} size='sm' />
              {status}
            </Text>
            <Text>{name}</Text>
            <Text sufix={`(${file.size})`}>{file.name}</Text>
          </ContentColumnStyles>
        </CardContainerStyles>

        <CardContainerStyles>
          <ContentColumnStyles>
            <Text>Risk level:</Text>
            <Text>Name:</Text>
            <Text>File name:</Text>
          </ContentColumnStyles>

          <ContentColumnStyles>
            <Copyable sufix>{ipV4}</Copyable>
            <Copyable sufix maxWidth='198px'>
              {ipV6}
            </Copyable>
            <Link prefix sufix wordBreakAll whiteSpaceNormal href={sourceLink}>
              {sourceLink}
            </Link>
          </ContentColumnStyles>
        </CardContainerStyles>
      </CardStyles>

      <Modal
        header={
          <>
            <Status status={status} variant='modal' size='lg' />
            {status}
          </>
        }>
        <ExtandedAdditionalInfo
          title='Additional info:'
          content={additionalInfo}
          maxHeight='initial'
          overflowY='initial'
          isModalFooter
        />
      </Modal>
    </CardContentWrapperStyles>
  );
};

export default Card;
