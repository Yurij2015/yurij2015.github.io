<template>
  <div class="contacts">
    <div class="contacts my-3">
      <h3>Контактні дані:</h3>
      <p>
        <a href="https://t.me/Mokrij" target="_blank" class="fa fa-telegram"></a>
        <a href="https://www.facebook.com/yuriy.mokriy" target="_blank" class="fa fa-facebook"></a>
        <a href="mailto:mokruy9999@gmail.com" target="_blank" class="fa fa-google"></a>
        <a href="https://www.linkedin.com/in/yurij-mokrij-b9793aa6/" target="_blank" class="fa fa-linkedin"></a>
        <a href="https://www.instagram.com/yurij_mokrij/" target="_blank" class="fa fa-instagram"></a>
        <a href="Skype:mokruy9999?userinfo" target="_blank" class="fa fa-skype"></a>
        <a href="https://github.com/Yurij2015" target="_blank" class="fa fa-github"></a>
      </p>
      <p class="lead">Основний канал зв'язку - <a href="https://t.me/Mokrij" target="_blank" class="telegram-st">Telegram</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacts"
}
</script>

<style scoped>

.telegram-st {
  text-decoration: none;
}

.contacts h2 {
  font-weight: 400;
}

.contacts {
  height: 80vh;
}

.contacts .col-md-3 p {
  margin-right: .75rem;
  margin-left: .75rem;
}

.fa {
  padding: 20px;
  font-size: 30px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  width: 70px;
}

.fa:hover {
  opacity: 0.7;
}

.fa-facebook {
  background: #3B5998;
  color: white;
}

.fa-github {
  background: #211F1F;
  color: white;
}

.fa-telegram {
  background: #0088cc;
  color: white;
}


.fa-google {
  background: #dd4b39;
  color: white;
}

.fa-linkedin {
  background: #007bb5;
  color: white;
}


.fa-instagram {
  background: #125688;
  color: white;
}

.fa-skype {
  background: #00aff0;
  color: white;
}

@media (min-width: 40em) {
}
</style>