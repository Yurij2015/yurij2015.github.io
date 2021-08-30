<template>
  <div class="pt-3 pb-2 mb-3 border-bottom">
    <router-link to="/projects" class="btn btn-sm btn-outline-primary">До списку проектів</router-link>
  </div>
  <form @submit.prevent="submit">
    <h2 class="h3 mb-3 fw-normal">Редагувати проект - {{ data.title }}</h2>
    <div class="mb-3">
      <label for="title">Назва проекту</label>
      <input name="title" id="title" type="text" class="form-control" placeholder="Назва проекту" v-model="data.title">
    </div>
    <div class="mb-3">
      <label>Опис проекту</label>
      <editor v-model="data.description"></editor>
      <!--      <input name="description" id="description" type="text" class="form-control" placeholder="Опис проекту"-->
      <!--             v-model="data.description">-->
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
  <hr>
  <h5>Додати зображення в галерею проекту</h5>
  <!--    <AddToGallery :project_id="projectId"/>-->
  <AddToGallery/>
  <h4>Галерея проекту</h4>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col" v-for="image in data.project_images" :key="image.id">
      <div class="card">
        <img :src=image.image class="card-img-top" alt="...">
      </div>
    </div>
  </div>
</template>

<script>
import {reactive, onMounted, ref, watch} from "vue";
import axios from "axios";
import {useRouter, useRoute} from "vue-router";
import ImageUpload from "@/components/ImageUpload";
import AddToGallery from "@/components/AddToGallery";
import Editor from '@tinymce/tinymce-vue'

export default {
  name: "ProjectEdit",
  components: {AddToGallery, ImageUpload, 'editor': Editor},


  setup() {
    const router = useRouter();
    const route = useRoute();
    const projectId = ref();

    const data = reactive({
      id: '',
      title: '',
      description: '',
      image_preview: '',
      project_images: ''
    });
    // console.log(projectId);
    onMounted(async () => {
      const response = await axios.get(`projects/${route.params.id}`);
      data.id = response.data.data.id;
      data.title = response.data.data.title;
      data.description = response.data.data.description;
      data.image_preview = response.data.data.image_preview;
      data.project_images = response.data.data.project_images
      projectId.value = response.data.data.id
    });
    const submit = async () => {
      await axios.patch(`projects/${route.params.id}`, data);
      await router.push('/projects');
    };

    return {
      data,
      submit,
      // projectId
    }
  },
}
</script>
