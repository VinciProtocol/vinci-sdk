/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TransferResp = {
  /**
   * The block number of the transaction
   */
  block_number?: string
  /**
   * The block timestamp
   */
  block_timestamp?: string
  /**
   * The block hash of the transaction
   */
  block_hash?: string
  /**
   * The log index
   */
  log_index?: number | string
  /**
   * The transaction hash
   */
  transaction_hash?: string
  /**
   * The transaction index
   */
  transaction_index?: number | string
  /**
   * The transaction type
   */
  transaction_type?: string
  /**
   * The type of NFT contract standard
   */
  contract_type?: string
  /**
   * The address of the NFT contract
   */
  token_address?: string
  /**
   * The token ID of the NFT
   */
  token_id?: string
  /**
   * The address that sent the NFT
   */
  from_address?: string
  /**
   * The address that received the NFT
   */
  to_address?: string
  /**
   * The number of tokens transferred
   */
  amount?: string
  /**
   * The value that was sent in the transaction (ETH/BNB/etc..)
   */
  value?: string
  /**
   * The operator present only for ERC1155 transfers
   */
  operator?: string
}
