// // Let us look on Functions
// function Addition(x,y)
// {
//         return  x + y;
// }

// console.log(Addition(3,5))


///ES6 Functions arrow function

// const add = (x,y) =>{
//         const result = x + y;
//         return result;
// }

// let  result = add(3,400);
//  console.log(result)



// Calculation of rating

// let ratings = [5,6,3,5,7,2,5,4,6,7]


// for (let i of ratings){
//         console.log("Ratings are ",i)
//         i++
// }









// Functioning

// class guests { 
//         constructor(name,age,vip)
//         {
//                 this.name = name,
//                 this.age = age,
//                 this.vip = vip
//          }
//         }

// let firstguest = new guests("Willam Shakesphere",45,false)   

// const toggleGuestVip = (guest) => {
//         let newguest = guest;
//         newguest.vip = !newguest.vip
//         return newguest;

// }

// console.log("the guest are currently ",firstguest.vip);

// const newguest = toggleGuestVip(firstguest)
 
// newguest.name = "akash pandey"
// console.log(newguest)
// console.log(firstguest)








// class bankaccount {
//         constructor(owner,balance){
//                 this.owner = owner,
//                 this.balance = balance,
//                 this.AccountClose =false
//         }
       

//         ShowName(){
//                 console.log("Account Holder :" + this.owner );
//         }
//         Showbalance(){
//                 console.log("Current balance : " + this.balance + " Euro");
//         }
//         deposit(amount){
//                 console.log("Amount deposit : " + amount + " Euro" + " ....Amount Deposited Successfully");
//                 this.balance += amount;
//                 this.Showbalance();
//         }
//         withdraw(RemovingAmount){
//                 if(RemovingAmount>this.balance){
//                         console.log(" Withdrawl Denied ! ")
//                 }else {
//                 console.log("amount witdrawing : " + RemovingAmount + "...wait until process is completed" )
//                 this.balance -=RemovingAmount;
//                 console.log(" Congratulation You Withdrawl = " + RemovingAmount + " Successfully")
//                 this.Showbalance()
//                 console.log("thank you for TCS bank of Commmerce")
//                 }
//         }
        
// }

// let owner1 = new bankaccount("Akhilesh kadri",200000);

// owner1.ShowName()
// owner1.Showbalance()
// // owner1.deposit(50000)
// owner1.withdraw(45000)




// class show{
//         constructor(title,noofseries,rating,Averagerating){
//                 this.title = title,
//                 this.noofseries = noofseries,
//                 this.ratings = [],
//                 this.Averagerating = 0 
//         }
//         addRating(rating){
//                 this.ratings.push(rating)
//                 let sum = 0
//                 for(let rating of this.ratings){
//                         sum +=rating
//                 }
//                 this.Averagerating = sum / this.ratings.length

//         }
// }

// let movie1 = new show("Jeene nahi donga",4)
// let movie2 = new show("Marjaava",3)
// let movie3 = new show("maharja",1)


// console.log(movie1.addRating(4))






// class bepolite{
//    static  user1(){
//         console.log("hello")
//      }
//    static user2(name){
//         console.log("hello " + name + " nice to meet you !" )
//      }  
//    static add(x,y){
                
//         return x+y;
//      }
// }

// bepolite.user1()
// bepolite.user2("Akash pandey ")
// console.log(bepolite.add(3,5))





// Clean Code

// const user1 ={
//         name:"allen walker",
//         online : true,
//         accounType : "Normal"
        
// };

// const user2 ={
//         name:"warreen buffet",
//         online : true,
//         accounType : "premium"
// };

// const user3 ={
//         name:"jeff bezoz",
//         online : true,
//         accounType : "Normal"
// };

// const user4 ={
//         name:"elon musk",
//         online : true,
//         accounType: "premium"
// }


// const welcomemessageToUser = (user) => {
//      if (user.accounType == "Normal"){
//         console.log("hello " + user.name);
//      }else{
//         console.log("hello " + user.name + " you have premium account")
//      }
// }

// welcomemessageToUser(user1)
// welcomemessageToUser(user2)
// welcomemessageToUser(user3)
// welcomemessageToUser(user4)


//Extra code we shoted as Above

// if(user1.online){
//         if(user1.accounType == "Normal"){
//                 console.log("hello " + user1.name);
//         }else{
//                 console.log("hello " + user1.name + " you have premium account")
//         }

// }

// if(user2.online){
//         if(user2.accounType == "Normal"){
//                 console.log("hello " + user2.name);
//         }else{
//                 console.log("hello " + user2.name + " you have premium account")
//         }

// }

// if(user3.online){
//         if(user3.accounType == "Normal"){
//                 console.log("hello " + user3.name);
//         }else{
//                 console.log("hello " + user3.name + " you have premium account")
//         }

// }

// if(user4.online){
//         if(user4.accounType == "Normal"){
//                 console.log("hello " + user4.name);
//         }else{
//                 console.log("hello " + user4.name + " you have premium account")
//         }

// }


// const stringcount = (stringtotext) => {
//         const wordArray = stringtotext.split(" ")
//         console.log(" Word Count is below ")
//         console.log(wordArray)
//        return wordArray.length

// }

// stringcount("hello i am Akash pandey")


class Book {
        constructor(title,author,description,pages){
        this.title = title,
        this.author = author,
        this.description = description,
        this.pages = pages,
        this.read=false


        }
        readBook(currentpage){
                if(1>currentpage || currentpage>this.pages){
                        console.log("Book name : " + this.title + " By  : " + this.author)
                        return 0

                }else if(this.pages>currentpage>=1){
                      console.log("Book name : " + this.title +  " By  : " + this.author)
                      console.log("You can Continue reading" );
                      console.log("Total pages : ", + this.pages)
                      this.pages -= currentpage
                      console.log("you are on current Page : " + this.pages)
                      return 1
                }else{
                        console.log("Book name : " + this.title +  " By  : " + this.author)
                        console.log("You have readed this book")
                        this.read = true
                        return 1
                }


        }
}

let book1 = new Book("tare zamin par","Sanjay rawat","This is Book is one of the most famous Book",350)
let book2 = new Book("Life time Achivement","Ravi shashtri","This is Book based on the Achivement of ravi shastri",256)
let book3 = new Book("Night Glowries","cristino ronaldo","This is bases ob the lifestory of the golden age footballer cristano Ronaldo",700)

let Books = []

Books.push(book1,book2,book3)
console.log(book3.readBook(267))

