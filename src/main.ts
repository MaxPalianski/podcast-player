import { fetchPodcasts } from "./api/podcast-index";
import mockData from "./mock-podcasts.json";

export interface Podcast {
    id: string;
    title: string;
    publisher: string;
    image: string;
    description: string;
    total_episodes: number;
    audio_length_sec: number;
    language: string;
    explicit_content: boolean;
}
export interface ApiResponse {
    podcasts: Podcast[];
}

const key = import.meta.env.VITE_LISTEN_API_KEY;
console.log("KEY HERE", key);

console.log("data here!", mockData);
const data: ApiResponse = mockData;
console.log("Date Here!!!", data.podcasts);
data.podcasts[0]

//* fetchPodcasts(key); *//



const appElement = document.querySelector('#app');
if (appElement) {
    let currentPodcastId: string | null = null;
    let searchQuery = "";

    const renderApp = () => {
        if (currentPodcastId === null) {
            appElement.innerHTML = `
    <div class="search-container" style="padding: 20px;">
    <input type="text" id="search" class="search-input" placeholder="Search podcast...">
    </div>
    <div id="podcasts-container"></div>
    `;
            const container = document.querySelector('#podcasts-container');
            const searchInput = document.querySelector('#search') as HTMLInputElement;


            const filteredPodcasts = data.podcasts.filter(p =>
                p.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            if (container) {
                container.innerHTML = `
        <div class="podcast-grid">
        ${filteredPodcasts.map(podcast => `
            <div class="podcast-card" data-id="${podcast.id}">
            <img src="${podcast.image}" alt="${podcast.title}">
            <h3>${podcast.title}</h3>
            <p>${podcast.publisher}</p>
            </div>
            `).join('')}
            </div>`;


                const cards = container.querySelectorAll('.podcast-card');
                cards.forEach(card => {
                    card.addEventListener('click', () => {
                        const id = card.getAttribute('data-id');
                        if (id) {
                            currentPodcastId = id;
                            renderApp();
                        }
                    });
                });
            }

            if (searchInput) {
                searchInput.addEventListener('input', () => {
                    searchQuery = searchInput.value;


                    const innerFiltered = data.podcasts.filter(p =>
                        p.title.toLowerCase().includes(searchQuery.toLowerCase())
                    );
                    if (container) {
                        container.querySelector('.podcast-grid')!.innerHTML = innerFiltered.map(podcast => `
                    <div class="podcast-card" data-id="${podcast.id}">
                    <img src="${podcast.image}" alt="${podcast.title}">
                    <h3>${podcast.title}</h3>
                    <p>${podcast.publisher}</p>
                    </div>
                    `).join('');
                        container.querySelectorAll('.podcast-card').forEach(card => {
                            card.addEventListener('click', () => {
                                currentPodcastId = card.getAttribute('data-id');
                                renderApp();
                            });
                        });
                    }
                });
                searchInput.focus();
                searchInput.setSelectionRange(searchQuery.length, searchQuery.length);
            }
        } else {
            const selectedPodcast = data.podcasts.find(p => p.id === currentPodcastId);
            if (selectedPodcast) {

                const mockEpisodes = [1, 2, 3].map(num => `
                    <div class="episode-item" style="padding: 15px; border-bottom: 1px solid var(--border); text-align: left; background: var(--code-bg); margin-bottom: 10px; border-radius: 6px;">
                        <h4 style="margin: 0 0 5px 0; color: var(--text-h);">Episode #${num} of ${selectedPodcast.title}</h4>
                        <p style="font-size: 14px; color: var(--text);">Published: July ${10 + num}, 2026 | Duration: 45:0${num}</p>
                    </div>
                `).join('');


                appElement.innerHTML = `
            <div style="padding: 20px; text-align: left;">
            <button id="back-btn" class="counter" style=" cursor: pointer;">Back</button>
            <div style="display: flex; gap:20px; margin-top: 20px;">
            <img src="${selectedPodcast.image}" style="width: 200px; height: 200px; border-radius:8px;">
            <div>
            <h2>${selectedPodcast.title}</h2>
            <p style="color: var(--text-h)"><strong>Publisher:</strong> ${selectedPodcast.publisher}</p>
            <p style="margin-top: 10px">${selectedPodcast.description}</p>
            </div></div>
            <h3 style="margin-top: 40px;">Episodes</h3>
            <div id="episodes-list">
            ${mockEpisodes}
            </div>
            </div>
            `;
                const backBtn = document.querySelector('#back-btn');
                if (backBtn) {
                    backBtn.addEventListener('click', () => {
                        currentPodcastId = null;
                        searchQuery = "";
                        renderApp();
                    });
                }
            }
        }
    };
    renderApp();
}