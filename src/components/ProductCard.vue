<template>
    <div>
        <v-card class="mb-10" max-width="274">
            <v-img height="300" src="http://assets.liverpool.com.mx/assets/images/categorias/damas/catst4003088.jpg"></v-img>

            <v-card-title class="pt-0">Cafe Badilico</v-card-title>

            <v-card-text>
                <v-row align="center" class="mx-0">
                    <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

                    <div class="grey--text ml-4">4.5</div>
                </v-row>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-actions>
                <v-row class="justify-space-between align-center">
                    <div class="grey--text ml-4">
                        $ 500.00
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
        props: ['products'],
        data(){
            return {

            }
        },
        methods: {
            
        },
    }
</script>