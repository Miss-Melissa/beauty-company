const Stripe = require('stripe')('sk_test_51MQxSkLDGq7nBbuRglhLZLK0NWUGoFpzhYkBXD8PjnskTko9u9hp4IC7pAbAkuFsAeFkTRdGjhuQt0MIQO3l6cCm00D6YIuUIg')


const orderProduct = async (req, res) => {
    try {

        const session = await Stripe.checkout.sessions.create({
            payment_method_types: ["card"],

            shipping_address_collection: { allowed_countries: ['SE'] },
            shipping_options: [
                {
                    shipping_rate_data: {
                        type: 'fixed_amount',
                        fixed_amount: { amount: 0, currency: 'SEK' },
                        display_name: 'Free shipping',
                        delivery_estimate: {
                            minimum: { unit: 'business_day', value: 1 },
                            maximum: { unit: 'business_day', value: 2 },
                        },
                    },
                },
            ],
            phone_number_collection: {
                enabled: true
            },
            line_items: req.body.items.map(item => {
                console.log(item)
                return {
                    price_data: {
                        currency: "SEK",
                        product_data: {
                            name: item.productname,
                            images: [item.image],
                            description: item.productdesc,
                        },
                        unit_amount: item.productprice * 100,
                    },
                    quantity: item.quantity,
                }
            }),
            mode: "payment",
            success_url: 'http://localhost:3000/checkout-success',
            cancel_url: 'http://localhost:3000/cart',
        });
        res.send({ url: session.url });
    }
    catch (error) {
        console.log(error)
        res.send({
            message: "An error occcurred"
        });
    }
};





module.exports = { orderProduct }
