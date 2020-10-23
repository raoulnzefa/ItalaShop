<template>
    <app-layout>
        <template v-slot:carousel>
            <v-row>
                <v-col>
                    <v-card elevation="0" max-width="1200px" style="margin: 0 auto;" class="mt-10">
                        <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
                            <v-carousel-item>
                                <v-sheet max-height="400">
                                    <v-row class="fill-height" align="center" justify="center">
                                        <v-img max-height="400" min-height="400" min-width="100%" src="../../public/images/1.jpg"></v-img>
                                    </v-row>
                                </v-sheet>
                            </v-carousel-item>

                            <v-carousel-item>
                                <v-sheet max-height="400">
                                    <v-row class="fill-height" align="center" justify="center">
                                        <v-img max-height="400" min-height="400" min-width="100%" src="../../public/images/2.jpg"></v-img>
                                    </v-row>
                                </v-sheet>
                            </v-carousel-item>

                            <v-carousel-item>
                                <v-sheet max-height="400">
                                    <v-row class="fill-height" align="center" justify="center">
                                        <v-img max-height="400" min-height="400" min-width="100%" src="../../public/images/3.jpg"></v-img>
                                    </v-row>
                                </v-sheet>
                            </v-carousel-item>
                        </v-carousel>
                    </v-card>

                </v-col>
            </v-row>
        </template>

        <template v-slot:content>
            <v-row>
                <v-col cols="2" class="pl-0">
                    <v-card outlined>
                        <v-navigation-drawer>
                            <v-list style="padding: 0 !important;">
                                <v-list-item v-for="item in items" :key="item.title" link>
                                    <v-list-item-content>
                                        <v-list-item-title class="text-md-body-1">{{ item.title }}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-navigation-drawer>
                    </v-card>
                </v-col>
                <v-col clos="8">
                    <v-row class="justify-space-between">
                        <product-card v-for="(product,index) in products" :key="index" :title="product.title" 
                        :image="product.image" :rating="product.rating" :price="product.price"></product-card>
                    </v-row>
                </v-col>
            </v-row>
        </template>
    </app-layout>
</template>

<script>
import gql from 'graphql-tag'
import AppLayout from '../layouts/AppLayout'
import ProductCard from '../components/ProductCard'

export default {
    name: 'Home',
    components:{
        AppLayout,
        ProductCard
    },
    data() {
        return {
            slides: [
                "../../public/images/1.jpg",
                '../../public/images/2.jpg',
                '../../public/images/3.jpg',
            ],
            items: [{
                    title: 'Camisas'
                },
                {
                    title: 'Vestidos'
                },
                {
                    title: 'Blusas'
                },
                {
                    title: 'Gorros'
                },
                {
                    title: 'Shorts'
                },
                {
                    title: 'Pantalones'
                },
            ],
            users: [],
            user: null,
            products:[
                {
                    title: 'Camisa blanca',
                    image: 'http://assets.liverpool.com.mx/assets/images/categorias/damas/catst4003088.jpg',
                    rating: 4.5,
                    price: 700.00
                }
            ]
        }
    },
    methods:{
        async getUser(){
        const response = await this.$apollo.query({
            query: gql`query{
                user{
                    email
                }
            }`
        })

        console.log(response)

        }
    },
    created(){
        this.getUser()
    }

}
</script>
