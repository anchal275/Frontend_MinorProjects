let array =[]

class User{
    #password;
    constructor(student,id){
        this.student=student;
        this.id=id
    }

    signup(username,password){
        let isvalidated = false

        isvalidated = this.#validateusername(username) && this.#validatepassword(password)

        if(isvalidated){
            this.username=username;
            this.#password=password;

            console.log("User Registered Successfully")
            array.push(this)
            
        }
        else{
            console.log("Please follow Correct Id and Password Rules")
        }

    }


    login(username,password){
        if(username==this.username && password==this.#password){
            console.log("Login Successfully")
        }
        else{
            console.log("Please Enter correct Email Id and Password")
        }
    }


    #validateusername(username){
        return true
    }
    #validatepassword(password){
        return true
    }
}


class students extends User{
    constructor(student,id){


        super(student,id)
        this.noOfAssignment = 0        
    }

    submitAssignment(){
        this.noOfAssignment++
    }
}

class Admin extends User{
    constructor(student,id){
        super(student,id)

    }
    removeStudent(id){

       array = array.filter((elem)=>{
        return elem.id !== id
        })
    }

}









let s1 = new students("Anchal", 7)
console.log(s1)
s1.signup("Anchal123","zooner232")

let s2 = new students("shreyas",8)
console.log(s2)
s2.signup("shreyas", "shreyas231")
s2.submitAssignment()

let n = new Admin("Nrupul",1)
console.log(n)
n.removeStudent(8)
console.log(array)





