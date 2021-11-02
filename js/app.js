var pages=["Grade View", "Add Grade"];
var list=[];
function create_nav(){
    document.body.innerHTML=""
    var nav=document.createElement("nav")
    create_button(pages[0]);
    create_button(pages[1]);
    nav.style.backgroundColor="red";
    nav.style.lineHeight="60px";
    nav.style.height="60px";
    nav.style.display="flex";
    nav.style.justifyContent="center";
    nav.style.alignItems="center";

    document.body.appendChild(nav);

    function create_button(pg){
        var button=document.createElement("button")
        button.style.height="20px"
        button.innerHTML=pg;
        button.addEventListener("click", function (){
            navigate(pg);
        })
        nav.appendChild(button);
    }
}
function create_wrapper(){
    var wrapper=document.createElement("wrapper");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);
}
function navigate(pg){
    if(pg==="Grade View"){
        view_page()
    }else if(pg==="Add Grade"){
        add_page()
    }else if(pg==="login"){
        login()
    }
}
function login(){
    var user=document.createElement("input");
    user.classList.add("user");
    user.placeholder="username";
    var pass=document.createElement("input")
    pass.classList.add("pass");
    pass.placeholder=("password");
    pass.type="password"
    var submit=document.createElement("button")
    submit.classList.add("submit")
    submit.innerHTML="Submit"
    var answer=document.createElement("div")
    submit.addEventListener("click", function (){
        var username=document.body.querySelector(".user").value;
        var password=document.body.querySelector(".pass").value;
        if(username!=="cool"&&password!=="password"){
            answer.innerHTML="Both your username and password are incorrect. Please try again."
        }else if (username!=="cool"){
            answer.innerHTML="Your username is incorrect. Please try again."
        }else if (password!=="password"){
            answer.innerHTML="Your password is incorrect. Please try again."
        }else{
            create_nav()
            create_wrapper()
            navigate("Grade View")
        }
    })
    document.body.appendChild(user);
    document.body.appendChild(pass);
    document.body.appendChild(submit);
    document.body.appendChild(answer);
}
function view_page() {
    var wrapper = document.body.querySelector(".wrapper")
    wrapper.innerHTML = "";
    var header=document.createElement("h1")
    header.innerHTML="View Grades";
    var note_list=document.createElement("div")
    note_list.classList.add("note_list")
    render_list()
    function render_list(){
        note_list.innerHTML=""
        for (var i=0; i<list.length; i++){
            var note=document.createElement("div")
            note.innerHTML=list[i];
            note_list.appendChild(note)
        }
    }
    wrapper.appendChild(header);
    wrapper.appendChild(note_list);
}
function add_page() {
    var wrapper = document.body.querySelector(".wrapper")
    wrapper.innerHTML = "";
    var header=document.createElement("h1")
    header.innerHTML="Add Grade";
    var single_note=document.createElement("input");
    single_note.classList.add("one_note");
    single_note.placeholder="Student Name";
    var importance=document.createElement("input");
    importance.classList.add("import");
    importance.placeholder="Grade (0-100)";
    var note=document.createElement("button")
    note.classList.add("note")
    note.innerHTML="Submit Grade"
    var response=document.createElement("div")
    response.classList.add("response")
    note.addEventListener("click", function () {
        var note = document.body.querySelector(".one_note").value;
        var importance = document.body.querySelector(".import").value;
        if (isNaN(parseInt(importance))){
            response.innerHTML="Grades must be listed as a number"
        }else {
            parseInt(importance)
            if(importance<=100&&importance>=0) {
                list.push(`Student Name: ${note} Grade: ${importance}%`);
                navigate("Grade View");
            }else{
                response.innerHTML="Grades must be between 0% and 100%, no extra credit in this hizouse."
            }
        }
    })
    wrapper.appendChild(header);
    wrapper.appendChild(single_note);
    wrapper.appendChild(importance);
    wrapper.appendChild(note);
    wrapper.appendChild(response)

}
navigate("login")