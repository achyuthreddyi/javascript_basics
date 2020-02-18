let mytodos = {
    meetings :3,
    meetdone :60,

    addmeeting: function(a){
        // this.meetings +=a;
        console.log(this)
    }
}
let mytodos1 = {
    meetings :49,
    meetdone :64,

    addmeeting: function(a){
        // this.meetings +=a;
        console.log(this)
    }
}
mytodos.addmeeting()
mytodos1.addmeeting()