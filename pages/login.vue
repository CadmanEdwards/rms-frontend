<template>
<v-app>
   
<v-main>

<v-container
class="fill-height"
>


<v-row
justify="center"
>
<v-col
cols="12"
sm="8"
md="6"
>

<v-card  class=" elevation-12">

  <v-toolbar flat class="info" dark justify="center">
   
    <v-row justify="center" class="">
    <v-col align="center">
      <h2>Login to Dashboard</h2>
    </v-col>
</v-row>
  </v-toolbar>

<v-row justify="center" class="mt-5">
    <v-col align="center">
      <NuxtLogo />
    </v-col>
</v-row>
  
<v-card-text>
   <v-form
    method="post"
    ref="form"
    lazy-validation
  >
    <v-text-field
      v-model="email"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      label="Password"
      required
      type="password"
    ></v-text-field>

  
    <v-btn color="primary" dark :loading="loading"  @click="login">Login</v-btn>

  </v-form>
</v-card-text>
<v-card-actions>
</v-card-actions>
</v-card>
</v-col>
</v-row>
</v-container>
</v-main>
</v-app>
</template>

<script>


export default {
layout:'login',
data:() => ({
loading:false,    
snackbar:false,    
email:'',
password:'',          
msg:''
}),
methods:{

login () {
this.loading = true

let credentials = {
email: this.email,
password: this.password
};
this.$auth.loginWith('local',{ data:credentials })
.catch((e) => {
    this.snackbar = true
    this.msg = e.response.data.error 
    setTimeout(() => {
        this.loading = false
        // location.reload();
    },3000);
})


}



}

}
</script>