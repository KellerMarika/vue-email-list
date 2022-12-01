const { createApp } = Vue

createApp({
  data() {
    return {
      emails:[],
      temporaryEmails:[],

    }
  },
  metods: {
    fetchEmail(){
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((resp)=>{
        //function invocata automaticamente solo dopo che axios avrà ricevuto la risposta dal server

        console.log("l'email generata dal server è",resp.data);
        this.temporaryEmails.push(resp.data.response);
      });
      
}
  },
  mounted() {
    while(this.temporaryEmails.length<10){
      this.fetchEmail();
      if(this.temporaryEmails.length===10){
        this.emails=this.temporaryEmails;
      }
    }

  }
}).mount("#app")





/*  https://flynn.boolean.careers/exercises/api/random/mail */