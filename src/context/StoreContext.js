import React from 'react'
import Client from 'shopify-buy'

export const client = Client.buildClient({
    domain: "rooted-in-culture-test.myshopify.com",
    storefrontAccessToken: "56092a7ec1c498c4830dfb5b558badc9",
})

export const StoreContext = React.createContext({
    client, 
})