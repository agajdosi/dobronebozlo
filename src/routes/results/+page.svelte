<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { t } from 'svelte-i18n';

    // Extract the score from the URL query parameters
    let score = 0;
    $: score = Number(new URLSearchParams($page.url.search).get('score')) || 0;

    function playAgain() {
        goto('/');
    }
</script>

<main>
    <h1>{$t('gameResults')}</h1>
    <p>{$t('yourScore')}: {score}/10</p>
    <button on:click={playAgain}>{$t('playAgain')}</button>
</main>

<style>
    main {
        text-align: center;
        padding: 20px;
    }

    button {
        padding: 10px 20px;
        font-size: 1em;
        margin-top: 20px;
    }
</style>
