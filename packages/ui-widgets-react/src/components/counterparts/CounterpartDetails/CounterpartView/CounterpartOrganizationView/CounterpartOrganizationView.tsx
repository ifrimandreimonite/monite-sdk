import React, { ReactNode } from 'react';
import { LabelText, Card, Box } from '@monite/ui-kit-react';
import { useComponentsContext } from 'core/context/ComponentsContext';
import { CounterpartOrganizationFields } from '../../CounterpartOrganizationForm';
import { printAddress } from '../../CounterpartAddressForm';
import { printCounterpartType } from '../../helpers';

type CounterpartOrganizationViewProps = {
  actions: ReactNode;
  counterpart: CounterpartOrganizationFields;
};

const CounterpartOrganizationView = ({
  actions,
  counterpart: {
    companyName,
    phone,
    email,
    vatNumber,
    line1,
    line2,
    postalCode,
    city,
    country,
    state,
    isVendor,
    isCustomer,
  },
}: CounterpartOrganizationViewProps) => {
  const { t } = useComponentsContext();

  return (
    <Card actions={actions}>
      <Box sx={{ padding: '27px 23px 32px' }}>
        <LabelText
          label={t('counterparts:organization.companyName')}
          text={companyName}
        />
        <LabelText
          label={t('counterparts:columns.type')}
          text={printCounterpartType(
            isCustomer ? t('counterparts:customer') : undefined,
            isVendor ? t('counterparts:vendor') : undefined
          )}
        />
        <LabelText
          label={t('counterparts:organization.address')}
          text={printAddress({
            line1,
            line2,
            postalCode,
            city,
            country,
            state,
          })}
        />
        {phone && (
          <LabelText
            label={t('counterparts:organization.phone')}
            text={phone}
          />
        )}
        {email && (
          <LabelText
            label={t('counterparts:organization.email')}
            text={email}
          />
        )}
        {vatNumber && (
          <LabelText
            label={t('counterparts:organization.vatNumber')}
            text={vatNumber}
          />
        )}
      </Box>
    </Card>
  );
};

export default CounterpartOrganizationView;