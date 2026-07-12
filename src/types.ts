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