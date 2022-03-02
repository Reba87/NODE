class profess{

    // Declarando constructor y sus atributos //
    constructor (name, age, weight, height, hairColor, eyeColor,isRetired,
                 nationality, oscarNumber)
                 { 
                     this.name = name;
                     this.age = age;
                     this.weight = weight;
                     this.height = height;
                     this.hairColor = hairColor;
                     this.eyeColor = eyeColor;
                     this. isRetired = isRetired;
                     this.nationality = nationality;
                     this.oscarNumber = oscarNumber;
                    
                 }
}


function getUser(){
    
    let url = "http://localhost:8000/profesionales";
    
    let param ={
        headers: {"Content-type": "application/json; charset=utf-8"},
        method: "GET"
    }

    let captureId =document.getElementById("getId").value
    
    if(captureId != "") { 
        url = url + `/${captureId}`
    }

    console.log(url)
   
    fetch(url,param)
    .then(function(data)
    {
        return data.json()
    })
    .then(function(result) {
        console.log(result);
         
        if (!result.error) {

            let mostrar = document.getElementById("tabla");
            mostrar.innerHTML = `<tr>
                                  <th>NOMBRE</th>
                                  <th>EDAD</th>
                                  <th>PESO</th>
                                  <th>ALTURA</th>
                                  <th>COLOR PELO</th>
                                  <th>COLOR OJOS</th>
                                  <th>ESTA RETIRADO</th>
                                  <th>NACIONALIDAD</th>
                                  <th>NUMERO DE OSCAR</th>
                                </tr>`
            for (let profession of result) 
            {
              mostrar.innerHTML +=`<tr>
                                <td>${profession.name}</td>
                                <td>${profession.age}</td>
                                <td>${profession.weight}</td>
                                <td>${profession.height}</td>
                                <td>${profession.hairColor}</td>
                                <td>${profession.eyeColor}</td>
                                <td>${profession.isRetired}</td>
                                <td>${profession.nationality}</td>
                                <td>${profession.oscarNumber}</td>
                               </tr>`
            }

       }
       else
       showToast("El Profesional no existe", "bg-danger")
    }) 

   .catch(function(error){
       console.log(error)
   })
  
}   
    

function postUser()
{
    let profesional = new profess (
        document.getElementById("name").value,
        document.getElementById("age").value,
        document.getElementById("weight").value,
        document.getElementById("height").value,
        document.getElementById("hairColor").value,
        document.getElementById("eyeColor").value,        
        document.getElementById("isRetired").value,
        document.getElementById("nationality").value,
        document.getElementById("oscarNumber").value
    );
    const url = "http://localhost:8000/profesionales";
    console.log(JSON.stringify(profesional))

    let param =
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        body: JSON.stringify(profesional),
        method: "POST"
    }


    
    fetch(url,param)
        .then(function(data){
            return data.json()
        })
        .then(function(result)
        {
            if(result.error)
            showToast("ERROR: " + result.message, "bg-danger");
            else
            showToast("Usuario creado correctamente", "bg-success");
            console.log(result);
        })
        .catch(function(error)
        {
            console.log(error)
        })
}

function putUser()
{   
    
    let profesional = new profess(
        document.getElementById("name").value,
        document.getElementById("age").value,
        document.getElementById("weight").value,
        document.getElementById("height").value,
        document.getElementById("hairColor").value,
        document.getElementById("eyeColor").value,        
        document.getElementById("isRetired").value,
        document.getElementById("nationality").value,
        document.getElementById("oscarNumber").value
    );
    let captureId = document.getElementById("mostrarId").value 
    let url = `http://localhost:8000/profesionales/${captureId}`;
    console.log(JSON.stringify(profesional))

    let param =
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        body: JSON.stringify(profesional),
        method: "PUT"
    }

   
    if(captureId != "") { 
        console.log(url)

    fetch(url,param)
        .then(function(data){
            return data.json()
        })
        .then(function(result)
        {
            if(result.error)
            showToast("ERROR: " + result.message, "bg-danger");
            else
            showToast("Usuario modificado correctamente", "bg-success");
            console.log(result);
        })
        .catch(function(error)
        {
            console.log(error)
        })
    } else showToast("Indique un ID valido", "bg-danger")
    
    
}

function deleteUser()
{
    
    let captureId = document.getElementById("mostrarId").value 
    let url = `http://localhost:8000/profesionales/${captureId}`;
    
    let param =
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        
        method: "DELETE"
    }

   
    if(captureId != "") { 
        console.log(url)

    fetch(url,param)
        .then(function(data){
            return data.json()
        })
        .then(function(result)
        {
            if(result.error)
            showToast("ERROR: " + result.message, "bg-danger");
            else
            showToast("Usuario ELIMINADO correctamente", "bg-success");
            console.log(result);
        })
        .catch(function(error)
        {
            console.log(error)
        })
    } else if (captureId == "") {showToast("Indique un ID valido", "bg-danger")}
    
    
}
   



















function showToast(message, color)
{
    document.getElementById("toastText").innerText=message;
    let toastElement  = document.getElementById('toast')
    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;
    console.log(toastElement);
    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}