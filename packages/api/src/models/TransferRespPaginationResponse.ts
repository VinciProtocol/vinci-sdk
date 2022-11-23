/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Status } from './Status'
import type { TransferResp } from './TransferResp'

export type TransferRespPaginationResponse = {
  /**
   * The syncing status of the address [SYNCING/SYNCED]
   */
  status?: Status
  /**
   * The total number of matches for this query
   */
  total?: number
  /**
   * The current page of the result
   */
  page?: number
  /**
   * The number of results per page
   */
  page_size?: number
  /**
   * The cursor to get to the next page
   */
  cursor?: string
  result: Array<TransferResp>
}
