<template>
  <div class="dashboard">
    <hr class="featurette-divider">
    <div class="row featurette">
      <div class="col-md-9 order-md-2">
        <h2 class="featurette-heading">Yurii <span class="text-muted">Mokryi</span></h2>
        <p class="lead">PHP Developer</p>
        <div class="row col-md-12">
          <div class="col-md-6">
            <p>Дата народження: 09.04.1982</p>
            <p>Бажана посада - PHP Backend Developer</p>
            <p>Неповна (part time) зайнятість (remote)</p>
          </div>
          <div class="col-md-6">
            <p>Очікуваний рівень доходу: за домовленістю </p>
            <p>Досвід роботи 7 років</p>
            <p>1/9/2015 - {{currentDate()}}</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 order-md-1">
        <img src="https://stud.vv.si/images/ava.jpg"
             class="bd-placeholder-img rounded-circle" width="140" alt="">
      </div>
    </div>
    <div class="dashboard">
      <p class="lead">Професійні навички</p>
      <div class="list-group">
        <button type="button" class="list-group-item list-group-item-action">Вільне володіння ПК</button>
        <button type="button" class="list-group-item list-group-item-action">10-пальцевий сліпий набір (англ., укр.,
          рос)
        </button>
        <button type="button" class="list-group-item list-group-item-action">Знання основних операційних систем
          (Windows, Ubuntu, Mac).
        </button>
        <button type="button" class="list-group-item list-group-item-action">Досвід розробки ПЗ (веб-, мобільних та
          комп'ютерних додатків)
        </button>
        <button type="button" class="list-group-item list-group-item-action">Робота з мовами програмування (PHP, C#,
          JavaScript, Go, SQL)
        </button>
        <button type="button" class="list-group-item list-group-item-action">Володіння мовами: українська, російська
          мови вільно; англійська - А2 (B1)
        </button>
      </div>
      <p class="lead mt-3">Ліцензії та сертифікати</p>
      <div class="list-group">
        <button type="button" class="list-group-item list-group-item-action">A-Level Poltava: Сертифікат A-Level PHP
          (Yii2)
        </button>
        <button type="button" class="list-group-item list-group-item-action">LinkedIn: PHP: Object-Oriented
          Programming
        </button>
        <button type="button" class="list-group-item list-group-item-action">LinkedIn: PHP: Object-Oriented Programming
          with Databases
        </button>
        <button type="button" class="list-group-item list-group-item-action">LinkedIn: Laravel 5 Essential Training
        </button>
        <button type="button" class="list-group-item list-group-item-action">LinkedIn: Building RESTful APIs in
          Laravel
        </button>
        <button type="button" class="list-group-item list-group-item-action">Udemy: Go & Vue</button>
        <button type="button" class="list-group-item list-group-item-action">SoftGroup Ukraine: Сертифікат SoftGroup
          (WordPress)
        </button>
        <button type="button" class="list-group-item list-group-item-action">Stepik: JavaScript для початківців</button>
      </div>
      <hr>
      <div>
        <p>
          У створених проектах виконував проектування структури, бізнес-процесів (ARIS, IDEF0, UML), алгоритмів, функціоналу
          додатків і моделей баз даних, реалізовував функціонал по створеним алгоритмам. Створював структуру додатків, реалізовував
          клієнт-серверну взаємодію за допомогою REST API, розробляв CRUD для різних СУБД на PHP, C #, Go.
        </p>
        <p>
          Особисті якості: працьовитість, уважність, акуратність, ініціативність, бажання працювати і розвиватися,
          вміння працювати з великим об'ємом інформації, аналітичний склад розуму, схильність до самонавчання, детальний
          розбір і рішення складних завдань, декомпозиція завдань на підзавдання. Уміння швидко освоїти нові технології, технологію.
        </p>
        <hr>
        <p class="lead mt-3">Додаткова інформація</p>
        <div class="list-group">
          <button type="button" class="list-group-item list-group-item-action">Сімейний стан: одружений</button>
          <button type="button" class="list-group-item list-group-item-action">Діти: 3 діток</button>
          <button type="button" class="list-group-item list-group-item-action">Можливість відряджень: так</button>
          <button type="button" class="list-group-item list-group-item-action">Закордонний паспорт: є</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Dashboard",
  methods: {
    currentDate() {
      const current = new Date();
      return `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    }
  }
}
</script>

<style scoped>
.dashboard .col-md-3 {
  margin-bottom: 1.5rem;
  text-align: center;
}

.dashboard h2 {
  font-weight: 400;
}

.dashboard .col-md-3 p {
  margin-right: .75rem;
  margin-left: .75rem;
}


.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

.featurette-heading {
  font-weight: 300;
  line-height: 1;
  letter-spacing: -.05rem;
}


@media (min-width: 40em) {

  .featurette-heading {
    font-size: 40px;
  }

  .col-md-3 {
    text-align: center;
  }
}
</style>