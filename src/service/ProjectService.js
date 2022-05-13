const BASE_URL =
"http://localhost:8080/project";

export default class EmployeeService{
   


    addProject = async (pro) => {
        return fetch(BASE_URL+'/addProject',{
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pro)
        }).then(response => response.json())
    }
}