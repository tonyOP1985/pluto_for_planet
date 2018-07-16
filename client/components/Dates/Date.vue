<template>
  <div class="dates-list-wrapper">
    <div class="dates-data" v-for="(date, index) in dates" :key="index">
      <div class="gig-date">
        {{ date.month }} {{ date.day }}
      </div>
      <div class="gig-weekday">
        {{ date.weekDay }}
      </div>
      <div class="venue-name">
        {{ date.venue }}
      </div>
      <div class="venue-city">
        {{ date.city }}, {{ date.state }}
      </div>
      <div class="gig-time">
        {{ date.startTime }} - {{ date.endTime }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dates: [
        {
          month: 'Jun',
          day: '16',
          weekDay: 'Sat',
          venue: 'Sycamore Brewery',
          city: 'Charlotte',
          state: 'NC',
          startTime: '3:00pm',
          endTime: '6:00pm'
        },
        {
          month: 'Jun',
          day: '16',
          weekDay: 'Sat',
          venue: 'Sycamore Brewery',
          city: 'Charlotte',
          state: 'NC',
          startTime: '3:00pm',
          endTime: '6:00pm'
        },
        {
          month: 'Jun',
          day: '16',
          weekDay: 'Sat',
          venue: 'Wild Wing Cafe Epictenter',
          city: 'Mooresville',
          state: 'NC',
          startTime: '3:00pm',
          endTime: '6:00pm'
        },
        {
          month: 'Jun',
          day: '16',
          weekDay: 'Sat',
          venue: 'Sycamore Brewery',
          city: 'Charlotte',
          state: 'NC',
          startTime: '3:00pm',
          endTime: '6:00pm'
        },
        {
          month: 'Jun',
          day: '16',
          weekDay: 'Sat',
          venue: 'Sycamore Brewery',
          city: 'Charlotte',
          state: 'NC',
          startTime: '3:00pm',
          endTime: '6:00pm'
        },
        {
          month: 'Jun',
          day: '16',
          weekDay: 'Sat',
          venue: 'Wild Wing Cafe Epictenter',
          city: 'Mooresville',
          state: 'NC',
          startTime: '3:00pm',
          endTime: '6:00pm'
        },
        {
          month: 'Jun',
          day: '16',
          weekDay: 'Sat',
          venue: 'Sycamore Brewery',
          city: 'Charlotte',
          state: 'NC',
          startTime: '3:00pm',
          endTime: '6:00pm'
        },
        {
          month: 'Jun',
          day: '16',
          weekDay: 'Sat',
          venue: 'Sycamore Brewery',
          city: 'Charlotte',
          state: 'NC',
          startTime: '3:00pm',
          endTime: '6:00pm'
        },
        {
          month: 'Jun',
          day: '16',
          weekDay: 'Sat',
          venue: 'Wild Wing Cafe Epictenter',
          city: 'Mooresville',
          state: 'NC',
          startTime: '3:00pm',
          endTime: '6:00pm'
        }
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
.dates-list-wrapper {
  width: 70%;
  margin: 0 auto;
}

@media(min-width: 1200px) {
  .dates-list-wrapper {
    width: 80%;
  }
}

.dates-data {
  width: 100%;
  height: 5rem;
  margin-top: 10px;
  border-bottom: .05rem solid $text-primary;
  display: flex;
  align-items: center;
  font-family: $rajdhani;
  color: $text-primary;
}

.gig-date {
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: .1rem;
  font-size: 1.6rem;
  width: 10%;
}

.gig-weekday {
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: .1rem;
  font-size: 1.6rem;
  width: 10%;
}

.venue-name {
  width: 30%;
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
}

.venue-city {
  width: 30%;
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
}

.gig-time {
  width: 20%;
  font-size: 1.6rem;
  text-align: right;
  font-weight: 600;
}
</style>
