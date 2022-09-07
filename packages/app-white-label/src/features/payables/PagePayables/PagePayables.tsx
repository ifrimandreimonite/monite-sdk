import React from 'react';
import { PayablesTableWithAPI, PayableDetails } from '@monite/ui-widgets-react';
import { useSearchParams } from 'react-router-dom';

import Layout from 'features/app/Layout';
import PageHeader from 'features/app/Layout/PageHeader';

const PAYABLE_ID = 'id';

const PagePayables = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get(PAYABLE_ID);

  const openModal = (id: string) => {
    searchParams.set(PAYABLE_ID, id);
    setSearchParams(searchParams);
  };

  const closeModal = () => {
    searchParams.delete(PAYABLE_ID);
    setSearchParams(searchParams);
  };

  return (
    <Layout>
      <PageHeader title="Payables" />
      <PayablesTableWithAPI openModal={openModal} />
      {id && <PayableDetails id={id} onClose={closeModal} />}
    </Layout>
  );
};

export default PagePayables;