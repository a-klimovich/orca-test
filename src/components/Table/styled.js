import styled from "styled-components";
import Table from "rc-table";

export const TableStyled = styled(Table)`
  table {
    width: 100%;

    thead {
      color: #70707b;

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
        
        /* &:not(.rc-table-expanded-row.rc-table-expanded-row-level-1) {
          cursor: pointer;
        }

        &:not(.rc-table-expanded-row.rc-table-expanded-row-level-1):hover {
          color: var(--white);

          td {
            background-color: var(--dark);
          }

          svg path {
            fill: var(--white);
          }

          & div,
          & span {
            color: var(--white);
            border-color: var(--white);
          }
        } */

        & td ~ & > tr {
          &:hover {
            cursor: pointer;
          }
        }

        &.rc-table-expanded-row.rc-table-expanded-row-level-1 {
          border-top-width: 0;

          & > td {
            max-height: 208px;
            overflow-y: scroll;
          }
        }
      }

      & > tr td {
        padding: 18px 21px;
        background-color: var(--white);

        &:first-child {
          padding-left: 32px;
        }

        & ~ tr {
          color: red !important;
        }
      }
    }
  }
`;
