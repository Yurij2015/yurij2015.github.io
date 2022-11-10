<template>
  <div class="pt-3 pb-2 mb-3 border-bottom">
    <!--    <router-link to="/project-create" class="btn btn-sm btn-outline-primary disabled" v-show="false">Додати проект</router-link>-->
    <router-link to="/project-create" class="btn btn-sm btn-outline-primary">Add a project</router-link>
  </div>
  <h2>Completed projects</h2>
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
            <!--<router-link :to="`/project-edit/${project.id}`" class="btn btn-sm btn-outline-warning" v-show="false">Редагувати-->
            <router-link :to="`/project-edit/${project.id}`" class="btn btn-sm btn-outline-warning">Edit
            </router-link>
            <!--<a href="javascript:void(0)" class="btn btn-sm btn-outline-danger" @click="del(project.id)" v-show="false">Видалити</a>-->
            <a href="javascript:void(0)" class="btn btn-sm btn-outline-danger" @click="del(project.id)">Delete</a>
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
