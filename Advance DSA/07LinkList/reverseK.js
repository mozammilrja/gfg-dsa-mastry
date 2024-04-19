// Recursive

// class Node {        
//     constructor() { 
//         this.data; 
//         this.next = null;
//     }              
                   
//     setter(x) {    
//         this.data=x;
//     }              
// }                  

// function printlist(head){
//     let curr = head;
//     let string = "";
//     do{
//         string += curr.data + " ";
//         curr=curr.next;
//     }while(curr!==null);
//     return string;
// }

// function reverseK(head, k){
//     let curr=head, prevFirst=null;
//     let isFirstPass=true;
//     while(curr!==null){
//         let first=curr, prev=null;
//         let count=0;
//         while(curr!==null&&count<k){
//         let next=curr.next;
//         curr.next=prev;
//         prev=curr;
//         curr=next;
//         count++;
//         }
//         if(isFirstPass){head=prev;isFirstPass=false;}
//         else{prevFirst.next=prev;}
//         prevFirst=first;
//     }
//     return head;
// }


// let head = new Node();
// head.setter(10);
// let temp1=new Node();
// temp1.setter(20);
// let temp2=new Node();
// temp2.setter(30);
// let temp3 = new Node();
// temp3.setter(40);
// let temp4 = new Node();
// temp4.setter(40);
// let temp5 = new Node();
// temp5.setter(50);
// let temp6 = new Node();
// temp6.setter(60);
// let temp7 = new Node();
// temp7.setter(70);
// head.next=temp1;
// temp1.next=temp2;
// temp2.next=temp3;
// temp3.next=temp4;
// temp4.next=temp5;
// temp5.next=temp6;
// temp6.next=temp7;
// temp7.next= null;
// head=reverseK(head, 3);
// console.log(printlist(head));


// Naive solution

class Node {        
    constructor() { 
        this.data; 
        this.next = null;
    }              
                   
    setter(x) {    
        this.data=x;
    }              
}                  

function printlist(head){
    let curr = head;
    let string = "";
    do{
        string += curr.data + " ";
        curr=curr.next;
    }while(curr!==null);
    return string;
}

function reverseK(head, k){
    let curr=head, prevFirst=null;
    let isFirstPass=true;
    while(curr!==null){
        let first=curr, prev=null;
        let count=0;
        while(curr!==null&&count<k){
        let next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
        count++;
        }
        if(isFirstPass){head=prev;isFirstPass=false;}
        else{prevFirst.next=prev;}
        prevFirst=first;
    }
    return head;
}


let head = new Node();
head.setter(10);
let temp1=new Node();
temp1.setter(20);
let temp2=new Node();
temp2.setter(30);
let temp3 = new Node();
temp3.setter(40);
let temp4 = new Node();
temp4.setter(40);
let temp5 = new Node();
temp5.setter(50);
let temp6 = new Node();
temp6.setter(60);
let temp7 = new Node();
temp7.setter(70);
head.next=temp1;
temp1.next=temp2;
temp2.next=temp3;
temp3.next=temp4;
temp4.next=temp5;
temp5.next=temp6;
temp6.next=temp7;
temp7.next= null;
head=reverseK(head, 3);
console.log(printlist(head));
