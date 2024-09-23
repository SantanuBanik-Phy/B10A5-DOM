function getInputValue(id){
    return parseFloat(document.getElementById(id).value);
}

function getBalance(id){
    return parseFloat(document.getElementById(id).innerText);
}


function calculate(inputDonate,balance,locationBalance,id,areaTitle){

    //validation
    if(inputDonate < 1 || isNaN(inputDonate)){
        alert('Donation Amount Invalid!  Please enter a valid Amount')
    }else if(balance < inputDonate){
        
        alert("You Don't Have Enough Balance!")
    }else{
        my_modal_1.showModal();
        document.getElementById(id).innerText = (locationBalance + inputDonate).toFixed(2);
        document.getElementById('balance').innerText = (balance - inputDonate).toFixed(2);
        history(inputDonate,areaTitle);
    }
}
function history(inputDonate,areaTitle){

     //dynamic html created for history purposes
     const historyItem = document.createElement("div");
     historyItem.className =
              "bg-white p-5 rounded-md border space-y-2";

              historyItem.innerHTML = `<p class = 'text-xl font-bold'>${inputDonate}  TAKA  is <span class = 'text-xl font-bold'>${areaTitle} </span>
              </p>
               <p class="text-gray-500">Date: ${new Date().toString().replace(/GMT.*$/, "GMT+0600 (Bangladesh Standard Time)")}</p>`;
              const historyContainer = document.getElementById("history-list");

              historyContainer.insertBefore(historyItem, historyContainer.firstChild);

}

