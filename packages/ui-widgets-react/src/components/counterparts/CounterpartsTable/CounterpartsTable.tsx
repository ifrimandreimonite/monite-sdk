import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Table,
  TableFooter,
  Tag,
  Text,
  UEnvelopeAlt,
  UPhone,
  UUserSquare,
  Button,
  HeadCellSort,
  SortOrderEnum,
  UArrowLeft,
  UArrowRight,
  DropdownMenuItem,
  useModal,
} from '@team-monite/ui-kit-react';

import {
  CounterpartIndividual,
  CounterpartOrganization,
  CounterpartResponse,
  CounterpartType,
} from '@team-monite/sdk-api';

import {
  useCounterpartCache,
  useCounterpartList,
  useDeleteCounterpart,
} from 'core/queries/useCounterpart';
import { useComponentsContext } from 'core/context/ComponentsContext';

import ConfirmDeleteDialogue from '../ConfirmDeleteDialogue';
import { default as FiltersComponent } from './Filters';

import { getCounterpartName } from '../helpers';
import {
  Sort,
  Filters,
  FilterValue,
  Receivablesapi__v1__counterparts__pagination__CursorFields,
} from './types';
import {
  FILTER_TYPE_SEARCH,
  FILTER_TYPE_TYPE,
  FILTER_TYPE_IS_CUSTOMER,
} from './consts';

import * as Styled from './styles';

import { PAGE_LIMIT } from '../../../constants';

export interface CounterpartsTableProps {
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onRowClick?: (id: string) => void;
  onChangeSort?: (params: {
    sort: Receivablesapi__v1__counterparts__pagination__CursorFields;
    order: SortOrderEnum | null;
  }) => void;
  onChangeFilter?: (filter: {
    field: keyof Filters;
    value: FilterValue;
  }) => void;
}

type CounterpartsTableRow = CounterpartResponse & {
  key: string;
};

