import Header from "../../components/Header";
import Table from "../../components/Table";

import { Status } from "../../components/Status";
import { ExtandedAdditionalInfo } from "../../components/ExtandedAdditionalInfo";
import Typography from "../../components/Typography";

const { Copyable, Link, Text } = Typography;

const info = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAANBSURBVDjLXZNrSFNhGMcPQQQRfYv60meJoiCtROuDZRcEA6MP3ckwS0tlZVlptnXRqavMaqZ5Ka1Jq1bOmWiXs466mqZzLs0103CmLp27HOdlaf+es2xFL/xe/jzv8/+/vA/nMACYsWpmDiEmjEQTMU+o/wvVFs+e64mAP3XGoWLmEtljzXv7vSMsXM37bHp1ZEPyK6+WsM+ifa+O4tyGuJHxzjQ79euJpb4AWwWT6tLv/zY1VI3hd9GOD8oQXtowglvNNhS3DfoQ9DWuB23K1R6nSeLh205+J18LMZex3mPOu41p9qH6aIfuQciPvHd9eGQcgIL7CrmqA3mPO3DvdQ8Uhn6UvGXxSb11Ztz6eHro+TIzeQOYLwXMhq7C+ebGopWebLYHFfo+qNhedFtdGHHxGHaNwdznQnldN0rqe/GoUgajIniys3BhK3kDfINILq7KSXlqQmFDL5R0m7BGnU58/jaICdIC/E/gjqYbcq0F6UoO8aW6K74ZCNveghbtqScm3Kkxo5Nu9vz4Cd7jwe2SUtgoyD05iae1b8B9diJT2Q6hV/D4A3bmcnaRohVZD42wjXsxOjmDKTo4K5bggaoSKRckqNPpwQ5acEKuh9ArePwB2zNr7LFFeohLDejjvRQyA6vTjcuyqz4zZ2hHWtMJiOpjkfDmEGLL1BA8/data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAANBSURBVDjLXZNrSFNhGMcPQQQRfYv60meJoiCtROuDZRcEA6MP3ckwS0tlZVlptnXRqavMaqZ5Ka1Jq1bOmWiXs466mqZzLs0103CmLp27HOdlaf+es2xFL/xe/jzv8/+/vA/nMACYsWpmDiEmjEQTMU+o/wvVFs+e64mAP3XGoWLmEtljzXv7vSMsXM37bHp1ZEPyK6+WsM+ifa+O4tyGuJHxzjQ79euJpb4AWwWT6tLv/zY1VI3hd9GOD8oQXtowglvNNhS3DfoQ9DWuB23K1R6nSeLh205+J18LMZex3mPOu41p9qH6aIfuQciPvHd9eGQcgIL7CrmqA3mPO3DvdQ8Uhn6UvGXxSb11Ztz6eHro+TIzeQOYLwXMhq7C+ebGopWebLYHFfo+qNhedFtdGHHxGHaNwdznQnldN0rqe/GoUgajIniys3BhK3kDfINILq7KSXlqQmFDL5R0m7BGnU58/jaICdIC/E/gjqYbcq0F6UoO8aW6K74ZCNveghbtqScm3Kkxo5Nu9vz4Cd7jwe2SUtgoyD05iae1b8B9diJT2Q6hV/D4A3bmcnaRohVZD42wjXsxOjmDKTo4K5bggaoSKRckqNPpwQ5acEKuh9ArePwB2zNr7LFFeohLDejjvRQyA6vTjcuyqz4zZ2hHWtMJiOpjkfDmEGLL1BA8/'

const columns = [
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

const data = [
  {
    status: "High",
    name: "Luctus",
    file: {
      name: "Luctus.ppt",
      size: "2Mb",
    },
    ipV4: "38.21.46.43/5",
    ipV6: "2855:93c2:2469:6cde:643b:e139:6aae:6e00",
    sourceLink: "https://dropbox.com/nulla/dapibus.xml",
    key: "1",
    additionalInfo: info
  },
  {
    status: "Medium",
    name: "Ante",
    file: {
      name: "Ante.tiff",
      size: "10Mb",
    },
    ipV4: "75.128.66.66/28",
    ipV6: "efcd:8153:a72c:7e0e:4200:896d:74d:bac1",
    sourceLink: "https://ow.ly/curae.aspx",
    key: "2",
    additionalInfo: info
  },
  {
    status: "Medium",
    name: "ElitProinInterdum",
    file: {
      name: "ElitProinInterdum.xls",
      size: "3Mb",
    },
    ipV4: "204.200.5.2/1",
    ipV6: "a454:1732:7eeb:b137:a1d:9d52:813b:506e",
    sourceLink: "http://google.com/sit.aspx",
    key: "3",
    additionalInfo: info
  },
  {
    status: "Low",
    name: "Non",
    file: {
      name: "Non.ppt",
      size: "536Kb",
    },
    ipV4: "127.234.110.193/28",
    ipV6: "efcd:8153:a72c:7e0e:4200:896d:74d:bac1",
    sourceLink: "http://hex.com/pede.json",
    key: "4",
    additionalInfo: info
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
