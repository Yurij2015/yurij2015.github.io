import {defineStore} from 'pinia'
import axios from "axios"

export const useEducationStore = defineStore("education", {
    state: () => ({
        education: [],
    }),
    getters: {
        getEducation(state) {
            return state.education
        }
    },
    actions: {
        async fetchEducation() {
            try {
                const response = await axios.get("https://digispace.pro/api/education")
                this.education = response.data
            } catch (error) {
                console.log(error)
            }
        }
    },
})