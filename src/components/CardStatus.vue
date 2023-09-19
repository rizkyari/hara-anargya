<script setup>
import ArrowUp from '../assets/arrow-up.png';
import ArrowDown from '../assets/arrow-down.png';
const props =  defineProps({
      status: String,
      total: String,
      isProfit: Boolean,
      gain: String
   })
</script>

<template>
    <div class="rounded-md border-2">
        <div class="bg-white p-3">
            <div class="flex items-center justify-between">
                <div class="text-sm text-[#727272] font-semibold">{{ props.status }}</div>
                <button>
                    <img src="../assets/share.png" class="h-7"/>
                </button>
                
            </div>
            <div class="font-semibold">{{ props.total }}</div>
        </div> 
        <div class="p-3">
            <div class="flex justify-between">
                <div class="flex items-center">
                    <img  class="h-5" :src="props.isProfit ? ArrowUp : ArrowDown"/>
                    <div  :class="props.isProfit ? 'text-[#4CBF93]' : 'text-[#EE7C85]'" class="text-sm">{{ props.gain }}</div>
                    <div class="text-[#AAAAAA] ml-2 text-sm">Last Month</div>
                </div>
                <button class="text-xs font-semibold">View More</button>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
</style>