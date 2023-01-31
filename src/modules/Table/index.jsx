import CustomTable from "../../components/Table";
import Typography from "../../components/Typography";
import { Status } from "../../components/Status";
import { ExtandedAdditionalInfo } from "../../components/ExtandedAdditionalInfo";
import { components } from "./styles";

const { Copyable, Link, Text } = Typography;

export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (value) => (
      <div className='custom-cell-box'>
        <Text>{value}</Text>
      </div>
    ),
  },
  {
    title: "File name",
    dataIndex: "file",
    render: (value) => (
      <div className='custom-cell-box'>
        <Text sufix={`(${value?.size})`}>{value?.name}</Text>
      </div>
    ),
    key: "file",
  },
  {
    title: "IP Address v4",
    dataIndex: "ipV4",
    render: (text) => (
      <div className='custom-cell-box'>
        <Copyable sufix>{text}</Copyable>
      </div>
    ),
    key: "ipV4",
  },
  {
    title: "IP Address v6",
    dataIndex: "ipV6",
    render: (text) => (
      <div className='custom-cell-box'>
        <Copyable sufix maxWidth='198px'>
          {text}
        </Copyable>
      </div>
    ),
    key: "ipV6",
  },
  {
    title: "Scan source",
    dataIndex: "sourceLink",
    render: (value) => (
      <div className='custom-cell-box'>
        <Link prefix sufix href='https://hello.com'>
          {value}
        </Link>
      </div>
    ),
    key: "sourceLink",
  },
];

const TableModule = (props) => {
  const { data } = props;

  return (
    <CustomTable
      data={data}
      columns={columns}
      components={components}
      tableLayout='auto'
      expandable={{
        expandRowByClick: true,
        expandedRowRender: (record) => (
          <ExtandedAdditionalInfo title='Additional info:' content={record.additionalInfo} overflowY='auto' />
        ),
        expandIcon: ({ record }) => (
          <div className='custom-cell-box'>
            <Status status={record.status} variant='table' size='md' />
          </div>
        ),
      }}
      scroll={{ x: 1000 }}
    />
  );
};

export default TableModule;
