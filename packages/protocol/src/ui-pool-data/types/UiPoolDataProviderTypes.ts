/* Autogenerated file. Do not edit manually. */
/* tslint:disable */

import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'
import type { FunctionFragment, Result } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from '../../common'

export type AggregatedReserveDataStruct = {
  underlyingAsset: string
  name: string
  symbol: string
  decimals: BigNumberish
  baseLTVasCollateral: BigNumberish
  reserveLiquidationThreshold: BigNumberish
  reserveLiquidationBonus: BigNumberish
  reserveFactor: BigNumberish
  usageAsCollateralEnabled: boolean
  borrowingEnabled: boolean
  stableBorrowRateEnabled: boolean
  isActive: boolean
  isFrozen: boolean
  liquidityIndex: BigNumberish
  variableBorrowIndex: BigNumberish
  liquidityRate: BigNumberish
  variableBorrowRate: BigNumberish
  stableBorrowRate: BigNumberish
  lastUpdateTimestamp: BigNumberish
  vTokenAddress: string
  stableDebtTokenAddress: string
  variableDebtTokenAddress: string
  interestRateStrategyAddress: string
  availableLiquidity: BigNumberish
  totalPrincipalStableDebt: BigNumberish
  averageStableRate: BigNumberish
  stableDebtLastUpdateTimestamp: BigNumberish
  totalScaledVariableDebt: BigNumberish
  priceInMarketReferenceCurrency: BigNumberish
  variableRateSlope1: BigNumberish
  variableRateSlope2: BigNumberish
  stableRateSlope1: BigNumberish
  stableRateSlope2: BigNumberish
}

export type AggregatedReserveDataStructOutput = [
  string,
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  number,
  string,
  string,
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  underlyingAsset: string
  name: string
  symbol: string
  decimals: BigNumber
  baseLTVasCollateral: BigNumber
  reserveLiquidationThreshold: BigNumber
  reserveLiquidationBonus: BigNumber
  reserveFactor: BigNumber
  usageAsCollateralEnabled: boolean
  borrowingEnabled: boolean
  stableBorrowRateEnabled: boolean
  isActive: boolean
  isFrozen: boolean
  liquidityIndex: BigNumber
  variableBorrowIndex: BigNumber
  liquidityRate: BigNumber
  variableBorrowRate: BigNumber
  stableBorrowRate: BigNumber
  lastUpdateTimestamp: number
  vTokenAddress: string
  stableDebtTokenAddress: string
  variableDebtTokenAddress: string
  interestRateStrategyAddress: string
  availableLiquidity: BigNumber
  totalPrincipalStableDebt: BigNumber
  averageStableRate: BigNumber
  stableDebtLastUpdateTimestamp: BigNumber
  totalScaledVariableDebt: BigNumber
  priceInMarketReferenceCurrency: BigNumber
  variableRateSlope1: BigNumber
  variableRateSlope2: BigNumber
  stableRateSlope1: BigNumber
  stableRateSlope2: BigNumber
}

export type AggregatedNFTVaultDataStruct = {
  underlyingAsset: string
  name: string
  symbol: string
  baseLTVasCollateral: BigNumberish
  reserveLiquidationThreshold: BigNumberish
  reserveLiquidationBonus: BigNumberish
  usageAsCollateralEnabled: boolean
  isActive: boolean
  isFrozen: boolean
  nTokenAddress: string
  totalNumberOfCollateral: BigNumberish
  priceInMarketReferenceCurrency: BigNumberish
}

export type AggregatedNFTVaultDataStructOutput = [
  string,
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  boolean,
  boolean,
  boolean,
  string,
  BigNumber,
  BigNumber
] & {
  underlyingAsset: string
  name: string
  symbol: string
  baseLTVasCollateral: BigNumber
  reserveLiquidationThreshold: BigNumber
  reserveLiquidationBonus: BigNumber
  usageAsCollateralEnabled: boolean
  isActive: boolean
  isFrozen: boolean
  nTokenAddress: string
  totalNumberOfCollateral: BigNumber
  priceInMarketReferenceCurrency: BigNumber
}

