const LoadPhone= async(SearchText)=>{
    const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=${SearchText}`)
    const data =await res.json();
    const phones= data.data;
    // console.log(phones)
    DisplayPhones(phones)
    
}
const DisplayPhones =phones=>{
    const PhoneContainer = document.getElementById('phone-container')
    // Clear Phone container
    PhoneContainer.textContent='';
    const ShowAll=document.getElementById('All_phones')
    if(phones.length>12){
      ShowAll.classList.remove('hidden')

    }
    else{
      ShowAll.classList.add('hidden')
    }
    phones=phones.slice(0,12)
    
    phones.forEach(phones => {
        console.log(phones)
        const PhoneCard=document.createElement('div')
        PhoneCard.classList=`card w-96 p-8  bg-base-100 shadow-x`
        
        PhoneCard.innerHTML = `
    <div class="flex justify-center items-center"> <!-- Center the card -->
        <div class="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden"> <!-- Apply styles to the card -->
            <div class="px-4 py-2"> <!-- Add padding -->
                <figure>
                    <img src="${phones.image}" alt="${phones.phone_name}" class="w-full">
                </figure>
                <div class="mt-2"> <!-- Add margin-top -->
                    <h2 class="text-gray-800 text-lg font-semibold">${phones.phone_name
                    }</h2> <!-- Apply text styles -->
                    <p class="text-gray-600">${phones.slug
                    }</p> <!-- Apply text styles -->
                </div>
            </div>
            <div class="px-4 py-2 flex justify-end"> <!-- Align actions to the right -->
                <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Buy Now</button> <!-- Apply button styles -->
            </div>
        </div>
    </div>
`;

        PhoneContainer.appendChild(PhoneCard)
        
    });
    ToggoleSpinner(false)

}

// Search 
const handleSearch =()=>{
  ToggoleSpinner(true);
  const serachField= document.getElementById('Search-field')
  const SearchText=serachField.value;
  console.log(SearchText);
  LoadPhone(SearchText);
}
const ToggoleSpinner=(isLoading)=>{
  const loadingSpinner=document.getElementById('Show-spinner')
  if(isLoading){
    loadingSpinner.classList.remove('hidden')
  }
  else{
    loadingSpinner.classList.add('hidden')
  }
}
// LoadPhone();