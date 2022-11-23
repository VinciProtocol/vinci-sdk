/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Chain } from '../models/Chain'
import type { Format } from '../models/Format'
import type { NFTRespPaginationResponse } from '../models/NFTRespPaginationResponse'

import type { CancelablePromise } from '../core/CancelablePromise'
import { OpenAPI } from '../core/OpenAPI'
import { request as __request } from '../core/request'

export class OwnerService {
  /**
   * Get Owners By Contract
   * Get owners of NFTs for a given contract.
   * @param chain - The chain to query
   * @param address - The address
   * @param cursor - The cursor returned in the previous response (used for getting the next page).
   * @param limit - The desired page size of the result.
   * @param format - The format of the token ID
   * @returns NFTRespPaginationResponse Successful Response
   * @throws ApiError
   */
  public static getOwnersByContractApiOwnersByContractGet(
    chain: Chain,
    address: string,
    cursor: string = '',
    limit: number = 10,
    format?: Format
  ): CancelablePromise<NFTRespPaginationResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/owners/by_contract',
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
   * Get Owners By Token Id
   * Get owners of a specific NFT given the contract address and token ID.
   * @param chain - The chain to query
   * @param address - The address
   * @param tokenId - The ID of the token
   * @param cursor - The cursor returned in the previous response (used for getting the next page).
   * @param limit - The desired page size of the result.
   * @param format - The format of the token ID
   * @returns NFTRespPaginationResponse Successful Response
   * @throws ApiError
   */
  public static getOwnersByTokenIdApiOwnersByTokenGet(
    chain: Chain,
    address: string,
    tokenId: string,
    cursor: string = '',
    limit: number = 10,
    format?: Format
  ): CancelablePromise<NFTRespPaginationResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/owners/by_token',
      query: {
        cursor: cursor,
        limit: limit,
        chain: chain,
        format: format,
        address: address,
        token_id: tokenId,
      },
      errors: {
        404: `ErrorMessage`,
        422: `HTTPValidationError`,
      },
    })
  }
}
