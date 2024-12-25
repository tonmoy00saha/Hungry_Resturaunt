import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: add publish key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);
const Payment = () => {
    return (
        <div>
            <SectionTitle heading='---Payment---'
            subheading="Pay before Eat"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;