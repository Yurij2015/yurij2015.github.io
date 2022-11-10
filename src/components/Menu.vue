<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/">
            Main
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/projects">
            Projects
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/technologies">
            Technologies
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/contacts">
            Contacts
          </router-link>
        </li>
      </ul>
      <div class="alert alert-warning m-1 description" role="alert">
        <p>This site is designed as a client-server application.</p>
        <p>The capabilities of Laravel were used to develop the API.</p>
        <p>MySQL was used as a DBMS.</p>
        <p>The server part is hosted on hostinger.com.ua</p>
        <p>The client part is made using Vue 3, Bootstrap 5.</p>
        <p>TinyMCE 5 was used as a text editor.</p>
        <p>The client part is hosted on GitHub Pages.</p>
        <p>The IDE is PHPStorm.</p>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Menu"
}
</script>
<style scoped>
.description{
  font-size: 10px;
}
</style>
