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
                    <h2>Activación de usuarios</h2>
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
                                v-model="payload.user"
                                label="Usuario"
                                :rules="Rules"
                                required
                                >
                  </v-text-field>
                  
             

                  <v-text-field
                                v-model="payload.cod"
                                label="Codigo"
                                :rules="Rules"
                                required
                                >
                  </v-text-field>
               

                   <ul
                    class="mb-3"
                    v-for="(error, index) in errors"
                    :key="index"
                  >
                    <li class="error--text">
                      {{ error }}
                    </li>
                  </ul>

                   <div class="mb-3" style="width:350px;" v-for="(message,index) in messages" :key="index">
                      <span  class="success--text ">
                          {{message}}
                      </span>
                  </div>

                  <v-row>
                    <v-col >
                  <v-btn  color="primary"  dark :loading="loading1"  @click="doJob">Enviar  
                  </v-btn>
                   </v-col>


                

                   
                    <v-col>


                    </v-col>
                  </v-row>
                  
                  

               
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
    auth : false,
    layout:'guest',
    data:() => ({
      messages : [],
      errors : [],
      ep: '',
      loading1:false, 
      payload : {
      user:  '',
      cod:'',
      }, 
      Rules : [ v => !!v || 'This field is required'],
    
    }),
    computed: {
    getUser () {
    return this.$store.state.user
    }
    },
    created () {
    //   if(!this.getUser){
    //       this.$router.push('/');        
    //   }
    //   this.payload.user = this.getUser;
    },
    methods:{

     

        doJob(ep){
                  if(this.$refs.form.validate()){   
                     this.loading1 = true

      try {
            this.$axios.post(`/active_cod`,this.payload) 
                .then((res) => {
                    this.active_user();
                    this.errors = [];
                    this.loading1 = false

                })
                .catch(e => {
                    this.messages = [];
                    this.errors = e.response.data.errors;
                    this.loading1 = false
                    
                });
        

      } catch (error) {
        console.log(error)
      }

    

      }

        },

        active_user(){
             this.$axios.post(`/active_user`,this.payload) 
                .then(res => {
                   this.active_user();
                    this.errors = [];
                    this.loading1 = false
                    this.$router.push('/login');

                })
                .catch(e => {
                    this.messages = [];
                    this.errors = e.response.data.errors;
                    this.loading1 = false
                    
                });
        }
        
      
     },
   
  }
  
</script>