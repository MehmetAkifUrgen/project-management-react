export default class Customer {
    constructor(cus = {
        id : "",
        fullname : "",
        mail: "",
        phone : ""
    }) {
        this.id = cus.id;
        this.fullname = cus.fullname;
        this.phone = cus.phone;
        this.mail = cus.mail;
    }
};