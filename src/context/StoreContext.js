import React, { useState, useEffect } from 'react'
import Client from 'shopify-buy'


export const client = Client.buildClient({
    domain: "rooted-in-culture-test.myshopify.com",
    storefrontAccessToken: "56092a7ec1c498c4830dfb5b558badc9",
})



const defaultValues = {
    isCartOpen: false,
    isMobileMenuOpen: false,
    isCateringInquiriesOpen: false,
    toggleCartOpen: () => {},
    toggleMobileMenu: () => {},
    toggleCateringInquiries: () => {},
    removeProductFromCart: () => {},
    cart: [],
    addProductToCart: () => {},
    addCoupon: () => {},
    removeCoupon: () => {},
    client,
    checkout: {
        lineItems: [],
    }
}

export const StoreContext = React.createContext(defaultValues)

// Check if it's a browser
const isBrowser = typeof window !== 'undefined'



export const StoreProvider = ({ children }) => {
    const [checkout, setCheckout] = useState(defaultValues.checkout)
    const [isCartOpen, setCartOpen] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isCateringInquiriesOpen, setCateringInquiries] = useState(false)

    const toggleCateringInquiries = () => {
        setCateringInquiries(!isCateringInquiriesOpen)
    }

    const toggleCartOpen = () => {
        setCartOpen(!isCartOpen)
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen)
    }


    /// Create new Checkout and Return it
    const getNewId = async () => {
        try {
            setLoading(true)
            const newCheckout = await client.checkout.create()
            if (isBrowser) {
                localStorage.setItem('checkout_id', newCheckout.id)
            }
            setLoading(false)
            return newCheckout;

        } catch (e) {
            console.error(e)
            setLoading(false)
        }
    }

    /// Initialize the checkout and set the sate with the new checkoutId
    const initializeCheckout = async () => {
        console.log(client);

        try {
            setLoading(true)
            // Check if id exists
            const currentCheckoutId = isBrowser
            ? localStorage.getItem('checkout_id')
                : null

                let newCheckout = null
                if (currentCheckoutId) {
                    // If id exists, fetch checkout from Shopify
                    newCheckout = await client.checkout.fetch(currentCheckoutId)
                    if (newCheckout.completedAt) {
                        newCheckout = await getNewId()
                    }
                } else {
                    // If id does not, create new checkout
                    newCheckout = await getNewId()
                }
                setCheckout(newCheckout)
                setLoading(false)
            } catch (e) {
                console.error(e)
                setLoading(false)
            }
        }

        useEffect(() => {
            initializeCheckout()
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

        const addProductToCart = async (variantId) => {

            try {
                setLoading(true)
                const lineItems = [{
                variantId,
                quantity: 1
            }]
            const newCheckout= await client.checkout.addLineItems(
                checkout.id,
                lineItems
            )

            setCheckout(newCheckout)
            setLoading(false)
            // console.log(addItems.webUrl)
            // window.open(addItems.webUrl)

        } catch (e) {
            console.error(e)
            setLoading(false)
        }
    }

    const removeProductFromCart = async (lineItemId) => {
        try {
            setLoading(true)
            const newCheckout= await client.checkout.removeLineItems(
                checkout.id,
                lineItemId
            )

        setCheckout(newCheckout)
        setLoading(false)
        } catch (e) {
            console.error(e)
            setLoading(false)
        }
    }

    const addCoupon = async (coupon)  => {
        try {
            setLoading(true)
            const newCheckout = await client.checkout.addDiscount(checkout.id, coupon)
            setCheckout(newCheckout)
            setLoading(false)
        } catch (e) {
            console.error(e)
            setLoading(false)
        }
    }

    const removeCoupon = async (coupon)  => {
        try {
            setLoading(true)
            const newCheckout = await client.checkout.removeDiscount(checkout.id, coupon)
            setCheckout(newCheckout)
            setLoading(false)
        } catch (e) {
            console.error(e)
            setLoading(false)
        }
    }



    return (
        <StoreContext.Provider value={{
            ...defaultValues,
            checkout,
            addProductToCart,
            removeProductFromCart,
            toggleCartOpen,
            isCartOpen,
            addCoupon,
            removeCoupon,
            isLoading,
            toggleMobileMenu,
            isMobileMenuOpen,
            isCateringInquiriesOpen,
            toggleCateringInquiries,
            }}>
            {children}
        </StoreContext.Provider>
    )
}