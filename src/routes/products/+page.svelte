<script lang="ts">
	import Footer from '../../components/Footer.svelte';
	import Navbar from '../../components/Navbar.svelte';
	import ProductCard from '../../components/ProductCard.svelte';

	const products: Product[] = [
		{
			id: 'price_1OjKdtKPbcFLPyH80Zx2wpgT',
			name: 'Coffee',
			price: 2
		},
		{
			id: 'price_1OjKeaKPbcFLPyH82G11l7jm',
			name: 'Sunglasses',
			price: 10
		},
		{
			id: 'price_1OjKezKPbcFLPyH824Cr9Xis',
			name: 'Water Bottle',
			price: 15
		}
	];
</script>

<Navbar />

<main class="flex justify-center mx-5">
	<div class="container flex flex-row flex-wrap gap-5 justify-center">
		{#each products as product}
			<ProductCard {product} />
		{/each}
	</div>
</main>

<Footer />
