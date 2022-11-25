[Home](./index.md) &gt; [@vinci-protocol/store](./store.md) &gt; [useAppDispatch](./store.useappdispatch.md)

## useAppDispatch variable

<b>Signature:</b>

```typescript
useAppDispatch: () => import("@reduxjs/toolkit").ThunkDispatch<{
    contract: import("redux").CombinedState<{
        erc20: import("redux").CombinedState<{
            isApproved: {
                data: Record<string, boolean>;
                error: any;
                loading: boolean;
                status: import("./helpers/slice").REQUEST_STATUS;
            };
        }>;
        uiPool: import("redux").CombinedState<{
            reservesDataFromAllPools: {
                data: {
                    id: string;
                    reservesData: {
                        usageAsCollateralEnabled: boolean;
                        borrowingEnabled: boolean;
                        stableBorrowRateEnabled: boolean;
                        isActive: boolean;
                        isFrozen: boolean;
                        lastUpdateTimestamp: number;
                        decimals: string;
                        baseLTVasCollateral: string;
                        reserveLiquidationThreshold: string;
                        reserveLiquidationBonus: string;
                        reserveFactor: string;
                        liquidityIndex: string;
                        variableBorrowIndex: string;
                        liquidityRate: string;
                        variableBorrowRate: string;
                        stableBorrowRate: string;
                        availableLiquidity: string;
                        totalPrincipalStableDebt: string;
                        averageStableRate: string;
                        stableDebtLastUpdateTimestamp: string;
                        totalScaledVariableDebt: string;
                        priceInMarketReferenceCurrency: string;
                        variableRateSlope1: string;
                        variableRateSlope2: string;
                        stableRateSlope1: string;
                        stableRateSlope2: string;
                        underlyingAsset: string;
                        vTokenAddress: string;
                        stableDebtTokenAddress: string;
                        variableDebtTokenAddress: string;
                        interestRateStrategyAddress: string;
                        name: string;
                        symbol: string;
                    }[];
                    currencyInfo: Record<"marketReferenceCurrencyUnit" | "marketReferenceCurrencyPriceInUsd" | "networkBaseTokenPriceDecimals" | "networkBaseTokenPriceInUsd", string>;
                    nftVaultsData: {
                        baseLTVasCollateral: string;
                        reserveLiquidationThreshold: string;
                        reserveLiquidationBonus: string;
                        priceInMarketReferenceCurrency: string;
                        totalNumberOfCollateral: string;
                        underlyingAsset: string;
                        nTokenAddress: string;
                        name: string;
                        symbol: string;
                        usageAsCollateralEnabled: boolean;
                        isActive: boolean;
                        isFrozen: boolean;
                        lockActionExpiration: number;
                    }[];
                }[];
                error: any;
                loading: boolean;
                status: import("./helpers/slice").REQUEST_STATUS;
            };
            userReservesDataFromAllPools: {
                data: {
                    id: string;
                    userReservesData: {
                        stableBorrowRate: string;
                        scaledVTokenBalance: string;
                        scaledVariableDebt: string;
                        principalStableDebt: string;
                        stableBorrowLastUpdateTimestamp: string;
                        underlyingAsset: string;
                        usageAsCollateralEnabledOnUser: boolean;
                    }[];
                    userNFTVaultsData: {
                        tokenIds: string[];
                        locks: ([number, number] & {
                            expiration: number;
                            lockType: number;
                        })[];
                        nTokenBalance: string;
                        underlyingAsset: string;
                        usageAsCollateralEnabledOnUser: boolean;
                    }[];
                }[];
                error: any;
                loading: boolean;
                status: import("./helpers/slice").REQUEST_STATUS;
            };
        }>;
    }>;
}, undefined, import("redux").AnyAction> & import("redux").Dispatch<import("redux").AnyAction>
```
