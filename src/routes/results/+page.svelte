<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { t } from 'svelte-i18n';
    import { base } from '$app/paths';

    let score = 0;
    let userName = ''; // New variable to store the username
    let hasUser = false; // Flag to check if user parameter is present

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

        // Check if username is in URL
        const nameParam = params.get('user');
        if (nameParam) {
            userName = nameParam;
            hasUser = true;
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

    function updateURLWithUsername() {
        // Redirect to the current page with the `user` parameter
        const params = new URLSearchParams(window.location.search);
        params.set('user', userName.trim());
        window.history.replaceState({}, '', `${base}/results?${params.toString()}`);
    }
</script>

<svelte:head>
    <title>{$t('page.results.htmlTitle')}</title>
</svelte:head>

<main>
    {#if hasUser}
        <h1>{userName.charAt(0).toUpperCase() + userName.slice(1)} {$t("page.results.thirdPerson")} {score}/10!</h1>
        <p>{$t("page.results.motivation")}</p>
        <button class="again" on:click={playAgain}>{$t('page.results.motivationStart')}</button>

    {:else}
        <h1>{$t('page.results.secondPerson')}: {score}/10</h1>
        <p>{$t(`page.results.${score}`)}</p>

        <div class="enter">
            <input
                type="text"
                bind:value={userName}
                placeholder={$t('page.results.enterName')}
                aria-label="Enter your name"
            />
            <button on:click={updateURLWithUsername}>
                {$t('page.results.saveName')}
            </button>
        </div>
        <button class="again" on:click={playAgain}>{$t('page.results.tryAgain')}</button>
    {/if}

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

input {
    padding: 8px;
    font-size: 1em;
    margin-right: 10px;
}

p {
    font-size: 1.2em;
    margin-bottom: 20px;
}

.enter {
    margin-top: 20vh;
}

.again {
    margin-top: 2rem;
}

</style>
