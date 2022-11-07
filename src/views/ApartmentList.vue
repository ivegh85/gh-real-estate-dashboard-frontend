<template>

  <div class="column">
    <ApartmentListComponent v-for="apartment in apartments" :apartment="apartment" :key="apartment.id" />
  </div>

</template>

<script>
import ApartmentListComponent from "@/components/ApartmentListComponent";

const apartments = [
  {
    id: 1,
    name: 'Geschmakvoll möblierte 4 Zimmerwohnung in Herzen WIens',
    price: '1900€',
    size: '109m2',
    img: 'https://images.pexels.com/photos/3773576/pexels-photo-3773576.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "lorem ipsum",
  },
  {
    id: 2,
    name: 'Single / Pärchen-Wohnung möbliert',
    price: '1519€',
    size: '46m2',
    img: 'https://images.pexels.com/photos/7167983/pexels-photo-7167983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "lorem ipsum whatever",
  },
  {
    id: 3,
    name: 'Attraktive 2 Zimmer Wohnung mit Grünblick',
    price: '746€',
    size: '148,64m2',
    img: 'https://images.pexels.com/photos/7168014/pexels-photo-7168014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "lorem ipsum whatsoever dude",
  },
  {
    id: 4,
    name: 'Top geschnittene 3 Zimmer-Wohnung',
    price: '977€',
    size: '66m2',
    img: 'https://images.pexels.com/photos/7168019/pexels-photo-7168019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "lorem ipsum whatsoever my mainest man",
  },
];

export default {
  name: "MainView.vue",
  components: {
    ApartmentListComponent,
  },
  props: {
    apartment: Object
  },
  data() {
    return {
      apartments
    }
  }
}
</script>


<style scoped>


</style>
