import type { RequestHandler } from './$types';
import Stripe from 'stripe';

const SECRET_STRIPE_KEY = '';
const stripe = new Stripe(SECRET_STRIPE_KEY, {
	apiVersion: '2023-10-16'
});

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();
	const items = data.items;

	//change array to valid array stripe expects
	const lineItems: any = [];
	items.array.forEach((item: any) => {
		lineItems.push({ price: item.id, quantity: item.quantity });
	});

	//gives a unique url for the person to check out with
	const session = await stripe.checkout.sessions.create({
		line_items: lineItems,
		mode: 'payment',
		success_url: '/success',
		cancel_url: '/cancel'
	});

	//send the url to the frontend
	return new Response(JSON.stringify({ url: session.url }), {
		status: 200,
		headers: { 'content-type': 'application/json' }
	});
};
