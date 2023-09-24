<script lang="ts">
    import '../app.css';

    import Header from './header.svelte';
    import Footer from './footer.svelte';
</script>

<div class="layout">
    <Header />

    <main class="main">
        <slot />
    </main>

    <Footer />
</div>

<style>
   .layout {
        height: 100%;
        display: grid;
    } 

    .main {
        min-height: 80vh;
        padding-left: 20%;
        padding-right: 20%;
    }
</style>