export type BaseCurrencyInfoStruct = {
  marketReferenceCurrencyUnit: BigNumberish
  marketReferenceCurrencyPriceInUsd: BigNumberish
  networkBaseTokenPriceInUsd: BigNumberish
  networkBaseTokenPriceDecimals: BigNumberish
}

export type BaseCurrencyInfoStructOutput = [BigNumber, BigNumber, BigNumber, number] & {
  marketReferenceCurrencyUnit: BigNumber
  marketReferenceCurrencyPriceInUsd: BigNumber
  networkBaseTokenPriceInUsd: BigNumber
  networkBaseTokenPriceDecimals: number
}

export type PoolDataStruct = {
  marketId: string
  currencyInfo: BaseCurrencyInfoStruct
  reservesData: AggregatedReserveDataStruct[]
  nftVaultsData: AggregatedNFTVaultDataStruct[]
}

export type PoolDataStructOutput = [
  string,
  BaseCurrencyInfoStructOutput,
  AggregatedReserveDataStructOutput[],
  AggregatedNFTVaultDataStructOutput[]
] & {
  marketId: string
  currencyInfo: BaseCurrencyInfoStructOutput
  reservesData: AggregatedReserveDataStructOutput[]
  nftVaultsData: AggregatedNFTVaultDataStructOutput[]
}

export type UserReserveDataStruct = {
  underlyingAsset: string
  scaledVTokenBalance: BigNumberish
  usageAsCollateralEnabledOnUser: boolean
  stableBorrowRate: BigNumberish
  scaledVariableDebt: BigNumberish
  principalStableDebt: BigNumberish
  stableBorrowLastUpdateTimestamp: BigNumberish
}

export type UserReserveDataStructOutput = [string, BigNumber, boolean, BigNumber, BigNumber, BigNumber, BigNumber] & {
  underlyingAsset: string
  scaledVTokenBalance: BigNumber
  usageAsCollateralEnabledOnUser: boolean
  stableBorrowRate: BigNumber
  scaledVariableDebt: BigNumber
  principalStableDebt: BigNumber
  stableBorrowLastUpdateTimestamp: BigNumber
}

export type UserNFTVaultDataStruct = {
  underlyingAsset: string
  nTokenBalance: BigNumberish
  tokenIds: BigNumberish[]
  amounts: BigNumberish[]
  usageAsCollateralEnabledOnUser: boolean
}

export type UserNFTVaultDataStructOutput = [string, BigNumber, BigNumber[], BigNumber[], boolean] & {
  underlyingAsset: string
  nTokenBalance: BigNumber
  tokenIds: BigNumber[]
  amounts: BigNumber[]
  usageAsCollateralEnabledOnUser: boolean
}

export type UserPoolDataStruct = {
  marketId: string
  userReservesData: UserReserveDataStruct[]
  userNFTVaultsData: UserNFTVaultDataStruct[]
}

export type UserPoolDataStructOutput = [string, UserReserveDataStructOutput[], UserNFTVaultDataStructOutput[]] & {
  marketId: string
  userReservesData: UserReserveDataStructOutput[]
  userNFTVaultsData: UserNFTVaultDataStructOutput[]
}

