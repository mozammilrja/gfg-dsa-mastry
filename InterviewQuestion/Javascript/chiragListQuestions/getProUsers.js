function getProUsers(users) {
 
    const res = users.filter((user) => user.skills.length >2)
    
    return res
     
   }
      
   const users = [
     { name: 'Brook', scores: 75, skills: ['HTM', 'CSS', 'JS'], age: 16 },
     { name: 'Alex', scores: 80, skills: ['HTM', 'CSS', 'JS'], age: 18 },
     { name: 'David', scores: 75, skills: ['HTM', 'CSS'], age: 22 },
     { name: 'John', scores: 85, skills: ['HTML'], age: 25 },
     { name: 'Sara', scores: 95, skills: ['HTM', 'CSS', 'JS'], age: 26 },
     { name: 'Martha', scores: 80, skills: ['HTM', 'CSS', 'JS'], age: 18 },
     { name: 'Thomas', scores: 90, skills: ['HTM', 'CSS', 'JS'], age: 20 }
   ];
   
   
   console.log(getProUsers(users))