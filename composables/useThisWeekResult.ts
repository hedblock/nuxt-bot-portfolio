import { ref } from 'vue';

import Moralis from '../plugins/moralis';

const useThisWeekResult = () => {
    

    return {
        thisWeekResult: {},
        loading: true
    }
}

export default useThisWeekResult;