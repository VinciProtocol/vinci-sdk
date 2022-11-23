/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NFTSingle = {
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
   * Timestamp of when the contract was last synced with the node
   */
  synced_at?: string
}
