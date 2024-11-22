<script lang="ts">
    import { goto } from '$app/navigation';
    import { assets, base } from '$app/paths';
    import { t } from 'svelte-i18n';

    const totalRounds = 20;

    type ImageData = {
        image: string;
        label: 'Good' | 'Bad';
        location: string;
        date: string;
        source: string;
    };

    const russianImages: ImageData[] = [
        { image: `${assets}/russian/1.jpg`, label: 'Bad', location: 'Ukraine', date: '', source: '' },
        { image: `${assets}/russian/2.jpg`, label: 'Bad', location: 'Ukraine', date: '', source: '' },
        { image: `${assets}/russian/3.jpg`, label: 'Bad', location: 'Ukraine', date: '', source: '' },
        { image: `${assets}/russian/4.jpg`, label: 'Bad', location: 'Ukraine', date: '', source: '' },
        { image: `${assets}/russian/5.jpg`, label: 'Bad', location: 'Ukraine', date: '', source: '' },
        { image: `${assets}/russian/6.jpg`, label: 'Bad', location: 'Ukraine', date: '', source: '' },
        { image: `${assets}/russian/7.jpg`, label: 'Bad', location: 'Ukraine', date: '', source: '' },
        { image: `${assets}/russian/8.jpg`, label: 'Bad', location: 'Ukraine', date: '', source: '' },
        { image: `${assets}/russian/9.jpg`, label: 'Bad', location: 'Ukraine', date: '', source: '' },
        { image: `${assets}/russian/10.jpg`, label: 'Bad', location: 'Ukraine', date: '', source: '' },
        { image: `${assets}/russian/1.jpg`, label: 'Bad', location: 'Ukraine', date: '', source: '' },
        { image: `${assets}/russian/2.jpg`, label: 'Bad', location: 'Ukraine', date: '', source: '' },
        { image: `${assets}/russian/3.jpg`, label: 'Bad', location: 'Ukraine', date: '', source: '' },
        { image: `${assets}/russian/4.jpg`, label: 'Bad', location: 'Ukraine', date: '', source: '' },
        { image: `${assets}/russian/5.jpg`, label: 'Bad', location: 'Ukraine', date: '', source: '' },
        { image: `${assets}/russian/6.jpg`, label: 'Bad', location: 'Ukraine', date: '', source: '' },
        { image: `${assets}/russian/7.jpg`, label: 'Bad', location: 'Ukraine', date: '', source: '' },
        { image: `${assets}/russian/8.jpg`, label: 'Bad', location: 'Ukraine', date: '', source: '' },
        { image: `${assets}/russian/9.jpg`, label: 'Bad', location: 'Ukraine', date: '', source: '' },
        { image: `${assets}/russian/10.jpg`, label: 'Bad', location: 'Ukraine', date: '', source: '' },
    ];

    const israeliImages: ImageData[] = [
        { image: `${assets}/israeli/1.jpg`, label: 'Good', location: 'Palestine', date: '', source: '' },
        { image: `${assets}/israeli/2.jpg`, label: 'Good', location: 'Palestine', date: '', source: '' },
        { image: `${assets}/israeli/3.jpg`, label: 'Good', location: 'Palestine', date: '', source: '' },
        { image: `${assets}/israeli/4.jpg`, label: 'Good', location: 'Palestine', date: '', source: '' },
        { image: `${assets}/israeli/5.jpg`, label: 'Good', location: 'Palestine', date: '', source: '' },
        { image: `${assets}/israeli/6.jpg`, label: 'Good', location: 'Palestine', date: '', source: '' },
        { image: `${assets}/israeli/7.jpg`, label: 'Good', location: 'Palestine', date: '', source: '' },
        { image: `${assets}/israeli/8.jpg`, label: 'Good', location: 'Palestine', date: '', source: '' },
        { image: `${assets}/israeli/9.jpg`, label: 'Good', location: 'Palestine', date: '', source: '' },
        { image: `${assets}/israeli/10.jpg`, label: 'Good', location: 'Palestine', date: '', source: '' },

        { image: `${assets}/wiki/3130.jpg`, label: 'Good', location: 'Rafah Refugee Camp', date: '2024-01-01', source: 'https://www.middleeasteye.net/news/gaza-war-100-days-more-than-23000-dead-society-ruins'},
        { image: `${assets}/wiki/3131.jpg`, label: 'Good', location: 'El-Remal', date: '2023-10-09', source: 'https://en.wikipedia.org/wiki/War_crimes_in_the_Israel%E2%80%93Hamas_war#/media/File:Damage_in_Gaza_Strip_during_the_October_2023_-_29.jpg'},
        { image: `${assets}/wiki/3132.jpg`, label: 'Good', location: 'Gaza City', date: '2023-10-17', source: 'https://en.wikipedia.org/wiki/War_crimes_in_the_Israel%E2%80%93Hamas_war#/media/File:Fars_Photo_of_Destruction_in_Gaza_Strip_during_2023_War_18.jpg'},
        { image: `${assets}/wiki/3133.jpg`, label: 'Good', location: 'Al-Ahli', date: '2023-10-18', source: 'https://en.wikipedia.org/wiki/Attacks_on_health_facilities_during_the_Israel%E2%80%93Hamas_war#/media/File:Aftermath_of_Al-Ahli_Arab_Hospital_explosion_(3).png'},
        { image: `${assets}/wiki/3134.jpg`, label: 'Good', location: 'Gaza City', date: '2023-11-02', source: 'https://commons.wikimedia.org/wiki/Category:Operation_Swords_of_Iron#/media/File:IDF_D9R_bulldozer_-_Swords_of_Iron_-_2023-11-02.jpg'},
        { image: `${assets}/wiki/3135.jpg`, label: 'Good', location: 'Watan Tower, Gaza City', date: '2023-10-08', source: 'https://commons.wikimedia.org/wiki/Category:Damage_in_Gaza_City_during_the_Israel%E2%80%93Hamas_war#/media/File:Damage_in_Gaza_Strip_during_the_October_2023_-_04.jpg'},
        { image: `${assets}/wiki/3136.jpg`, label: 'Good', location: 'Gaza', date: '2023-12-06', source: 'https://commons.wikimedia.org/wiki/Category:Ruins_in_the_Gaza_Strip#/media/File:Gaza_war_damage_2023.jpg'},
        { image: `${assets}/wiki/3137.jpg`, label: 'Good', location: 'Beit Lahiya', date: '2024-11-18', source: 'https://www.aa.com.tr/en/middle-east/at-least-17-killed-as-israeli-airstrike-flattens-home-in-gaza-s-beit-lahia/3396863'},
        { image: `${assets}/wiki/3138.jpg`, label: 'Good', location: 'Rashad al-Shawwa Historical Cultural Center', date: '2023-11-29', source: 'https://www.aa.com.tr/en/middle-east/-israel-destroyed-central-archives-of-gaza-city-head-of-gaza-municipality/3068555'},
        { image: `${assets}/wiki/3139.jpg`, label: 'Good', location: 'Gaza Library', date: '2023-11-27', source: 'https://lithub.com/gazas-main-public-library-has-been-destroyed/'},
        //{ image: `${assets}/wiki/1.jpg`, label: 'Good', location: 'El-Remal', date: '2023-10-09', source: ''},
        //{ image: `${assets}/wiki/1.jpg`, label: 'Good', location: 'El-Remal', date: '2023-10-09', source: ''},
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

        if (gender === '') gender = "n";
        const formattedName = encodeURIComponent(userName.trim());
        const encoded_score = encodeScore(score)

        goto(`${base}/results/${encoded_score}/${gender}/${formattedName}`);
    }

    export function encodeScore(score: number): string {
        const result = (score + 1000) ** 2;
        return btoa(result.toString());
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

<h1>{$t('gameTitle')}</h1>
<p>{$t('round')} {currentRound + 1}/{totalRounds}</p>

<div class="images">
    {#each pairs[currentRound] as bombing}
        <div class="image-container">
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
            <!-- Show description if the result is revealed -->
            {#if showMessage}
                <p class="description">
                    {bombing.location} - {bombing.date}
                </p>
            {/if}
        </div>
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

<style>
.images {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
}

.image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
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

.description {
    margin-top: 10px;
    font-size: 1rem;
    color: var(--grey-color);
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
