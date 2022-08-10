import { ref } from 'vue';

import Moralis from '../plugins/moralis';

import { Token } from './types';

const useTokens = () => {
    const tokens = ref<Token[]>([]);
    const loading = ref(true);

    const MoralisToken = Moralis.Object.extend("Tokens")
    const query = new Moralis.Query(MoralisToken);
    query.equalTo("included", true);

    query.find()
        .then(tokensData => {
            tokens.value = tokensData.map((token) => ({
                symbol: token.get('symbol') as string,
                name: token.get('name') as string,
                slug: token.get('slug') as string,
                cmcId: token.get('cmcId') as number,
                price: token.get('price') as number,
                logo: token.get('logo') as string,
            }));
            loading.value = false;
        })
        .catch(error => {
            console.log(error);
        })

    return { tokens, loading };
}

export default useTokens;