export interface IUiPoolDataProviderInterface extends utils.Interface {
  functions: {
    'getPoolsList(address)': FunctionFragment
    'getReservesData(address)': FunctionFragment
    'getReservesDataFromAllPools(address)': FunctionFragment
    'getReservesList(address)': FunctionFragment
    'getUserReservesData(address,address)': FunctionFragment
    'getUserReservesDataFromAllPools(address,address)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'getPoolsList', values: [string]): string
  encodeFunctionData(functionFragment: 'getReservesData', values: [string]): string
  encodeFunctionData(functionFragment: 'getReservesDataFromAllPools', values: [string]): string
  encodeFunctionData(functionFragment: 'getReservesList', values: [string]): string
  encodeFunctionData(functionFragment: 'getUserReservesData', values: [string, string]): string
  encodeFunctionData(functionFragment: 'getUserReservesDataFromAllPools', values: [string, string]): string

  decodeFunctionResult(functionFragment: 'getPoolsList', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getReservesData', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getReservesDataFromAllPools', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getReservesList', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getUserReservesData', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getUserReservesDataFromAllPools', data: BytesLike): Result

  events: {}
}

export interface IUiPoolDataProvider extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: IUiPoolDataProviderInterface

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners(eventFilter: TypedEventFilter): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>

  functions: {
    getPoolsList(registry: string, overrides?: CallOverrides): Promise<[string[]]>

    getReservesData(
      provider: string,
      overrides?: CallOverrides
    ): Promise<
      [AggregatedReserveDataStructOutput[], AggregatedNFTVaultDataStructOutput[], BaseCurrencyInfoStructOutput]
    >

    getReservesDataFromAllPools(registry: string, overrides?: CallOverrides): Promise<[PoolDataStructOutput[]]>

    getReservesList(provider: string, overrides?: CallOverrides): Promise<[string[], string[]]>

    getUserReservesData(
      provider: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<[UserReserveDataStructOutput[], UserNFTVaultDataStructOutput[]]>

    getUserReservesDataFromAllPools(
      registry: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<[UserPoolDataStructOutput[]]>
  }

  getPoolsList(registry: string, overrides?: CallOverrides): Promise<string[]>

  getReservesData(
    provider: string,
    overrides?: CallOverrides
  ): Promise<[AggregatedReserveDataStructOutput[], AggregatedNFTVaultDataStructOutput[], BaseCurrencyInfoStructOutput]>

  getReservesDataFromAllPools(registry: string, overrides?: CallOverrides): Promise<PoolDataStructOutput[]>

  getReservesList(provider: string, overrides?: CallOverrides): Promise<[string[], string[]]>

  getUserReservesData(
    provider: string,
    user: string,
    overrides?: CallOverrides
  ): Promise<[UserReserveDataStructOutput[], UserNFTVaultDataStructOutput[]]>

  getUserReservesDataFromAllPools(
    registry: string,
    user: string,
    overrides?: CallOverrides
  ): Promise<UserPoolDataStructOutput[]>

  callStatic: {
    getPoolsList(registry: string, overrides?: CallOverrides): Promise<string[]>

    getReservesData(
      provider: string,
      overrides?: CallOverrides
    ): Promise<
      [AggregatedReserveDataStructOutput[], AggregatedNFTVaultDataStructOutput[], BaseCurrencyInfoStructOutput]
    >

    getReservesDataFromAllPools(registry: string, overrides?: CallOverrides): Promise<PoolDataStructOutput[]>

    getReservesList(provider: string, overrides?: CallOverrides): Promise<[string[], string[]]>

    getUserReservesData(
      provider: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<[UserReserveDataStructOutput[], UserNFTVaultDataStructOutput[]]>

    getUserReservesDataFromAllPools(
      registry: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<UserPoolDataStructOutput[]>
  }

  filters: {}

  estimateGas: {
    getPoolsList(registry: string, overrides?: CallOverrides): Promise<BigNumber>

    getReservesData(provider: string, overrides?: CallOverrides): Promise<BigNumber>

    getReservesDataFromAllPools(registry: string, overrides?: CallOverrides): Promise<BigNumber>

    getReservesList(provider: string, overrides?: CallOverrides): Promise<BigNumber>

    getUserReservesData(provider: string, user: string, overrides?: CallOverrides): Promise<BigNumber>

    getUserReservesDataFromAllPools(registry: string, user: string, overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    getPoolsList(registry: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getReservesData(provider: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getReservesDataFromAllPools(registry: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getReservesList(provider: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getUserReservesData(provider: string, user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getUserReservesDataFromAllPools(
      registry: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
  }
}
