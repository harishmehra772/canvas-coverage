let final:[];

ngOnInit():void{
    this.getUserSnowList();
}

async getUserSnowList(){
    const group=JSON.parse(localStorage.getItem("loggedUser"))?.adGroup;
    let list=[];
    for(let row of group){
        let id=row.id;
        list.push(row);
    }
    final=list;

}


anotherFun(){
    console.log(final)
}