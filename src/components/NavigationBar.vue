<template>

  <div>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <div class="row">
          <div class="col-1">
            <router-link class="navbar-brand" :to="{ name: 'Home' }">
              <img class="resize" src="../assets/house.png" alt="House Icon by Freepik">
            </router-link>
          </div>

          <div class="col-11">
            <router-link class="nav-item nav-item-format" v-for="routes in links"
                         v-bind:key="routes.id"
                         :to="`${routes.page}`">
              {{ routes.text }}
            </router-link>
          </div>
        </div>
      </div>
    </nav>

  </div>

</template>

<script>
export default {
  name: "NavigationBar.vue",
  data() {
    return {
      links: [
        {
          id: 1,
          text: 'Real Estate',
          page: '/'
        },
        {
          id: 2,
          text: 'Imprint',
          page: '/imprint'
        }
      ]
    }
  }
}
</script>

<style scoped>

img.resize {
  width: 30px;
  height: auto;
}

.nav-item-format {
  margin-right: 10px;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
  text-align: center;
}

</style>
