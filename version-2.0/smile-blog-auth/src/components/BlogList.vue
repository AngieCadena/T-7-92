<template>
  <b-row>
    <b-col cols="12">
      <!-- <h2>
        Blog List
        <b-link href="#/add-blog">(Add Blog)</b-link>
      </h2> -->
      <h2>
        Book List
        <b-link @click="logout()">(Logout)</b-link>
      </h2>
      <b-table striped hover :items="blogs" :fields="fields">
        <template slot="actions" scope="row">
          <b-btn size="sm" @click.stop="details(row.item)">Details</b-btn>
        </template>
      </b-table>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors" v-bind:key="error">
          {{ error.message }}
        </li>
      </ul>
    </b-col>
  </b-row>
</template>
<script>
import axios from 'axios'
export default {
  name: 'BlogList',
  data () {
    return {
      fields: {
        title: { label: 'Blog Title', sortable: true },
        content: { label: 'Blog Content', sortable: true },
        date: { label: 'Blog date', sortable: true },
        author: { label: 'Blog author', sortable: true },
        actions: { label: 'Action', class: 'text-center' }
      },
      blogs: [],
      errors: []
    }
  },
  created () {
    axios.defaults.headers.common['Authorization'] =
      localStorage.getItem('jwtToken')
    axios
      .get(`http://localhost:3000/blog`)
      .then((response) => {
        this.blogs = response.data
      })
      .catch((e) => {
        this.errors.push(e)
        if (e.response.status === 401) {
          this.$router.push({
            name: 'Login'
          })
        }
      })
  },
  methods: {
    details (blog) {
      this.$router.push({
        name: 'ShowBlog',
        params: { id: blog._id }
      })
    },
    logout () {
      localStorage.removeItem('jwtToken')
      this.$router.push({
        name: 'Login'
      })
    }
  }
}
</script>
