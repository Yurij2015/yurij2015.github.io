import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Dashboard from '@/pages/Dashboard.vue'
import Projects from '@/pages/projects/Projects.vue'
import ProjectCreate from '@/pages/projects/ProjectCreate.vue'
import ProjectEdit from '@/pages/projects/ProjectEdit.vue'
import ProjectView from '@/pages/projects/ProjectView.vue'
import Contacts from '@/pages/Contacts.vue'
import Technologies from '@/pages/Technologies.vue'


const routes: Array<RouteRecordRaw> = [
    {path: '', component: Dashboard},
    {path: '/projects', component: Projects},
    // {path: '/project-create', component: ProjectCreate},
    // {path: '/project-edit/:id', component: ProjectEdit},
    {path: '/project-create', component: ProjectCreate},
    {path: '/project-edit/:id', component: ProjectEdit},
    {path: '/project-view/:id', component: ProjectView},
    {path: '/contacts', component: Contacts},
    {path: '/technologies', component: Technologies},


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
