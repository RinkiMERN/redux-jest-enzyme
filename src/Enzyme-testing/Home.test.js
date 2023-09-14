
import Home from './Home';
import {shallow} from 'enzyme'

// shallow rendering for full component

describe('shallow code testing', ()=>{
    it('my code testing',()=>{
        let wrapper = shallow(<Home/>)
        expect(wrapper.exists('.home')).toEqual(true)
    })
})

