import Header from "../../components/Header";
import Table from "../../components/Table";

import { Status } from "../../components/Status";
import { FileNameWithSize } from "../../components/FileNameWithSize";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "File name",
    dataIndex: "file",
    render: ({name, size}) => <FileNameWithSize name={name} size={size} />,
    key: "file",
  },
  {
    title: "IP Address v4",
    dataIndex: "ipV4",
    key: "ipV4",
  },
  {
    title: "IP Address v6",
    dataIndex: "ipV6",
    key: "ipV6",
  },
  {
    title: "Scan source",
    dataIndex: "sourceLink",
    key: "sourceLink",
  },
];

const data = [
  {
    status: "danger",
    name: "Luctus",
    file: {
      name: "Luctus.ppt",
      size: "2Mb",
    },
    ipV4: "38.21.46.43/5",
    ipV6: "2855:93c2:2469:6cde:643b:e139:6aae:6e00",
    sourceLink: "https://dropbox.com/nulla/dapibus.xml",
    key: "1"
  },
  {
    status: "warning",
    name: "Ante",
    file: {
      name: "Ante.tiff",
      size: "10Mb",
    },
    ipV4: "75.128.66.66/28",
    ipV6: "efcd:8153:a72c:7e0e:4200:896d:74d:bac1",
    sourceLink: "https://ow.ly/curae.aspx",
    key: "2"
  },
  {
    status: "warning",
    name: "ElitProinInterdum",
    file: {
      name: "ElitProinInterdum.xls",
      size: "3Mb",
    },
    ipV4: "204.200.5.2/1",
    ipV6: "a454:1732:7eeb:b137:a1d:9d52:813b:506e",
    sourceLink: "http://google.com/sit.aspx",
    key: "3"
  },
  {
    status: "caution",
    name: "Non",
    file: {
      name: "Non.ppt",
      size: "536Kb",
    },
    ipV4: "127.234.110.193/28",
    ipV6: "efcd:8153:a72c:7e0e:4200:896d:74d:bac1",
    sourceLink: "http://hex.com/pede.json",
    key: "4"
  },
];

const TableModule = () => {
  return (
    <>
      <Header />
      <Table 
        columns={columns} 
        data={data} 
        tableLayout='auto'
        expandable={{
          expandRowByClick: true,
          expandedRowRender: record => <p>extra: {record.a}</p>,
          expandIcon: ({record}) => <Status status={record.status} variant='table' size="md" />,
        }}
       />
    </>
  );
};

export default TableModule;
