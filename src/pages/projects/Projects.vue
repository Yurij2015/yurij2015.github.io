<template>
  <div class="pt-3 pb-2 mb-3 border-bottom">
    <router-link to="/project-create" class="btn btn-sm btn-outline-primary" v-show="false">Add a project</router-link>
  </div>
  <h2>Some of the projects I have worked on
    <sub class="ml-2 sub-text">
      More projects on the
      <a href="https://github.com/Yurij2015" target="_blank">GitHub</a>
    </sub>
  </h2>
  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
      <tr>
        <th scope="col">Project name</th>
        <th scope="col">Description of the project</th>
        <th scope="col">Image</th>
        <th scope="col">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="project in projects" :key="project.id">
        <td>{{ project.title }}</td>
        <td v-html='project.description'></td>
        <td><img :src="project.image_preview" width="200" alt=""/></td>
        <td>
          <div class="btn-group mr-2">
            <router-link :to="`/project-view/${project.id}`" class="btn btn-sm btn-outline-info">View
            </router-link>
            <router-link :to="`/project-edit/${project.id}`" class="btn btn-sm btn-outline-warning" v-show="false">Edit
            </router-link>
            <a href="javascript:void(0)" class="btn btn-sm btn-outline-danger" @click="del(project.id)" v-show="false">Delete</a>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import {onMounted, ref} from "vue"
import axios from 'axios'
import {Project} from "@/models/project"

export default {
  name: "Projects",
  setup() {
    const projects = ref([])
    onMounted(async () => {
      const {data} = await axios.get('projects')
      projects.value = data.data
    });

    const del = async (id: number) => {
      if (confirm('Are you sure you want to delete the entry?')) {
        await axios.delete(`projects/${id}`)
        projects.value = projects.value.filter((p: Project) => p.id !== id)
      }
    }

    return {
      projects,
      del
    }
  }
}
</script>
<style>
a {
  text-decoration: none;
}

.sub-text {
  color: #125688;
  font-size: 12px;
  margin-left: 5px;;
}
</style>
