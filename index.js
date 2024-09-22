// const  nkdonate = document.getElementById('nk-donate');
// const feniDonate = document.getElementById('feni-donate');
// const qoutaDonate = document.getElementById('qouat-donate');


const donateButton = document.getElementById('dn-btn');
const nkDonateWrite = document.getElementById('nk-dn').innerHTML;





//reusbale function
function getInputValueById(id) {
    return parseFloat(document.getElementById(id).value);
  }
  function getDonetMoneyById(id) {
    return parseFloat(document.getElementById(id).innerHTML);
  }

  donateButton.addEventListener('click',function(){
    const  giveDonate = getInputValueById("give-donate");
   
    
    const initalDonte = getDonetMoneyById("initial-value");
   

    const totalDonation = giveDonate + initalDonte;

        document.getElementById("initial-value").innerHTML = totalDonation;

        const amount = getDonetMoneyById("amount");

        const totalExpense = amount - giveDonate ;
        document.getElementById("amount").innerHTML = totalExpense;



        //dynamic html created for history purposes
        const historyItem = document.createElement("div");
        historyItem.className =
                 "bg-white p-5 rounded-md border space-y-2";

                 historyItem.innerHTML = `<p class = 'text-xl font-bold'>${giveDonate}  TAKA  is <span class = 'text-xl font-bold'>${nkDonateWrite} </span>
                 </p>
                  <p class="text-gray-500">Date: ${new Date().toString().replace(/GMT.*$/, "GMT+0600 (Bangladesh Standard Time)")}</p>`;
                 const historyContainer = document.getElementById("history-list");

                 historyContainer.insertBefore(historyItem, historyContainer.firstChild);





  })

  //history tab functionality
  const historyTab = document.getElementById('history-tab');
  const donateTab = document.getElementById('donate-tab');

  historyTab.addEventListener('click', function () {
     
    historyTab.classList.add('rounded-l-md',  'text-secondary', 'bg-buttonColor','btn');
    historyTab.classList.remove('text-gray-600', 'border');
    donateTab.classList.remove('btn',  'text-secondary', 'bg-buttonColor');
    donateTab.classList.add('text-gray-600','border','rounded-md');
     
    document.getElementById('donation-section').classList.add('hidden');

     document.getElementById('history-section').classList.remove('hidden');



  });
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
  



