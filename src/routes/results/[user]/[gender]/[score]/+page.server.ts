import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
    const user = params.user ?? '';
    const score = parseInt(params.score, 10);
    const gender = params.gender ?? 'o';

    if (isNaN(score) || score < 0 || score > 10) {
        throw new Error('Invalid score');
    }

    return {
        user,
        score,
        gender
    };
};
