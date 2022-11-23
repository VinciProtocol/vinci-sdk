/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MetaData } from './MetaData'

export type NFTResp = {
  /**
   * The address of the NFT contract
   */
  token_address: string
  /**
   * The name of the NFT contract
   */
  name?: string
  /**
   * The symbol of the NFT contract
   */
  symbol?: string
  /**
   * The type of NFT contract standard
   */
  contract_type?: string
  /**
   * The token ID of the NFT
   */
  token_id?: string
  /**
   * The number of this item the user owns (used by ERC1155)
   */
  amount?: string
  /**
   * The token hash
   */
  token_hash?: string
  /**
   * The wallet address of the owner of the NFT
   */
  owner_of?: string
  /**
   * The block number when the NFT was minted
   */
  block_number_minted?: string | number
  /**
   * The block number when the amount or owner changed
   */
  block_number?: string | number
  /**
   * The URI to the metadata of the token
   */
  token_uri?: string
  /**
   * When the token_uri was last updated
   */
  last_token_uri_sync?: string
  /**
   * When the metadata was last updated
   */
  last_metadata_sync?: string
  /**
   * The address of the NFT minter
   */
  minter_address?: string
  /**
   * A normalized metadata version of the NFT's metadata.
   */
  metadata?: MetaData | string
}
