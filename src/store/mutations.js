
import {ADDCART} from './mutation-type'
import {ADDTOCART} from './mutation-type'
export default {
  
    [ADDCART](state, payLoad) {
      payLoad.count++
    },
    [ADDTOCART](state,payLoad){
    payLoad.checked=true
     state.cartList.push(payLoad)
    }
  }
