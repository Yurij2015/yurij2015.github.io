<template>
  <div class="technologies">
    <div class="alert alert-info my-3" role="alert">
      <span class="small">
        Technologies that were most often used when working with projects
      </span>
    </div>
    <div class="contacts my-3">
      <h3>Technologies</h3>
      <div class="list-group">
        <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
          Project management
        </button>
        <button type="button" class="list-group-item list-group-item-action"><b>Jira</b></button>
        <button type="button" class="list-group-item list-group-item-action"><b>Slack</b></button>
        <button type="button" class="list-group-item list-group-item-action">Trello</button>
        <button type="button" class="list-group-item list-group-item-action">Daily meetings</button>
        <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
          Programming languages
        </button>
        <button type="button" class="list-group-item list-group-item-action"><b>PHP</b></button>
        <button type="button" class="list-group-item list-group-item-action">JavaScript</button>
        <button type="button" class="list-group-item list-group-item-action">Go</button>
        <button type="button" class="list-group-item list-group-item-action">C#</button>
        <button type="button" class="list-group-item list-group-item-action">Ruby</button>
        <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
          Frameworks
        </button>
        <button type="button" class="list-group-item list-group-item-action"><b>Laravel</b></button>
        <button type="button" class="list-group-item list-group-item-action"><b>Symfony</b></button>
        <button type="button" class="list-group-item list-group-item-action"><b>Yii2</b></button>
        <button type="button" class="list-group-item list-group-item-action">Angular</button>
        <button type="button" class="list-group-item list-group-item-action">Vue3</button>
        <button type="button" class="list-group-item list-group-item-action">Express</button>
        <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
          Technologies (apps, platforms, libraries, styles and templates)
        </button>
        <button type="button" class="list-group-item list-group-item-action"><b>Docker</b></button>
        <button type="button" class="list-group-item list-group-item-action"><b>Composer</b></button>
        <button type="button" class="list-group-item list-group-item-action"><b>Docker compose</b></button>
        <button type="button" class="list-group-item list-group-item-action">Npm</button>
        <button type="button" class="list-group-item list-group-item-action">RedBeans PHP</button>
        <button type="button" class="list-group-item list-group-item-action">REST API</button>
        <button type="button" class="list-group-item list-group-item-action">TinyMCE</button>
        <button type="button" class="list-group-item list-group-item-action">LteAdmin</button>
        <button type="button" class="list-group-item list-group-item-action">Ajax</button>
        <button type="button" class="list-group-item list-group-item-action">Git</button>
        <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
          DBMS
        </button>
        <button type="button" class="list-group-item list-group-item-action"><b>MySQL</b></button>
        <button type="button" class="list-group-item list-group-item-action">Postgre SQL</button>
        <button type="button" class="list-group-item list-group-item-action">SQLite</button>
        <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
          IDE
        </button>
        <button type="button" class="list-group-item list-group-item-action"><b>PHPStorm</b></button>
        <button type="button" class="list-group-item list-group-item-action"><b>phpMyAdmin</b></button>
        <button type="button" class="list-group-item list-group-item-action"><b>DBeaver</b></button>
        <button type="button" class="list-group-item list-group-item-action">Postman</button>
        <button type="button" class="list-group-item list-group-item-action">Visual Studio Code</button>
        <button type="button" class="list-group-item list-group-item-action">MySQL Workbench</button>
        <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
          CMS
        </button>
        <button type="button" class="list-group-item list-group-item-action">WordPress</button>
        <button type="button" class="list-group-item list-group-item-action">Joomla</button>
        <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
          App structuring and presenting content:
        </button>
        <button type="button" class="list-group-item list-group-item-action"><b>HTML 5</b></button>
        <button type="button" class="list-group-item list-group-item-action"><b>Bootstrap 3, 4, 5</b></button>
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