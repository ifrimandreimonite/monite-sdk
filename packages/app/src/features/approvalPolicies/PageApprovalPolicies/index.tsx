import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ApprovalPoliciesTable, ApprovalPolicyCreate } from '@monite/react-kit';
import { Button, Sidebar } from '@monite/ui';

import Layout from 'features/app/Layout';
import PageHeader from 'features/app/Layout/PageHeader';
import TestData from '@monite/react-kit/src/components/approvalPolicies/fixtures/list';

const PageApprovalPolicies = () => {
  const { t } = useTranslation();
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);

  return (
    <Layout>
      <PageHeader
        title={t('approvalPolicies:approvalPolicies')}
        extra={[
          <Button key="1" onClick={() => setSidebarIsOpen(true)}>
            {t('common:createNew')}
          </Button>,
        ]}
      />
      <ApprovalPoliciesTable data={TestData.data} />
      {sidebarIsOpen && (
        <Sidebar
          isOpen={sidebarIsOpen}
          onClickBackdrop={() => setSidebarIsOpen(false)}
        >
          <ApprovalPolicyCreate
            handleOnCancel={() => setSidebarIsOpen(false)}
          />
        </Sidebar>
      )}
    </Layout>
  );
};

export default PageApprovalPolicies;
