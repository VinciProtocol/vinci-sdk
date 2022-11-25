[Home](./index.md) &gt; [@vinci-protocol/protocol](./protocol.md)

## protocol package

## Classes

| Class                                                        | Description |
| ------------------------------------------------------------ | ----------- |
| [ERC20Service](./protocol.erc20service.md)                   |             |
| [ERC721Service](./protocol.erc721service.md)                 |             |
| [LendingPoolContract](./protocol.lendingpoolcontract.md)     |             |
| [UiPoolDataContract](./protocol.uipooldatacontract.md)       |             |
| [VinciNFTContract](./protocol.vincinftcontract.md)           |             |
| [WalletBalanceContract](./protocol.walletbalancecontract.md) |             |

## Enumerations

| Enumeration                                      | Description          |
| ------------------------------------------------ | -------------------- |
| [ChainId](./protocol.chainid.md)                 |                      |
| [eEthereumTxType](./protocol.eethereumtxtype.md) |                      |
| [GovernanceVote](./protocol.governancevote.md)   |                      |
| [InterestRate](./protocol.interestrate.md)       | InterestRate options |
| [ProtocolAction](./protocol.protocolaction.md)   |                      |
| [Stake](./protocol.stake.md)                     |                      |

## Functions

| Function                                                                                                                                                                | Description |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [calculateReserveDebt(reserveDebt, currentTimestamp)](./protocol.calculatereservedebt.md)                                                                               |             |
| [getCompoundedBalance({ principalBalance: \_principalBalance, reserveIndex, reserveRate, lastUpdateTimestamp, currentTimestamp, })](./protocol.getcompoundedbalance.md) |             |
| [getLinearBalance({ balance, index, rate, lastUpdateTimestamp, currentTimestamp, })](./protocol.getlinearbalance.md)                                                    |             |

## Interfaces

| Interface                                                            | Description |
| -------------------------------------------------------------------- | ----------- |
| [ComputedReserveData](./protocol.computedreservedata.md)             |             |
| [PoolBaseCurrencyHumanized](./protocol.poolbasecurrencyhumanized.md) |             |
| [ReserveDataHumanized](./protocol.reservedatahumanized.md)           |             |
| [ReservesDataHumanized](./protocol.reservesdatahumanized.md)         |             |
| [UserReserveDataHumanized](./protocol.userreservedatahumanized.md)   |             |

## Variables

| Variable                                                               | Description |
| ---------------------------------------------------------------------- | ----------- |
| [API_ETH_MOCK_ADDRESS](./protocol.api_eth_mock_address.md)             |             |
| [canBeEnsAddress](./protocol.canbeensaddress.md)                       |             |
| [decimalsToCurrencyUnits](./protocol.decimalstocurrencyunits.md)       |             |
| [DEFAULT_APPROVE_AMOUNT](./protocol.default_approve_amount.md)         |             |
| [DEFAULT_NULL_VALUE_ON_TX](./protocol.default_null_value_on_tx.md)     |             |
| [gasLimitRecommendations](./protocol.gaslimitrecommendations.md)       |             |
| [getTxValue](./protocol.gettxvalue.md)                                 |             |
| [MAX_UINT_AMOUNT](./protocol.max_uint_amount.md)                       |             |
| [mintAmountsPerToken](./protocol.mintamountspertoken.md)               |             |
| [SUPER_BIG_ALLOWANCE_NUMBER](./protocol.super_big_allowance_number.md) |             |
| [SURPLUS](./protocol.surplus.md)                                       |             |
| [uniswapEthAmount](./protocol.uniswapethamount.md)                     |             |
| [valueToWei](./protocol.valuetowei.md)                                 |             |

## Type Aliases

| Type Alias                                                                                         | Description |
| -------------------------------------------------------------------------------------------------- | ----------- |
| [AddressModel](./protocol.addressmodel.md)                                                         |             |
| [ApproveType](./protocol.approvetype.md)                                                           |             |
| [CommonConfigType](./protocol.commonconfigtype.md)                                                 |             |
| [ConstantAddressesByNetwork](./protocol.constantaddressesbynetwork.md)                             |             |
| [ContractAddresses](./protocol.contractaddresses.md)                                               |             |
| [DefaultProviderKeys](./protocol.defaultproviderkeys.md)                                           |             |
| [ENS](./protocol.ens.md)                                                                           |             |
| [EthereumTransactionTypeExtended](./protocol.ethereumtransactiontypeextended.md)                   |             |
| [FlashLoanParams](./protocol.flashloanparams.md)                                                   |             |
| [GasRecommendationType](./protocol.gasrecommendationtype.md)                                       |             |
| [GasResponse](./protocol.gasresponse.md)                                                           |             |
| [GasType](./protocol.gastype.md)                                                                   |             |
| [GeneratedTx](./protocol.generatedtx.md)                                                           |             |
| [GovernanceConfigType](./protocol.governanceconfigtype.md)                                         |             |
| [LendingPoolConfig](./protocol.lendingpoolconfig.md)                                               |             |
| [LendingPoolConfigType](./protocol.lendingpoolconfigtype.md)                                       |             |
| [LendingPoolMarketConfig](./protocol.lendingpoolmarketconfig.md)                                   |             |
| [MigratorConfig](./protocol.migratorconfig.md)                                                     |             |
| [NFTVaultDataHumanized](./protocol.nftvaultdatahumanized.md)                                       |             |
| [PermitSignature](./protocol.permitsignature.md)                                                   |             |
| [StakingConfigType](./protocol.stakingconfigtype.md)                                               |             |
| [tCommonContractAddressBetweenMarkets](./protocol.tcommoncontractaddressbetweenmarkets.md)         |             |
| [tDistinctContractAddressBetweenMarkets](./protocol.tdistinctcontractaddressbetweenmarkets.md)     |             |
| [tDistinctContractAddressBetweenMarketsV2](./protocol.tdistinctcontractaddressbetweenmarketsv2.md) |             |
| [tDistinctGovernanceV2Addresses](./protocol.tdistinctgovernancev2addresses.md)                     |             |
| [tdistinctStakingAddressesBetweenTokens](./protocol.tdistinctstakingaddressesbetweentokens.md)     |             |
| [tEthereumAddress](./protocol.tethereumaddress.md)                                                 |             |
| [TransactionGasGenerationMethod](./protocol.transactiongasgenerationmethod.md)                     |             |
| [TransactionGenerationMethod](./protocol.transactiongenerationmethod.md)                           |             |
| [transactionType](./protocol.transactiontype.md)                                                   |             |
