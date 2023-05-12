<template>
  <aside class="h-full w-64 bg-neutral-100 p-6">
    <div class="mb-6 flex items-center gap-2">
      <img src="../assets/stocks-logo.svg" class="h-8 w-6" alt="" />
      <h1 class="text-xl font-semibold">Vue Stock App</h1>
    </div>
    <nav class="flex h-[calc(100%-75px)] flex-col justify-between">
      <ul class="flex flex-col gap-3">
        <li class="flex items-center gap-2">
          <span>☰</span>
          Dashboard
        </li>
        <li class="flex items-center gap-2">
          <span>☰</span>
          Watchlist
        </li>
        <li class="flex items-center gap-2">
          <span>☰</span>
          News
        </li>
      </ul>
      <div class="flex items-center gap-2">
        <span>☰</span>
        Login
      </div>
    </nav>
  </aside>
</template>
