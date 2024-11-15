<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { t } from 'svelte-i18n';
    import { base } from '$app/paths';

    let score = 0;

    // Extract the score from the query parameters client-side
    onMount(() => {
        const params = new URLSearchParams(window.location.search);
        score = Number(params.get('score')) || 0;
    });

    function playAgain() {
        goto(`${base}/`);
    }
</script>

<svelte:head>
    <title>{$t('page.results.htmlTitle')}</title>
</svelte:head>

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
