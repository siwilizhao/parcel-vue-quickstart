<template>
    <h1>
        {{date}}</h1>
</template>

<script>
    export default { 
        name: 'Index',
        data() {
            return {
                date: Math.floor(Date.now() / 1000)
            }
        }
    }
</script>

