<template>
  <GBox v-if="dialogState">
  <GModal :title="title" :value="dialogState" @close="closeDialog">
        <template #body>
            <GText variant="body">{{ description }}</GText>
        </template>
        <template #footer>
            <GButton variant="danger" @click="agreed">Back</GButton>
            <GButton variant="secondary" @click="closeDialog" class="g-ml-10">Cancel</GButton>
        </template>
    </GModal>
  </GBox>
</template>

<script>
import GModal from '@trendyol-js/grace/core/GModal';
import GButton from '@trendyol-js/grace/core/GButton';
import GText from '@trendyol-js/grace/core/GText';
import GBox from '@trendyol-js/grace/core/GBox';
export default {
    components: {
        GModal,
        GButton,
        GText,
        GBox
    },
    props: {
        dialogState: {
            type: Boolean,
            default: false
        },
    },
    data(){
        return {
            title: "Are you sure?",
            description: "All game data will be deleted. This is a permanent action."
        }
    },
    methods: {
        closeDialog(){
            this.$emit('close')
        },
        agreed(){
            this.$emit('agree')
        }
    }
}
</script>

<style>

</style>