<template>
  <div class="apartment">
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img class="resize" :src="apartment.img" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{apartment.name}}</strong><br><small>{{apartment.price}}</small> <small>{{apartment.size}}</small>
              <br>
              {{apartment.description}}
            </p>
          </div>
          <div class="level-left">
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-heart"></i></span>
            </a>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>

export default {
  name: "AuctionListComponent.vue",
  props: {
    apartment: Object
  }
}
</script>

<style scoped>

.apartment {
  max-width: 500px;
  margin: 0 auto;
  padding-bottom: 15px;
  padding-top: 15px;
}

.resize {
  width:720px;
  height: auto;
}

</style>
