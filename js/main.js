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

        console.log("email generata:",  resp.data.response);

          const randomEmail = resp.data.response
          //console.log(randomEmail);
          this.emails.push(randomEmail);
        });
    },

    fillArray(array,arrayLength){
      for (let i = 0; i < arrayLength; i++) {
        this.fetchEmail()
      }
    }
  },
  mounted() {
    this.fillArray(this.emails,10);
    
  }
}).mount('#app');