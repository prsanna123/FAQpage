let a=[{
    "myid":1,"question":"1what is full form of html",
    "answer":"Hyper text markup language"
    },{
        "myid":2,"question":"2what is full form of html",
        "answer":"Hyper text markup language"
        },{
            "myid":3,"question":"3what is full form of html",
            "answer":"Hyper text markup language"
            }]
let ans="";
a.map((ques)=>{



    // document.getElementById("q"+ques.myid).innerHTML=ques.question;
    // document.getElementById("a"+ques.myid).innerHTML=ques.answer;
    ans=ans+`
    <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button id="q${ques.myid}" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne${ques.myid}" aria-expanded="true" aria-controls="collapseOne">
              ${ques.question}
            </button>
            </h2>
            <div id="collapseOne${ques.myid}" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div id="a${ques.myid}" class="accordion-body">
                    ${ques.answer}
                </div>
            </div>
        </div>
        `
    
})

document.getElementById("accordionExample").innerHTML=ans