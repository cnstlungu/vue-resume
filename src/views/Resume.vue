<template>
  <div class="resume">

    <div class="container-fluid">
      <h2>Skills</h2>
      <div class="row">
        <div class="skills col-md-3" v-for="skillType in skillTypes" v-bind:key="skillType">
          <span class="skill-type">{{skillType}}</span>
          <ul>
            <div v-for="skill in skills" v-bind:key="skill">
              <li v-if="skill.type === skillType">
                {{skill.name}}
              </li>
            </div>
          </ul>
        </div>

        <div class="resume-body">
          <h2>Work experience</h2>
          <div
            class="resume-entry container"
            v-for="item in workHistory"
            v-bind:key="item.companyName"
          >
            <hr />

            <div class="row">
              <div class="entry-header col-md-6">
                <h4 class="entry-title">{{item.title}}</h4>
                <h6 class="entry-company">
                  {{item.companyName}} • {{item.location}}
                  <b-badge variant="info">{{item.industry}}</b-badge>
                </h6>
                <h5 class="entry-tenure">
                  {{item.monthStart}}/{{item.yearStart}} -
                  <span
                    v-if="Number.isInteger(item.monthEnd)"
                  >{{item.monthEnd}}/{{item.yearEnd}}</span>
                  <span v-else>present</span>
                </h5>
              </div>

              <div class="entry-description col-md-6">
                <ul class="entry-responsibilities">
                  <li
                    v-for="responsibility in item.responsibilities"
                    v-bind:key="responsibility"
                  >{{responsibility}}</li>
                </ul>

                <ul class="entry-stack">
                  <li v-for="tech in item.stack" v-bind:key="tech">
                    <b-badge variant="dark">{{tech}}</b-badge>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import data from '@/data'
export default {
  name: 'Resume',
  data () {
    return {
      workHistory: data.workHistory,
      skills: data.skills,
      skillTypes: data.skillTypes
    }
  },
  methods: {
    generateStars: function (stars) {
      return (
        '\u25CF'.repeat(Math.floor(stars / 1)) +
        '\u25D0'.repeat(Math.floor((stars - Math.floor(stars / 1)) / 0.5)) +
        '\u25CB'.repeat(
          5 -
            Math.floor(stars / 1) -
            Math.floor((stars - Math.floor(stars / 1)) / 0.5)
        )
      )
    }
  }
}
</script>

<style scoped>
.entry-header {
  float: left;
  text-align: left;
}

.entry-description {
  display: inline-block;
  text-align: left;
}

.entry-stack {
  list-style: none;
}

.skills {
  display: inline-block;
  vertical-align: top;
}

.skills li {
  list-style-type: none;
}

.skills li .rating {
  font-family: "Lucida Sans Unicode", "Arial Unicode MS";
}

.skill-type {
  font-weight: bold;
}

.resume-body {
  margin: auto;
}
</style>
