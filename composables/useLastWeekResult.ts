import { ref } from 'vue';

import Moralis from '../plugins/moralis';

import { WeeklyResult } from './types';

const useLastWeekResult = () => {

    const lastWeekResult = ref<WeeklyResult>({});
    const loading = ref(true);

    const MoralisResult = Moralis.Object.extend("Results")
    const query = new Moralis.Query(MoralisResult);
    query .descending('startDate')
    query.first()
        .then(result => {
            result && (lastWeekResult.value = result.get('results'));
            loading.value = false;
        })
        .catch(error => {
            console.log(error);
        })

    return { lastWeekResult, loading };
}

export default useLastWeekResult;