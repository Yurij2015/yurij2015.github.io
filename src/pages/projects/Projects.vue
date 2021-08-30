<template>
  <div class="pt-3 pb-2 mb-3 border-bottom">
    <router-link to="/project-create" class="btn btn-sm btn-outline-primary">Додати проект</router-link>
  </div>
  <h2>Виконані проекти</h2>
  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
      <tr>
<!--        <th scope="col">#</th>-->
        <th scope="col">Назва проекту</th>
        <th scope="col">Опис проекту</th>
        <th scope="col">Зображення</th>
        <th scope="col">Дії</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="project in projects" :key="project.id">
<!--        <td>{{ project.id }}</td>-->
        <td>{{ project.title }}</td>
        <td>{{ project.description }}</td>
        <td><img :src="project.image_preview" width="200" alt=""/></td>
        <td>
          <div class="btn-group mr-2">
            <router-link :to="`/project-view/${project.id}`" class="btn btn-sm btn-outline-info">Переглянути
            </router-link>
            <!--            <a href="" class="btn btn-sm btn-outline-warning disabled" hidden>Редагувати</a>-->
            <router-link :to="`/project-edit/${project.id}`" class="btn btn-sm btn-outline-warning">Редагувати
            </router-link>
            <a href="javascript:void(0)" class="btn btn-sm btn-outline-danger" @click="del(project.id)">Видалити</a>
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
      if (confirm('Ви впевнені, що потрібно видалити запис?')) {
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
