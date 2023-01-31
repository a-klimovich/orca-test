import styled from "styled-components";

const MyTable = styled.table`
  width: 100%;
`;

const HeaderWrapper = styled.thead`
  color: var(--gray-dark);
`;
const HeaderRow = styled.tr``;
const HeaderCell = styled.th`
  padding: 18px 21px 4px 21px;

  &:first-child {
    padding-left: 32px;
  }
`;

const BodyWrapper = styled.tbody`
  tr.rc-table-measure-row {
    display: none;
    padding: 2rem;
  }

  tr:not(.rc-table-expanded-row-level-1) td:first-child div.custom-cell-box {
    line-height: 28px;
    border-radius: var(--radius) 0 0 var(--radius);
    border-left: var(--border-default);
  }
`;

const BodyRow = styled.tr`
  border-top: 8px solid var(--bg-gray);

  &.rc-table-expanded-row.rc-table-expanded-row-level-1 {
    background-color: var(--white);

    & > td > div {
      border: var(--border-default);
      border-top: none;
      border-radius: 0 0 4px 4px;
    }
  }

  &.rc-table-expanded-row.rc-table-expanded-row-level-1 {
    border-top-width: 0;

    & > td {
      max-height: 208px;
      overflow-y: scroll;
    }
  }

  &:not(.rc-table-expanded-row.rc-table-expanded-row-level-1):hover {
    color: var(--white);

    td .custom-cell-box {
      cursor: pointer;
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
`;

const BodyCell = styled.td`
  position: relative;

  &:last-child .custom-cell-box {
    border-radius: 0 var(--radius) var(--radius) 0;
    border-right: var(--border-default);
  }

  & .custom-cell-box {
    position: absolute;
    position: relative;
    padding: 18px 21px;
    background-color: var(--white);

    border-top: var(--border-default);
    border-bottom: var(--border-default);
  }
`;

export const components = {
  table: MyTable,
  header: {
    wrapper: HeaderWrapper,
    row: HeaderRow,
    cell: HeaderCell,
  },
  body: {
    wrapper: BodyWrapper,
    row: BodyRow,
    cell: BodyCell,
  },
};
