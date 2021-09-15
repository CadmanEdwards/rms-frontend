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
                    <h2>Inicie sesión en el panel de control</h2>
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
                    v-model="credentials.user"
                    label="usuario"
                    :rules="EmailRules"
                    required
                  >
                  </v-text-field>
                  <v-text-field
                    v-model="credentials.password"
                    label="contraseña"
                    required
                    :rules="PasswordRules"
                    type="password"
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

                  <v-row>
                    <v-col cols="12">
                      <!-- <vue-recaptcha :sitekey="sitekey" @verify="mxVerify">
                      </vue-recaptcha> -->
                      <span
                        v-if="showGRC"
                        class="fade"
                        style="color: #ff5252; font-size: 13px"
                        >This field is required
                      </span>
                    </v-col>
                    <v-col>
                      <v-btn
                        color="primary"
                        dark
                        :loading="loading"
                        @click="login"
                        >Iniciar sesión</v-btn
                      >
                    </v-col>
                    <v-col>
                      <div class="text-right mt-2">
                        <NuxtLink to="/recover_user" class="button--grey">
                          recuperar usuario
                        </NuxtLink>
                        
                      </div>
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
import VueRecaptcha from "vue-recaptcha";
import { mapMutations } from 'vuex';


export default {
  components: {
    VueRecaptcha,
  },

  layout: "login",
  data: () => ({
    errors: [],
    transition: "home",
    loading: false,
    credentials: {
      user: "",
      password: "",
    },
    sitekey: "6LeZeykaAAAAAILTse8_kZa6-PSKvC7NFaZuOa7l",
    reCaptcha: null,
    showGRC: false,

    EmailRules: [
      (v) => !!v || "This field is required",
      // (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    PasswordRules: [
      (v) => !!v || "This field is required",
      // v => /^[A-Z]+[0-9]+[\$\+@\+]$/.test(v) || 'Password must be strong (hint : A-Z)'
    ],
  }),
  methods: {
    mxVerify(res) {
      this.reCaptcha = res;
      this.showGRC = this.reCaptcha ? false : true;
    },

    login() {
      //  this.showGRC = this.reCaptcha ? false : true;
      if (this.$refs.form.validate()) {
        try {
         

          this.loading = true;
          this.$auth
            .loginWith("local", {
              data: this.credentials,
            })
            .catch((e) => {
              this.errors = e.response.data.errors;
              if(e.response.data.device_registration){
                
                this.$store.commit('setUser', this.credentials.user)

                this.$router.push('/device_registration');
              }
              this.loading = false;
            });

            
        } catch (error) {}
      }

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

 <style scoped>
        .fade {
            animation: fadeInAnimation ease 1s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
        }
        @keyframes fadeInAnimation {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }

    </style>