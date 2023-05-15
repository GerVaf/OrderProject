import { loadStripe } from "@stripe/stripe-js";
import { publishable_key } from "../src/pages/api/stripe";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(publishable_key);
  }

  return stripePromise;
};

export default getStripe;
