<script lang="ts">
  import { get } from "svelte/store";
  import { cartItems, addToCart, removeFromCart } from "../stores/cart";
  export let product : Product = {id: "", name: "", price: 0};

  // get writable and match id from cart and from the product
  let cart = get(cartItems);
  let cartItemIndex = cart.findIndex((item) => { return item.id === product.id });
  let cartProduct = cart[cartItemIndex]
  //check for changes in the cart via susbcribe
  cartItems.subscribe((newCartValue) => {
    cart = newCartValue;
    cartItemIndex = cart.findIndex((item) => { return item.id === product.id });
    cartProduct = cart[cartItemIndex]
  })

  console.log(product)
</script>

<div class="w-96 shadow-xl card bg-base-200">
    <div class="card-body">
      <h2 class="card-title">{product.name}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="font-bold">
        {#if cartProduct !== undefined}
          <p>Quantity: {cartProduct.quantity}</p>
        {:else}
          <p>Quantity: 0</p>
        {/if}
        <p>Price: ${product.price}</p>
      </div>
      <div class="justify-end card-actions">
        <button class="btn btn-primary" on:click={() => addToCart(product.id)}>Add</button>
        <button class="btn btn-error" on:click={() => removeFromCart(product.id)}>Remove</button>
      </div>
    </div>
  </div>