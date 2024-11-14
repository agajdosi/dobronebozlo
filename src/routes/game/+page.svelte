<script lang="ts">
    import { goto } from '$app/navigation';
    import { assets, base } from '$app/paths';
    import { t } from 'svelte-i18n';

    // Define the image paths with metadata
    const russianImages = [
        { image: `${assets}/russian/1.png`, label: 'Bad', location: 'Kyiv, Ukraine', date: '2023-02-15' },
        { image: `${assets}/russian/2.png`, label: 'Bad', location: 'Kharkiv, Ukraine', date: '2023-03-10' },
        { image: `${assets}/russian/3.png`, label: 'Bad', location: 'Mariupol, Ukraine', date: '2023-04-05' },
        { image: `${assets}/russian/4.png`, label: 'Bad', location: 'Bucha, Ukraine', date: '2023-05-20' },
        { image: `${assets}/russian/5.png`, label: 'Bad', location: 'Odessa, Ukraine', date: '2023-06-14' },
        { image: `${assets}/russian/6.png`, label: 'Bad', location: 'Lviv, Ukraine', date: '2023-07-08' },
        { image: `${assets}/russian/7.png`, label: 'Bad', location: 'Donetsk, Ukraine', date: '2023-08-12' },
        { image: `${assets}/russian/8.png`, label: 'Bad', location: 'Zaporizhzhia, Ukraine', date: '2023-09-01' },
        { image: `${assets}/russian/9.png`, label: 'Bad', location: 'Dnipro, Ukraine', date: '2023-10-21' },
        { image: `${assets}/russian/10.png`, label: 'Bad', location: 'Mykolaiv, Ukraine', date: '2023-11-05' },
    ];

    const israeliImages = [
        { image: `${assets}/israeli/1.png`, label: 'Good', location: 'Gaza City, Palestine', date: '2023-02-20' },
        { image: `${assets}/israeli/2.png`, label: 'Good', location: 'Rafah, Palestine', date: '2023-03-18' },
        { image: `${assets}/israeli/3.png`, label: 'Good', location: 'Jabalia, Palestine', date: '2023-04-25' },
        { image: `${assets}/israeli/4.png`, label: 'Good', location: 'Khan Younis, Palestine', date: '2023-05-30' },
        { image: `${assets}/israeli/5.png`, label: 'Good', location: 'Deir al-Balah, Palestine', date: '2023-06-22' },
        { image: `${assets}/israeli/6.png`, label: 'Good', location: 'Beit Hanoun, Palestine', date: '2023-07-14' },
        { image: `${assets}/israeli/7.png`, label: 'Good', location: 'Al-Shati, Palestine', date: '2023-08-07' },
        { image: `${assets}/israeli/8.png`, label: 'Good', location: 'Bureij, Palestine', date: '2023-09-19' },
        { image: `${assets}/israeli/9.png`, label: 'Good', location: 'Nuseirat, Palestine', date: '2023-10-02' },
        { image: `${assets}/israeli/10.png`, label: 'Good', location: 'Maghazi, Palestine', date: '2023-11-12' },
    ];

    // Randomly select 10 images from each category
    const selectedRussian = russianImages.sort(() => Math.random() - 0.5).slice(0, 10);
    const selectedIsraeli = israeliImages.sort(() => Math.random() - 0.5).slice(0, 10);

    let currentRound = 0;
    const totalRounds = 2;
    let score = 0;
    let message = '';
    let currentPair = [];
    let showMessage = false;

    function startRound() {
        currentPair = [
            selectedRussian[currentRound],
            selectedIsraeli[currentRound],
        ].sort(() => Math.random() - 0.5);
        message = '';
        showMessage = false;
    }

    function handleChoice(choice: string) {
        if (choice === 'Good') {
            score += 1;
            message = $t('correct');
        } else {
            message = $t('wrong');
        }

        showMessage = true;
        currentRound += 1;
    }

    function nextRound() {
        if (currentRound < totalRounds) {
            startRound();
        } else {
            goto(`${base}/results?score=${score}`);
        }
    }

    startRound();
</script>

<main>
    <h1>{$t('gameTitle')}</h1>
    {#if currentRound < totalRounds}
        <p>{$t('round')} {currentRound + 1}/{totalRounds}</p>
    {/if}

    <div class="images" class:hidden={showMessage}>
        {#each currentPair as bombing}
            <div class="image-container">
                <img src={bombing.image} alt="Bombing Image" on:click={() => handleChoice(bombing.label)} />
            </div>
        {/each}
    </div>

    {#if showMessage}
        <p>{message}</p>
        {#if currentRound < totalRounds}
            <button on:click={nextRound}>{$t('nextRound')}</button>
        {:else}
            <button on:click={() => goto(`${base}/results?score=${score}`)}>{$t('showResults')}</button>
        {/if}
    {/if}
</main>

<style>
    main {
        text-align: center;
        padding: 20px;
    }

    .images {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin: 20px 0;
    }

    .image-container {
        cursor: pointer;
    }

    img {
        max-width: 300px;
        border: 2px solid #333;
    }

    button {
        padding: 10px 20px;
        font-size: 1em;
        margin-top: 20px;
    }

    .hidden {
        display: none;
    }
</style>
