

// const Firstuser = {
//     name : "Akash Pandey",
//     age : 23 ,
//     AccountType : "Normal"

// }

// const Seconduser = {
//     name : " Allen Walker",
//     age : 25,
//     AccountType : "Premium"

// }

// const Thirduser = {
//     name : "watter ban",
//     age : 34,
//     AccountType : "Megapremium"
// }







// switch(Firstuser.AccountType)
//    {
//     case "Normal" :
//      console.log("This is normal Account");
//      break;
//     case "Premium":
//      console.log("This is Premium Account")  ;
//      break ;
//     case "megapremium" :
//      console.log("This is Megapremium Account");
//      break;
//     default :
//      console.log("Not defined");
//     }








// let x = 11

// for (let i=1;i<x;i++){
//     console.log("passenger :",i);
// }
//  console.log("All Passengers borded")








// class Movies {
//     constructor(Title,duration,minuteswatched) {
//         this.Title = Title,
//         this.duration = duration,
//         this.minuteswatched = minuteswatched

//        if (minuteswatched==0){
//          this.watchedtext = " Not Yet Watched "
//          this.continuewatching = false
//        }else if(minuteswatched>0 && minuteswatched<duration){
//         this.watchedtext = "watching"
//         this.continuewatching = true
//        }else{
//         this.watchedtext ="watched"
//         this.continuewatching = false       
//        }
//     }
// }
 
// let Movie1 = new Movies("Shershahan",3,3)
// let Movie2 = new Movies("Three idiots",4.5,3)
// let Movie3 = new Movies("bahubali",5,0)
// let Movie4 = new Movies("jeene nahi doonga",4,3)

// let m = []

// m.push(Movie1,Movie2,Movie3,Movie4)

// // console.log(m)






// for(let M of m){
//     M.continuewatching = true
// }








// let seatsLeft = 10
// let passengerstillBoard = 10
// let passengerborded = 0

// while(seatsLeft>0 && passengerstillBoard >0){
//  passengerborded ++;
//  passengerstillBoard --;
//  seatsLeft --;
// }

// console.log(passengerborded + " " + "Passengers Succesfully Borded")








// const user1 = {
//     name : "Willan Shakespere",
//     age : 23,
//     collage : "UniversalCollege of Engineering",

// }

// const user2 = {
//     name : "Anil Ambani ",
//     age :34,

// }

// try {
//     console.log(user2.name + user2.collage)
// }catch (error){
//    alert('N data found')
//    console.log("Error")
// }






// let vipStatus = '';

// let guest = {
//     name: 'Sarah Kate',
//     age: 21,
//     ticket: true,
//     guestType: 'artist'
// };

// switch (guest.guestType) {
//     case 'artist':
//         vipStatus = 'Normal';
        
//     case 'star':
//         vipStatus = 'Important';
//         break;
//     case 'presidential':
//         vipStatus = 'Mega-important';
//         break;
//     default:
//         vipStatus = 'None';
// }

// console.log(vipStatus)







// let guestsSeated = 5;

// let seatsRemaining = 10;
// let guestsRemaining = 7;

// while (seatsRemaining > 0 && guestsRemaining > 0) {
//     guestsSeated++;
//     seatsRemaining--;
//     guestsRemaining--;
// }

// console.log(guestsSeated,seatsRemaining ,guestsRemaining)


// import { ratings } from "./main";

// const Averageratings = (ratings) =>{
//     sum = 0
//     for(let rating of ratings){
//        sum += rating
//     }
//     const Average =  sum/ratings.length
//     return Average
// }

// console.log(Averageratings(5))




