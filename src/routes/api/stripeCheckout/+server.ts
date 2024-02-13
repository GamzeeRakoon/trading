import type { RequestHandler } from './$types';
import Stripe from 'stripe';
import { SECRET_STRIPE_KEY } from '$env/static/private'

const stripe = new Stripe(SECRET_STRIPE_KEY, {
	apiVersion: '2023-10-16'
});

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();
	const items = data.items;

	const requestHost = (request, pageType: string) => {
		const protocol = request.headers.get('x-forwarded-proto') || 'http';
		const host = request.headers.get('host') || 'localhost:5173';
		return `${protocol}://${host}/${pageType}`
	}
 
	//change array to valid array stripe expects
	const lineItems: any = [];
		items.forEach((item: any) => {
			lineItems.push({ price: item.id, quantity: item.quantity });
	});

	//gives a unique url for the person to check out with
	const session = await stripe.checkout.sessions.create({
		line_items: lineItems,
		mode: 'payment',
		success_url: requestHost(request, 'success'),
		cancel_url: requestHost(request, 'cancel')
	});

	//send the url to the frontend
	return new Response(JSON.stringify({ url: session.url }), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
};
