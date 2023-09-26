<script lang="ts">
    import * as config from '$lib/config';
</script>

<nav class="navbar">
    <ul class="navbar-ul">
        <li>
            <a href="/" class="title header-link">
            <b>{config.title}</b>
            </a>
        </li>
        <li>
            <a class="hover-text-1 header-link" href="/about">About</a>
        </li>
        <li>
            <a class="hover-text-1 header-link" href="/contact">Contact</a>
        </li>
        <li>
            <a class="hover-text-1 header-link" href="/rss.xml" target="_blank">RSS</a>
        </li>

        <button class='theme-button' on:click={() => {
            const theme = localStorage.getItem('color-scheme');

            if (!theme) {
                localStorage.setItem('color-scheme', 'dark');
                return;
            }

            const newTheme = theme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('color-scheme', newTheme);
            document.documentElement.setAttribute('color-scheme', newTheme);

            const button = document.querySelector('.theme-button');
            button.innerText = newTheme === 'light' ? 'Dark mode' : 'Light mode';
        }}>
            Dark mode
        </button>
    </ul>
</nav>

<style>
    .navbar {
        width: 100%;
        border-bottom: 2px solid;
    }

    .navbar-ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-left: 1rem;
        padding-right: 1rem;
        list-style: none;
    }

    .title {
        color: var(--brand);
    }

    .theme-button {
        border: none;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        color: var(--text-2);
        background-color: var(--surface-4);
        cursor: pointer;
        font-size: 1rem;
    }

    .theme-button:hover {
        color: var(--text-3);
        background-color: var(--surface-3);
    }
</style>
