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
                                    type="text"
                                    required
                                    rounded
                                    dense
                                    filled
                                    color="secondary"
                                ></v-text-field>
 
                                <v-text-field
                                    label="Password"
                                    type="password"
                                    required
                                    rounded
                                    dense
                                    filled
                                    color="secondary"
                                ></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <div class="flex-grow-1"></div>
                            <v-btn dark :disabled="!valid" @click="login">Login</v-btn>
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
    export default{
        data(){
            return{
                valid: true
            }
        },
        methods:{
            login(){

            }
        }
    }
</script>