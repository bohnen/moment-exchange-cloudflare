interface Env {
    MOMENTO_TOKEN: string;
}


export const onRequest: PagesFunction<Env> = async (context) => {
	let auth_token = context.env.MOMENTO_TOKEN;
    let response = new Response(JSON.stringify({token: auth_token}));
    response.headers.set("Cache-Control", "no-cache");
 	return response;
}