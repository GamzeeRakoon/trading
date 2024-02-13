import { writable, get } from 'svelte/store';

export const cartItems = writable<CartItem[]>([]);

export const addToCart = (id: string) => {
	const items = get(cartItems);
	//does current item have an id of 1 or higher
	const itemPosition = items.findIndex((item) => {
		return item.id == id;
	});

	//if quantity isnt lower then -1 add to quantity
	if (itemPosition !== -1) {
		//item has quantity, add +1 to quantity
		cartItems.update(() => {
			const updatedItems = items.map((item) => {
				if (item.id === id) {
					return { ...item, quantity: item.quantity + 1 };
				}

				return item;
			});

			return updatedItems;
		});
	} else {
		//item isnt in cart, add object by setting quantity to 1
		cartItems.update(() => {
			return [...items, { id: id, quantity: 1 }];
		});
	}
};

export const removeFromCart = (id: string) => {
	const items = get(cartItems);

	//does current item have an id of 1 or higher
	const itemPosition = items.findIndex((item) => {
		return item.id == id;
	});

	//if item quantity -1 === 0 delete item from cart
	if (items[itemPosition]?.quantity - 1 === 0) {
		items.splice(itemPosition, 1);
	}

	//item has quantity, remove -1 of quantity
	cartItems.update(() => {
		const updatedItems = items.map((item) => {
			if (item.id === id) {
				return { ...item, quantity: item.quantity - 1 };
			}

			return item;
		});

		return updatedItems;
	});
};
