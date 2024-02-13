<script lang="ts">
    import Footer from "../../components/Footer.svelte";
    import Navbar from "../../components/Navbar.svelte";
    import ProductCard from "../../components/ProductCard.svelte";

    const products : Product[] = [
        {
            id: "1",
            name: "Coffee",
            price: 2
        },
        {
            id: "2",
            name: "Sunglasses",
            price: 10
        },
        {
            id: "3",
            name: "Water Bottle",
            price: 15
        }
    ]
</script>
<Navbar />

<main class="flex justify-center mx-5">
    <div class="container flex flex-row flex-wrap gap-5 justify-center">
        {#each products as product}
            <ProductCard product={product}/>
        {/each}
    </div>
</main>

<Footer />