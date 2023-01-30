import Header from "../../components/Header";
import Table from "../../components/Table";
import Typography from "../../components/Typography";
import { Status } from "../../components/Status";
import { ExtandedAdditionalInfo } from "../../components/ExtandedAdditionalInfo";

import { data } from '../../__mockdata';

const { Copyable, Link, Text } = Typography;

export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "File name",
    dataIndex: "file",
    render: (value) => <Text sufix={`(${value?.size})`}>{value?.name}</Text>,
    key: "file",
  },
  {
    title: "IP Address v4",
    dataIndex: "ipV4",
    render: (text) => <Copyable sufix>{text}</Copyable>,
    key: "ipV4",
  },
  {
    title: "IP Address v6",
    dataIndex: "ipV6",
    render: (text) => (
      <Copyable sufix maxWidth='198px'>
        {text}
      </Copyable>
    ),
    key: "ipV6",
  },
  {
    title: "Scan source",
    dataIndex: "sourceLink",
    render: (value) => (
      <Link prefix sufix href='https://hello.com'>
        {value}
      </Link>
    ),
    key: "sourceLink",
  },
];

const TableModule = () => {
  return (
    <>
      <Header />
      <Table
        data={data}
        columns={columns}
        tableLayout='auto'
        expandable={{
          expandRowByClick: true,
          expandedRowRender: (record) => (
            <ExtandedAdditionalInfo
              title='Additional info:'
              content={record.additionalInfo}
              overflowY='auto'
            />
          ),
          expandIcon: ({ record }) => <Status status={record.status} variant='table' size='md' />,
        }}
        scroll={{ x: 1000 }}
      />
    </>
  );
};

export default TableModule;
