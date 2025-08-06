import { useState } from "react";
import { useStripe, useElements, CardElement, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";

export const usePayment = () => {
    const stripe = useStripe();
    const elements = useElements();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    
    const handlePayment = async (clientSecret, orderData) => {
        if (!stripe || !elements) {
            throw new Error("Stripe.js has not loaded yet.");
        }

        if (!clientSecret || !orderData) {
            throw new Error("Client secret or order data is missing.");
        }

        const requiredFields = ['name', 'email', 'shippingAddress', 'city', 'state'];
        for (const field of requiredFields) {
            if (!orderData[field]) {
                throw new Error(`Missing required field: ${field}`);
            }
            if (typeof orderData[field] !== 'string') {
                throw new Error(`Field ${field} must be a string`);
            }
        }

        // const cardElement = elements.getElement('card');

        setLoading(true);
        try {
            const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardNumberElement, CardExpiryElement, CardCvcElement),
                    billing_details: {
                        name: orderData.name,
                        email: orderData.email,
                        address: {
                            line1: orderData.shippingAddress,
                            city: orderData.city,
                            state: orderData.state,
                        }
                        
                    },
                }
            });
            
            if (stripeError) {
                throw new Error(stripeError.message);
            }

            // Redirect to the success page
            router.push("/success");

            return paymentIntent;
        } catch (error) {
            setLoading(false);
            console.error("Payment error:", error);
            throw error; // Re-throw the error for further handling if needed
        } finally {
            setLoading(false);
        }
    }

    return { handlePayment, loading };
}