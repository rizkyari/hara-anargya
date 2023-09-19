<script setup>
import { ref,onMounted  } from 'vue';
import dayjs from 'dayjs';
import axios from 'axios';
import ModalDetail from '../components/ModalDetail.vue';

const tableHead = ref(['ID', 'User', 'Date Of Birth', 'Email', 'Job', 'Country', 'Action'])
const tableData = ref([]);
const isLoading = ref(true);
const showModal = ref(false);
const detailData = ref('');

const fetchData = async () => {
    isLoading.value = true
    try {
        const response = await axios.get('https://api.slingacademy.com/v1/sample-data/users');
        tableData.value = response.data.users;
        isLoading.value = false
    } catch (error) {
        console.error('Error fetching data:', error);
        isLoading = false
    }
}

const handleModal = (item) => {
    detailData.value = item;
    showModal.value = true;
}

onMounted(() => {
      fetchData();
    });
</script>

<template>
    <div class="rounded-md border-2 bg-white">
        <div class="p-5 font-bold text-lg">User List</div>
        <div>
            <div v-if="isLoading" class="text-center font-bold text-4xl p-5">
                Please Wait While Fetching Data
            </div>
            <table class="w-full" v-else>
                <thead class="bg-[#F7F8FA]">
                    <tr>
                        <td v-for="(item, index) in tableHead" :key="index" class="px-3 py-2 text-[#7C7C7C] font-semibold">{{ item }}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in tableData" :key="row.id" class="border-b-2 font-semibold">
                        <td class="p-3 text-[#080808]">{{ row.id }}</td>
                        <td class="p-3">
                            <div class="flex items-center">
                                <img :src="row.profile_picture" class="h-7 mr-2"/>
                                <div class="text-[#080808]">{{ row.first_name }} {{ row.last_name }}</div>
                            </div>
                        </td>
                        <td class="p-3 text-[#686868] font-normal">{{ dayjs(row.date_of_birth).format('DD/MM/YYYY') }}</td>
                        <td class="p-3 text-[#080808]">{{ row.email }}</td>
                        <td class="p-3 text-[#686868] font-normal">{{ row.job }}</td>
                        <td class="p-3 text-[#080808]">{{ row.country }}</td>
                        <td class="p-3">
                            <button class="text-xs font-semibold px-3 py-1 border-2 rounded-lg borders text-[#080808]" @click="handleModal(row)">View Detail</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <transition name="modal-fade">
            <ModalDetail v-if="showModal" @close="showModal = false" :detail="detailData"/>
        </transition>
    </div>
</template>

<style lang="postcss">
.borders{
    border: 1px solid #D3D3D3;
}


.modal-fade-enter-active {
    transition: all 0.5s ease-out;
}
  
.modal-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
  
.modal-fade-enter-from,
.modal-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>