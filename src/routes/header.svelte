<script lang="ts">
    import * as config from '$lib/config'
</script>

<nav class="px-2.5 py-1">
    <a href="/" class="">
        <b>{config.title}</b>
    </a>

    <ul>
        <li>
            <a href="/contact">Contact</a>
        </li>
        <li>
            <a href="/rss.xml" target="_blank">RSS</a>
        </li>

        <button>Toggle dark mode</button>
    </ul>
</nav>
