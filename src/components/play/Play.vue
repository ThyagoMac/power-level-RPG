<template>
    <div>
        <h1>-- Game Start --</h1>
        <h3>Pew pew PUSSHHH!!</h3>
        <h3>Ha!! Urgh...</h3>
        <h3>Floy! Furryah!</h3>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        heroine: {
          name: '',
          power: 1,
          speed: 1,
          skill: 1,
          mental: 1,
          experience: 1,
          buff: [],
          debuff: [],
          resource: '',
          desc: '',
          url: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log(this.heroine);
      }
    }
  }
</script>