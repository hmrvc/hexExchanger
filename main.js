//找出節點
const RInput = document.querySelector(".r-input")
const GInput = document.querySelector(".g-input")
const BInput = document.querySelector(".b-input")
const ConvertBtn = document.querySelector(".btn")
const HexInput = document.querySelector(".hex-input")
const HexColor = document.querySelector(".hex-color")

//位元轉換
function toHex() {
  let rValue = Number(RInput.value).toString(16);
  let gValue = Number(GInput.value).toString(16);
  let bValue = Number(BInput.value).toString(16);
  const hexcode = `#${rValue.padStart(2, "0")}${gValue.padStart(
    2,
    "0"
  )}${bValue.padStart(2, "0")}`;
  return (HexInput.value = hexcode);
}

//改變格子色彩
function background() {
  return (HexColor.style["background-color"] = HexInput.value);
}


//按鈕監聽
ConvertBtn.addEventListener("click", function ( ) {
  const inputs = [RInput.value, GInput.value, BInput.value]
  // console.log(Inputs)
  for (let input of inputs) {
    let numb = Number(input)
    if (input.length == 0) {
      alert("不可留白")
      return
    }
    if (isNaN(numb)) {
      alert("請輸入數字")
      return
    }
    if (numb < 0 || numb > 255) {
      alert("請輸入0-255的數字")
      return
    }
  }
  toHex()
  background() 
 })