const axios = require('axios');


let objArray = [];
let cartArray = [];

function runAxios() {
  axios.get('http://localhost:3001/products_hp').then((response) => {
    //console.log(response.data);
    let data = response.data;
    data.forEach(element => {
      let store = (({ id, title, price, category }) => ({ id, title, price, category }))(element);
      objArray.push(store);
    });
    //objArray=response.data;
  }).catch((error) => {
    console.log(error);
  });
}
function addToCart(srcArray, destArray, itemId, itemCount) {
  let ob = srcArray.find(e => e.id == itemId);
  //console.log(ob);
  let cartObj = {
    item: ob,
    quantity: parseInt(itemCount)
  }
  destArray.push(cartObj);
}

function editItem(cartArray, itemId, prop, val) {

  let ob = cartArray.find(x => { return x.item.id == itemId });
  //console.log(ob);

  if (prop == "quantity") {
    editProperty(cartArray.find(x => { return x.item.id == itemId }), prop, val);
    console.log(cartArray.find(x => { return x.item.id == itemId }));

  } else {
    if (prop in ob.item) {
      editProperty(cartArray.find(x => { return x.item.id == itemId }).item, prop, val);
      //cartArray[idx][select] = val;

    } else console.log("Error: property not found\n");
  }
}
function deleteItem(cartArray, itemId) {
  let idx = cartArray.findIndex(x => { return x.item.id == itemId });
  cartArray.splice(idx, 1);
  console.log(cartArray);
}


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
function editProperty(object, key, value) {
  if (isNumber(value)) value = parseInt(value);
  object[key] = value;
}
/*const onClickCart = (paramId) => {
    cartArray.push(objArray.find(e=>e.id==paramId));
    console.log(cartArray);
};*/
var recursiveAsyncReadLine = function () {
  rl.question('1.Check Catalog\n2.Add object\n3.Edit object\n4.Delete object\n5.Check Cart\nSelect option:', (select) => {
    if (select == '1') { console.log(objArray); recursiveAsyncReadLine(); }
    if (select == 'exit') return rl.close();
    if (select == '2') {
      rl.question('Add object to cart (item id): ', (select) => {
        rl.question('Amount: ', (quantity) => {
          //if (select == 'exit') return rl.close();
          addToCart(objArray, cartArray, select, quantity);
          console.log(cartArray);
          recursiveAsyncReadLine();
        })
      });

    }
    if (select == '3') {
      rl.question('Select object in cart to edit (item id): ', (select) => {
        //let id = select;
        let ob = cartArray.find(x => { return x.item.id == select });
        console.log(ob);
        rl.question('Select property to edit: ', (prop) => {
          rl.question('Edit Value : ', (val) => {
            editItem(cartArray,select,prop,val);
            console.log("New data:");
            console.log(cartArray.find(x => { return x.item.id == select }));
            recursiveAsyncReadLine();
          });
        });
      });
    }
    if (select == '4') {
      rl.question('Select object in cart to delete (item id): ', (id) => {
        deleteItem(cartArray, id)
        console.log(cartArray);
        recursiveAsyncReadLine();
      });
    }
    if (select == '5') {
      console.log(cartArray);
      recursiveAsyncReadLine();
    };
  });
}

runAxios();
//console.log("Data Info:\n");
//console.log(objArray);
recursiveAsyncReadLine();