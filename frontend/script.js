document.getElementById("contactForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const data = {

        name:"Mahadev",
        email:"mahadev@gmail.com",
        message:"Hello"

    };

    const response = await fetch(
        "http://localhost:5000/contact",
        {
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(data)
        }
    );

    const result = await response.text();

    alert(result);

});