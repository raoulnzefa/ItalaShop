<template>
    <div>
        <v-card class="mb-10" max-width="274" outlined>
            <v-img height="300" src="../../public/images/3.jpg"></v-img>

            <v-card-title class="pt-0 pb-1">{{ title }}</v-card-title>
            <div class="ml-4 pt-0" :class="[quantity > 0 ? 'green--text' :'red--text']">{{ quantity > 0 ? 'Disponible' :'Agotada' }}</div>

            <v-card-text>
                <v-row align="center" class="mx-0">
                    <v-rating :value="rating" color="amber" dense half-increments readonly size="14"></v-rating>

                    <div class="grey--text ml-4">{{ rating }}</div>
                </v-row>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-actions>
                <v-row class="justify-space-between align-center">
                    <div class="grey--text ml-4">
                        $ {{ price }}
                    </div>
                    <v-btn class="mr-4" outlined small fab color="indigo">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </v-row>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: 'product-card',
        props:['title','rating','price','quantity'],
        data(){
            return {

            }
        },
        methods: {
            
        },
    }
</script>