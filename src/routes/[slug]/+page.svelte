<script lang="ts">
    import { formatDate } from '$lib/util.js';
    import * as config from '$lib/config';
    export let data;
</script>

<svelte:head>
    <title>{data.meta.title} | {config.title}</title>
    <meta property="og:type" content="article"/>
    <meta property="og:content" content={data.meta.title}/>
</svelte:head>

<article>
    <hgroup>
        <h1>{data.meta.title}</h1>
        <p class="date-author">Published at: {formatDate(data.meta.date)} by {data.meta.author}</p>
    </hgroup>

    <div>
        {#each data.meta.categories as category}
            <a class="tag" href={`categories/${category}`}>
                &num;{category}
            </a>
        {/each}
    </div>

    <div> 
        <svelte:component this={data.content} />
    </div>
</article>

<style> 
    article {
        margin-inline: auto;
    }
    h1 {
        text-transform: capitalize;
    }
    .tag {
        margin-left: 0.5rem;
        cursor: pointer;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        color: var(--text-2);
        background-color: var(--surface-4);
        cursor: pointer;
    } 
    .tag:hover {
        color: var(--text-3);
        background-color: var(--surface-3);
    }
</style>
