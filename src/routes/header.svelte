<script lang="ts">
    import * as config from '$lib/config'
</script>

<nav class="px-2.5 py-1 border-b-2 mb-2">
    <ul class="flex flex-row justify-between w-full px-10">
        <li>
            <a href="/" class="">
            <b>{config.title}</b>
            </a>
        </li>
        <li>
            <a href="/contact">Contact</a>
        </li>
        <li>
            <a href="/rss.xml" target="_blank">RSS</a>
        </li>

        <button>Toggle dark mode</button>
    </ul>
</nav>
