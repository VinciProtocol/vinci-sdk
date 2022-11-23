/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Chain } from '../models/Chain'
import type { Filter } from '../models/Filter'
import type { Format } from '../models/Format'
import type { NFTResp } from '../models/NFTResp'
import type { NFTRespPaginationResponse } from '../models/NFTRespPaginationResponse'
import type { PriceResp } from '../models/PriceResp'

import type { CancelablePromise } from '../core/CancelablePromise'
import { OpenAPI } from '../core/OpenAPI'
import { request as __request } from '../core/request'

export class NftService {
  /**
   * Get NFTs By Wallet
   * Get NFTs owned by a given address.
   * @param chain - The chain to query
   * @param address - The address
   * @param cursor - The cursor returned in the previous response (used for getting the next page).
   * @param limit - The desired page size of the result.
   * @param format - The format of the token ID
   * @returns NFTRespPaginationResponse Successful Response
   * @throws ApiError
   */
  public static getNftsByWalletApiNftsByWalletGet(
    chain: Chain,
    address: string,
    cursor: string = '',
    limit: number = 10,
    format?: Format
  ): CancelablePromise<NFTRespPaginationResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/nfts/by_wallet',
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
   * Get NFTs By Contract
   * Get NFTs for a given contract address, including metadata for all NFTs (where available).
   * @param chain - The chain to query
   * @param address - The address
   * @param cursor - The cursor returned in the previous response (used for getting the next page).
   * @param limit - The desired page size of the result.
   * @param format - The format of the token ID
   * @returns NFTRespPaginationResponse Successful Response
   * @throws ApiError
   */
  public static getNftsByContractApiNftsByContractGet(
    chain: Chain,
    address: string,
    cursor: string = '',
    limit: number = 10,
    format?: Format
  ): CancelablePromise<NFTRespPaginationResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/nfts/by_contract',
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
   * Search NFTs
   * Get NFTs that match a given metadata search query.
   * @param chain - The chain to query
   * @param q - The search string
   * @param fromBlock - The minimum block number from which to start the search
   * @param toBlock - The maximum block number from which to end the search
   * @param format - The format of the token ID
   * @param filter - What fields the search should match on. To look into the entire metadata set the value to "global". To have a better response time you can look into a specific field like name
   * @param addresses - The addresses to get metadata for
   * @returns NFTRespPaginationResponse Successful Response
   * @throws ApiError
   */
  public static searchNftsApiNftsSearchGet(
    chain: Chain,
    q: string,
    fromBlock?: number,
    toBlock?: number,
    format?: Format,
    filter?: Filter,
    addresses?: Array<string>
  ): CancelablePromise<NFTRespPaginationResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/nfts/search',
      query: {
        from_block: fromBlock,
        to_block: toBlock,
        chain: chain,
        format: format,
        q: q,
        filter: filter,
        addresses: addresses,
      },
      errors: {
        404: `ErrorMessage`,
        422: `HTTPValidationError`,
      },
    })
  }

  /**
   * Get NFT Metadata
   * Get NFT data, including metadata (where available), for the given NFT token ID and contract address.
   * @param chain - The chain to query
   * @param address - The address
   * @param tokenId - The ID of the token
   * @param format - The format of the token ID
   * @returns NFTResp Successful Response
   * @throws ApiError
   */
  public static getNftMetadataApiNftsMetadataGet(
    chain: Chain,
    address: string,
    tokenId: string,
    format?: Format
  ): CancelablePromise<NFTResp> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/nfts/metadata',
      query: {
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

  /**
   * Get NFT Floor Price
   * Get NFT floor price
   * @param address - The address
   * @param chain - The chain to query
   * @returns PriceResp Successful Response
   * @throws ApiError
   */
  public static getNftFloorPriceApiNftsPriceGet(address: string, chain: Chain): CancelablePromise<PriceResp> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/nfts/price',
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
