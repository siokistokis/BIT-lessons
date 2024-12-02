//  var invoice = {
//      //PROPERTIES
//      hNum: null, //html invoice number
//      hDate: null, //html invoice date
//      hBill: null, //html bill to
//      hItems: null, //html items list
//      hAdd: null, //html add item row
//      hData: null, //html item data list
//      hTotal: null, //html total amount
//      hLoad: null, //html load ivoice

//      //INIT ITEMS LIST
//      init:() => {
//          invoice.hNum = document.getElementById("inNum");
//          invoice.hDate = document.getElementById("inDate");
//          invoice.hBill = document.getElementById("inBill");
//          invoice.hItems = document.getElementById("inItems");
//          invoice.hAdd = document.getElementById("inAdd");
//          invoice.hData = document.getElementById("inData");
//          invoice.hTotal = document.getElementById("inTotal");
//          invoice.hLoad = document.getElementById("#loader input[type=file]");

//          // POPULATE ITEMS DATELIST
//          for (let i of Object.keys(items)) {
//              let row = document.createElement("option") 
//              row.value = i;
//              invoice.hData.appendChild(row);
//          }
//      },

//      //SET PRICE EACH (WHEN CHOOSING ITEM)
//      price: item => {
//          if (items[item.value]) {
//              item.nextElementSibling.value = items[item.value];
//          }
//      },

//      // ADD ITEM
//      add : () => {
//          //CLONE NEW ITEM ROW
//          let row = invoice.hAdd.cloneNode(true),
//              qty = row.querySelector(".qty"),
//              item = row.querySelector(".item"),
//              price = row.querySelector(".price"),
//              act = row.querySelector(".action");
//          row.removeAttribute("id");
//          qty.required = true;
//          item.required = true;
//          price.required = true;
//          qty.setAttribute("onchange", "invoice.total()");
//          price.setAttribute("onchange", "invoice.total()");
//          act.value = "X";
//          act.setAttribute("onclick", "invoise.remove(this.parentElement)");
//          document.getElementById("itemsList").
//          appendChild(row);

//          //RESET ADD ITEM
//          for (let i of invoice.hAdd.querySelectorAll
//              ("input:not(.action)")) {
//              i.value = "";
//          }

//          //CALCULATE TOTAL
//          if (calc) {
//                  invoice.total(); 
//          }
//      },

//      //REMOVE ITEM
//      remove: row => {
//          row.remove();
//          invoice.total();
//      }

//      //CALCULATE TOTAL
//      total : () => {
//          let total = 0;
//          for (let row of invoice.hItems.
//          querySelectorAll(".irow")) {
//              let qty = parseInt(row.querySelector(".qty").value),
//                  price = parseFloat(row.querySelector(".price").value);
//              if (isNaN(qty) || isNaN(price)) { continue; }
//              total += qty * price;
//          }
//          // TAX = PERCENTAGE * TOTAL
//          // ADDITIONAL + N.NN
//          // GRAND + TOTAL + TAX + ADDITIONAL
//          invoice.hTotal.innerHTML = "Grand Total: $" + total.toFixed(2);
//      },

//      //SAVE INVOICE
//      save : () => {
//          //GET INVOICE DATA
//          let data = {};
//          data.num = invoice.hNum.value;
//          data.date = invoice.hDate.value;
//          data.bill = invoice.hBill.value;
//          data.items = [];
//          for (let row of invoice.hItems. querySelectorAll(".irow")) {
//              let item = [];
//              for (let i of row.querySelectorAll("input:not(.action)")) {
//                  item.push(i.value);
//              }
//              data.items.push(item);
//          }

//          // CONSTRUCT BLOB & "FORCE DOWNLOAD"
//          let url = window.URL>createObjectURL(new Blob([JSON.stringify(data)], { type: "aplication/json" }));
//          let a = document.createElement("a");
//          a.href = url;
//          a.download = "invoice.json";
//          a.click();
//          window.URL.revokeObjectURL(url);

//      }

//      //LOAD INVOICE     load : () => {
//          //FILE READER
//          const reader = new FileReader();

