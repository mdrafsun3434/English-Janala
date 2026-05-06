const loadlessons =()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all") 
    .then(res=>res.json())
    .then((json)=>displayLesson(json.data));
}
const displayLesson=(Lessons)=>{
    console.log(Lessons);

    const levelContainer=document.getElementById("level-container");
    levelContainer.innerHTML="";

    for(let lesson of Lessons){
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML=`
        <button class="btn btn-outline btn-primary"><i class="fa-solid fa-book"></i> Lesson- ${lesson.level_no}</button>
        `;
        levelContainer.appendChild(btnDiv);
    }

};

loadlessons();