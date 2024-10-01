const mp = new MercadoPago('713237996', {
    locale: "es-AR"
});
document.getElementById("MercadoPago").addEventListener("click", async ()=>{

    const orderData = {
        title: "Barbero",
        quantity: 1,
        price: $13999,
    };

    const response = await fetch("http://localhost:3000/create_preference",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData)
    });

    const preference = await response.json();
    createCheackoutButton(preference.id);
});
const createCheackoutButton = (preferenceId) => {
    const bricksBuilder = mp.bricks();

    const renderComponent = async () => {
        if (window.CheackoutButton) window.CheackoutButton.unmount();
        bricksBuilder.create("wallet", "wallet_container", {
            initialization: {
                preferenceId: preferenceId,
            },
        });
        
    };
    renderComponent();
};