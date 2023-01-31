import styled from "styled-components";
import Table from "rc-table";

export const TableStyled = styled(Table)`
  table {
    width: 100%;
    border-spacing: 0px;

    thead {
      color: var(--gray-dark);

      & > tr > th {
        padding: 18px 21px 4px 21px;

        &:first-child {
          padding-left: 32px;
        }
      }
    }

    tbody {
      & > tr {
        border: var(--border-default);
        border-top: 8px solid var(--bg-gray);
        
        &.rc-table-measure-row {
          display: none;
        }

        &:not(.rc-table-expanded-row.rc-table-expanded-row-level-1, .rc-table-measure-row) {
          cursor: pointer;
          position: relative;
        }

        &:not(.rc-table-expanded-row.rc-table-expanded-row-level-1):hover {
          color: var(--white);

          td {
            background-color: var(--dark);

            div {
              position: relative;
              z-index: 2;
              cursor: text;
            }
          }

          svg path {
            fill: var(--white);
          }

          & div,
          & span {
            color: var(--white);
            border-color: var(--white);
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

        border-top: var(--border-default);
        border-bottom: var(--border-default);

        &:first-child {
          padding-left: 32px;
        }
      }
    }
  }
`;
