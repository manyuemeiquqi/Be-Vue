import {h,ref} from '../../lib/be-vue.esm.js'
const prevC = 'newC'
const nextC = [
    h('div',{},'A'),
    h('div',{},'B')
]

export default {
    name:'TextToArray',
    setup(){
        const isChange = ref(false)
        window.isChange = isChange
        return{
            isChange
        }
    },
    render(){
        const self = this
        return self.isChange === true ?
            h('div',{},nextC)
            :h('div',{},prevC)
    }
}