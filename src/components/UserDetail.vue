<template>
	<div>
		<NavBar />

		<BannerPeople :user=user />
		<SubBanner :user=user />
		<MySertifications :user=user />
		<my-experience :user=user />
		<my-portfolio :user=user />
	</div>
</template>

<script>
import NavBar from './NavBar.vue'
import BannerPeople from './BannerPeople.vue'
import SubBanner from './SubBanner.vue'
import MySertifications from './MySertifications.vue'
import MyExperience from './MyExperience.vue'
import MyPortfolio from './MyPortfolio.vue'
import { get } from '../service/ApiService'

export default {
	components: {
		NavBar,
		BannerPeople,
		SubBanner,
		MySertifications,
		MyExperience,
		MyPortfolio
	},
	data() {
		return {
			user: {},
			id: {},
		}
	},
	async beforeMount(){
		this.id = this.$route.params.id;
		var response = await get('api/User/GetAllById?id='+this.id)

		console.log(response)
		this.user = response;
	},
}
</script>