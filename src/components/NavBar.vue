<template>
<div>
  <div class="w-full z-50 top-0 py-3 sm:py-5  absolute">
  <div class="container flex items-center justify-between">
    <div>
      <a href="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/UNICAES_Logo.png/235px-UNICAES_Logo.png" class="w-24 lg:w-24" alt="logo image" />
      </a>
    </div>
    <div class="hidden lg:block">
    </div>
    <div class="block lg:hidden">
      <button @click="mobileMenu = true">
        <i class="bx bx-menu text-4xl text-white"></i>
      </button>
    </div>
  </div>
</div>

<div
  class="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden"
  :class="{ 'opacity-100 pointer-events-auto': mobileMenu }"
>
  <div
    class="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3"
  >
    <button
      class="absolute top-0 right-0 mt-4 mr-4"
      @click="mobileMenu = false"
    >
      <img src="../assets/img/icon-close.svg" class="h-10 w-auto" alt="" />
    </button>

    <ul class="mt-8 flex flex-col">
      
      <li class="py-2">
        
        <span
          @click="triggerMobileNavItem('#about')"
          class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
          >About</span
        >
        
      </li>
      
      <li class="py-2">
        
        <span
          @click="triggerMobileNavItem('#services')"
          class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
          >Services</span
        >
        
      </li>
      
      <li class="py-2">
        
        <span
          @click="triggerMobileNavItem('#portfolio')"
          class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
          >Portfolio</span
        >
        
      </li>
      
      <li class="py-2">
        
        <span
          @click="triggerMobileNavItem('#clients')"
          class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
          >Clients</span
        >
        
      </li>
      
      <li class="py-2">
        
        <span
          @click="triggerMobileNavItem('#work')"
          class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
          >Work</span
        >
        
      </li>
      
      <li class="py-2">
        
        <span
          @click="triggerMobileNavItem('#statistics')"
          class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
          >Statistics</span
        >
        
      </li>
      
      <li class="py-2">
        
        <span
          @click="triggerMobileNavItem('#blog')"
          class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
          >Blog</span
        >
        
      </li>
      
      <li class="py-2">
        
        <span
          @click="triggerMobileNavItem('#contact')"
          class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
          >Contact</span
        >
        
      </li>
      
    </ul>
  </div>
</div>
</div>
</template>

<script>
export default {};
</script>
