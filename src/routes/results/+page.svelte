<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { t } from 'svelte-i18n';
    import { base } from '$app/paths';

    let score = 0;

    // Extract the score from the query parameters client-side
    onMount(() => {
        const params = new URLSearchParams(window.location.search);
        const v = params.get('v') || 0;
        try {
            score = d(v || '');
        } catch (error) {
            console.error('Hello looser!');
            score = -1;
        }
    });

    function d(v: string): number {
        try {
            const decoded = parseInt(atob(v), 10);
            const offset = 1000;
            const score = Math.sqrt(decoded) - offset;
            if (score < 0 || score > 10 || !Number.isInteger(score)) throw new Error('Invalid score');
            return score;
        } catch (error) {
            throw new Error('Failed with value');
        }
    }

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
