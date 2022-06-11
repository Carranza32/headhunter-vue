<template>
	<NavBar />
	<user-list />

	<BannerPeople />
	<SubBanner />
	<MySertifications />
	<my-experience />
</template>

<script>
import NavBar from './components/NavBar.vue'
import BannerPeople from './components/BannerPeople.vue'
import SubBanner from './components/SubBanner.vue'
import MySertifications from './components/MySertifications.vue'
import MyExperience from './components/MyExperience.vue'
import UserList from './components/UserList.vue'

export default {
  name: 'App',
  components: {
    NavBar,
	BannerPeople,
	SubBanner,
	MySertifications,
    MyExperience,
	UserList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
