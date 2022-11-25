import {
  CurrencyEnum,
  PayableOriginEnum,
  PayableResponseSchema,
  PayableStateEnum,
  SourceOfPayableDataEnum,
} from '@team-monite/sdk-api';

export const payableListFixture: PayableResponseSchema[] = [
  {
    id: 'f58992bc-0e9d-4b13-b30e-bf31d84a31c2',
    entity_id: 'ec74ceb6-d1ef-4898-b5b3-d2520a52c073',
    marked_as_paid_with_comment: undefined,
    marked_as_paid_by_entity_user_id: undefined,
    status: PayableStateEnum.PAID,
    source_of_payable_data: SourceOfPayableDataEnum.OCR,
    currency: CurrencyEnum.EUR,
    amount: undefined,
    description: undefined,
    due_date: undefined,
    payment_terms: undefined,
    suggested_payment_term: undefined,
    issued_at: undefined,
    counterpart_bank_id: undefined,
    counterpart_id: 'organization',
    counterpart_account_id: undefined,
    counterpart_name: 'freepikcompany',
    payable_origin: PayableOriginEnum.UPLOAD,
    was_created_by_user_id: '5b4daced-6b9a-4707-83c6-08193d999fab',
    was_created_by_external_user_name: undefined,
    was_created_by_external_user_id: undefined,
    currency_exchange: undefined,
    file: {
      id: '492ca18b-e561-4cab-b26d-fa300ef99c0f',
      created_at: '2022-08-24T10:00:23.655710+00:00',
      file_type: 'payables',
      name: 'upload',
      region: 'eu-central-1',
      md5: 'ded10c3c0e3c8eb273fb3546c8288b65',
      mimetype: 'image/jpeg',
      url: 'https://monite-file-saver-payables-eu-central-1-dev.s3.amazonaws.com/492ca18b-e561-4cab-b26d-fa300ef99c0f/908a5387-d04a-4dee-ac34-650a9ffa4fcb.jpg',
      size: 343984,
      previews: [],
      pages: [],
    },
    tags: [],
    created_at: '2022-08-30T13:37:51.198170+00:00',
    updated_at: '2022-08-30T13:37:52.085212+00:00',
    other_extracted_data: {},
    applied_policy: undefined,
    document_id: '2021-1852767',
    subtotal: undefined,
    tax: undefined,
  },
  {
    id: '652bab64-5abb-4dcf-9961-6643f6ef58f8',
    entity_id: 'ec74ceb6-d1ef-4898-b5b3-d2520a52c073',
    marked_as_paid_with_comment: undefined,
    marked_as_paid_by_entity_user_id: undefined,
    status: PayableStateEnum.PAID,
    source_of_payable_data: SourceOfPayableDataEnum.OCR,
    currency: CurrencyEnum.EUR,
    amount: undefined,
    description: undefined,
    due_date: undefined,
    payment_terms: undefined,
    suggested_payment_term: undefined,
    issued_at: undefined,
    counterpart_bank_id: undefined,
    counterpart_id: 'organization',
    counterpart_account_id: undefined,
    counterpart_name: 'freepikcompany',
    payable_origin: PayableOriginEnum.UPLOAD,
    was_created_by_user_id: '5b4daced-6b9a-4707-83c6-08193d999fab',
    was_created_by_external_user_name: undefined,
    was_created_by_external_user_id: undefined,
    currency_exchange: undefined,
    file: {
      id: '492ca18b-e561-4cab-b26d-fa300ef99c0f',
      created_at: '2022-08-24T10:00:23.655710+00:00',
      file_type: 'payables',
      name: 'upload',
      region: 'eu-central-1',
      md5: 'ded10c3c0e3c8eb273fb3546c8288b65',
      mimetype: 'image/jpeg',
      url: 'https://monite-file-saver-payables-eu-central-1-dev.s3.amazonaws.com/492ca18b-e561-4cab-b26d-fa300ef99c0f/908a5387-d04a-4dee-ac34-650a9ffa4fcb.jpg',
      size: 343984,
      previews: [],
      pages: [],
    },
    tags: [],
    created_at: '2022-08-30T13:37:53.295770+00:00',
    updated_at: '2022-08-30T13:37:54.177681+00:00',
    other_extracted_data: {},
    applied_policy: undefined,
    document_id: '2021-1852767',
    subtotal: undefined,
    tax: undefined,
  },
  {
    id: '85e33018-4e44-4dcf-ad7b-ea899e00a938',
    entity_id: 'ec74ceb6-d1ef-4898-b5b3-d2520a52c073',
    marked_as_paid_with_comment: undefined,
    marked_as_paid_by_entity_user_id: undefined,
    status: PayableStateEnum.PAID,
    source_of_payable_data: SourceOfPayableDataEnum.OCR,
    currency: CurrencyEnum.EUR,
    amount: undefined,
    description: undefined,
    due_date: undefined,
    payment_terms: undefined,
    suggested_payment_term: undefined,
    issued_at: undefined,
    counterpart_bank_id: undefined,
    counterpart_id: 'organization',
    counterpart_account_id: undefined,
    counterpart_name: 'freepikcompany',
    payable_origin: PayableOriginEnum.UPLOAD,
    was_created_by_user_id: '5b4daced-6b9a-4707-83c6-08193d999fab',
    was_created_by_external_user_name: undefined,
    was_created_by_external_user_id: undefined,
    currency_exchange: undefined,
    file: {
      id: '492ca18b-e561-4cab-b26d-fa300ef99c0f',
      created_at: '2022-08-24T10:00:23.655710+00:00',
      file_type: 'payables',
      name: 'upload',
      region: 'eu-central-1',
      md5: 'ded10c3c0e3c8eb273fb3546c8288b65',
      mimetype: 'image/jpeg',
      url: 'https://monite-file-saver-payables-eu-central-1-dev.s3.amazonaws.com/492ca18b-e561-4cab-b26d-fa300ef99c0f/908a5387-d04a-4dee-ac34-650a9ffa4fcb.jpg',
      size: 343984,
      previews: [],
      pages: [],
    },
    tags: [],
    created_at: '2022-08-30T13:37:55.239245+00:00',
    updated_at: '2022-08-30T13:37:56.185089+00:00',
    other_extracted_data: {},
    applied_policy: undefined,
    document_id: '2021-1852767',
    subtotal: undefined,
    tax: undefined,
  },
  {
    id: '9bb48e4c-39b3-4924-8477-d61500073cfa',
    entity_id: 'ec74ceb6-d1ef-4898-b5b3-d2520a52c073',
    marked_as_paid_with_comment: undefined,
    marked_as_paid_by_entity_user_id: undefined,
    status: PayableStateEnum.PAID,
    source_of_payable_data: SourceOfPayableDataEnum.OCR,
    currency: CurrencyEnum.EUR,
    amount: undefined,
    description: undefined,
    due_date: undefined,
    payment_terms: undefined,
    suggested_payment_term: undefined,
    issued_at: undefined,
    counterpart_bank_id: undefined,
    counterpart_id: 'organization',
    counterpart_account_id: undefined,
    counterpart_name: 'freepikcompany',
    payable_origin: PayableOriginEnum.UPLOAD,
    was_created_by_user_id: '5b4daced-6b9a-4707-83c6-08193d999fab',
    was_created_by_external_user_name: undefined,
    was_created_by_external_user_id: undefined,
    currency_exchange: undefined,
    file: {
      id: '492ca18b-e561-4cab-b26d-fa300ef99c0f',
      created_at: '2022-08-24T10:00:23.655710+00:00',
      file_type: 'payables',
      name: 'upload',
      region: 'eu-central-1',
      md5: 'ded10c3c0e3c8eb273fb3546c8288b65',
      mimetype: 'image/jpeg',
      url: 'https://monite-file-saver-payables-eu-central-1-dev.s3.amazonaws.com/492ca18b-e561-4cab-b26d-fa300ef99c0f/908a5387-d04a-4dee-ac34-650a9ffa4fcb.jpg',
      size: 343984,
      previews: [],
      pages: [],
    },
    tags: [],
    created_at: '2022-08-30T13:37:57.140305+00:00',
    updated_at: '2022-08-30T13:37:58.073995+00:00',
    other_extracted_data: {},
    applied_policy: undefined,
    document_id: '2021-1852767',
    subtotal: undefined,
    tax: undefined,
  },
  {
    id: '60aad3fa-62aa-4ab4-9082-71919819d456',
    entity_id: 'ec74ceb6-d1ef-4898-b5b3-d2520a52c073',
    marked_as_paid_with_comment: undefined,
    marked_as_paid_by_entity_user_id: undefined,
    status: PayableStateEnum.WAITING_TO_BE_PAID,
    source_of_payable_data: SourceOfPayableDataEnum.OCR,
    currency: CurrencyEnum.USD,
    amount: 120,
    description: '',
    due_date: '2022-09-05',
    payment_terms: undefined,
    suggested_payment_term: undefined,
    issued_at: '2022-08-31',
    counterpart_bank_id: '',
    counterpart_id: 'organization',
    counterpart_account_id: '',
    counterpart_name: 'Acme Inc.',
    payable_origin: PayableOriginEnum.UPLOAD,
    was_created_by_user_id: '5b4daced-6b9a-4707-83c6-08193d999fab',
    was_created_by_external_user_name: undefined,
    was_created_by_external_user_id: undefined,
    currency_exchange: undefined,
    file: {
      id: '492ca18b-e561-4cab-b26d-fa300ef99c0f',
      created_at: '2022-08-24T10:00:23.655710+00:00',
      file_type: 'payables',
      name: 'upload',
      region: 'eu-central-1',
      md5: 'ded10c3c0e3c8eb273fb3546c8288b65',
      mimetype: 'image/jpeg',
      url: 'https://monite-file-saver-payables-eu-central-1-dev.s3.amazonaws.com/492ca18b-e561-4cab-b26d-fa300ef99c0f/908a5387-d04a-4dee-ac34-650a9ffa4fcb.jpg',
      size: 343984,
      previews: [],
      pages: [],
    },
    tags: [
      {
        name: 'Company 083020221637587623',
        id: 'fd73da5f-1ece-425f-a324-fd7216e9b920',
      },
      {
        name: 'Company 08302022163758885',
        id: '818eea0f-9f51-4c5d-b748-5346a9742f59',
      },
    ],
    created_at: '2022-08-30T13:37:59.949505+00:00',
    updated_at: '2022-08-31T14:17:01.299259+00:00',
    other_extracted_data: {},
    applied_policy: undefined,
    document_id: '2021-1852767',
    subtotal: undefined,
    tax: undefined,
  },
  {
    id: '97710e68-f7dc-49d2-a483-f4796fe7cfa7',
    entity_id: 'ec74ceb6-d1ef-4898-b5b3-d2520a52c073',
    marked_as_paid_with_comment: undefined,
    marked_as_paid_by_entity_user_id: undefined,
    status: PayableStateEnum.REJECTED,
    source_of_payable_data: SourceOfPayableDataEnum.OCR,
    currency: CurrencyEnum.USD,
    amount: 120,
    description: '',
    due_date: '2022-09-05',
    payment_terms: undefined,
    suggested_payment_term: { date: '2022-08-04', discount: undefined },
    issued_at: '2022-08-31',
    counterpart_bank_id: 'еуые',
    counterpart_id: 'organization',
    counterpart_account_id: 'еуые',
    counterpart_name: 'Acme Inc.',
    payable_origin: PayableOriginEnum.UPLOAD,
    was_created_by_user_id: '5b4daced-6b9a-4707-83c6-08193d999fab',
    was_created_by_external_user_name: undefined,
    was_created_by_external_user_id: undefined,
    currency_exchange: undefined,
    file: {
      id: '492ca18b-e561-4cab-b26d-fa300ef99c0f',
      created_at: '2022-08-24T10:00:23.655710+00:00',
      file_type: 'payables',
      name: 'upload',
      region: 'eu-central-1',
      md5: 'ded10c3c0e3c8eb273fb3546c8288b65',
      mimetype: 'image/jpeg',
      url: 'https://monite-file-saver-payables-eu-central-1-dev.s3.amazonaws.com/492ca18b-e561-4cab-b26d-fa300ef99c0f/908a5387-d04a-4dee-ac34-650a9ffa4fcb.jpg',
      size: 343984,
      previews: [],
      pages: [],
    },
    tags: [
      {
        name: 'Company 083020221638001878',
        id: 'f3713120-5909-4776-adf0-4c6cd659c0b4',
      },
      {
        name: 'Company 083020221638004821',
        id: '19e92fbb-9e4d-415c-b8fe-acb07d7af2a6',
      },
    ],
    created_at: '2022-08-30T13:38:02.165618+00:00',
    updated_at: '2022-08-31T12:23:38.878373+00:00',
    other_extracted_data: {},
    applied_policy: undefined,
    document_id: '2021-1852767',
    subtotal: undefined,
    tax: undefined,
  },
  {
    id: 'df3fbebd-552f-46e5-9d5e-1f7a6df1add9',
    entity_id: 'ec74ceb6-d1ef-4898-b5b3-d2520a52c073',
    marked_as_paid_with_comment: undefined,
    marked_as_paid_by_entity_user_id: undefined,
    status: PayableStateEnum.WAITING_TO_BE_PAID,
    source_of_payable_data: SourceOfPayableDataEnum.OCR,
    currency: CurrencyEnum.USD,
    amount: 120,
    description: '',
    due_date: '2022-09-05',
    payment_terms: undefined,
    suggested_payment_term: { date: '2022-08-13', discount: undefined },
    issued_at: '2022-08-31',
    counterpart_bank_id: 'test',
    counterpart_id: 'b75e3b5b-25d2-43f1-b8b8-5d18587cb2f6',
    counterpart_account_id: 'test',
    counterpart_name: "Lee L'Oneel",
    payable_origin: PayableOriginEnum.UPLOAD,
    was_created_by_user_id: '5b4daced-6b9a-4707-83c6-08193d999fab',
    was_created_by_external_user_name: undefined,
    was_created_by_external_user_id: undefined,
    currency_exchange: undefined,
    file: {
      id: '492ca18b-e561-4cab-b26d-fa300ef99c0f',
      created_at: '2022-08-24T10:00:23.655710+00:00',
      file_type: 'payables',
      name: 'upload',
      region: 'eu-central-1',
      md5: 'ded10c3c0e3c8eb273fb3546c8288b65',
      mimetype: 'image/jpeg',
      url: 'https://monite-file-saver-payables-eu-central-1-dev.s3.amazonaws.com/492ca18b-e561-4cab-b26d-fa300ef99c0f/908a5387-d04a-4dee-ac34-650a9ffa4fcb.jpg',
      size: 343984,
      previews: [],
      pages: [],
    },
    tags: [
      {
        name: 'Company 083020221638029470',
        id: '673f2a63-7a41-4c44-9cc1-7ea99d73e3c6',
      },
      {
        name: 'Company 083020221638026975',
        id: 'ca452ef0-4564-4920-895d-8e955f738c08',
      },
    ],
    created_at: '2022-08-30T13:38:04.500284+00:00',
    updated_at: '2022-08-31T12:43:16.766491+00:00',
    other_extracted_data: {},
    applied_policy: undefined,
    document_id: '2021-1852767',
    subtotal: undefined,
    tax: undefined,
  },
  {
    id: '610cc0e1-bafb-4efe-b55a-f205ab4a5975',
    entity_id: 'ec74ceb6-d1ef-4898-b5b3-d2520a52c073',
    marked_as_paid_with_comment: undefined,
    marked_as_paid_by_entity_user_id: undefined,
    status: PayableStateEnum.WAITING_TO_BE_PAID,
    source_of_payable_data: SourceOfPayableDataEnum.OCR,
    currency: CurrencyEnum.USD,
    amount: 120,
    description: '',
    due_date: '2022-09-05',
    payment_terms: undefined,
    suggested_payment_term: undefined,
    issued_at: '2022-08-31',
    counterpart_bank_id: '',
    counterpart_id: 'organization',
    counterpart_account_id: '',
    counterpart_name: 'Acme Inc.',
    payable_origin: PayableOriginEnum.UPLOAD,
    was_created_by_user_id: '5b4daced-6b9a-4707-83c6-08193d999fab',
    was_created_by_external_user_name: undefined,
    was_created_by_external_user_id: undefined,
    currency_exchange: undefined,
    file: {
      id: '492ca18b-e561-4cab-b26d-fa300ef99c0f',
      created_at: '2022-08-24T10:00:23.655710+00:00',
      file_type: 'payables',
      name: 'upload',
      region: 'eu-central-1',
      md5: 'ded10c3c0e3c8eb273fb3546c8288b65',
      mimetype: 'image/jpeg',
      url: 'https://monite-file-saver-payables-eu-central-1-dev.s3.amazonaws.com/492ca18b-e561-4cab-b26d-fa300ef99c0f/908a5387-d04a-4dee-ac34-650a9ffa4fcb.jpg',
      size: 343984,
      previews: [],
      pages: [],
    },
    tags: [
      {
        name: 'Company 083020221638048234',
        id: 'fdf72bb4-1012-4568-bb84-450f845ee0be',
      },
      {
        name: 'Company 083020221638053848',
        id: '29474e57-0f6d-4945-ae72-27fce4dbac4c',
      },
    ],
    created_at: '2022-08-30T13:38:06.724962+00:00',
    updated_at: '2022-08-31T14:08:06.476861+00:00',
    other_extracted_data: {},
    applied_policy: undefined,
    document_id: '2021-1852767',
    subtotal: undefined,
    tax: undefined,
  },
  {
    id: '6ee41ee6-0b26-4da8-b8e8-0973c242177a',
    entity_id: 'ec74ceb6-d1ef-4898-b5b3-d2520a52c073',
    marked_as_paid_with_comment: undefined,
    marked_as_paid_by_entity_user_id: undefined,
    status: PayableStateEnum.WAITING_TO_BE_PAID,
    source_of_payable_data: SourceOfPayableDataEnum.OCR,
    currency: CurrencyEnum.USD,
    amount: 120,
    description: '',
    due_date: '2022-09-05',
    payment_terms: undefined,
    suggested_payment_term: undefined,
    issued_at: '2022-08-31',
    counterpart_bank_id: '',
    counterpart_id: 'organization',
    counterpart_account_id: '',
    counterpart_name: 'Acme Inc.',
    payable_origin: PayableOriginEnum.UPLOAD,
    was_created_by_user_id: '5b4daced-6b9a-4707-83c6-08193d999fab',
    was_created_by_external_user_name: undefined,
    was_created_by_external_user_id: undefined,
    currency_exchange: undefined,
    file: {
      id: '492ca18b-e561-4cab-b26d-fa300ef99c0f',
      created_at: '2022-08-24T10:00:23.655710+00:00',
      file_type: 'payables',
      name: 'upload',
      region: 'eu-central-1',
      md5: 'ded10c3c0e3c8eb273fb3546c8288b65',
      mimetype: 'image/jpeg',
      url: 'https://monite-file-saver-payables-eu-central-1-dev.s3.amazonaws.com/492ca18b-e561-4cab-b26d-fa300ef99c0f/908a5387-d04a-4dee-ac34-650a9ffa4fcb.jpg',
      size: 343984,
      previews: [],
      pages: [],
    },
    tags: [
      {
        name: 'Company 083020221638074417',
        id: 'ea69abf8-dfaf-4fec-9c3d-aa58eade851b',
      },
      {
        name: 'Company 083020221638071856',
        id: '46c38454-a2c9-4d54-9b8d-990ab7d74971',
      },
    ],
    created_at: '2022-08-30T13:38:09.041500+00:00',
    updated_at: '2022-08-31T14:19:38.049072+00:00',
    other_extracted_data: {},
    applied_policy: undefined,
    document_id: '2021-1852767',
    subtotal: undefined,
    tax: undefined,
  },
  {
    id: '9b8ed755-1b28-43e4-9662-b3ed1c824a42',
    entity_id: 'ec74ceb6-d1ef-4898-b5b3-d2520a52c073',
    marked_as_paid_with_comment: undefined,
    marked_as_paid_by_entity_user_id: undefined,
    status: PayableStateEnum.WAITING_TO_BE_PAID,
    source_of_payable_data: SourceOfPayableDataEnum.OCR,
    currency: CurrencyEnum.USD,
    amount: 120,
    description: '',
    due_date: '2022-09-05',
    payment_terms: undefined,
    suggested_payment_term: { date: '2022-08-04', discount: undefined },
    issued_at: '2022-08-31',
    counterpart_bank_id: 'test',
    counterpart_id: 'f32a85d0-b817-4368-960a-8eb6f1136885',
    counterpart_account_id: 'test',
    counterpart_name: "Lee L'Oneel",
    payable_origin: PayableOriginEnum.UPLOAD,
    was_created_by_user_id: '5b4daced-6b9a-4707-83c6-08193d999fab',
    was_created_by_external_user_name: undefined,
    was_created_by_external_user_id: undefined,
    currency_exchange: undefined,
    file: {
      id: '492ca18b-e561-4cab-b26d-fa300ef99c0f',
      created_at: '2022-08-24T10:00:23.655710+00:00',
      file_type: 'payables',
      name: 'upload',
      region: 'eu-central-1',
      md5: 'ded10c3c0e3c8eb273fb3546c8288b65',
      mimetype: 'image/jpeg',
      url: 'https://monite-file-saver-payables-eu-central-1-dev.s3.amazonaws.com/492ca18b-e561-4cab-b26d-fa300ef99c0f/908a5387-d04a-4dee-ac34-650a9ffa4fcb.jpg',
      size: 343984,
      previews: [],
      pages: [],
    },
    tags: [
      {
        name: 'Company 083020221638094812',
        id: 'c44ea5c6-91c7-44a4-9949-1b865cade9ac',
      },
      {
        name: 'Company 083020221638092412',
        id: '87eba32c-09a0-424b-84b3-e56aa220dd67',
      },
    ],
    created_at: '2022-08-30T13:38:11.342149+00:00',
    updated_at: '2022-08-31T14:41:32.444951+00:00',
    other_extracted_data: {},
    applied_policy: undefined,
    document_id: '2021-1852767',
    subtotal: undefined,
    tax: undefined,
  },
];
