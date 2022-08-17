/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api__v1__payables__pagination__CursorFields } from '../models/api__v1__payables__pagination__CursorFields';
import type { CurrencyEnum } from '../models/CurrencyEnum';
import type { OrderEnum } from '../models/OrderEnum';
import type { PaginationResponse } from '../models/PaginationResponse';
import type { PayableStateEnum } from '../models/PayableStateEnum';

import type { CancelablePromise } from '../CancelablePromise';
import { OpenAPIConfig } from '../OpenAPI';
import { request as __request } from '../request';

export default class PartnerApiService {
  openapiConfig: Partial<OpenAPIConfig>;

  constructor({ config }: { config: Partial<OpenAPIConfig> }) {
    this.openapiConfig = config;
  }

  /**
   * Get Payables
   * Lists all payables from the connected entity.
   * @param xMoniteEntityId monite entity_id
   * @param order Sort order: `asc` (ascending) or `desc` (descending).
   * @param limit The maximum number of results to return per page.
   * @param paginationToken The pagination token to access the next or previous page of results. If `pagination_token` is specified, the `sort`, `order`, and filtering parameters are ignored.
   * @param sort The field by which the results will be sorted.
   * @param createdAt
   * @param createdAtGt
   * @param createdAtLt
   * @param createdAtGte
   * @param createdAtLte
   * @param status
   * @param amount
   * @param amountGt
   * @param amountLt
   * @param amountGte
   * @param amountLte
   * @param currency
   * @param counterpartName
   * @param dueDate
   * @param dueDateGt
   * @param dueDateLt
   * @param dueDateGte
   * @param dueDateLte
   * @param documentId
   * @returns PaginationResponse Successful Response
   * @throws ApiError
   */

  public getPayables(
    xMoniteEntityId: string,
    order?: OrderEnum,
    limit: number = 100,
    paginationToken?: string,
    sort?: api__v1__payables__pagination__CursorFields,
    createdAt?: string,
    createdAtGt?: string,
    createdAtLt?: string,
    createdAtGte?: string,
    createdAtLte?: string,
    status?: PayableStateEnum,
    amount?: number,
    amountGt?: number,
    amountLt?: number,
    amountGte?: number,
    amountLte?: number,
    currency?: CurrencyEnum,
    counterpartName?: string,
    dueDate?: string,
    dueDateGt?: string,
    dueDateLt?: string,
    dueDateGte?: string,
    dueDateLte?: string,
    documentId?: string
  ): CancelablePromise<PaginationResponse> {
    return __request(
      {
        method: 'GET',
        url: '/payables',
        headers: {
          'x-monite-entity-id': xMoniteEntityId,
        },
        query: {
          order: order,
          limit: limit,
          pagination_token: paginationToken,
          sort: sort,
          created_at: createdAt,
          created_at__gt: createdAtGt,
          created_at__lt: createdAtLt,
          created_at__gte: createdAtGte,
          created_at__lte: createdAtLte,
          status: status,
          amount: amount,
          amount__gt: amountGt,
          amount__lt: amountLt,
          amount__gte: amountGte,
          amount__lte: amountLte,
          currency: currency,
          counterpart_name: counterpartName,
          due_date: dueDate,
          due_date__gt: dueDateGt,
          due_date__lt: dueDateLt,
          due_date__gte: dueDateGte,
          due_date__lte: dueDateLte,
          document_id: documentId,
        },
        errors: {
          400: `Bad Request`,
          401: `Unauthorized`,
          403: `Forbidden`,
          405: `Method Not Allowed`,
          406: `Not Acceptable`,
          422: `Validation Error`,
          500: `Internal Server Error`,
        },
      },
      this.openapiConfig
    );
  }
}