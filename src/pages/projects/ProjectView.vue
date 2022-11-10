<template>
  <div class="pt-3 pb-2 mb-3 border-bottom">
    <router-link to="/projects" class="btn btn-sm btn-outline-primary">To the list of projects</router-link>
  </div>
  <div class="col-md-12">
    <h3>Project details - {{ data.title }}</h3>
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="data.image_preview" class="img-fluid rounded-start" width="500" alt=""/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ data.title }}</h5>
            <p class="card-text" v-html="data.description"></p>
          </div>
        </div>
      </div>
    </div>
    <h4>Gallery of the project</h4>
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col" v-for="image in data.project_images" :key="image.id">
        <div class="card">
          <img :src=image.image class="card-img-top" alt="...">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive, onMounted} from "vue";
import axios from "axios";
import {useRouter, useRoute} from "vue-router";

export default {
  name: "ProjectEdit",
  setup() {
    const route = useRoute();
    const data = reactive({
      title: '',
      description: '',
      image_preview: '',
      project_images: ''
    });

    onMounted(async () => {
      const response = await axios.get(`projects/${route.params.id}`);
      data.title = response.data.data.title;
      data.description = response.data.data.description;
      data.image_preview = response.data.data.image_preview;
      data.project_images = response.data.data.project_images
    });

    return {
      data,
    }
  }
}
</script>
