<template>
    <v-card-text class="pl-0">
        <v-row  align="center" class="mx-0">
            <v-rating
            :value="rating"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
            ></v-rating>
        </v-row>

        <div class="subtitle-1 mt-2">{{ comment }}</div>
    </v-card-text>
</template>

<script>
    export default{
        props:{
            comment:{
                type: String,
                required: true
            },
            rating:{
               type: Number,
               required: true 
            }
        }
    }
</script>