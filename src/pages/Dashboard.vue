<template>
  <div class="dashboard">
    <hr class="featurette-divider">
    <div class="row featurette">
      <div class="col-md-9 order-md-2">
        <h2 class="featurette-heading">Yurii <span class="text-muted">Mokryi</span></h2>
        <p class="lead">PHP Developer (Full-stack PHP developer)</p>
        <div class="row col-md-12">
          <div class="col-md-6">
            <p>Date of birth: 09.04.1982</p>
            <p>Career objective: PHP Backend developer (Full-stack PHP developer)</p>
            <p>Job type: part time, remote</p>
            <p><a href="https://1drv.ms/b/s!ArgYbNG5x2qxu7sfUTwhFwlcY9E6nQ?e=KIOJnB" target="_blank"
                  class="downloadlink">Download
              CV</a></p>
          </div>
          <div class="col-md-6">
            <p>Work experience (self-employment, freelance, teamwork): {{ workExperience() }} year(s)</p>
            <p>Experience of working with companies (teamwork): {{ commercialExperience() }} year(s)</p>
            <p>1/9/2015 - {{ currentDate() }}</p>
            <p><a href="https://github.com/Yurij2015" target="_blank">GitHub</a></p>
          </div>
        </div>
      </div>
      <div class="col-md-3 order-md-1">
        <img src="https://stud.vv.si/images/ava.jpg"
             class="bd-placeholder-img rounded-circle" width="140" alt="">
      </div>
    </div>
    <div class="dashboard">
      <p class="lead">Work experience:</p>
      <div class="list-group">
        <button type="button" class="list-group-item list-group-item-action">09.2015 - 09.2021 - Self employed,
          freelance, agency. Creating of websites on PHP, WordPress, Yii2, Laravel
        </button>
        <button type="button" class="list-group-item list-group-item-action">11.2021 - 09.2022 - FullStack Developer in
          Centum-D web studio (Ukraine, Dnipro). PHP, Yii2, MySQL. Part-time. Remote
        </button>
        <button type="button" class="list-group-item list-group-item-action">10.2022 - current time - FullStack Developer.
          DigiSpace (Poland). PHP, Laravel, Vue, MySQL. Part-time
        </button>
        <button type="button" class="list-group-item list-group-item-action">09.2021 - current time - FullStack
          Developer in PG (Monaco). PHP, Symfony, MySQL, Angular, Vue. Full-time. Remote
        </button>
      </div>
      <p class="lead mt-3">Professional skills:</p>
      <div class="list-group">
        <button type="button" class="list-group-item list-group-item-action">Touch typing with 10 fingers (Ukraine,
          English, Russian)
        </button>
        <button type="button" class="list-group-item list-group-item-action">Experience in software development (web,
          mobile and desktop apps)
        </button>
        <button type="button" class="list-group-item list-group-item-action">Programming languages including <b>PHP</b>,
          JavaScript, SQL
        </button>
        <button type="button" class="list-group-item list-group-item-action">Language skills: Ukrainian – native;
          Russian; English - A2
        </button>
      </div>
      <p class="lead mt-3">Licenses and Certifications</p>
      <div class="list-group">
        <button type="button" class="list-group-item list-group-item-action">A-Level Poltava: A-Level PHP Certification
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
        <button type="button" class="list-group-item list-group-item-action">SoftGroup Ukraine: SoftGroup WordPress
          Certification
        </button>
        <button type="button" class="list-group-item list-group-item-action">Stepik: JavaScript for beginners</button>
      </div>
      <hr>
      <div>
        <p>
          When creating projects, I’ve designed their structure, business processes (ARIS, IDEF0), algorithms, app and
          database options. In addition, I’ve implemented app options based on the created algorithms and dealt with
          client-server communication by means of REST API. Besides, I’ve developed CRUD for various DBMS used with PHP,
          JavaScript, C# and other programming languages. In projects, I work with tasks for the server and client
          parts. All the projects I work with and have worked with are running in Docker.
        </p>
        <p>
          Personal qualities: hard-working, attentive, diligent, initiative, willing to work and develop, able to handle
          large amounts of data, strong analytical thinking, tend to self-study, creative, able to quickly master a new
          software product or technology.
        </p>
        <hr>
        <p class="lead mt-3">Additional information</p>
        <div class="list-group">
          <button type="button" class="list-group-item list-group-item-action">Marital status: married</button>
          <button type="button" class="list-group-item list-group-item-action">Children: yes (3)</button>
          <button type="button" class="list-group-item list-group-item-action">Ready for business trips: yes</button>
          <button type="button" class="list-group-item list-group-item-action">Travel document: yes</button>
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
    },
    workExperience() {
      const diff = new Date() - new Date('9/1/2015');
      return (diff / 31556952000).toFixed(1);
    },
    partTimeCentumExperience() {
      const diff = new Date('10/1/2022') - new Date('11/26/2021');
      return (diff / 31556952000).toFixed(2);
    },
    pgExperience() {
      const dComerc = new Date() - new Date("9/20/2021");
      return (dComerc / 31556952000).toFixed(2);
    },
    commercialExperience() {
      return (parseFloat(this.partTimeCentumExperience()) + parseFloat(this.pgExperience())).toFixed(1);
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

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
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