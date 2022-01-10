window.onload = () => {
  useSlider();
  toggleBillingPeriod();
  output.innerHTML = "$" + 0 + ".00";
  pageviews.innerHTML
};

// If the visitor switches the toggle to yearly billing,
// a 25 % discount should be applied to all prices.

function toggleBillingPeriod() {
  switcher.addEventListener("click", (e) => {
    if (e.target.checked) {
      //  userOption = "yearly";
      // Apply the discount to all prices if the user selects yearly billing
      yearlyDiscountPrice = pricePerMonth - pricePerMonth * discount;
      output.innerHTML = "$" + yearlyDiscountPrice + ".00";
    } else {
      //  userOption = "monthly";
      // Return the price to the default value if the user switches to monthly billing
      output.innerHTML = "$" + pricePerMonth + ".00";
    }
  });
}

// guildes for billing period, monthly or yearly,discount, price per month, page views

// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month
// - yearly discount of 25%

let switcher = document.querySelector(".switcher")
const slider = document.getElementById("myRange");
const output = document.getElementById("amount");
const pageviews = document.getElementById("page-views");
const discount = 0.25;

// let userOption = "";
let pageViews = "";
let pricePerMonth = "";

function useSlider() {
  slider.onchange = function (e) {
    if (this.value == 20 || this.value <= 20) {
      pricePerMonth = 8;
      pageViews = 10;
      output.innerHTML = "$" + pricePerMonth + ".00";
      pageviews.innerHTML = pageViews + "K";
    } else if (this.value == 40 || this.value <= 40) {
      pricePerMonth = 12;
      pageViews = 50;
      output.innerHTML = "$" + pricePerMonth    + ".00";
      pageviews.innerHTML = pageViews + "K";
    } else if (this.value == 60 || this.value <= 60) {
      pricePerMonth = 16;
      pageViews = 100;
      output.innerHTML = "$" + pricePerMonth    ;
      pageviews.innerHTML = pageViews + "K";
    } else if (this.value == 80 || this.value <= 80) {
      pricePerMonth = 24;
      pageViews = 500;
      output.innerHTML = "$" + pricePerMonth + ".00"   ;
      pageviews.innerHTML = pageViews + "K";
    } else if (this.value == 100 || this.value <= 100) {
      pricePerMonth = 36;
      pageViews = 1 + "M";
      output.innerHTML = "$" + pricePerMonth + ".00";
      pageviews.innerHTML = pageViews;
    }
    // Return the toggle to default value whennever slider is moved
    // defaultValue is monthly billing = false
    // second condition is yearly billing = true
    switcher.checked = false;
  };
}


//var slider = document.getElementById("myRange");
//var output = document.getElementById("demo");
//output.innerHTML = slider.value;
//
//slider.oninput = function () {
//  output.innerHTML = this.value;
//};


const range = document.querySelector('.range')
const thumb = document.querySelector('.thumb')
const track = document.querySelector('.track-inner')

const updateSlider = (value) => {
  thumb.style.left = `${value}%`
  thumb.style.transform = `translate(-${value}%, -50%)`
  track.style.width = `${value}%`
}

range.oninput = (e) =>
  updateSlider(e.target.value)

updateSlider(50) // Init value