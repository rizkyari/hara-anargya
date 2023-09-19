<script setup>

</script>

<template>
    <div class="p-4 h-full border border-b-2 bg-[#fff]">
        <div class="font-bold text-3xl mb-5">
            heylink.
        </div>
        <nav>
            <ul>
                <li>
                    <router-link to="/" active-class="active" class="flex items-center p-2">
                        <img src="../assets/linear.png" class="h-4 mr-2"/>
                        <a>Dashboard</a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/overview" active-class="active" class="flex items-center p-2">
                        <img src="../assets/linear-up.png" class="h-4 mr-2"/>
                        <a>Overview</a>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="postcss" scoped>
.router-link-exact-active {
    @apply bg-[#E3F2FD] rounded-lg
}
</style>