/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Chain } from '../models/Chain'
import type { Direction } from '../models/Direction'
import type { Format } from '../models/Format'
import type { TransferRespPaginationResponse } from '../models/TransferRespPaginationResponse'

import type { CancelablePromise } from '../core/CancelablePromise'
import { OpenAPI } from '../core/OpenAPI'
import { request as __request } from '../core/request'

export class TransferService {
  /**
   * Get Transfers By Wallet
   * Get transfers of NFTs given the wallet and other parameters.
   * @param chain - The chain to query
   * @param address - The address
   * @param fromBlock - The minimum block number from which to start the search
   * @param toBlock - The maximum block number from which to end the search
   * @param cursor - The cursor returned in the previous response (used for getting the next page).
   * @param limit - The desired page size of the result.
   * @param format - The format of the token ID
   * @param direction - The transfer direction
   * @returns TransferRespPaginationResponse Successful Response
   * @throws ApiError
   */
  public static getTransfersByWalletApiTransfersByWalletGet(
    chain: Chain,
    address: string,
    fromBlock?: number,
    toBlock?: number,
    cursor: string = '',
    limit: number = 10,
    format?: Format,
    direction?: Direction
  ): CancelablePromise<TransferRespPaginationResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/transfers/by_wallet',
      query: {
        from_block: fromBlock,
        to_block: toBlock,
        cursor: cursor,
        limit: limit,
        chain: chain,
        format: format,
        address: address,
        direction: direction,
      },
      errors: {
        404: `ErrorMessage`,
        422: `HTTPValidationError`,
      },
    })
  }

  /**
   * Get Transfers By Contract
   * Get transfers of NFTs for a given contract and other parameters.
   * @param chain - The chain to query
   * @param address - The address
   * @param cursor - The cursor returned in the previous response (used for getting the next page).
   * @param limit - The desired page size of the result.
   * @param format - The format of the token ID
   * @returns TransferRespPaginationResponse Successful Response
   * @throws ApiError
   */
  public static getTransfersByContractApiTransfersByContractGet(
    chain: Chain,
    address: string,
    cursor: string = '',
    limit: number = 10,
    format?: Format
  ): CancelablePromise<TransferRespPaginationResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/transfers/by_contract',
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
   * Get Transfers By Block
   * Get transfers of NFTs given a block number or block hash.
   * @param chain - The chain to query
   * @param blockNumberOrHash - The block number or block hash
   * @param cursor - The cursor returned in the previous response (used for getting the next page).
   * @param limit - The desired page size of the result.
   * @param format - The format of the token ID
   * @returns TransferRespPaginationResponse Successful Response
   * @throws ApiError
   */
  public static getTransfersByBlockApiTransfersByBlockGet(
    chain: Chain,
    blockNumberOrHash: string,
    cursor: string = '',
    limit: number = 10,
    format?: Format
  ): CancelablePromise<TransferRespPaginationResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/transfers/by_block',
      query: {
        cursor: cursor,
        limit: limit,
        chain: chain,
        format: format,
        block_number_or_hash: blockNumberOrHash,
      },
      errors: {
        404: `ErrorMessage`,
        422: `HTTPValidationError`,
      },
    })
  }

  /**
   * Get Transfers From A Block To A Block
   * Get transfers of NFTs from a block number to a block number.
   * @param chain - The chain to query
   * @param cursor - The cursor returned in the previous response (used for getting the next page).
   * @param limit - The desired page size of the result.
   * @param fromBlock - The minimum block number from which to start the search
   * @param toBlock - The maximum block number from which to end the search
   * @param format - The format of the token ID
   * @returns TransferRespPaginationResponse Successful Response
   * @throws ApiError
   */
  public static getTransfersFromABlockToABlockApiTransfersGet(
    chain: Chain,
    cursor: string = '',
    limit: number = 10,
    fromBlock?: number,
    toBlock?: number,
    format?: Format
  ): CancelablePromise<TransferRespPaginationResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/transfers',
      query: {
        cursor: cursor,
        limit: limit,
        from_block: fromBlock,
        to_block: toBlock,
        chain: chain,
        format: format,
      },
      errors: {
        404: `ErrorMessage`,
        422: `HTTPValidationError`,
      },
    })
  }
}
