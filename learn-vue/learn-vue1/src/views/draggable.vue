<template>
    <el-form ref="form" label-width="126px" label-position="right">
        <el-form-item v-for="item in labels" :label="item" :ref="item" :key="item" draggable @dragstart.native="dragstart($event, item)" @dragenter.native="dragenter($event)" @dragover.native="dragover($event)" @drop.native="drop($event, item)">
          <el-input v-model.trim="proForm[item]" clearable maxlength="13"></el-input>
        </el-form-item>
        <!-- <el-form-item label="qrcode" ref="qrcode" key="qrcode" draggable @dragstart.native="dragstart($event, 'qrcode')" @dragenter.native="dragenter($event)" @dragover.native="dragover($event)" @drop.native="drop($event, 'qrcode')">
          <el-input v-model.trim="proForm.qrcode" clearable maxlength="13"></el-input>
        </el-form-item>
        <el-form-item label="label1" draggable @dragstart.native="dragstart($event)" @dragenter.native="dragenter($event)" @dragover.native="dragover($event)" @drop.native="drop($event)">
          <el-input v-model.trim="proForm.label1" clearable maxlength="13"></el-input>
        </el-form-item>
        <el-form-item label="label2" draggable @dragstart.native="dragstart($event)" @dragenter.native="dragenter($event)" @dragover.native="dragover($event)" @drop.native="drop($event)">
          <el-input v-model.trim="proForm.label2" clearable maxlength="13"></el-input>
        </el-form-item>
        <el-form-item label="label3" draggable @dragstart.native="dragstart($event)" @dragenter.native="dragenter($event)" @dragover.native="dragover($event)" @drop.native="drop($event)">
          <el-input v-model.trim="proForm.label3" clearable maxlength="13"></el-input>
        </el-form-item>
        <el-form-item label="label4" draggable @dragstart.native="dragstart($event)" @dragenter.native="dragenter($event)" @dragover.native="dragover($event)" @drop.native="drop($event)">
          <el-input v-model.trim="proForm.label4" clearable maxlength="13"></el-input>
        </el-form-item> -->
    </el-form>
</template>
<script>
export default {
    data() {
        return {
            proForm: {
                label1: '',
                label2: '',
                label3: '',
                label4: '',
            },
            labels: ['label1', 'label2', 'label3', 'label4'],
            // reShow: false
        }
    },
    methods: {
        dragstart: function(e, key){
            console.log('dragstart', e)
            e.dataTransfer.setData('text/plain', key)
            // console.log(e.dataTransfer.getData('text/html'))
        },
        dragenter: function(e){
            console.log('dragenter', e)
            e.preventDefault()
        },
        dragover: function(e) {
            console.log('dragover', e)
            e.preventDefault()
        },
        drop: function(e, key) {
            console.log('drop', e, e.dataTransfer.getData('text/plain'), this.$refs.form)
            var insertKey = e.dataTransfer.getData('text/plain')
            var dragIndex = this.labels.indexOf(insertKey)
            var dropIndex = this.labels.indexOf(key)
            // this.labels[dropIndex] = insertKey
            // this.labels[dragIndex] = key
            this.$set(this.labels, dropIndex, insertKey)
            this.$set(this.labels, dragIndex, key)
            console.log(this.labels, this.proForm)
            // this.$refs.form.$el.insertBefore(this.$refs[insertKey].$el, this.$refs[key].$el)
        }
    },
}
</script>

<style scoped>

</style>

