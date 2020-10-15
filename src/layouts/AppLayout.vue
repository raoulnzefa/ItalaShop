<template>
    <v-container fluid class="m-0 p-0">
        <v-row>
            <v-col cols="10">
                <v-app-bar fixed flat dark style="margin: 0 auto;">
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>

                    <v-toolbar-title>ITALA</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <template>
                        <v-text-field class="mb-0" color="secondary lighten-5" outlined single-line label="Search ..." prepend-inner-icon="mdi-magnify" style="max-width: 400px; height: 52px !important;"></v-text-field>
                    </template>

                    <v-spacer></v-spacer>

                    <v-btn icon>
                        <v-icon>mdi-account</v-icon>
                    </v-btn>

                    <v-btn icon href="/shopping-cart">
                        <v-icon>mdi-cart</v-icon>
                    </v-btn>

                </v-app-bar>
            </v-col>
        </v-row>

        <slot name="carousel"></slot>

        <v-container>
            <v-row>
                <v-col cols="10" style="max-width: 1200px; margin: 0 auto;">
                    <slot name="content"></slot>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<style>
    .v-text-field.v-text-field--solo .v-input__control {
        min-height: 32px;
    }

    .v-toolbar__content {
        margin: 0 auto;
        max-width: 1200px;
    }
</style>