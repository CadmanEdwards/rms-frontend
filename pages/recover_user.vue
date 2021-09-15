<template>
  <v-app>
    <v-main>
      <v-container class="fill-height">
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card class="elevation-12">
              <v-toolbar flat class="info" dark justify="center">
                <v-row justify="center" class="">
                  <v-col align="center">
                    <h2>recuperacien de usuario</h2>
                  </v-col>
                </v-row>
              </v-toolbar>
              <v-row justify="center" class="mt-5">
                <v-col align="center">
                  <NuxtLogo />
                </v-col>
              </v-row>
              <v-card-text>
                <v-form method="post" ref="form" lazy-validation>
                  <v-text-field
                    v-model="name"
                    label="Nombre"
                    :rules="Rules"
                    required
                  >
                  </v-text-field>
                  <br>

                  <span
                    style="background:#e7d28f;    font-family: cursive !important;"
                    class="mb-3 pa-3  display-1"
                    
                  >
                    {{random_characters}}
                  </span>
                  <br>
                  <br>

                   <v-text-field
                    v-model="characters"
                    label="Introduzca los caracteres"
                    :rules="Rules"
                    required
                  >
                  </v-text-field>

                  <div
                    class="mb-3"
                    v-for="(error, index) in errors"
                    :key="index"
                  >
                    <span class="error--text">
                      {{ error }}
                    </span>
                  </div>

                   

                  <div
                    class="mt-3 mb-3"
                    style="width: 350px"
                    v-for="(message, index) in messages"
                    :key="index"
                  >
                    <span class="success--text">
                      {{ message }}
                    </span>
                  </div>

                  <v-row class="mt-3">
                    <v-col cols="4">
                      <v-btn
                        color="primary"
                        dark
                        :loading="loading"
                        @click="submit"
                        >Enviar codigo
                      </v-btn>
                    </v-col>

                    
                    <v-col>
                     <v-btn
                        color="primary"
                        dark
                        to="/login"
                        >Cancelar
                      </v-btn>   
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>

              <v-card-actions> </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  auth: false,
  layout: "guest",
  data: () => ({
    messages: [],
    random_characters : "",
    errors: [],
    loading: false,
    name: "",
    characters : "",
    Rules: [(v) => !!v || "This field is required"],
  }),
  created () {
      this.getRandomValues();
  },
  methods: {
    getRandomValues(){
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < 6; i++ ) {
             result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            this.random_characters = result;

            return result;

    },
    submit() {
      if (this.$refs.form.validate()) {
            this.loading = true;

            if(this.characters != this.random_characters) {
                this.errors = ['Captcha no coincide'];
                this.loading = false;

                return;
            }

            this.$store.commit('setUser', this.name);

            this.$router.push("/recover_user_code");

        

        setTimeout(() => (this.loading = false), 3000);
      }
    },
  },
};
</script>