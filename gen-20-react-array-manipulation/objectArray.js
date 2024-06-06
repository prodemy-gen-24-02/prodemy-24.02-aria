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
          let ob = objArray.find(e => e.id == select);
          //console.log(ob);
          let cartObj = {
            item: ob,
            quantity: parseInt(quantity)
          }
          cartArray.push(cartObj);
          console.log(cartArray);
          recursiveAsyncReadLine();
        })
      });

    }
    if (select == '3') {
      rl.question('Select object in cart to edit (item id): ', (select) => {
        let id = select;
        let ob = cartArray.find(x => { return x.item.id == id });
        console.log(ob);
        rl.question('Select property to edit: ', (prop) => {
          if (prop == "quantity") {
            rl.question('Edit Quantity : ', (val) => {
              editProperty(cartArray.find(x => { return x.item.id == id }), prop, parseInt(val));
              console.log(cartArray.find(x => { return x.item.id == id }));
              recursiveAsyncReadLine();
            });

          } else {
            if (prop in ob.item) {
              rl.question('Edit Value : ', (val) => {
                editProperty(cartArray.find(x => { return x.item.id == id }).item, prop, val);
                //cartArray[idx][select] = val;
                console.log("New data:");
                console.log(cartArray.find(x => { return x.item.id == id }));
                recursiveAsyncReadLine();
              });
            } else console.log("Error: property not found\n");
          }
        });
      });
    }
    if (select == '4') {
      rl.question('Select object in cart to delete (item id): ', (id) => {
        let idx = cartArray.findIndex(x => { return x.item.id == id });
        let ob = cartArray.splice(idx, 1);
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