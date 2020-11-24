<template>
  <v-app>
    <v-container>
      <!-- 검색바 -->
      <search-bar></search-bar>
      <!-- 영화목록 -->
      <movie-list></movie-list>
    </v-container>
  </v-app>
</template>

<script>
// import VApp vuetify 플러그인을 설치하면
// 기본적으로 전역에서 사용할 수 있고, 전역 컴포넌트를 지원하기때문에 v-app을 바로 사용가능
// cli에서 기본적으로 세팅하는 절대경로 기호 '@'
import SearchBar from '@/components/SearchBar'
import MovieList from '@/components/MovieList'
export default {
  components: {
    SearchBar: SearchBar,
    MovieList: MovieList
  }
};
</script>
