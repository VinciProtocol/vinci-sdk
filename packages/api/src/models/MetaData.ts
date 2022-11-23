/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attribute } from './Attribute'

export type MetaData = {
  /**
   * The name or title of the NFT
   */
  name?: string
  /**
   * A detailed description of the NFT
   */
  description?: string
  /**
   * The URL of the NFT's image
   */
  image?: string
  /**
   * A link to additional information
   */
  external_url?: string
  /**
   * An animated version of the NFT's image
   */
  animation_url?: string
  /**
   * array of objects
   */
  attributes?: Array<Attribute>
}
