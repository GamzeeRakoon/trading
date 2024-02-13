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
    <div class="hero min-h-screen">
        <div class="hero-content flex-col ">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Login Simulation</h1>
            <p class="text-center py-6">This is a simulated login screen!</p>
          </div>
          <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
            <form class="card-body">
              <div class="form-control">
                <select class="select select-bordered w-full max-w-xs" bind:value={selectedUser} on:change={handleUserChange}>
                    <option disabled selected>Select User</option>
                    <option>Admin</option>
                    <option>User</option>
                  </select>
              </div>
              <div class="form-control mt-6">
                  {#if isLoginDisabled === true}
                    <button class="btn btn-primary" disabled>Login</button>
                  {:else}
                    <a class="btn btn-primary" href="/store">Login</a>
                  {/if}

              </div>
            </form>
          </div>
        </div>
    </div>
</main>

<Footer />