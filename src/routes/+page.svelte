<script lang="ts">
    import Footer from "../components/Footer.svelte";
    import Navbar from "../components/Navbar.svelte";

    let selectedUser: string = "";
    let isLoginDisabled: Boolean = true;

    const handleUserChange = (event: Event) => {
      const target = event.target as HTMLSelectElement;
      selectedUser = target.value;
      isLoginDisabled = selectedUser === "Select User";
    }

</script>
<Navbar />

<main class="flex flex-col">
    <div class="hero">
        <div class="flex-col hero-content">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Login Simulation</h1>
            <p class="py-6 text-center">This is a simulated login screen!</p>
          </div>
          <div class="w-full max-w-sm shadow-2xl card shrink-0 bg-base-200">
            <form class="card-body">
              <div class="form-control">
                <select class="w-full max-w-xs select select-bordered" bind:value={selectedUser} on:change={handleUserChange}>
                    <option disabled selected>Select User</option>
                    <option>Admin</option>
                    <option>User</option>
                  </select>
              </div>
              <div class="mt-6 form-control">
                  {#if isLoginDisabled === true}
                    <button class="btn btn-primary" disabled>Login</button>
                  {:else}
                    <a class="btn btn-primary" href="/products">Login</a>
                  {/if}

              </div>
            </form>
          </div>
        </div>
    </div>
</main>

<Footer />
