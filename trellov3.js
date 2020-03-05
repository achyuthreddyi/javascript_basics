mytodos = {
    day : 'Monday',
    meetings:0,
    meetingsdone:0,

    addmeeting:function(num){
        this.meetings = this.meetings +num
    }
}
mytodos.addmeeting(3)
console.log(mytodos.addmeeting())
console.log(mytodos) 
console.log(mytodos.day)