const CounterpartsTable = ({
  onRowClick,
  onEdit,
  onDelete,
  onChangeSort: onChangeSortCallback,
  onChangeFilter: onChangeFilterCallback,
}: CounterpartsTableProps) => {
  const { t } = useComponentsContext();

  const {
    show,
    hide,
    isOpen,
    entity: selectedCounterpart,
  } = useModal<CounterpartResponse>();

  const [currentPaginationToken, setCurrentPaginationToken] = useState<
    string | null
  >(null);
  const [currentSort, setCurrentSort] = useState<Sort | null>(null);
  const [currentFilter, setCurrentFilter] = useState<Filters>({});

  const { destroy } = useCounterpartCache();

  // clear cache before unmount
  useEffect(() => destroy, [destroy]);

  const {
    data: counterparts,
    isLoading,
    isRefetching,
    refetch,
  } = useCounterpartList(
    undefined,
    undefined,
    PAGE_LIMIT,
    currentPaginationToken || undefined,
    currentSort ? currentSort.sort : undefined,
    currentFilter[FILTER_TYPE_TYPE] || undefined,
    undefined,
    currentFilter[FILTER_TYPE_SEARCH] || undefined,
    undefined,
    currentFilter[FILTER_TYPE_IS_CUSTOMER] === 'false' ? true : undefined,
    currentFilter[FILTER_TYPE_IS_CUSTOMER] === 'true' ? true : undefined
  );

  useEffect(() => {
    refetch();
  }, [currentPaginationToken, currentSort, currentFilter]);

  const onPrev = () =>
    setCurrentPaginationToken(counterparts?.prev_pagination_token || null);

  const onNext = () =>
    setCurrentPaginationToken(counterparts?.next_pagination_token || null);

  const onChangeSort = (sort: any, order: SortOrderEnum | null) => {
    setCurrentPaginationToken(null);
    if (order) {
      setCurrentSort({
        sort,
        order,
      });
    } else if (currentSort?.sort === sort && order === null) {
      setCurrentSort(null);
    }

    onChangeSortCallback && onChangeSortCallback({ sort, order });
  };

  const onChangeFilter = (field: keyof Filters, value: FilterValue) => {
    setCurrentPaginationToken(null);
    setCurrentFilter((prevFilter) => ({
      ...prevFilter,
      [field]: value === 'all' ? null : value,
    }));

    onChangeFilterCallback && onChangeFilterCallback({ field, value });
  };

  const deleteCounterpartMutation = useDeleteCounterpart();

  return (
    <>
      <Styled.Table clickableRow={!!onRowClick}>
        <FiltersComponent onChangeFilter={onChangeFilter} />
        <Table
          loading={isLoading || isRefetching}
          rowKey="id"
          columns={[
            {
              title: (
                <HeadCellSort
                  isActive={
                    currentSort?.sort ===
                    Receivablesapi__v1__counterparts__pagination__CursorFields.COUNTERPART_NAME
                  }
                  title={t('counterparts:columns.name')}
                  onChangeOrder={(order) =>
                    onChangeSort(
                      Receivablesapi__v1__counterparts__pagination__CursorFields.COUNTERPART_NAME,
                      order
                    )
                  }
                />
              ),
              dataIndex: 'name',
              key: 'name',
              render: (value, row) => {
                const type: CounterpartType = (row as CounterpartsTableRow)
                  .type;
                const data: CounterpartIndividual | CounterpartOrganization = (
                  row as any
                )[type];

                if (type === CounterpartType.ORGANIZATION) {
                  const orgData = data as CounterpartOrganization;

                  return (
                    <Styled.ColName>
                      <Avatar size={44}>{orgData?.legal_name}</Avatar>
                      <div>
                        <Text textSize="bold">{orgData.legal_name}</Text>
                        <Styled.AddressText>
                          {orgData?.registered_address?.country} •{' '}
                          {orgData?.registered_address?.city}
                        </Styled.AddressText>
                      </div>
                    </Styled.ColName>
                  );
                }

                const indData = data as CounterpartIndividual;

                return (
                  <Styled.ColName>
                    <Avatar size={44}>{indData?.first_name[0]}</Avatar>
                    <div>
                      <Text textSize="bold">{indData?.first_name}</Text>
                      <Styled.AddressText>
                        {indData?.residential_address?.country} •{' '}
                        {indData?.residential_address?.city}
                      </Styled.AddressText>
                    </div>
                  </Styled.ColName>
                );
              },
            },
            {
              title: t('counterparts:columns.type'),
              dataIndex: 'type',
              key: 'type',
              render: (value, row) => {
                const type: CounterpartType = (row as CounterpartsTableRow)
                  .type;
                const data: CounterpartIndividual | CounterpartOrganization = (
                  row as any
                )[type];

                return (
                  <Styled.ColType>
                    {data.is_customer && (
                      <Tag>{t('counterparts:customer')}</Tag>
                    )}
                    {data.is_vendor && <Tag>{t('counterparts:vendor')}</Tag>}
                  </Styled.ColType>
                );
              },
            },
            {
              title: t('counterparts:columns.contacts'),
              dataIndex: 'contacts',
              key: 'contacts',
              render: (value, row) => {
                const type: CounterpartType = (row as CounterpartsTableRow)
                  .type;
                const data: CounterpartIndividual | CounterpartOrganization = (
                  row as any
                )[type];

                if (type === CounterpartType.ORGANIZATION) {
                  const contacts = (
                    (data as CounterpartOrganization).contacts || []
                  ).map((c: any) => c.first_name);

                  return (
                    <Styled.ColContacts>
                      <div>
                        <UEnvelopeAlt width={16} height={16} />
                        {data.email}
                      </div>
                      {!!contacts.length && (
                        <div>
                          <UUserSquare width={16} height={16} />
                          {contacts.join(', ')}
                        </div>
                      )}
                      <div>
                        <UPhone width={16} height={16} />
                        {data.phone}
                      </div>
                    </Styled.ColContacts>
                  );
                }

                return null;
              },
            },
          ]}
          renderDropdownActions={(counterpart: CounterpartResponse) => (
            <>
              <DropdownMenuItem
                onClick={() => {
                  onEdit && onEdit(counterpart.id);
                }}
              >
                {t('counterparts:actions.edit')}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  show(counterpart);
                }}
              >
                {t('counterparts:actions.delete')}
              </DropdownMenuItem>
            </>
          )}
          data={counterparts?.data}
          onRow={(record) => ({
            onClick: () =>
              onRowClick && onRowClick((record as CounterpartResponse).id),
          })}
          scroll={{ y: 'auto' }}
          footer={() => (
            <TableFooter>
              <Button
                variant="contained"
                color="secondary"
                onClick={onPrev}
                disabled={!counterparts?.prev_pagination_token}
              >
                <UArrowLeft width={24} height={24} />
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={onNext}
                disabled={!counterparts?.next_pagination_token}
              >
                <UArrowRight width={24} height={24} />
              </Button>
            </TableFooter>
          )}
        />
      </Styled.Table>
      {isOpen && (
        <ConfirmDeleteDialogue
          isLoading={deleteCounterpartMutation.isLoading}
          onClose={hide}
          onDelete={async () => {
            if (selectedCounterpart) {
              await deleteCounterpartMutation.mutateAsync(selectedCounterpart);

              onDelete && onDelete(selectedCounterpart.id);
            }

            hide();
          }}
          type={t('counterparts:titles.counterpart')}
          name={
            selectedCounterpart ? getCounterpartName(selectedCounterpart) : ''
          }
        />
      )}
    </>
  );
};

export default CounterpartsTable;