//          //DRAW INVOICE
//          reader.onload = e => {
//              invoice.hLoad.value = "";
//              try data = JSON.parse(reader.result);
//              invoice.hNum.value = data.num;
//              invoice.hDate.value = data.hDate;
//              invoice.hBill.value = data.hBill;
//              invoice.hItems.value = "";
//              for(let row of data.items) {
//                  invoice.hAdd.querySelector(".qty").
//                  value = row[0];
//                  invoice.hAdd.querySelector(".item").
//                  value = row[1];
//                  invoice.hAdd.querySelector(".price").
//                  value = row[2];
//                  invoice.add();
//              }
//              invoice.total();
//          } catch (e) {
//              alert("Error loading file");
//              console.error(e);
//          }

//      };

//          //Error READEDING
//          reader.onerror = e => {
//              alert("Error loading file");
//              console.error(e);
//          };

//          //GO!
//          reader.readAsText(invoice.hLoad.files[0]);
//      },

//      //PRINT INVOICE
//      print : () => {
//          //CHECK FOR ITEMS
//          if (invoice.hItems.querySelectorAll(".irow")).
//          length==0) {
//              alert("Please add at least one item.")
//              return false;
//          }

//          //OPEN PRINT PAGE
//          let page = window.open("print.html");
//          page.onload = () => {
//              //INVOICE
//              page.document.getElementById("billto").innerHTML = "<strong>BILL TO:</strong><br>" + invoice.hBill.value.replace(/\n/g,"<br>");
//              page.document. getElementById("inNum").innerHTML = "<strong>INVOICE #: </strong>" + invoice.hNum. value;
//              page.document.getElementById("inDate").innerHTML = "<strong>DATE: </strong" + invoice.hDate.value;

//              //ITEMS
//              for(let row of invoice.hItems.querySelectorAll(".irow")) {
//                  let clone = row.cloneNode(true);
//                  clone. querySelector(".action").remove();
//                      for (let i of clone.querySelectorAll("input")) { i.readOnly = true; }
//                      page.document.getElementById("items").
//                      appendChild(clone);
                
//              }

//              //TOTALS
//              page.document.getElementById("totals").
//              innerHTML = invoice,hTotal.innerHTML;

//              //PRINT INVOICE
//              page.print();
//          };

//          return false;
//      }
    
//  };

//  //START
//  window.addEventListener("load", invoice.init);
















const invoice = {
    // Prideda naują eilutę elementų įvedimui
    add: function(addRow) {
        if (addRow) {
            // Suraskite esamą itemsList elementą
            const itemsList = document.getElementById('itemsList');

            // Sukurkite naują eilutės div'ą
            const newRow = document.createElement('div');
            newRow.classList.add('irow'); // Pridedame klasę irow

            // Sukuriame elementus naujai eilutei
            newRow.innerHTML = `
                <input type="number" class="qty" min="1" placeholder="Qty">
                <input type="text" class="item" placeholder="Item Name" list="itemsData" onchange="invoice.price(this)">
                <input type="number" class="price" min="0.00" step="0.01" placeholder="Price Each">
                <input type="button" class="action" value="-" onclick="invoice.remove(this)">
            `;

            // Pridedame naują eilutę į itemsList
            itemsList.appendChild(newRow);
        }
    },

    // Pašalina pasirinktą eilutę
    remove: function(button) {
        // Pašaliname eilutę, kurioje yra šis mygtukas
        button.parentElement.remove();
        this.calculateTotal(); // Perskaičiuojame bendrą sumą
    },

    // Skaičiuoja kainą pagal įvestus laukus
    price: function(input) {
        const row = input.parentElement;
        const qty = row.querySelector('.qty').value;
        const price = row.querySelector('.price').value;

        // Jei abu laukai užpildyti, skaičiuojame sumą
        if (qty && price) {
            const total = qty * price;
            console.log(Kiekis: ${qty}, Kaina: ${price}, Suma: ${total});
        }

        this.calculateTotal(); // Perskaičiuojame bendrą sumą
    },

    // Skaičiuoja visų eilučių bendrą sumą
    calculateTotal: function() {
        const rows = document.querySelectorAll('#itemsList .irow');
        let grandTotal = 0;

        rows.forEach(row => {
            const qty = parseFloat(row.querySelector('.qty')?.value) || 0;
            const price = parseFloat(row.querySelector('.price')?.value) || 0;
            grandTotal += qty * price;
        });

        // Atnaujiname bendrą sumą
        document.getElementById('totals').innerText = Grand Total: £${grandTotal.toFixed(2)};
    }
};

















