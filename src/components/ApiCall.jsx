import React, { useEffect } from 'react'

const ApiCall = () => {
  function getUsers() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Simran" },
        { id: 2, name: "Aman" }
      ]);
    }, 1000);
  });
}

function getOrders() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve([
        { orderId: 101, userId: 1 },
        { orderId: 102, userId: 2 }
      ]);
    // reject("Orders API failed");
    }, 1500);
  });
}
useEffect(()=>
{ 
    async function fetchData() {
    try {
      const result = await Promise.allSettled([
        getUsers(),
        getOrders()
      ]);
      console.log("result is:::", result);
    } catch (err) {
      console.log("One of the APIs failed:", err);
    }
    }
    fetchData();
},[])
  return (
    <div>ApiCall</div>
  )
}

export default ApiCall