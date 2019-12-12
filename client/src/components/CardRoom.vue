<template>
  <div>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title"></h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ room.id }}</h6>
        <ul>
          <li>
            {{ room }}
          </li>
        </ul>
    </div>
</div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['room']

}
</script>

<style>

</style>
