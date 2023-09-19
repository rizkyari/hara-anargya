<script setup>
import cities from '../assets/js/city';
import provinces from '../assets/js/province';
import { ref, computed } from 'vue';

const selectedProvince = ref('');
const filteredCities = ref([]);
const sortBy = ref('id');
const sortOrder = ref('asc');

const filterCities = computed(() => {
    filteredCities.value = cities.filter(city => city.provinsi_id === selectedProvince.value);
});

const handleSort = () => {
      filteredCities.value.sort((a, b) => {
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

const toggleSortOrder = () => {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
    handleSort();
};
</script>

<template>
    <div class="bg-white p-5">
        <div class="text-center text-3xl mb-5">Find Cities</div>
        <label for="province" class="mr-5 text-lg font-semibold">Find Cities:</label>
        <select v-model="selectedProvince" @change="filterCities">
            <option value="" disabled>Select a province</option>
            <option v-for="province in provinces" :key="province.id" :value="province.id">{{ province.name }}</option>
        </select>
        <div v-if="filteredCities.length">
            <h4>Total : {{ filteredCities.length }} Cities</h4>
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
                <li v-for="(city,index) in filteredCities" :key="city.id">{{ index +1 }}. {{ city.name }}</li>
            </ul>
        </div>
    </div>
</template>

<style lang="postcss" scoped></style>