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

            <v-card flat>
                <v-card-title class="text-lg-h5 pl-0 mt-5">Caracteristicas</v-card-title>
                <v-card-text class="subtitle-1 pl-0 mt-2">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</v-card-text>
            </v-card>

            <v-simple-table light>
            <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">
                        Caracteristica
                    </th>
                    <th class="text-left">
                        
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="item in features"
                :key="item.name"
                style="border-top: 1px solid #757575;"
                >
                <td class="grey lighten-3">{{ item.feature }}</td>
                <td>{{ item.valor }}</td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
        </template>
    </app-layout>
</template>

<script>
    import AppLayout from '../layouts/AppLayout'

    export default {
        data() {
            return {
                quantity: 0,
                features: [
                    {
                        feature: 'Tela',
                        valor: 'Tela de algodon'
                    },
                    {
                        feature: 'Colores',
                        valor: 'Rojos, Blanco'
                    },
                    {
                        feature: 'Diseño',
                        valor: 'Unico'
                    },
                    {
                        feature: 'Disponible',
                        valor: '10'
                    },
                ]
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