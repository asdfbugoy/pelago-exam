import { types, flow } from 'mobx-state-tree'
import Search from './Search';
export default types.model('Root', {
    search: types.maybe(Search)
}).views(self => ({

})).actions(self => ({
    afterCreate() {
        self.search = Search.create({})
    }
}));