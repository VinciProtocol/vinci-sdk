/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Chain } from '../models/Chain'
import type { Format } from '../models/Format'
import type { NFTSimplePaginationResponse } from '../models/NFTSimplePaginationResponse'
import type { NFTSingle } from '../models/NFTSingle'

import type { CancelablePromise } from '../core/CancelablePromise'
import { OpenAPI } from '../core/OpenAPI'
import { request as __request } from '../core/request'

export class CollectionService {
  /**
   * Get Collections By Wallet
   * Get NFT collections owned by a given wallet address.
   * @param chain - The chain to query
   * @param address - The address
   * @param cursor - The cursor returned in the previous response (used for getting the next page).
   * @param limit - The desired page size of the result.
   * @param format - The format of the token ID
   * @returns NFTSimplePaginationResponse Successful Response
   * @throws ApiError
   */
  public static getCollectionsByWalletApiCollectionsByWalletGet(
    chain: Chain,
    address: string,
    cursor: string = '',
    limit: number = 10,
    format?: Format
  ): CancelablePromise<NFTSimplePaginationResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/collections/by_wallet',
      query: {
        cursor: cursor,
        limit: limit,
        chain: chain,
        format: format,
        address: address,
      },
      errors: {
        404: `ErrorMessage`,
        422: `HTTPValidationError`,
      },
    })
  }

  /**
   * Get Collection Metadata
   * Get the collection / contract level metadata for a given contract (name, symbol, base token URI).
   * @param address - The address
   * @param chain - The chain to query
   * @returns NFTSingle Successful Response
   * @throws ApiError
   */
  public static getCollectionMetadataApiCollectionsMetadataGet(
    address: string,
    chain: Chain
  ): CancelablePromise<NFTSingle> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/collections/metadata',
      query: {
        address: address,
        chain: chain,
      },
      errors: {
        404: `ErrorMessage`,
        422: `HTTPValidationError`,
      },
    })
  }
}
