import Stripe from "stripe";

export const publishable_key =
  "pk_test_51N4g5xLOJBiCExDfFDYeVV6p5qO0tlvtAqAh1JB7OYMKbOoSGcdZElQHt5CYDDzdzWtSYJvI04FHPthoZQ5lPYmg00YB8vWB9z";
export const secret_key =
  "sk_test_51N4g5xLOJBiCExDfRPKJSvwS6DU23xR3nIXo0S2hDiq5EbMDtg4j6hDaztHKvBMqhHmkWZTaU0wPxPTdv6LEgdYX00KVuGytlD";
  const DOMAIN = 'http://localhost:5173';


const stripe = new Stripe(publishable_key);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const params = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [{ shipping_rate: "shr_1M3gbBIvM95thmiICc6SZRzq" }],
        line_items: req.body.map((item) => {
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title,
                image: item.image,
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        // success_url: `${req.headers.origin}/success`,
        // cancel_url: `${req.headers.origin}/canceled`,
      };

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);

      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}



