/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'
import { FunctionFragment, Result } from '@ethersproject/abi'
import { Listener, Provider } from '@ethersproject/providers'
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from '../../common'

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
  lockActionExpiration: BigNumberish
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
  number,
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
  lockActionExpiration: number
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

export type TimeLockStruct = {
  expiration: BigNumberish
  lockType: BigNumberish
}

export type TimeLockStructOutput = [number, number] & {
  expiration: number
  lockType: number
}

export type UserNFTVaultDataStruct = {
  underlyingAsset: string
  nTokenBalance: BigNumberish
  tokenIds: BigNumberish[]
  amounts: BigNumberish[]
  locks: TimeLockStruct[]
  usageAsCollateralEnabledOnUser: boolean
}

export type UserNFTVaultDataStructOutput = [
  string,
  BigNumber,
  BigNumber[],
  BigNumber[],
  TimeLockStructOutput[],
  boolean
] & {
  underlyingAsset: string
  nTokenBalance: BigNumber
  tokenIds: BigNumber[]
  amounts: BigNumber[]
  locks: TimeLockStructOutput[]
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

export interface UiPoolDataProviderInterface extends utils.Interface {
  functions: {
    'ETH_CURRENCY_UNIT()': FunctionFragment
    'getPoolsList(address)': FunctionFragment
    'getReservesData(address)': FunctionFragment
    'getReservesDataFromAllPools(address)': FunctionFragment
    'getReservesList(address)': FunctionFragment
    'getUserReservesData(address,address)': FunctionFragment
    'getUserReservesDataFromAllPools(address,address)': FunctionFragment
    'marketReferenceCurrencyPriceInUsdProxyAggregator()': FunctionFragment
    'networkBaseTokenPriceInUsdProxyAggregator()': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'ETH_CURRENCY_UNIT', values?: undefined): string
  encodeFunctionData(functionFragment: 'getPoolsList', values: [string]): string
  encodeFunctionData(functionFragment: 'getReservesData', values: [string]): string
  encodeFunctionData(functionFragment: 'getReservesDataFromAllPools', values: [string]): string
  encodeFunctionData(functionFragment: 'getReservesList', values: [string]): string
  encodeFunctionData(functionFragment: 'getUserReservesData', values: [string, string]): string
  encodeFunctionData(functionFragment: 'getUserReservesDataFromAllPools', values: [string, string]): string
  encodeFunctionData(functionFragment: 'marketReferenceCurrencyPriceInUsdProxyAggregator', values?: undefined): string
  encodeFunctionData(functionFragment: 'networkBaseTokenPriceInUsdProxyAggregator', values?: undefined): string

  decodeFunctionResult(functionFragment: 'ETH_CURRENCY_UNIT', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getPoolsList', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getReservesData', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getReservesDataFromAllPools', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getReservesList', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getUserReservesData', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getUserReservesDataFromAllPools', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'marketReferenceCurrencyPriceInUsdProxyAggregator', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'networkBaseTokenPriceInUsdProxyAggregator', data: BytesLike): Result

  events: {}
}

export interface UiPoolDataProvider extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: UiPoolDataProviderInterface

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>

  functions: {
    ETH_CURRENCY_UNIT(overrides?: CallOverrides): Promise<[BigNumber]>

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

    marketReferenceCurrencyPriceInUsdProxyAggregator(overrides?: CallOverrides): Promise<[string]>

    networkBaseTokenPriceInUsdProxyAggregator(overrides?: CallOverrides): Promise<[string]>
  }

  ETH_CURRENCY_UNIT(overrides?: CallOverrides): Promise<BigNumber>

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

  marketReferenceCurrencyPriceInUsdProxyAggregator(overrides?: CallOverrides): Promise<string>

  networkBaseTokenPriceInUsdProxyAggregator(overrides?: CallOverrides): Promise<string>

  callStatic: {
    ETH_CURRENCY_UNIT(overrides?: CallOverrides): Promise<BigNumber>

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

    marketReferenceCurrencyPriceInUsdProxyAggregator(overrides?: CallOverrides): Promise<string>

    networkBaseTokenPriceInUsdProxyAggregator(overrides?: CallOverrides): Promise<string>
  }

  filters: {}

  estimateGas: {
    ETH_CURRENCY_UNIT(overrides?: CallOverrides): Promise<BigNumber>

    getPoolsList(registry: string, overrides?: CallOverrides): Promise<BigNumber>

    getReservesData(provider: string, overrides?: CallOverrides): Promise<BigNumber>

    getReservesDataFromAllPools(registry: string, overrides?: CallOverrides): Promise<BigNumber>

    getReservesList(provider: string, overrides?: CallOverrides): Promise<BigNumber>

    getUserReservesData(provider: string, user: string, overrides?: CallOverrides): Promise<BigNumber>

    getUserReservesDataFromAllPools(registry: string, user: string, overrides?: CallOverrides): Promise<BigNumber>

    marketReferenceCurrencyPriceInUsdProxyAggregator(overrides?: CallOverrides): Promise<BigNumber>

    networkBaseTokenPriceInUsdProxyAggregator(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    ETH_CURRENCY_UNIT(overrides?: CallOverrides): Promise<PopulatedTransaction>

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

    marketReferenceCurrencyPriceInUsdProxyAggregator(overrides?: CallOverrides): Promise<PopulatedTransaction>

    networkBaseTokenPriceInUsdProxyAggregator(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}