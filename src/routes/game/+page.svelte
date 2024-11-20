<script lang="ts">
    import { goto } from '$app/navigation';
    import { assets, base } from '$app/paths';
    import { t } from 'svelte-i18n';

    const totalRounds = 1;

    type ImageData = {
        image: string;
        label: 'Good' | 'Bad';
        location: string;
        date: string;
    };

    const russianImages: ImageData[] = [
        { image: `${assets}/russian/1.jpg`, label: 'Bad', location: 'Kyiv, Ukraine', date: '2023-02-15' },
        { image: `${assets}/russian/2.jpg`, label: 'Bad', location: 'Kharkiv, Ukraine', date: '2023-03-10' },
    ];

    const israeliImages: ImageData[] = [
        { image: `${assets}/israeli/1.jpg`, label: 'Good', location: 'Gaza City, Palestine', date: '2023-02-20' },
        { image: `${assets}/israeli/2.jpg`, label: 'Good', location: 'Rafah, Palestine', date: '2023-03-18' },
    ];

    type Pair = [ImageData, ImageData];
    const pairs: Pair[] = [];
    const selectedRussian = russianImages.sort(() => Math.random() - 0.5);
    const selectedIsraeli = israeliImages.sort(() => Math.random() - 0.5);

    for (let i = 0; i < totalRounds; i++) {
        pairs.push([selectedRussian[i], selectedIsraeli[i]].sort(() => Math.random() - 0.5) as Pair);
    }

    let currentRound = 0;
    let score = 0;
    let message = '';
    let showMessage = false;
    let selectedImage: ImageData | null = null;
    let isCorrect = false;
    let userName = '';
    let gender = '';

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
        }
    }

    function saveAndRedirect() {
        if (userName.trim() === '') {
            alert($t('page.game.enterValidName'));
            return;
        }

        if (gender === '') {
            gender = "n";
        }

        const formattedName = encodeURIComponent(userName.trim());
        goto(`${base}/results/${formattedName}/${gender}/${score}`);
    }

    export function e(x: number): string {
        const o = 1000;
        const r = (x + o) ** 2;
        return btoa(r.toString());
    }

    startRound();
</script>

<svelte:head>
    <title>{$t('page.game.htmlTitle')}</title>

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="Oficiální tréninkový kvíz české diplomacie" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{base}/game" />
    <meta property="og:image" content="https://i3.cn.cz/15/1661152163_P2022082202112.jpg" />
    <meta property="og:description" content="Dokážete správně rozlišit dobré a špatné bombardování?" />
    <meta property="og:site_name" content="Dobronebozlo.cz" />
    <meta property="og:locale" content="cs_CZ" />
    <meta property="og:locale:alternate" content="en_US" />

    <!-- Twitter Meta Tags (Optional, for better sharing on Twitter) -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Oficiální tréninkový kvíz české diplomacie" />
    <meta name="twitter:description" content="Dokážete správně rozlišit dobré a špatné bombardování?" />
    <meta name="twitter:image" content="https://i3.cn.cz/15/1661152163_P2022082202112.jpg" />
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
        {#if currentRound < totalRounds - 1}
            <button on:click={nextRound}>{$t('nextRound')}</button>
        {:else}
            <div class="enter">
                <input
                    type="text"
                    bind:value={userName}
                    placeholder={$t('page.game.enterName')}
                    aria-label="Enter your name"
                />
                <select bind:value={gender} aria-label="Select your gender">
                    <option value="" disabled selected>{$t('page.game.genderHint')}</option>
                    <option value="m">{$t('page.game.genderMale')}</option>
                    <option value="f">{$t('page.game.genderFemale')}</option>
                    <option value="n">{$t('page.game.genderNeutral')}</option>
                </select>
                <button on:click={saveAndRedirect}>
                    {$t('page.game.showResults')}
                </button>
            </div>
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

.image-button {
    width: 40vw;
    height: 40vh;
    background-size: cover;
    background-position: center;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    transition: transform 0.2s, opacity 0.2s;
}

.image-button.selected {
    outline: 4px solid var(--secondary-color);
}

.image-button.incorrect {
    outline: 4px solid var(--error-color);
}

button {
    padding: 10px 20px;
    margin-top: 20px;
}

input, select {
    padding: 8px;
    margin-top: 10px;
}

.enter {
    margin-top: 20px;
}
</style>
