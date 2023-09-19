<script setup>
import dayjs from 'dayjs';
const emit = defineEmits(['close'])
const closeModal = () => emit('close');

const props = defineProps({
    detail : Object
})
</script>

<template>
        <div class="modal-overlay">
            <div class="bg-white p-3 rounded-md">
                <div class="text-right">
                    <button @click="closeModal" class="text-red-500">X</button>
                </div>
                <div class="flex items-center">
                    <img :src="detail.profile_picture" class="h-20 mr-5"/>
                    <div class="font-semibold">
                        <div class="text-2xl">{{ detail.first_name }} {{ detail.last_name }}</div>
                        <div>{{ detail.email }}</div>
                        <div>{{ detail.phone }}</div>
                    </div>
                </div>
                <div class="p-2 border-2 rounded-sm my-5">
                    <div class="font-semibold">Basic Info</div>
                    <div>{{ detail.gender }}</div>
                    <div>{{dayjs(detail.date_of_birth).format('DD/MM/YYYY') }}</div>
                    <div>{{ detail.job }}</div>
                </div>
                <div class="p-2 border-2 rounded-sm my-5">
                    <div class="font-semibold">Address</div>
                    <div>{{ detail.street }}, {{ detail.city }}, {{ detail.state }}, {{ detail.country }}</div>
                    <div>{{ detail.zipcode }}</div>
                    <div>longitude : {{ detail.longitude }}, latitude: {{ detail.latitude }}</div>
                </div>
                    
            </div>
        </div>
</template>

<style lang="postcss" scoped>
.modal-overlay {
    @apply flex justify-center items-center fixed top-0 left-0 w-full h-full;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
}
</style>