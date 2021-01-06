import {
  ADDCART
} from './mutation-type'
import {
  ADDTOCART
} from './mutation-type'

export default {
  //因为有if判断，所以也放在actions里
  addCart(context, payLoad) {
    //先看oldProduct为不为true，为true就有他们的值，
    //    let oldProduct=null
    //    for(let item of context.state.cartList){
    // oldProduct=item
    //    }
    let oldProduct = context.state.cartList.find(item => item.iid === payLoad.iid)
    console.log(oldProduct);

    //判断
    if (oldProduct) {
      context.commit(ADDCART, oldProduct)
    } else {
     payLoad.count = 1
      context.commit(ADDTOCART, payLoad)
    }

  }

}