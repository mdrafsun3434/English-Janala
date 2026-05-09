const loadlessons =()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all") 
    .then(res=>res.json())
    .then((json)=>displayLesson(json.data));
};

const removeActive=()=>{
    const lessonButtons=document.querySelectorAll(".lesson-btn");
    lessonButtons.forEach((btn)=>btn.classList.remove("active"));

}

const loadLevelWord =(id)=>{
    const url =`https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then((json)=>{
        const clickBtn=document.getElementById(`lesson-btn-${id}`);
        // console.log(clickBtn);
        removeActive();
        clickBtn.classList.add("active");


        displayLevelWord(json.data)
    
    });
};

const displayLevelWord=(words)=>{
    const wordContainer=document.getElementById("word-container");
    wordContainer.innerHTML="";

    if(words.length===0){
         wordContainer.innerHTML=`
         <div class="text-center col-span-full rounded-xl py-10 space-y-6 font-bangla ">
         <img src="assets/alert-error.png" class="mx-auto" alt="No words available">
        <p class="text-xl font-medium text-gray-400">এই Lesson এ এখন Vocabulary যুক্ত করা হয়নি।</p>
        <h2 class="font-bold text-4xl">পরবর্তী Lesson এ যান।</h2>
 
        </div>
         
         
         
         `;
       
    }
    for(let word of words){
        const card=document.createElement("div");
        card.innerHTML=`
         <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
    <h2 class="font-bold text-xl">${word.word || 'Word not available'}</h2>
    <p class="font-semibold">Meaning / Pronunciation</p>
    <div class="text-2xl font-medium font-bangla">${word.meaning || 'Meaning not available'} / ${word.pronunciation || 'Pronunciation not available'}</div>
    <div class="flex justify-between items-center">
      <button class="btn bg-[#4f83b410]" onclick="my_modal_5.showModal()"><i class="fa-solid fa-circle-info"></i></button>
      <button class="btn bg-[#4485c210]"><i class="fa-solid fa-volume-high"></i></button>
    </div>
  </div>
   
        `;
        wordContainer.append(card);


    }


}


const displayLesson=(Lessons)=>{
    console.log(Lessons);

    const levelContainer=document.getElementById("level-container");
    levelContainer.innerHTML="";

    for(let lesson of Lessons){
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML=`
        <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn"><i class="fa-solid fa-book"></i> Lesson- ${lesson.level_no}</button>
        `;
        levelContainer.appendChild(btnDiv);
    }

};

loadlessons();