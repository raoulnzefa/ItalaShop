<template>
    <section>
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="3">
                    <v-card class="mx-auto">
                        <v-card-text>
                            <v-form ref="form" v-model="valid">
                                <v-text-field
                                    label="Email"
                                    type="email"
                                    required
                                    rounded
                                    dense
                                    filled
                                    color="secondary"
                                    v-model="user.username"
                                ></v-text-field>
 
                                <v-text-field
                                    label="Password"
                                    type="password"
                                    required
                                    rounded
                                    dense
                                    filled
                                    color="secondary"
                                    v-model="user.password"
                                ></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <div class="flex-grow-1"></div>
                            <v-btn dark :disabled="!valid" @click="login()">Login</v-btn>
                            <v-btn dark link to="">Register</v-btn>
                        </v-card-actions>
                    </v-card>
                    <v-snackbar v-model="snackbar" bottom>
                        {{error_message}}
                    </v-snackbar>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
    import {mapActions} from 'vuex'
    import gql from 'graphql-tag'

    export default{
        data(){
            return{
                valid: true,
                user:{
                    username: '',
                    password: ''
                }
            }
        },
        methods:{
            async login(){
                const response = await this.$apollo.mutate({
                    mutation: gql`mutation($username: String!,
                        $password: String!){
                        login(input: {
                        username: $username,
                        password: $password
                        }){
                            access_token
                        }
                    }`,
                    variables:{
                        username: this.user.username,
                        password: this.user.password
                    }
                })

                this.commitToken(response.data.login.access_token)
            },
            ...mapActions(['commitToken'])
        }
    }
</script>