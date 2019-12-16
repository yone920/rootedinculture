import React, { useState, useEffect } from 'react'
import Client from 'shopify-buy'


export const client = Client.buildClient({
    domain: "rooted-in-culture-test.myshopify.com",
    storefrontAccessToken: "56092a7ec1c498c4830dfb5b558badc9",
})

const defaultValues = {
    isCartOpen: false,
    toggleCartOpen: () => {},
    cart: [],
    addProductToCart: () => {},
    client,
    checkout: {
        lineItems: [],
    }
}

export const StoreContext = React.createContext(defaultValues)




export const StoreProvider = ({ children }) => {
    const [checkout, setCheckout] = useState(defaultValues.checkout)
    const [isCartOpen, setCartOpen] = useState(false)

    const toggleCartOpen = () => {
        setCartOpen(!isCartOpen)
    }

    useEffect(() => {
        initializeCheckout()
    }, [])

    const initializeCheckout = async () => {
        try {
            // Check if it's a browser
                const isBrowser = typeof window !== 'undefined'

            // Check if id exists
                const currentCheckoutId = isBrowser 
                ? localStorage.getItem('checkout_id')
                : null

                let newCheckout = null
                if (currentCheckoutId) {
                    // If id exists, fetch checkout from Shopify
                    newCheckout = await client.checkout.fetch(currentCheckoutId)
                } else {
                    // If id does not, create new checkout
                    newCheckout = await client.checkout.create()
                    if (isBrowser) {
                        localStorage.setItem('checkout_id', newCheckout.id)
                    }
                }

            setCheckout(newCheckout)
        } catch (e) {
            console.error(e)
        }
    }

    const addProductToCart = async (variantId) => {
        try {
            const lineItems = [{
                variantId,
                quantity: 1
            }]
            const newCheckout= await client.checkout.addLineItems(
                checkout.id,
                lineItems
            )

            setCheckout(newCheckout)
            // console.log(addItems.webUrl)
            // window.open(addItems.webUrl)
            
        } catch (e) {
            console.error(e)
        }        
    }

    return (
        <StoreContext.Provider value={{
            ...defaultValues,
            checkout,
            addProductToCart,
            toggleCartOpen,
            isCartOpen
            }}>
            {children}
        </StoreContext.Provider>
    )
}