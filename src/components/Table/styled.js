import styled from "styled-components"
import Table from "rc-table"

export const TableStyled = styled(Table)`
  table {
    width: 100%;

    thead {
      color: #70707B;
      
      & > tr > th {
        padding: 18px 21px;

        &:first-child {
          padding-left: 32px;
        }
      }
    }

    tbody {
      & > tr > td {
        padding: 18px 21px;

        &:first-child {
          padding-left: 32px;
        }
      }
    }
  }
`