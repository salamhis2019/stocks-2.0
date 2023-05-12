<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isLinkActive = (link: any) => {
  return computed(() => {
    return route.path === link
      ? 'bg-blue-600 text-white hover:brightness-105'
      : 'hover:bg-neutral-300'
  })
}
</script>

<template>
  <aside class="h-full w-72 bg-neutral-100 p-4">
    <div class="mb-6 flex items-center gap-2 pl-2 pt-2">
      <img src="../assets/stocks-logo.svg" class="h-8 w-6" alt="" />
      <h1 class="text-xl font-semibold italic">Vue Stock App</h1>
    </div>
    <nav class="flex h-[calc(100%-75px)] flex-col justify-between">
      <ul class="flex flex-col gap-2">
        <li>
          <router-link
            to="/"
            class="flex cursor-pointer items-center gap-4 rounded-md p-2 duration-100"
            :class="isLinkActive('/').value"
          >
            <span class="material-symbols-outlined">home</span>
            Home
          </router-link>
        </li>
        <li>
          <router-link
            to="/dashboard"
            class="flex cursor-pointer items-center gap-4 rounded-md p-2 duration-100"
            :class="isLinkActive('/dashboard').value"
          >
            <span class="material-symbols-outlined">grid_view</span>
            Dashboard
          </router-link>
        </li>
        <li>
          <router-link
            to="/watchlist"
            class="flex cursor-pointer items-center gap-4 rounded-md p-2 duration-100"
            :class="isLinkActive('/watchlist').value"
          >
            <span class="material-symbols-outlined">list_alt</span>
            Watchlist
          </router-link>
        </li>
        <li>
          <router-link
            to="/news"
            class="flex cursor-pointer items-center gap-4 rounded-md p-2 duration-100"
            :class="isLinkActive('/news').value"
          >
            <span class="material-symbols-outlined">feed</span>
            News
          </router-link>
        </li>
      </ul>
      <div class="flex items-center gap-4">
        <span class="material-symbols-outlined">account_circle</span>
        Login
      </div>
    </nav>
  </aside>
</template>
