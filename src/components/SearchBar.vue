<template>
    <div>
        <v-text-field
            v-model="title"
            outlined
            @keypress.enter="searchMovies">
            <template v-slot:prepend-inner>
                <v-icon>search</v-icon>
            </template>
            <template v-slot:append>
                <v-progress-circular
                    v-if="loading"
                    size="24"
                    color="primary"
                    indeterminate
                >
                </v-progress-circular>
            </template>
        </v-text-field>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    computed: {
        title: {
            get() {
              return this.$store.state.movie.title;  
            },
            set(title) {
                this.$store.commit('movie/updateState',  {
                    title: title
                });
            }
        },
        loading() {
            return this.$store.state.movie.loading;
        }
    },
    methods: {
        ...mapActions('movie', [
            'searchMovies'
        ])
        // 펑션 명이 같을 경우 mapActions를 사용하여 간단히 표현가능
        // searchMovies() {{
        //     this.$store.dispatch('movie/searchMovies');
        // }}
        // async searchMovies() {
            // this.loading = true;
            // const myApiKey = '7e275639'
            // const res = await axios.get(`http://www.omdbapi.com/?apikey=${myApiKey}&s=${this.title}`);
            // console.log('res: ', res.data);
            // this.loading = false;
            // .then( function(response) {
            //     if (response !== null 
            //         && typeof response !== undefined 
            //         && response.status === 200) {
                        
            //             console.log(response);
            //         const movieArr = response.data.Search;
            //     } else {
                    
            //     }
            // })
            // .catch((Error) => {

            // });
            // console.log('searchMovies');
    }
}

</script>