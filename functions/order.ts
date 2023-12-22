type Order = {
    price: number;
    amount: number;
    side: 'buy' | 'sell';
}

export const onRequest: PagesFunction = async (context) => {
    const order = await context.request.json() as Order;
    const response = new Response(JSON.stringify({
        id: '',
        price: order.price,
        amount: order.amount,
        side: order.side,
        status: 'nothing'
    }));
    return response;
}
