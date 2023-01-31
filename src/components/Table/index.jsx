import Table from "rc-table";

const CustomTable = (props) => {
  const { columns, data, ...rest } = props;
  return ( 
    <Table
      columns={columns}
      data={data}
      {...rest}
    />
  );
}

export default CustomTable;
