import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import { updateDoc } from "firebase/firestore";
import { db } from '../SERVICE/firebase';


const Getdata = () => {
    const [fetchdata, setfetchdata] = useState([]);

    async function Getdata() {
        let newarry = [];
        try {
            const querySnapshot = await getDocs(collection(db, "product"));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                newarry.push({ ...doc.data(), id: doc.id });
                setfetchdata(newarry)

            });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        Getdata();
    }, [])


    async function deldata(id) {
        try {
            await deleteDoc(doc(db, "product", id));
            conole.log("Deleted:", id);
            Getdata();
        } catch (error) {
            console.log("Delete error:", error);
        }
    }


    async function updatePrice(id, newPrice) {
        try {
            const productRef = doc(db, "product", id);
            await updateDoc(productRef, {
                price: newPrice
            });
            console.log("Price updated:", id);
            Getdata(); 
        } catch (error) {
            console.error("Update error:", error);
        }
    }


    return (



        <div className="card-container">
            {fetchdata.map((el) => (
                <div key={el.id} className="card">

                    <img src={el.image} alt={el.title} />

                    <h3>{el.title}</h3>
                    <p className="card-price">${el.price}</p>
                    <span className="card-category">{el.category}</span>
                    <p>{el.description}</p>
                    <button onClick={() => deldata(el.id)}>DELETE</button>
                    <button onClick={() => {
                        const newPrice = prompt("Enter new price:");
                        if (newPrice) {
                            updatePrice(el.id, parseFloat(newPrice));
                        }
                    }}>UPDATE PRICE</button>
                    
                </div>
            ))}
        </div>
    );
}

export default Getdata;