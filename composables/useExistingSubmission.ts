import { ref } from "vue"

const useExistingSubmission = () => {

    const existingSubmissionId = ref<string>("");
    const loading = ref(true);

    return {
        existingSubmissionId,
        loading
    }

}

export default useExistingSubmission;