<template>
  <div class="technologies">
    <div class="alert alert-info my-3" role="alert">
      <span class="small">
        Вказані технології, які найчастіше використовувались в роботі
      </span>
    </div>
    <div class="contacts my-3">
      <h3>Технології</h3>
      <div class="list-group">
        <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
          Мови програмування
        </button>
        <button type="button" class="list-group-item list-group-item-action">PHP</button>
        <button type="button" class="list-group-item list-group-item-action">JavaScript</button>
        <button type="button" class="list-group-item list-group-item-action">Go</button>
        <button type="button" class="list-group-item list-group-item-action">C#</button>
        <button type="button" class="list-group-item list-group-item-action">Ruby</button>
        <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
          Фреймворки
        </button>
        <button type="button" class="list-group-item list-group-item-action">Yii2</button>
        <button type="button" class="list-group-item list-group-item-action">Symfony</button>
        <button type="button" class="list-group-item list-group-item-action">Angular</button>
        <button type="button" class="list-group-item list-group-item-action">Laravel</button>
        <button type="button" class="list-group-item list-group-item-action">Vue3</button>
        <button type="button" class="list-group-item list-group-item-action">ASP.NET MVC5</button>
        <button type="button" class="list-group-item list-group-item-action">ASP.NET Core</button>
        <button type="button" class="list-group-item list-group-item-action">Express</button>
        <button type="button" class="list-group-item list-group-item-action">Django</button>
        <button type="button" class="list-group-item list-group-item-action">RoR</button>
        <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
          Додаткові технології, програмні платформи, пакети та бібліотеки
        </button>
        <button type="button" class="list-group-item list-group-item-action">RedBeans PHP</button>
        <button type="button" class="list-group-item list-group-item-action">REST API</button>
        <button type="button" class="list-group-item list-group-item-action">Docker</button>
        <button type="button" class="list-group-item list-group-item-action">TinyMCE</button>
        <button type="button" class="list-group-item list-group-item-action">LteAdmin</button>
        <button type="button" class="list-group-item list-group-item-action">Ajax</button>
        <button type="button" class="list-group-item list-group-item-action">Entity Framework</button>
        <button type="button" class="list-group-item list-group-item-action">Razor Pages</button>
        <button type="button" class="list-group-item list-group-item-action">Git</button>
        <button type="button" class="list-group-item list-group-item-action">OSPanel</button>
        <button type="button" class="list-group-item list-group-item-action">Node.js</button>
        <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
          Бази даних
        </button>
        <button type="button" class="list-group-item list-group-item-action">MySQL</button>
        <button type="button" class="list-group-item list-group-item-action">MSSQL</button>
        <button type="button" class="list-group-item list-group-item-action">Postgre SQL</button>
        <button type="button" class="list-group-item list-group-item-action">SQLite</button>
        <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
          Середовища розробки та проектування
        </button>
        <button type="button" class="list-group-item list-group-item-action">PHPStorm</button>
        <button type="button" class="list-group-item list-group-item-action">Postman</button>
        <button type="button" class="list-group-item list-group-item-action">Visual Studio</button>
        <button type="button" class="list-group-item list-group-item-action">Goland</button>
        <button type="button" class="list-group-item list-group-item-action">PyCharm</button>
        <button type="button" class="list-group-item list-group-item-action">RubyMine</button>
        <button type="button" class="list-group-item list-group-item-action">MySQL Workbench</button>
        <button type="button" class="list-group-item list-group-item-action">dbForge Studio for SQL Server</button>
        <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
          Системи управління контентом
        </button>
        <button type="button" class="list-group-item list-group-item-action">WordPress</button>
        <button type="button" class="list-group-item list-group-item-action">Joomla</button>
        <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
          Розмітка і зовнішній вигляд додатків
        </button>
        <button type="button" class="list-group-item list-group-item-action">HTML 5</button>
        <button type="button" class="list-group-item list-group-item-action">Bootstrap 3, 4, 5</button>
        <button type="button" class="list-group-item list-group-item-action">XAML</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacts"
}
</script>

<style scoped>

.technologies h2 {
  font-weight: 400;
}

.technologies .col-md-3 p {
  margin-right: .75rem;
  margin-left: .75rem;
}

@media (min-width: 40em) {

}
</style>