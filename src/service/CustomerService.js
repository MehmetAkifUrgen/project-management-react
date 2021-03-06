const BASE_URL = 
"http://localhost:8080/customer";

export default class CustomerService{

    
    getAllCustomers = async () => {
        return fetch(BASE_URL+"/getAll",{
            headers: {
                "Accept": "application/json"
            }
        }).then( res => res.json());
    }
}