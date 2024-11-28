import type { PageServerLoad } from './$types';

function decodeScore(encoded: string): number {
    try {
        const decoded = atob(encoded);
        const result = parseInt(decoded, 10);
        const score = Math.sqrt(result) - 1000;
        if (!Number.isInteger(score) || score < 0 || score > 20) {
            throw new Error('Invalid score');
        }

        return score;
    } catch (error) {
        throw new Error('Failed to decode score');
    }
}

export const load: PageServerLoad = ({ params }) => {
    const scoreEncoded = params.scoreEncoded;
    const score = decodeScore(scoreEncoded);
    const gender = params.gender ?? 'n';
    const name = params.name ?? '';

    return {
        scoreEncoded,
        score,
        gender,
        name
    };
};
