<template>
    <app-layout>
        <template v-slot:content>
            <div class="text-xl-h5 mt-10">
                Carrito
            </div>
            <div class="pt-3 pr-3 text-end" style="border-bottom: 1px solid #BDBDBD;">
                Precio
            </div>
            <div class="d-flex justify-space-between align-center mt-3">
                <div class="d-flex">
                    <v-img min-height="150" min-width="250" max-height="150" max-width="250" src="http://assets.liverpool.com.mx/assets/images/categorias/damas/catst4003088.jpg"></v-img>
                    <div class="ml-3">
                        <a class="d-block text-md-h6 font-weight-regular" style="color: #424242;">Camisa blanca para mujer muy bonita</a>
                        <div>
                            <a href="" class="d-block" style="color: #03b; text-decoration: none">Eliminar</a>
                        </div>
                    </div>
                </div>

                <div class="input-quantity">
                    <input type="text" class="quantity" v-model="quantity">
                    <button @click="increaseQuantity">
                        <v-icon>mdi-plus</v-icon>
                    </button>
                </div>

                <div class="text-xl-h6">
                    $700.00
                </div>
            </div>

            <div class="mt-3 pt-3 pr-3 text-end text-xl-h6" style="border-top: 1px solid #BDBDBD;">
                Total: $700.00
            </div>

            <div class="d-flex justify-end mt-3">
                <v-btn
                    depressed
                    color="info"
                >
                Continuar compra
                </v-btn>
            </div>

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

<style>
    .input-quantity{
        border:1px solid #BDBDBD; 
        border-radius: 5px; 
        padding: 5px;
        position: relative;
        width: 4rem;
    }

    .input-quantity button{
        position: absolute;
        right: 0;
        outline: none;
    }

    .input-quantity button:focus{
        outline: none;
    }

    .quantity{
        outline: none;
        width: 3rem;
    }

    .quantity:focus{
        outline: none;
    }
</style>