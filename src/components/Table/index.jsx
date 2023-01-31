import { TableStyled } from './styles'

const Table = (props) => {
  const { columns, data, ...rest } = props;
  return ( 
    <TableStyled
      columns={columns}
      data={data}
      {...rest}
    />
  );
}

export default Table;
