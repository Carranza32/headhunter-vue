<template>
	<div class="container py-16 md:py-20" id="portfolio">
  <h2
    class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
  >
    Mira mi Portafolio
  </h2>
  <h3
    class="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
  >
    Esto es lo que he hecho con el pasado
  </h3>

  <div class="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
	<div class="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 transform transition-all hover:scale-105" v-for="port in user.briefcases.$values" v-bind:key="port.bcId">
        <img class="object-cover w-full h-64" src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article">

        <div class="p-6">
            <div>
                <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{{port.proyectRol}}</span>
                <a href="#" class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600 hover:underline">{{port.proyectName}}</a>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Responsabilidades</p>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{port.responsabilities}}</p>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Resumen</p>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{port.summary}}</p>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Tecnología usada</p>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{port.usedTech}}</p>
            </div>

            <div class="mt-4">
                <div class="flex items-center">
                    <div class="flex items-center">
                        <img class="object-cover h-10 rounded-full" src="https://gravatar.com/avatar/bb6ee729a100333f488c7201b0465ff2?s=400&d=robohash&r=x" alt="Avatar">
                        <a href="#" class="mx-2 font-semibold text-gray-700 dark:text-gray-200">{{user.firstName}}</a>
                    </div>
                    <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
	props: ['user'],
}
</script>