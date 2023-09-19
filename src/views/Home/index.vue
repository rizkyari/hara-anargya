<script setup>
import CardStatus from '../../components/CardStatus.vue';
import TableList from '../../components/TableList.vue';
import { ref  } from 'vue';

const data = ref([
    {status: 'Pending', total: '2.480,30', isProfit: true, gain: '2,15%'},
    {status: 'Paid', total: '84.310', isProfit: false, gain: '1,10%'},
    {status: 'Rejected', total: '12.155', isProfit: true, gain: '2,15%'},
])

</script>

<template>
    <div class="p-5">
        <div class="grid grid-cols-3 gap-4 mb-5">
            <CardStatus v-for="item in data" :status="item.status" :total="item.total" :is-profit="item.isProfit" :gain="item.gain"/>
        </div>
        <TableList/>
    </div>
</template>

<style lang="postcss" scoped></style>