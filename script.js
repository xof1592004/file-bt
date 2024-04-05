let cartItems = [];
let cartTotal = 0;

function addToCart(productName, price) {
  // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
  let existingItem = cartItems.find(item => item.name === productName);
  
  if (existingItem) {
    existingItem.quantity++; // Tăng số lượng
  } else {
    cartItems.push({ name: productName, price: price, quantity: 1 });
  }

  cartTotal += price;
  updateCart();
}

function removeFromCart(productName, price) {
  let existingItem = cartItems.find(item => item.name === productName);

  if (existingItem) {
    existingItem.quantity--;
    cartTotal -= price;

    // Nếu số lượng giảm xuống 0, loại bỏ sản phẩm khỏi giỏ hàng
    if (existingItem.quantity === 0) {
      cartItems = cartItems.filter(item => item.name !== productName);
    }
  }

  updateCart();
}

function updateCart() {
  let cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";
  cartItems.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.name} x ${item.quantity} - $${item.price * item.quantity}`;
    
    // Tạo nút xóa sản phẩm và gắn sự kiện click
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = function() {
      removeFromCart(item.name, item.price);
    };

    li.appendChild(removeBtn);
    cartList.appendChild(li);
  });
  document.getElementById("cart-total").textContent = cartTotal;
}



function showSuccessMessage() {
          let successMsg = document.getElementById("success-message");
          successMsg.classList.remove("hidden");
          successMsg.style.display = "block"; // Hiển thị nội dung khi cần
        }
function resetCart() {
          cartItems = [];
          cartTotal = 0;
          updateCart(); // Cập nhật lại giỏ hàng để hiển thị rỗng
        }

function resetPage() {
          // Xóa các sản phẩm trong giỏ hàng và cập nhật tổng tiền
          cartItems = [];
          cartTotal = 0;
          updateCart();
        
          // Ẩn thông báo thành công
          let successMsg = document.getElementById("success-message");
          successMsg.classList.add("hidden");
        
          // Xóa các sản phẩm đã được thêm vào giỏ hàng trên trang HTML
          let cartList = document.getElementById("cart-items");
          cartList.innerHTML = "";
        }
function checkout() {
          // Here you can implement payment processing logic
          // For simplicity, we will just display a success message
          resetPage();
          resetCart();
          showSuccessMessage();
        }       
