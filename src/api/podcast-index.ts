export async function fetchPodcasts(apiKey:string): Promise<void> {
    try {
        const url ="https://listen-api.listennotes.com/api/v2/best_podcasts?sort=recent_published_first&page=1";
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "X-ListenAPI-Key": apiKey
            }
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("FAIL for podcasts", error);
    }
}