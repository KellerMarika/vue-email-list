const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      emails: [],

    };
  },
  methods: {
    fetchEmail() {

      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((resp) => {

          //json di risposta
          //console.log("JSON", resp.data);

          //console.log("email generata:" + resp.data.response);

          const randomEmail = resp.data.response
          console.log(randomEmail);
          return randomEmail
        });
    },
    createArray(callbackfunction, arrayLength, array) {

      let i = 0
      while (i < arrayLength) {

        array.push(callbackfunction);


        console.log(i, callbackfunction);
        console.log(array)
        i++
      }
    }
  },
  mounted() {
    // recupero la lista degli utenti tramite api
    /*     axios.get("https://jsonplaceholder.typicode.com/users")
          .then((resp) => {
            this.listaUtenti = resp.data;
          }); */
    this.fetchEmail()
    this.createArray(this.fetchEmail(), 5, this.emails)
  }
}).mount('#app');