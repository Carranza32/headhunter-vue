<template>
	<div class="container py-16 md:py-20" id="work">
  <h2
    class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
  >
    MI EXPERIENCIA DE TRABAJO
  </h2>

  <div class="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
    <span
      class="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"
    ></span>

    <div class="mt-8 flex flex-col text-center md:flex-row md:text-left" v-for="exp in user.workExperiences.$values" v-bind:key="exp.workExpId">
      <div class="md:w-2/5">
        <div class="flex justify-center md:justify-start">
          <span class="shrink-0">
            <img
              src="https://gravatar.com/avatar/bb6ee729a100333f488c7201b0465ff2?s=400&d=identicon&r=x"
              class="h-auto w-32"
              alt="company logo"
            />
          </span>
          <div class="relative ml-3 hidden w-full md:block">
            <span
              class="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"
            ></span>
          </div>
        </div>
      </div>
      <div class="md:w-3/5">
        <div class="relative flex md:pl-18">
          <span
            class="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"
          ></span>

          <div class="mt-1 flex">
            <i class="bx bxs-right-arrow hidden text-primary md:block"></i>
            <div class="md:-mt-1 md:pl-8">
              <span class="block font-body font-bold text-grey-40"
                >{{exp.dateInit}} - {{exp.dateFin}}</span
              >
              <div class="pt-2">
                <span class="block font-body text-black"
                  >{{exp.workExpDescription}}</span
                >
              </div>
            </div>
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