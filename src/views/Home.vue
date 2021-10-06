<template>

<div class="container-fluid">
  <div class="row hello">
<div class="pic col-md-6">
  <img src="https://via.placeholder.com/450">
</div>

    <div class="about">
      <h4>About</h4>

      <ul>
        <li v-for="entry in about" v-bind:key="entry">{{entry}}</li>
      </ul>
    </div>

    <div class="interests">
      <h4>Interested in</h4>

      <ul>
        <li v-for="entry in interests" v-bind:key="entry">{{entry}}</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import data from '@/data'
export default {
  name: 'Home',
  data () {
    return {
      about: data.about,
      interests: data.interests
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  padding-top: 10px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}

.about,
.interests {
  display: block;
  clear: both;
}

</style>
