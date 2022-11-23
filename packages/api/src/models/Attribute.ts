/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Attribute = {
  /**
   * The trait title or descriptor
   */
  trait_type?: string
  /**
   * The type the attribute value should be displayed as
   */
  display_type?: string
  /**
   * For numeric values, the upper range
   */
  max_value?: number
  /**
   * The number of possible values for this trait
   */
  trait_count?: number
  /**
   * Order the trait should appear in the attribute list
   */
  order?: number
  /**
   * The value of the attribute
   */
  value?: string
}
