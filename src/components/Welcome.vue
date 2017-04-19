<template>
  <div id="welcome">
  <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data: function () {
    return {
      msg: 'Senaste checkin'
    }
  }
}
</script>
