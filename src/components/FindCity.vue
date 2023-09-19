<script setup>
import cities from '../assets/js/city';
import provinces from '../assets/js/province';
import { ref } from 'vue';

const searchQuery = ref('');
const searchedCities = ref([]);
const sortBy = ref('id');
const provinceFound  = ref(false);
const closeCity = ref(false);
const sortOrder = ref('asc');

const searchCities = () => {
    closeCity.value = false;
    provinceFound.value = false;
    searchedCities.value = cities.filter(city =>
        city.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
};

const handleSort = () => {
    searchedCities.value.sort((a, b) => {
        let result = 0;
        if (sortBy.value === 'id') {
          result = a.id - b.id;
        } else if (sortBy.value === 'name') {
          result = a.name.localeCompare(b.name);
        }

        if (sortOrder.value === 'desc') {
          result *= -1;
        }

        return result;
      });
    };

const findProvince = (id) => {
    provinceFound.value = provinces.filter(province => province.id === id);
    closeCity.value = true
};

const toggleSortOrder = () => {
      sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
      handleSort();
};
</script>

<template>
    <div class="bg-white p-5">
        <div class="text-center text-3xl mb-5">Find Province</div>
        <label for="search" class="mr-5">Search City :</label>
        <input type="text" v-model="searchQuery" @input="searchCities" placeholder="Search cities by name" />
        <div v-if="searchedCities.length && !closeCity">
            <h4>Total : {{ searchedCities.length }} Cities</h4>
            <div class="flex items-center">
                <div class="mr-8">
                    <label for="sort">Sort by:</label>
                        <select v-model="sortBy" @change="handleSort">
                            <option value="id">ID</option>
                            <option value="name">Name</option>
                        </select>
                </div>
                <button @click="toggleSortOrder" class="border-2 bg-gray-300 p-2 text-xs">ASC/DSC</button>
            </div>
            <ul>
                <li v-for="(city,index) in searchedCities" :key="city.id" @click="findProvince(city.provinsi_id)" class="cursor-pointer hover:text-blue-400">{{ index +1 }}. {{ city.name }}</li>
            </ul>
        </div>
        <div v-if="provinceFound">
            <div class="text-2xl font-semibold">Found Your Province : {{ provinceFound[0].name }}</div>
        </div>
    </div>
    
</template>

<style></style>