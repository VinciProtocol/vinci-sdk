# vinci SDK

## Resources

You can get more detailed information about the
[SDK Documentation Details](./doc/index.md)

Check out the [online demos](https://app.vinci.io/), and the corresponding [github address repository](https://github.com/VinciProtocol/vinci-ui)

## Get Started

1. Installing dependencies

   ```Bash
   yarn add @vinci-protocol/domains @reduxjs/toolkit react-redux
   ```

   Now we have all the necessary SDKs installed automatically.

1. Install optional dependencies

   This step is an optional operation, If you have API requirements, here is the documentation. [Vinci NFT API](https://docs.vinci.io/nft-api/)

   ```Bash
   yarn add @vinci-protocol/api
   ```

1. Reference in React project

   Introducing SDKProvider

   ```typescript
   import { VinciSDKProvider } from '@vinci-protocol/domains'
   ```

   Passing configServiceProps to SDKProvider

   ```jsx
   const Provider: FC = ({ children }) => {
     const configServiceProps = {
       provider, // wallet provider
       web3Provider,
       market,
       ...more, // More information inquiry type details, You can view the online code.
     }
     return <VinciSDKProvider {...configServiceProps}>{children}</VinciSDKProvider>
   }
   ```

   Then introduce the Provider into your app.tsx

1. Reference in React Redux

   Introducing vinciSDKReducers

   ```typescript
   import { vinciSDKReducers } from '@vinci-protocol/store'
   const {
     contract: {
       erc20: { isApproved },
       uiPool: { reservesDataFromAllPools, userReservesDataFromAllPools },
     },
   } = vinciSDKReducers

   const reducer = combineReducers({
     erc20: combineReducers({
       isApproved: isApproved.reducer,
     }),
     uiPool: combineReducers({
       reservesDataFromAllPools: reservesDataFromAllPools.reducer,
       userReservesDataFromAllPools: userReservesDataFromAllPools.reducer,
     }),
   })
   export function makeStore() {
     return configureStore({
       reducer: {
         contract: reducer,
       },
     })
   }

   const store = makeStore()
   ```

   This way we can manage all the data in Redux.

1. Then call the method anywhere under the Provider scope to get the data

   Make sure you have introduced useVinciControllers before getting the data.

   ```typescript
   import { useVinciControllers } from '@vinci-protocol/domains'

   const { reservesData, userReservesData, lendingPool, erc721 } = useVinciControllers()
   ```

   If the ChainID has changed, you need to reset the data and restart to get the data.

   ```typescript
   useChainIDChange({
     controllers: [reservesData, userReservesData],
   })

   const useChainIDChange = ({ controllers, ObjectControllers }: ChainIDChangeProps) => {
     const { chainId } = useWallet()
     useEffect(() => {
       controllers.forEach((controller) => {
         controller.clearData()
         controller.restart()
       })
       ObjectControllers.forEach((obj) => {
         Object.keys(obj).forEach((key) => {
           const controller = obj[key]
           controller.clearData()
           controller.restart()
         })
       })
     }, [chainId])
   }
   ```

   Get data using useVinciContractData

   ```typescript
   import { useVinciContractData } from '@vinci-protocol/domains'

   const { generalAssets, nftAssets, dashboard } = useVinciContractData()
   console.log({ generalAssets, nftAssets, dashboard })
   ```

   Interacting with Contracts, [More Methods View Details](./doc/domains.usevincicontrollers.md)

   ```typescript
   import { useVinciControllers } from '@vinci-protocol/domains'

   const { lendingPool, erc721 } = useVinciControllers()

   lendingPool.deposit.post(props)
   lendingPool.deposit.withdrawNFT(props)
   ```

   Now you can create NFT lending DApp based on your own custom UI
