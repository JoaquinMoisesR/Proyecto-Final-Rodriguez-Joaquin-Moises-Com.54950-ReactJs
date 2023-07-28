import React, {useEffect, useState} from "react";

const CheckoutForm = ({ onConfirm }) =>{
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [loadingDots, setLoadingDots] = useState(0);

    const handleConfim = async (e) => {
        e.preventDefault();

        const userData = {
            name,
            phone,
            email,
        };

        setLoading(true);
        try {
            await onConfirm(userData);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(()=>{
        let intervalId;

        if (loading) {
            intervalId = setInterval (()=>{
                setLoadingDots((prevDots) => (prevDots + 1) % 10);
            }, 800);
        } else  {
            setLoadingDots(0);
        }

        return () => clearInterval(intervalId);
    }, [loading]);

    return (
        <div>
            <form onSubmit={handleConfim}>
                <div className="mb-6">
                    <label htmlFor="name" className="font-medium">
                        Nombre:
                    </label>
                    <input 
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={({target})=>setName(target.value)} required/> 
                </div>
                <div className="mb-6">
                    <label htmlFor="phone" className="font-medium">
                        Telefono:
                    </label>
                    <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={({target})=> setPhone(target.value)} required/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="font-medium">
                        Email:
                    </label>
                    <input 
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={({target})=>setEmail(target.value)} required/>
                </div>
                <button className="button is-info" disabled={loading}>{loading ? "Procesando" + ".".repeat(loadingDots) : "Confirmar pedido"} </button>
            </form>
        </div>
    );
};

export default CheckoutForm;