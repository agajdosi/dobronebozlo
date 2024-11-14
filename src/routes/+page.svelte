<script lang="ts">
    import { goto } from '$app/navigation';

    function startGame() {
        goto('/game');
    }
</script>

<main>
    <h1>Good or Bad Bombing?</h1>
    <p>Can you tell the difference between good and bad bombings? Let's find out!</p>
    <button on:click={startGame}>Start Game</button>
</main>

<style>
    main {
        text-align: center;
        padding: 20px;
    }

    button {
        padding: 10px 20px;
        font-size: 1.2em;
        cursor: pointer;
    }
</style>
