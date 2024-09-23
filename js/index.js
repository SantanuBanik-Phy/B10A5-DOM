

//history tab functionality
const historyTab = document.getElementById('history-tab');
const donateTab = document.getElementById('donate-tab');
// donation buttons
const nkBtn = document.getElementById('nk-btn')
const feniBtn = document.getElementById('feni-btn')
const quotaBtn = document.getElementById('quota-btn')

// donation card handle qith event listener all

// noakhali
nkBtn.addEventListener('click',function(){
    
  const balance = getBalance('balance')
  const inputDonate = getInputValue('nk-donate');
  const nkBalance = getBalance('nk-value')
  const nkTitle = document.getElementById('nk-title').innerText;

  calculate(inputDonate,balance,nkBalance,'nk-value',nkTitle);

})


// feni
feniBtn.addEventListener('click',function(){
  
  const balance = getBalance('balance')
  const inputDonate = getInputValue('feni-donate');
  const feniBalance = getBalance('feni-value')
  const feniTitle = document.getElementById('feni-title').innerText;

  calculate(inputDonate,balance,feniBalance,'feni-value',feniTitle);

})


// quota
quotaBtn.addEventListener('click',function(){
  
  const balance = getBalance('balance')
  const inputDonate = getInputValue('quota-donate');
  const quotaBalance = getBalance('quota-value')
  const quotaTitle = document.getElementById('quota-title').innerText;

  calculate(inputDonate,balance,quotaBalance,'quota-value',quotaTitle);

})

// historyTab btn click handles
  historyTab.addEventListener('click', function () {
     
    historyTab.classList.add('rounded-l-md',  'text-secondary', 'bg-buttonColor','btn');
    historyTab.classList.remove('text-gray-600', 'border');
    donateTab.classList.remove('btn',  'text-secondary', 'bg-buttonColor');
    donateTab.classList.add('text-gray-600','border','rounded-md');
     
    document.getElementById('donation-section').classList.add('hidden');

     document.getElementById('history-section').classList.remove('hidden');



  });

  // donateTab btn click handles
  donateTab.addEventListener('click', function () {
    donateTab.classList.add('btn',  'text-secondary', 'bg-buttonColor');
    donateTab.classList.remove('text-gray-600');
    historyTab.classList.remove('rounded-l-md',  'text-secondary', 'bg-buttonColor','btn');
    historyTab.classList.add('text-gray-600','rounded-md','border');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('donation-section').classList.remove('hidden');
  })



  //blog html enter and back to home  
  document.getElementById('blog').addEventListener('click',function () {
    window.location.href = "blog.html";


  })
  



