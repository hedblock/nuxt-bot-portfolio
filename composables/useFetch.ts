import { ref } from 'vue'

const useFetch = (url : string) =>  {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(true)

  fetch(url)
    .then((res) => res.json())
    .then((json) => {
        data.value = json;
        loading.value = false;
    })
    .catch((err) => {
        error.value = err;
        loading.value = false;
    })

  return { data, error }
}

export default useFetch