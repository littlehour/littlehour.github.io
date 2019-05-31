<template>
    <div>
        <p>this is {{state1}}</p>
        <p>this is {{state2}}</p>
        <p>this is {{state3}}</p>
        <p>this is {{state4}}</p>
        <p>stateArr total {{stateArrCount}}</p>
        <p>stateArr index 3 {{getIndexData(3)}}</p>
        <button @click="editStateArr({commitComponent: 'testStore'})">edit stateArr</button>
        <p>stateObj.obj1 is {{stateObj.obj1 ? stateObj.obj1 : 'no obj1'}}</p>
        <button @click="addObj1">add obj1</button>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'
import {mapMutations} from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState([
            'state1',
            'state2',
            'state3',
            'state4',
            'stateObj'
        ]),
        ...mapGetters([
            'stateArrCount',
            'getIndexData'
        ])
    },
    methods: {
        // editStateArr: function() {
        //     this.$store.commit('editStateArr', {
        //         commitComponent: 'testStore'
        //     })
        // },
        ...mapMutations([
            'editStateArr'
        ]),
        addObj1: function() {
            this.$store.commit({
                type: 'addObj1',
                commitComponent: 'testStore'
            })
        }
    }
}
</script>

