<script lang="ts">
    import { goto } from '$app/navigation';

    // Define the image paths with metadata
    const russianImages = [
        { image: '/russian/1.png', label: 'Bad', location: 'Kyiv, Ukraine', date: '2023-02-15' },
        { image: '/russian/2.png', label: 'Bad', location: 'Kharkiv, Ukraine', date: '2023-03-10' },
        { image: '/russian/3.png', label: 'Bad', location: 'Mariupol, Ukraine', date: '2023-04-05' },
        { image: '/russian/4.png', label: 'Bad', location: 'Bucha, Ukraine', date: '2023-05-20' },
        { image: '/russian/5.png', label: 'Bad', location: 'Odessa, Ukraine', date: '2023-06-14' },
        { image: '/russian/6.png', label: 'Bad', location: 'Lviv, Ukraine', date: '2023-07-08' },
        { image: '/russian/7.png', label: 'Bad', location: 'Donetsk, Ukraine', date: '2023-08-12' },
        { image: '/russian/8.png', label: 'Bad', location: 'Zaporizhzhia, Ukraine', date: '2023-09-01' },
        { image: '/russian/9.png', label: 'Bad', location: 'Dnipro, Ukraine', date: '2023-10-21' },
        { image: '/russian/10.png', label: 'Bad', location: 'Mykolaiv, Ukraine', date: '2023-11-05' },
        { image: '/russian/11.png', label: 'Bad', location: 'Sumy, Ukraine', date: '2023-12-01' },
        { image: '/russian/12.png', label: 'Bad', location: 'Chernihiv, Ukraine', date: '2023-12-15' },
        { image: '/russian/13.png', label: 'Bad', location: 'Kherson, Ukraine', date: '2024-01-10' },
        { image: '/russian/14.png', label: 'Bad', location: 'Melitopol, Ukraine', date: '2024-02-05' },
        { image: '/russian/15.png', label: 'Bad', location: 'Bakhmut, Ukraine', date: '2024-03-12' },
        { image: '/russian/16.png', label: 'Bad', location: 'Kramatorsk, Ukraine', date: '2024-04-18' },
        { image: '/russian/17.png', label: 'Bad', location: 'Sloviansk, Ukraine', date: '2024-05-23' },
        { image: '/russian/18.png', label: 'Bad', location: 'Sievierodonetsk, Ukraine', date: '2024-06-29' },
        { image: '/russian/19.png', label: 'Bad', location: 'Rubizhne, Ukraine', date: '2024-07-15' },
        { image: '/russian/20.png', label: 'Bad', location: 'Lysychansk, Ukraine', date: '2024-08-02' },
    ];

    const israeliImages = [
        { image: '/israeli/1.png', label: 'Good', location: 'Gaza City, Palestine', date: '2023-02-20' },
        { image: '/israeli/2.png', label: 'Good', location: 'Rafah, Palestine', date: '2023-03-18' },
        { image: '/israeli/3.png', label: 'Good', location: 'Jabalia, Palestine', date: '2023-04-25' },
        { image: '/israeli/4.png', label: 'Good', location: 'Khan Younis, Palestine', date: '2023-05-30' },
        { image: '/israeli/5.png', label: 'Good', location: 'Deir al-Balah, Palestine', date: '2023-06-22' },
        { image: '/israeli/6.png', label: 'Good', location: 'Beit Hanoun, Palestine', date: '2023-07-14' },
        { image: '/israeli/7.png', label: 'Good', location: 'Al-Shati, Palestine', date: '2023-08-07' },
        { image: '/israeli/8.png', label: 'Good', location: 'Bureij, Palestine', date: '2023-09-19' },
        { image: '/israeli/9.png', label: 'Good', location: 'Nuseirat, Palestine', date: '2023-10-02' },
        { image: '/israeli/10.png', label: 'Good', location: 'Maghazi, Palestine', date: '2023-11-12' },
        { image: '/israeli/11.png', label: 'Good', location: 'Khuzaa, Palestine', date: '2023-12-03' },
        { image: '/israeli/12.png', label: 'Good', location: 'Beit Lahia, Palestine', date: '2024-01-17' },
        { image: '/israeli/13.png', label: 'Good', location: 'Shuja’iyya, Palestine', date: '2024-02-20' },
        { image: '/israeli/14.png', label: 'Good', location: 'Zaytun, Palestine', date: '2024-03-18' },
        { image: '/israeli/15.png', label: 'Good', location: 'Al-Mughraqa, Palestine', date: '2024-04-22' },
        { image: '/israeli/16.png', label: 'Good', location: 'Shejaiya, Palestine', date: '2024-05-25' },
        { image: '/israeli/17.png', label: 'Good', location: 'Tuffah, Palestine', date: '2024-06-15' },
        { image: '/israeli/18.png', label: 'Good', location: 'Zeitoun, Palestine', date: '2024-07-20' },
        { image: '/israeli/19.png', label: 'Good', location: 'Al-Rimal, Palestine', date: '2024-08-10' },
        { image: '/israeli/20.png', label: 'Good', location: 'Beit Daras, Palestine', date: '2024-09-05' },
    ];

    // Randomly select 10 images from each category
    const selectedRussian = russianImages.sort(() => Math.random() - 0.5).slice(0, 10);
    const selectedIsraeli = israeliImages.sort(() => Math.random() - 0.5).slice(0, 10);

    let currentRound = 0;
    const totalRounds = 10;
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
            message = 'Correct!';
        } else {
            message = 'Wrong!';
        }

        showMessage = true;
        currentRound += 1;

        if (currentRound >= totalRounds) {
            message += ` Game Over! Your score: ${score} / ${totalRounds}`;
        }
    }

    function nextRound() {
        if (currentRound < totalRounds) {
            startRound();
        } else {
            restartGame();
        }
    }

    function restartGame() {
        currentRound = 0;
        score = 0;
        startRound();
    }

    startRound();
</script>


<main>
    <h1>Choose the Good Bombing</h1>
    {#if currentRound < totalRounds}
        <p>Round {currentRound + 1} / {totalRounds}</p>
    {/if}

    {#if showMessage}
        <p>{message}</p>
        {#if currentRound < totalRounds}
            <button on:click={nextRound}>Next Round</button>
        {:else}
            <button on:click={restartGame}>Play Again</button>
            <button on:click={() => goto('/')}>Back to Welcome Page</button>
        {/if}
    {/if}


    
    <div class="images" class:hidden={showMessage}>
        {#each currentPair as bombing}
            <div class="image-container">
                <img src={bombing.image} alt="Bombing Image" on:click={() => handleChoice(bombing.label)} />
            </div>
        {/each}
    </div>
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
