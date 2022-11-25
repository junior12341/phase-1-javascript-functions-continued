function saturdayFun(activity){
    if (activity === "bathe my dog!"){
        return "This Saturday, I want to bathe my dog!"
    }else{
        return "This Saturday, I want to roller-skate!"
    }
}

const mondayWork = function(location){
    if (location === "work from home"){
        return "This Monday, I will work from home."
    }else {
        return "This Monday, I will go to the office."
    }

}

function wrapAdjective(init){
   let text1 = "You are"
   const text2 = "!"
   return function A(){
    const textvar = "a hard worker"
    const textvar2 = "a dedicated programmer"
    if (init === "*"){
        console.log(`${text1} ${wrapAdjective(init)(textvar)} $(text2)`)
    }
   }




}