<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';

    // Extract the score from the URL query parameters
    let score = 0;
    $: score = Number(new URLSearchParams($page.url.search).get('score')) || 0;

    function playAgain() {
        goto('/');
    }
</script>

<main>
    <h1>Game Results</h1>
    <p>Your final score: {score} / 10</p>
    <button on:click={playAgain}>Play Again</button>
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
