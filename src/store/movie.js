import axios from 'axios'

const API_KEY = '7e275639';

export default {
    namespaced: true,
    state: () => ({
        title: '',
        loading: false,
        movies: []
    }),
    getters: {},
    mutations: {
        updateState(state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key];
            });
        },
        pushIntoMovies(state, movies) {
            state.movies.push(...movies);
        }
    },
    actions: {  // 비동기처리가 가능
        fetchMovies({state, commit}, pageNum) {
            // no-async-promise-executor에 걸리므로 try catch로 변경처리
            return new Promise( async resolve => {    // async funtionc() {}
                const res = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${state.title}&page=${pageNum}`);
                console.log('res : ', res.data);
                commit('pushIntoMovies', res.data.Search);
                resolve(res.data);
            });  
            // 실패...시도중
            // console.log('fetchMovies');
            // return async function() {
            //     const res = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${state.title}&page=${pageNum}`);
            //     commit('pushIntoMovies', res.data.Search);
            //     return res.data;
            // }
        },
        async searchMovies({commit, dispatch}) {
            commit('updateState', {
                loading: true,
                movies: []
            });
            
            const { totalResults } = await dispatch('fetchMovies', 1);
            const pageLength = Math.ceil(totalResults / 10);
            
            if ( pageLength > 1) {
                for( let i = 2; i <= pageLength; i++ ) {
                    if ( i > 4 )  break;
                    // const resMore = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${state.title}&page=${i}`);
                    // commit('pushIntoMovies', resMore.data.Search);
                    await dispatch('fetchMovies', i);
                }
            }

            commit('updateState', {
                loading: false
            });
        }
    }
}