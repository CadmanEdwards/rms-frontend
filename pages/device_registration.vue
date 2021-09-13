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
                    <h2>Es necesario Registrar el equipo</h2>
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
                  <!-- <v-text-field
                                v-model="payload.user"
                                label="User"
                                :rules="Rules"
                                required
                                >
                  </v-text-field> -->
                  
                   <v-text-field
                                v-model="payload.namemachine"
                                label="Nombre"
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
                  <v-btn  color="primary"  dark :loading="loading1"  @click="register_temp">Temporal  
                  </v-btn>
                   </v-col>


                    <v-col>

                  <v-btn  color="primary"  dark :loading="loading2"  @click="o">Permanente 
                  </v-btn>

                   </v-col>

                    <v-col>

                  <v-btn  color="primary"  dark :loading="loading3"  @click="register_perm">Cancelar
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
      loading2:false, 
      loading3:false, 
      payload : {
      user:  '',
      namemachine:'',
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
      if(!this.getUser){
          this.$router.push('/');        
      }
      this.payload.user = this.getUser;
    },
    methods:{

      register_temp(){
        this.doJob('register_temp');
      },
      o(){
        this.doJob('o');

      },
      register_perm(){
        this.doJob('register_perm');

      },

        doJob(ep){
                  if(this.$refs.form.validate()){   

                  if(ep == 'register_temp'){
                    this.loading1 = true
                  }
                  else if(ep == 'o'){
                    this.loading2 = true
                  }
                  else if(ep == 'register_temp'){
                    this.loading3 = true
                  }

      try {
            this.$axios.post(`/${ep}`,this.payload) 
                .then((res) => {

                        this.messages = res.data.message;
      
                        this.errors = [];
                        this.$router.push('/login');


                          if(ep == 'register_temp'){
                          this.loading1 = false
                          }
                          else if(ep == 'o'){
                          this.loading2 = false
                          }
                          else if(ep == 'register_temp'){
                          this.loading3 = false
                          }

                })
                .catch(e => {
                    this.messages = [];
                    this.errors = e.response.data.errors;

                         if(ep == 'register_temp'){
                          this.loading1 = false
                          }
                          else if(ep == 'o'){
                          this.loading2 = false
                          }
                          else if(ep == 'register_temp'){
                          this.loading3 = false
                          }
                    
                })
                ;
        

      } catch (error) {
        console.log(error)
      }

    

      }

        },
        
      
     },
   
  }
  
</script>