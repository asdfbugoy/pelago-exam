import { types, flow } from 'mobx-state-tree'

export default types.model('Search', {
    y: 0,
    page: 1,
    s: '',
    type: ''
}).views(self => ({

})).actions(self => ({
    afterCreate() {
        
    }
}));