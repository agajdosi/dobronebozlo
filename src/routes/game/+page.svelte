<script lang="ts">
    import { goto } from '$app/navigation';
    import { assets, base } from '$app/paths';
    import { t } from 'svelte-i18n';

    // Define the image metadata type
    type ImageData = {
        image: string;
        label: 'Good' | 'Bad';
        location: string;
        date: string;
    };

    // Define the image paths with metadata
    const russianImages: ImageData[] = [
        { image: `${assets}/russian/1.jpg`, label: 'Bad', location: 'Kyiv, Ukraine', date: '2023-02-15' },
        { image: `${assets}/russian/2.jpg`, label: 'Bad', location: 'Kharkiv, Ukraine', date: '2023-03-10' },
        { image: `${assets}/russian/3.jpg`, label: 'Bad', location: 'Mariupol, Ukraine', date: '2023-04-05' },
        { image: `${assets}/russian/4.jpg`, label: 'Bad', location: 'Bucha, Ukraine', date: '2023-05-20' },
        { image: `${assets}/russian/5.jpg`, label: 'Bad', location: 'Odessa, Ukraine', date: '2023-06-14' },
        { image: `${assets}/russian/6.jpg`, label: 'Bad', location: 'Lviv, Ukraine', date: '2023-07-08' },
        { image: `${assets}/russian/7.jpg`, label: 'Bad', location: 'Donetsk, Ukraine', date: '2023-08-12' },
        { image: `${assets}/russian/8.jpg`, label: 'Bad', location: 'Zaporizhzhia, Ukraine', date: '2023-09-01' },
        { image: `${assets}/russian/9.jpg`, label: 'Bad', location: 'Dnipro, Ukraine', date: '2023-10-21' },
        { image: `${assets}/russian/10.jpg`, label: 'Bad', location: 'Mykolaiv, Ukraine', date: '2023-11-05' },
    ];

    const israeliImages: ImageData[] = [
        { image: `${assets}/israeli/1.jpg`, label: 'Good', location: 'Gaza City, Palestine', date: '2023-02-20' },
        { image: `${assets}/israeli/2.jpg`, label: 'Good', location: 'Rafah, Palestine', date: '2023-03-18' },
        { image: `${assets}/israeli/3.jpg`, label: 'Good', location: 'Jabalia, Palestine', date: '2023-04-25' },
        { image: `${assets}/israeli/4.jpg`, label: 'Good', location: 'Khan Younis, Palestine', date: '2023-05-30' },
        { image: `${assets}/israeli/5.jpg`, label: 'Good', location: 'Deir al-Balah, Palestine', date: '2023-06-22' },
        { image: `${assets}/israeli/6.jpg`, label: 'Good', location: 'Beit Hanoun, Palestine', date: '2023-07-14' },
        { image: `${assets}/israeli/7.jpg`, label: 'Good', location: 'Al-Shati, Palestine', date: '2023-08-07' },
        { image: `${assets}/israeli/8.jpg`, label: 'Good', location: 'Bureij, Palestine', date: '2023-09-19' },
        { image: `${assets}/israeli/9.jpg`, label: 'Good', location: 'Nuseirat, Palestine', date: '2023-10-02' },
        { image: `${assets}/israeli/10.jpg`, label: 'Good', location: 'Maghazi, Palestine', date: '2023-11-12' },
    ];

    type Pair = [ImageData, ImageData];
    const pairs: Pair[] = [];
    const selectedRussian = russianImages.sort(() => Math.random() - 0.5);
    const selectedIsraeli = israeliImages.sort(() => Math.random() - 0.5);

    for (let i = 0; i < 10; i++) {
        pairs.push([selectedRussian[i], selectedIsraeli[i]].sort(() => Math.random() - 0.5) as Pair);
    }

    let currentRound = 0;
    const totalRounds = 10;
    let score = 0;
    let message = '';
    let showMessage = false;
    let selectedImage: ImageData | null = null;
    let isCorrect = false;

    function startRound() {
        selectedImage = null;
        message = '';
        showMessage = false;
        isCorrect = false;
    }

    function handleChoice(choice: string, image: ImageData) {
        selectedImage = image;
        isCorrect = choice === 'Good';
        if (isCorrect) {
            score += 1;
            message = $t('correct');
        } else {
            message = $t('wrong');
        }
        showMessage = true;
    }

    function nextRound() {
        if (currentRound < totalRounds - 1) {
            currentRound += 1;
            startRound();
        } else {
            const v = e(score);
            goto(`${base}/results?v=${v}`);
        }
    }

    export function e(x: number): string {
        if (x < 0 || x > 10) throw new Error('Invalid value');
        const o = 1000;
        const r = (x + o) ** 2;
        return btoa(r.toString());
    }


    function preloadImages() {
        if (typeof window === 'undefined') return;
        const imagesToPreload = pairs.slice(1).flatMap(([img1, img2]) => [img1.image, img2.image]);
        imagesToPreload.forEach((src) => {
            const image = new Image();
            image.src = src;
        });
    }

    preloadImages();
    startRound();
</script>

<svelte:head>
    <title>{$t('page.game.htmlTitle')}</title>
</svelte:head>

<main>
    <h1>{$t('gameTitle')}</h1>
    <p>{$t('round')} {currentRound + 1}/{totalRounds}</p>

    <div class="images">
        {#each pairs[currentRound] as bombing}
            <button
                type="button"
                class="image-button {selectedImage === bombing ? (isCorrect ? 'selected' : 'incorrect') : ''}"
                style="background-image: url({bombing.image})"
                on:click={() => !showMessage && handleChoice(bombing.label, bombing)}
                on:keydown={(e) => !showMessage && e.key === 'Enter' && handleChoice(bombing.label, bombing)}
                disabled={showMessage}
                aria-label="btn"
            >
            </button>
        {/each}
    </div>
    

    {#if showMessage}
        <p>{message}</p>
        <button on:click={nextRound}>{$t('nextRound')}</button>
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

    .image-button {
        width: 40vw;
        height: 40vh; /* 2:3 ratio */
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-color: var(--background-color);
        border: none;
        cursor: pointer;
        border-radius: 8px;
        transition: transform 0.2s, opacity 0.2s;
        outline: none;
    }

    .image-button.selected {
        outline: 4px solid var(--secondary-color);
    }

    .image-button.incorrect {
        outline: 4px solid var(--error-color);
    }

    .image-button:disabled {
        cursor: not-allowed;
        pointer-events: none;
    }

    button {
        padding: 10px 20px;
        font-size: 1em;
        margin-top: 20px;
    }
</style>
