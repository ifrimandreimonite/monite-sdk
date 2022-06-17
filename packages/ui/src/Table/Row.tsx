import React from 'react';
import styled, { ThemedStyledProps } from 'styled-components';
import { Button, Dropdown, DropdownMenu, useDropdownPopper } from '..';

import { DotsVIcon } from '../Icons';

type StyledTableRowProps = {
  $inactive?: boolean;
} & ThemedStyledProps<TableRowProps, any>;

const inactive = ({ $inactive, theme }: StyledTableRowProps) => {
  if (!$inactive) {
    return '';
  }

  return `
    td {
      color: ${theme.colors.grey};
    }
    img {
      opacity: 50%;
    }
  `;
};
const StyledTableRow = styled.tr<StyledTableRowProps>`
  ${inactive}

  &:hover td {
    background: ${({ theme }) => theme.colors.lightGrey3};
    ${({ onClick }) => (onClick ? 'cursor: pointer' : '')};
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

const DropdownToggler = styled(Button)`
  height: 32px;
  width: 32px;

  &:hover {
    color: ${({ theme }) => theme.colors.hoverAction};
  }
`;

type TableRowProps = {
  children: React.ReactNode;
  inactive?: boolean;
  buttonActions?: () => React.ReactNode;
  dropdownActions?: () => React.ReactNode;
  onClick?: () => void;
};

const TableRow = ({
  children,
  inactive,
  dropdownActions,
  buttonActions,
  onClick,
}: TableRowProps) => {
  const {
    shownDropdownMenu,
    toggleDropdownMenu,
    setReferenceElement,
    setPopperElement,
    popper,
  } = useDropdownPopper();

  return (
    <StyledTableRow $inactive={inactive} onClick={onClick}>
      {children}
      {dropdownActions || buttonActions ? (
        <td>
          <ActionsMenu>
            {buttonActions && buttonActions()}
            {dropdownActions && (
              <Dropdown
                onClickOutside={() => {
                  toggleDropdownMenu(false);
                }}
              >
                <DropdownToggler
                  icon={<DotsVIcon width={20} height={20} />}
                  color="lightGrey1"
                  noPadding
                  onClick={(e: React.BaseSyntheticEvent) => {
                    e.stopPropagation();
                    toggleDropdownMenu((shown) => !shown);
                  }}
                  ref={setReferenceElement}
                />
                {shownDropdownMenu ? (
                  <DropdownMenu
                    innerRef={setPopperElement}
                    style={popper.styles.popper}
                    onClick={(e: React.BaseSyntheticEvent) => {
                      e.stopPropagation();
                      toggleDropdownMenu(false);
                    }}
                    {...popper.attributes.popper}
                  >
                    {dropdownActions()}
                  </DropdownMenu>
                ) : null}
              </Dropdown>
            )}
          </ActionsMenu>
        </td>
      ) : null}
    </StyledTableRow>
  );
};

export default TableRow;