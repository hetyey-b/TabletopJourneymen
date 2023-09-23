<script lang="ts">
    import * as config from '$lib/config';
    export let data;
</script>

<svelte:head>
    <title>{config.title}</title>
</svelte:head>

<section>
    <ul>
        {#each data.posts as post}
            <li>
                <a href={post.slug.toLowerCase().replaceAll(' ', '-')}>
                    {post.title}
                </a>
                <p>{post.date}</p>
                <p>{post.description}</p>
            </li>
        {/each}
    </ul>
</section>
