(function () {

    "use strict";

    // Get the form
    const form = document.getElementById("cart-hplus");

    // Get the products
    const sneakers = document.getElementById("sneakers");
    const jersey = document.getElementById("jersey");
    const supplements = document.getElementById("supplements");

    // Get the state
    const state = document.getElementById("s-state");

    // Get special options
    const gift = document.getElementById("gift");
    const mailing = document.getElementById("mailing");
    const recipes = document.getElementById("recipes");

    // Get total and message
    const total = document.getElementById("total");
    const message = document.getElementById("message");


    // Calculate total
    function calTotal(event) {

        event.preventDefault();

        message.textContent = "";

        // Check required state
        if (state.value === "") {

            alert("Please choose your shipping state");

            state.focus();

            return;
        }

        // Get quantities
        const sneakerQty = Number(sneakers.value);
        const jerseyQty = Number(jersey.value);
        const supplementQty = Number(supplements.value);

        // Validate quantities
        if (
            sneakerQty < 0 ||
            jerseyQty < 0 ||
            supplementQty < 0 ||
            !Number.isInteger(sneakerQty) ||
            !Number.isInteger(jerseyQty) ||
            !Number.isInteger(supplementQty)
        ) {

            message.textContent =
                "Please enter valid quantities.";

            return;
        }

        // Product prices
        const sneakerPrice = 90;
        const jerseyPrice = 25;
        const supplementPrice = 30;

        // Calculate product costs
        const sneakerTotal = sneakerQty * sneakerPrice;
        const jerseyTotal = jerseyQty * jerseyPrice;
        const supplementTotal = supplementQty * supplementPrice;

        // Total quantity
        const totalItems =
            sneakerQty + jerseyQty + supplementQty;

        // Products subtotal
        let subtotal =
            sneakerTotal + jerseyTotal + supplementTotal;

        // Shipping cost
        const shipping =
            document.querySelector(
                'input[name="shipping"]:checked'
            );

        const shippingRate = Number(shipping.value);

        const shippingCost = totalItems * shippingRate;

        // Special options
        let specialCost = 0;

        if (gift.checked) {
            specialCost += 5;
        }

        // Mailing list and recipes are free
        if (mailing.checked) {
            console.log("Customer joined mailing list");
        }

        if (recipes.checked) {
            console.log("Recipes included");
        }

        // Final calculation
        const finalTotal =
            subtotal + shippingCost + specialCost;

        // Display total
        total.value = "$" + finalTotal.toFixed(2);

    }

    // Event listener
    form.addEventListener("submit", calTotal);

})();