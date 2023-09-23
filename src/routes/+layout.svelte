<script lang="ts">
  import "../app.css";
  
  import Header from './header.svelte';
  import Footer from './footer.svelte';
</script>

<div class="h-full grid">
    <Header class="h-[5vh]"/>

    <main class="min-h-[90vh] lg:px-[20%] px-2">
        <slot />
    </main>

    <Footer class="h-[5vh]"/>
</div>

