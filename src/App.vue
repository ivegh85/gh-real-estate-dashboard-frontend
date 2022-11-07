<template>
  <Navigation></Navigation>
  <router-view></router-view>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
export default {
  name: 'App',
  components: {
    'Navigation': NavigationBar,

  }
}
</script>

<style>

</style>
