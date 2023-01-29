import styled from "styled-components"
import Table from "rc-table"

export const TableStyled = styled(Table)`
  table {
    width: 100%;

    thead {
      color: #70707B;
      
      & > tr > th {
        padding: 18px 21px 4px 21px;

        &:first-child {
          padding-left: 32px;
        }
      }
    }

    tbody {
      & > tr {
        border-top: 8px solid var(--bg-gray);
        &.rc-table-expanded-row.rc-table-expanded-row-level-1 {
          border-top-width: 0;
        }

        td {
          padding: 18px 21px;
          background-color: var(--white);

          &:first-child {
            padding-left: 32px;
          }
        }
      }
    }
  }
`