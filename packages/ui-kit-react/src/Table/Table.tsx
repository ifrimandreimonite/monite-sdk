import React, { ReactNode } from 'react';
import { default as RCTable } from 'rc-table';
import { TableProps as RCTableProps } from 'rc-table/lib/Table';
import styled from '@emotion/styled';

import { UEllipsisV } from '../unicons';
import {
  Dropdown,
  DropdownMenu,
  IconButton,
  Spinner,
  Text,
  useDropdownPopper,
} from '../index';

const TableWrapper = styled.div`
  position: relative;
  height: 100%;
`;

const SpinnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(255, 255, 255, 0.8);
`;

const StyledTable = styled(RCTable)`
  table {
    ${({ data }) => data?.length === 0 && 'height: 100%;'}
    border-collapse: collapse;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  th {
    text-align: left;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.grey};

    padding: 20px 16px;

    &:first-of-type {
      border-bottom-left-radius: 4px;
      border-top-left-radius: 4px;
    }

    &:last-of-type {
      padding-right: 16px;

      border-bottom-right-radius: 4px;
      border-top-right-radius: 4px;
    }
  }

  td {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.black};

    padding: 20px 16px;

    &:first-of-type {
      padding-left: 16px;
      border-bottom-left-radius: 4px;
      border-top-left-radius: 4px;
    }

    &:last-of-type {
      padding-right: 16px;
      border-bottom-right-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
`;

const ActionsMenu = styled.div`
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  > * + * {
    margin-left: 24px;
  }
`;

const DropdownToggler = styled(IconButton)`
  height: 32px;
  width: 32px;

  &:hover {
    color: ${({ theme }) => theme.colors.hoverAction};
  }
`;

const NoData = styled(Text)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface TableProps extends RCTableProps {
  loading?: boolean;
  dropdownActions?: ReactNode;
}

export const Table = ({
  dropdownActions,
  columns,
  loading,
  ...restProps
}: TableProps) => {
  const {
    shownDropdownMenu,
    toggleDropdownMenu,
    setReferenceElement,
    setPopperElement,
    popper,
  } = useDropdownPopper();

  return (
    <TableWrapper>
      {loading && (
        <SpinnerWrapper>
          <Spinner pxSize={30} />
        </SpinnerWrapper>
      )}
      <StyledTable
        rowKey="id"
        // @ts-ignore
        columns={
          columns && dropdownActions
            ? [
                ...columns,
                dropdownActions && {
                  title: '',
                  dataIndex: '',
                  key: 'operations',
                  render: (value, row, index) => {
                    // TODO move to separate component
                    return (
                      <ActionsMenu>
                        <Dropdown
                          onClickOutside={() => {
                            toggleDropdownMenu(false);
                          }}
                        >
                          <DropdownToggler
                            color="lightGrey1"
                            onClick={(e: React.BaseSyntheticEvent) => {
                              e.stopPropagation();
                              toggleDropdownMenu((shown) =>
                                !shown ? index : false
                              );
                            }}
                            // TODO ref is ignored. fix it.
                            ref={setReferenceElement}
                          >
                            <UEllipsisV width={20} height={20} />
                          </DropdownToggler>
                          {shownDropdownMenu === index && (
                            <DropdownMenu
                              innerRef={setPopperElement}
                              style={popper.styles.popper}
                              onClick={(e: React.BaseSyntheticEvent) => {
                                e.stopPropagation();
                                toggleDropdownMenu(false);
                              }}
                              {...popper.attributes.popper}
                            >
                              {dropdownActions}
                            </DropdownMenu>
                          )}
                        </Dropdown>
                      </ActionsMenu>
                    );
                  },
                },
              ]
            : columns
        }
        emptyText={
          <NoData textSize="h2" align="center">
            No Data
          </NoData>
        }
        {...restProps}
      />
    </TableWrapper>
  );
};
