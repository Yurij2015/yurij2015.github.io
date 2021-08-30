<template>
  <div class="pt-3 pb-2 mb-3 border-bottom">
    <router-link to="/projects" class="btn btn-sm btn-outline-primary">До списку проектів</router-link>
  </div>
  <form @submit.prevent="submit">
    <h2 class="h3 mb-3 fw-normal">Додати проект</h2>
    <div class="mb-3">
      <label for="title">Назва проекту</label>
      <input name="title" id="title" type="text" class="form-control" placeholder="Назва проекту" v-model="data.title">
    </div>
    <div class="mb-3">
      <label for="description">Опис проекту</label>
      <input name="description" id="description" type="text" class="form-control" placeholder="Опис проекту"
             v-model="data.description">
    </div>
    <div class="mb-3">
      <label for="image_preview">Зображення</label>
      <div class="input-group">
        <input v-model="data.image_preview" id="image_preview" class="form-control" name="image_preview">
        <ImageUpload @uploaded="data.image_preview = $event"/>
      </div>
    </div>
    <button class="w-100 btn btn btn-primary">Зберегти</button>
  </form>
</template>

<script>
import {reactive} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";
import ImageUpload from "@/components/ImageUpload";

export default {
  name: "ProjectCreate",
  components: {ImageUpload},
  setup() {
    const router = useRouter();
    const data = reactive({
      title: '',
      description: '',
      image_preview: ''
    });

    const submit = async () => {
      await axios.post('projects', data);
      await router.push('/projects');
    }

    return {
      data,
      submit
    }
  }
}
</script>
