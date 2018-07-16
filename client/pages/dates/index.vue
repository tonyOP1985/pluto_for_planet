<template>
  <div class="dates-page">
    <h1>Upcoming Dates</h1>
    <section class="dates-list">
      <Dates />
    </section>
  </div>
</template>

<script>
import Dates from '@/components/Dates/Date'
export default {
  components: {
    Dates
  }
}
</script>


<style scoped>
.dates-page {
  margin-top: 4rem;
}

h1 {
  margin: 0 auto;
  width: 600px;
  text-align: center;
  font-size: 50px;
  color: #777777;
  text-transform: uppercase;
  font-family: 'Rajdhani', sans-serif;
  letter-spacing: 1rem;
}

.dates-list {
  margin: 0 auto;
}
</style>
