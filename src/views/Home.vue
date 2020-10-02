<template>
    <app-layout>
        <template v-slot:carousel>
            <v-row>
                <v-col>

                    <v-card elevation="0" max-width="1200px" style="margin: 0 auto;" class="mt-10">
                        <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
                            <v-carousel-item>
                                <v-sheet height="100%">
                                    <v-row class="fill-height" align="center" justify="center">
                                        <v-img src="../../public/images/1.jpg"></v-img>
                                    </v-row>
                                </v-sheet>
                            </v-carousel-item>

                            <v-carousel-item>
                                <v-sheet height="100%">
                                    <v-row class="fill-height" align="center" justify="center">
                                        <v-img src="../../public/images/2.jpg"></v-img>
                                    </v-row>
                                </v-sheet>
                            </v-carousel-item>

                            <v-carousel-item>
                                <v-sheet height="100%">
                                    <v-row class="fill-height" align="center" justify="center">
                                        <v-img src="../../public/images/3.jpg"></v-img>
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
                <v-col cols="2">
                    <v-card elevation="1" style="margin: 0 auto;">
                        <v-navigation-drawer floating permanent>
                            <v-list dense rounded>
                                <v-list-item v-for="item in items" :key="item.title" link>
                                    <v-list-item-content style="border-bottom: 1px solid black;">
                                        <v-list-item-title class="text-md-body-1">{{ item.title }}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-navigation-drawer>
                    </v-card>
                </v-col>
                <v-col clos="8">
                    <v-row class="justify-space-between">
                        <v-card class="mb-10" max-width="274">
                            <v-img height="300" src="http://assets.liverpool.com.mx/assets/images/categorias/damas/catst4003088.jpg" lazy-src="http://assets.liverpool.com.mx/assets/images/categorias/damas/catst4003088.jpg"></v-img>

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
                                    <v-btn class="mr-4" outlined x-small fab color="indigo">
                                        <v-icon >mdi-plus</v-icon>
                                    </v-btn>
                                </v-row>
                            </v-card-actions>
                        </v-card>

                    </v-row>
                </v-col>
            </v-row>
        </template>
    </app-layout>
</template>

<script>
import gql from 'graphql-tag'
import AppLayout from '../layouts/AppLayout'

export default {
    name: 'Home',
    components:{
        AppLayout
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
            user: null
        }
    },
    apollo: {
        // Simple query that will update the 'hello' vue property
        user: gql `
        query{
            user{
                email
            }
        }`,
    },
}
</script>
