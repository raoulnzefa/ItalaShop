<template>
    <app-layout>
        <template v-slot:content>
            <v-card-text class="text-xl-h5 mt-10 pl-0">Detalles de producto</v-card-text>
            <v-card class="d-flex" outlined>
                <v-card-text class="d-flex">
                    <div class="mr-3">
                        <v-img min-height="100" min-width="100" max-height="100" max-width="100" class="w-full h-full mb-2" src="http://assets.liverpool.com.mx/assets/images/categorias/damas/catst4003088.jpg"></v-img>
                        <v-img min-height="100" min-width="100" max-height="100" max-width="100" class="w-full h-full mb-2" src="http://assets.liverpool.com.mx/assets/images/categorias/damas/catst4003088.jpg"></v-img>
                        <v-img min-height="100" min-width="100" max-height="100" max-width="100" class="w-full h-full mb-2" src="http://assets.liverpool.com.mx/assets/images/categorias/damas/catst4003088.jpg"></v-img>
                    </div>
                    <v-img min-height="400" min-width="400" max-height="400" max-width="400" class="w-full h-full" src="http://assets.liverpool.com.mx/assets/images/categorias/damas/catst4003088.jpg"></v-img>
                </v-card-text>
                <v-card-text>
                    <h2>Blusa de color bonita</h2>
                    <v-row
                        align="center"
                        class="mx-0"
                    >
                        <v-rating
                        :value="4.5"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                        ></v-rating>

                        <div class="grey--text ml-4">
                        4.5 (413)
                        </div>
                    </v-row>
                    <p class="text-h6 mt-3">$700.00</p>
                    <p class="text-h6 mt-3">Stock disponible</p>

                    <ul>
                        <li>Bonita</li>
                        <li>Sencilla</li>
                        <li>Tela suave</li>
                        <li>Moda</li>
                    </ul>

                    <a href="#comments" class="d-block mt-3 black--text text-decoration-none">Ver comentarios</a>
                </v-card-text>
                <v-card-text>
                    <p>Envío GRATIS en pedidos mayores a $499.00.</p>
                    <v-card-text class="text-h6 mt-3 success--text pl-0">Disponible</v-card-text>
                    <v-text-field v-model="quantity" color="secondary" outlined single-line append-icon="mdi-plus" @click:append="increaseQuantity"></v-text-field>

                    <v-btn width="100%" depressed color="info">
                        Comprar
                    </v-btn>
                    <v-btn width="100%" depressed class="mt-3 blue lighten-4 info--text">
                        Agregar al carrito
                    </v-btn>
                </v-card-text>
            </v-card>
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