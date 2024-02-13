<script lang="ts">
	import Footer from "../../components/Footer.svelte";
	import Navbar from "../../components/Navbar.svelte";
	import ProductCard from "../../components/ProductCard.svelte";



</script>
<div class="flex flex-col justify-between h-screen">
	<Navbar />
	
	<main class="flex justify-center mx-5">
		<div class="container flex flex-row flex-wrap gap-5 justify-center">
			<ProductCard />
			<ProductCard />
			<ProductCard />
		</div>
	</main>
	
	<Footer />
</div>



