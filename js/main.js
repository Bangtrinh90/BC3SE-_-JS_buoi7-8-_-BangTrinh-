//đây là mảng chính sẽ sử dụng xuyên suốt bài
var arr = [];
document.getElementById("btnThemSo").onclick = function () {
  var mangGT = document.getElementById("mangGT").value;

    //add số mới vào chuỗi đầu bài
    arr.push(Number(mangGT));

    document.getElementById("ketQuaMang").innerHTML = arr.join(", ");

    // document.getElementById("mangGT").value = "";
};

// BT1
//button tổng
document.getElementById("btnKetQua1").onclick = function () {
  //input: lấy giá trị number từ mảng arr 
  var result1 = 0;
  //xử lý
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] >= 0) {
      result1 += arr[j];
    } 
  }

  //output: trả ra result là tổng các số dương
  document.getElementById("result1").innerHTML = "Tổng số dương: " + result1;
};

// BT2
document.getElementById("btnKetQua2").addEventListener("click", function () {

//input:  duyệt mảng arr
var count2 = 0;
//progress
for (var i = 0; i < arr.length; i++) {
  if(arr[i] >= 0) {
  count2 ++;
  } 
}
//output: result2 là kết quả đếm được có bao nhiêu số dương
var result2 = "Số dương: " + count2;
document.getElementById("result2").innerHTML = result2;
})

// BT3
document.getElementById("btnKetQua3").addEventListener("click", function () {

  //input:  duyệt mảng arr
  var min3 = arr[0];
  var index3 = 0;
  //progress
  for (var i = 1; i < arr.length; i++) {
    if(arr[i] < min3) {
    min3 = arr[i];
    index3 = i;
    } 
    }
    //output: result3 là kết quả số nhỏ nhất
    var result3= "Số nhỏ nhất: " + min3;

  document.querySelector("#result3").innerHTML = result3;
  })

// BT4
document.getElementById("btnKetQua4").addEventListener("click", function () {

  //input:  duyệt mảng arr
  var min4 = arr[0];
  var index4 = 0;
  //progress
  for (var i = 1; i < arr.length; i++) {
    if(arr[i] < min4 && arr[i] > 0) {
    min4 = arr[i];
    index4 = i;
    } 
    }
    //output: result4 là kết quả số dương nhỏ nhất
    var result4= "Số dương nhỏ nhất: " + min4;

  document.querySelector("#result4").innerHTML = result4;
  })

// BT5
document.getElementById("btnKetQua5").addEventListener("click", function () {

  //input:  duyệt mảng arr
  /**Duyệt mảng arr >> có số chẵn
   * tạo mảng mới >>push các số chẵn này vào
   * lấy phần tử cuối của mảng mới
   * trả ra kết quả
   */
  var newArr5 = [];
  var newEven5 = 0;
      //progress
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) 
    {
    newArr5.push(arr[i]);
    } 
    }
  newEven5 = newArr5.pop();
    //output: result5 là kết quả số chẵn cuối cùng
  var result5= "Số chẵn cuối cùng: " + newEven5;

  document.querySelector("#result5").innerHTML = result5;
  })

// BT6
document.getElementById("btnKetQua6").addEventListener("click", function () {

	//input:  duyệt mảng arr
	//ouput: mảng newArr6 chứa phần tử được hoán vị
	//progress
	for (var i = 0; i < arr.length - 1; i++) {

		for (var j = i + 1; j < arr.length; j++) {

		  if (arr[i] > arr[j]) {
			//hoán vị
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		  }

		}
	};
	var result6= "Mảng sau khi đổi: " + arr;
  
	document.querySelector("#result6").innerHTML = result6;
	})

  // BT7
  document.getElementById("btnKetQua7").addEventListener("click", function () {

    //input: giá trị mảng arr
    //output: result7 là kết quả số chẵn cuối cùng
    //progress
        
    var result7 = arr.sort(function(a, b){return a - b});

    document.querySelector("#result7").innerHTML = "Mảng sau khi sắp xếp: " + result7;
    })

// BT8
document.getElementById("btnKetQua8").addEventListener("click", function () {

    //input: giá trị mảng arr
    //output: result8 là kết quả số nguyên tố đầu tiên
	var result8 = "";
    //progress: 
	// kiểm tra SNT >> nếu check có chia hết cho 2 hoặc căn bậc hai của số đó >> không phải là SNT
	var checkSNT = true;

	var n = 2;

	for (var i = 0; i < arr.length; i++) {

	if(n <= Math.sqrt(arr[i]) && arr[i]%n === 0) {
        checkSNT = false;
	}
	}	

	if (checkSNT = true) {
		result8 = n + "là số nguyên tố"
	} else {
		result8 = n + "không phải là số nguyên tố"
	}
	//ouput
    document.querySelector("#result8").innerHTML = result8;
    })

 
// BT9
//nhập giá trị mảng mới
var arr2 = [];
document.getElementById("btnThemSo2").onclick = function () {
  var mangGT2 = document.getElementById("mangGT2").value;

//push giá trị vào mảng mới
    arr2.push(Number(mangGT2));

    document.getElementById("showGT2").innerHTML = arr2.join(", ");
};

//tính toán
document.getElementById("btnKetQua9").addEventListener("click", function () {

 //input: giá trị mảng mới arr2
 //output: result9 là kết quả số nguyên đếm được
 //progress

	var newArr2 = [];
	for (var i = 0; i < arr2.length; i++) {
		if(Number.isInteger(Number(arr2[i]))) {
			newArr2.push(arr2[i]);
		}
	}

    document.querySelector("#result9").innerHTML = "Số nguyên: " + newArr2.length;
    })

// BT10
document.getElementById("btnKetQua10").addEventListener("click", function () {

    //input: giá trị mảng arr
    //output: result10 là kết quả  so sánh giữa số lượng số âm và số dương 
    //progress
        
    var countSoAm = 0;
	var countSoDuong = 0;

	for (var i = 0; i < arr.length; i++) {
		if(arr[i] < 0) {
		countSoAm ++;
		
		} else if (arr[i] > 0) {
		countSoDuong ++;
		}};

		if (countSoAm > countSoDuong) {
		document.querySelector("#result10").innerHTML = "Mảng sau nhiều số âm hơn";
	} else if (countSoDuong > countSoAm) {
		document.querySelector("#result10").innerHTML = "Mảng sau nhiều số dương hơn";
	} else if (countSoAm = countSoDuong) {
		document.querySelector("#result10").innerHTML = "Số lượng số âm và số dương trong mảng bằng nhau";
	}
    
    })