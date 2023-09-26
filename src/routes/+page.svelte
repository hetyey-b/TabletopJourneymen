<script lang="ts">
    import * as config from '$lib/config';
    import { formatDate } from '$lib/util.js';
    export let data;
</script>

<svelte:head>
    <title>{config.title}</title>
</svelte:head>

<section>
    <ul class="articles-ul">
        {#each data.posts as post}
            <li class="articles-li">
                <h1>
                    <a class="header-link" href={post.slug}>
                        {post.title}
                    </a>
                </h1>
                <p class="date-author">{formatDate(post.date)} - {post.author}</p>
                <p class="description">{post.description}</p>
            </li>
        {/each}
    </ul>
</section>

<style>
    .articles-ul {
        list-style: none;
    }
    .articles-li {
        border-bottom: 1px solid;
    }
    .articles-li a {
        display: inline-block;
    }
    h1 {
        color: var(--brand);
    }
</style>
