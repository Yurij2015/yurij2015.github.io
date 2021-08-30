<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/">
            Головна
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/projects">
            Проекти
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/technologies">
            Технології
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/contacts">
            Контакти
          </router-link>
        </li>
      </ul>
      <div class="alert alert-warning m-1 small" role="alert">
        <p>Даний сайт виконано у вигляді клієнт-серверного додатку.</p>
        <p>Для розробки API використані можливості Laravel.</p>
        <p>В якості СУБД використана MySQL.</p>
        <p>Серверна частина розміщена на хостингу hostinger.com.ua</p>
        <p>Клієнтська частина виконана з допомогою Vue 3, Bootstrap 5.</p>
        <p>Клієнтська частина розміщена на GitHub Pages</p>
        <p>Середовище розробки - PHPStorm.</p>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Menu"
}
</script>
