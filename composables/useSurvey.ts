import useClosestResult from "./useLastWeekResult";
import useExistingSubmission from "./useExistingSubmission";
import useTokens from "./useTokens";
import { ref, watch } from "vue";
import { WeeklyResult } from "./types";
import { round2 } from "~/services/utils";

const useSurvey = () => {

    const {tokens, loading: tokensLoding} = useTokens();

    const { existingSubmissionId, loading: existingSubmissionLoading } = useExistingSubmission();
    const { lastWeekResult, loading: lastWeekLoading } = useClosestResult();

    const allocations = ref<WeeklyResult>({});
    const allocationsSum = ref<number>(0);

    watch([tokens, lastWeekResult], ([newTokens, newLastWeekResult]) => {
        allocations.value = Object.fromEntries(newTokens.map(token => [token.slug, newLastWeekResult[token.slug] || 0]))
        allocationsSum.value = round2(Object.values(allocations.value).reduce((a, b) => a + b, 0))
    })

    const updateAllocation = (slug: string, value: number) => {
        const otherSum = Object.keys(allocations.value).reduce((acc, val) => (slug === val ? acc : acc + allocations.value[val]), 0);
        const denom = otherSum / (100 - value);
        const newAllocations = Object.fromEntries(Object.keys(allocations.value).map(tokenSlug => {
            if (tokenSlug === slug) {
                return [tokenSlug, value];
            } else {
                if(denom > 1) {
                    return [tokenSlug, allocations.value[tokenSlug] / denom];
                } else {
                    return [tokenSlug, allocations.value[tokenSlug]];
                }
            }
        }));
        allocations.value = newAllocations;
        allocationsSum.value = Object.values(newAllocations).reduce((a, b) => a + b, 0)
    };

    const setEqualAllocations = () => {
        const newAllocations = Object.fromEntries(Object.keys(allocations.value).map(tokenSlug => [tokenSlug, 100 / Object.keys(allocations.value).length]));
        allocations.value = newAllocations;
        allocationsSum.value = 100;
    }

    return {
        tokens,
        tokensLoding,
        allocations,
        allocationsSum,
        updateAllocation,
        setEqualAllocations,
        saving: false,
        complete: false,
    }

}

export default useSurvey;