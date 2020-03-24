<template>
  <div class="mr-5 relative">
    <button @click="dropdown=!dropdown;" class="block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
      <img class="h-full w-full object-cover" :src="user.avatar" :alt="user.name">
    </button>
    <div v-if="dropdown" class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
      <router-link to="/profile" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Profile</router-link>
      <a @click="$emit('logout')" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Logout</a>
    </div>
  </div>
</template>

<script lang="ts">
import Component, { mixins } from 'vue-class-component';
import BaseComponent from '../BaseComponent';


@Component
export default class AccountDropdown extends mixins(BaseComponent)
{
    dropdown = false;
}
</script>