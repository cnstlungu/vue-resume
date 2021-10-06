<template>
<div class="social">
    <ul>
      <li v-for="entry in socialLinks" v-bind:key="entry.name"><a v-bind:href="entry.link">  <eva-icon v-bind:name="entry.name" fill="gray"></eva-icon> </a></li>
    </ul>
</div>
</template>

<script>
import data from '@/data'
export default {
  name: 'Social',
  data () {
    return {
      socialLinks: data.socialLinks
    }
  }
}
</script>
<style scoped>
.social li {
  display: inline-block;
  list-style-type: none;
  padding-right: 20px;
}
</style>
