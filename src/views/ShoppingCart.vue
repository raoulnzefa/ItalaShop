<template>
    <app-layout>
        <template v-slot:content>
            <v-card-text class="text-xl-h5 mt-10">
                Carrito
            </v-card-text>
            <v-card-text class="pt-3 pr-3 text-end" style="border-bottom: 1px solid #BDBDBD;">
                Precio
            </v-card-text>
            <v-row class="items-center">
                <v-col cols="12" class="d-flex">
                    <v-img min-height="150" min-width="250" max-height="150" max-width="250" src="http://assets.liverpool.com.mx/assets/images/categorias/damas/catst4003088.jpg"></v-img>
                    
                    <v-card-text class="ml-3 pt-0">
                        <router-link to="" class="d-block text-md-h6 font-weight-regular" style="color: #424242; text-decoration: none;">Camisa blanca para mujer muy bonita</router-link>
                        <router-link to="" class="d-block" style="color: #03b; text-decoration: none">Eliminar</router-link>
                    </v-card-text>
                    
                    <v-card-text class="pt-0" style="width: 30% !important;">
                        <v-text-field v-model="quantity" color="secondary" outlined single-line append-icon="mdi-plus" @click:append="increaseQuantity"></v-text-field>
                    </v-card-text>
                    
                    <v-card-text class="text-xl-h6 pt-0 text-end" style="width: 30% !important;">
                        $700.00
                    </v-card-text>
                </v-col>
            </v-row>

            <v-card-text class="mt-3 pt-3 pr-3 text-end text-xl-h6" style="border-top: 1px solid #BDBDBD;">
                Total: $700.00
            </v-card-text>

            <v-card-text class="d-flex justify-end mt-3">
                <v-btn depressed color="info">
                    Continuar compra
                </v-btn>
            </v-card-text>

        </template>
    </app-layout>
</template>

<script>
import AppLayout from '../layouts/AppLayout'

export default {
    data() {
        return {
            quantity: 0
        }
    },
    components:{
        AppLayout
    },
    methods:{
        increaseQuantity(){
            this.quantity++
        }
    }
}
</script>
